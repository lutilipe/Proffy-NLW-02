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
import TeacherItem from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  function handleToggleFilters() {
    setIsFilterVisible(!isFilterVisible)
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
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </Container>
  )
}

export default TeacherList
