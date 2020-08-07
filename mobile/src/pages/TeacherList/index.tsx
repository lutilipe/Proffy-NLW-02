import React, { useState } from 'react'

import {
  Container,
  ScrollView,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import api from '../../services/api'

import AsyncStorage from '@react-native-community/async-storage'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        )

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  function handleToggleFilters() {
    setIsFilterVisible(!isFilterVisible)
  }

  async function handleFilterSubmit() {
    loadFavorites()
    const response = await api.get('/class', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(response.data)
    setIsFilterVisible(false)
  }

  return (
    <Container>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilters}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }>
        {isFilterVisible && (
          <SearchForm>
            <Label>Matérias</Label>
            <Input
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFilterSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </Container>
  )
}

export default TeacherList
