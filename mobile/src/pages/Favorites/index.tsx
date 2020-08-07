import React, { useState } from 'react'

import { Container, ScrollView } from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { AsyncStorage } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </Container>
  )
}

export default Favorites
