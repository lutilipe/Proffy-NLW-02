import React, { useState } from 'react'

import { Image, Linking } from 'react-native'

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  Favorite,
  Whatsapp,
  ContactText,
} from './styles'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Teacher {
  avatar: string
  bio: string
  cost: number
  id: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherProps {
  teacher: Teacher
  favorited: boolean
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsapp() {
    api.post('/connections', {
      user_id: teacher.id,
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      favoritesArray.push(teacher)

      setIsFavorited(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          Preço/Hora: {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>
        <ButtonsContainer>
          <Favorite
            onPress={handleToggleFavorite}
            style={isFavorited ? { backgroundColor: '#ed333d' } : {}}>
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartIcon} />
            )}
          </Favorite>

          <Whatsapp onPress={handleLinkToWhatsapp}>
            <Image source={whatsapp} />
            <ContactText>Entrar em contato</ContactText>
          </Whatsapp>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}

export default TeacherItem
