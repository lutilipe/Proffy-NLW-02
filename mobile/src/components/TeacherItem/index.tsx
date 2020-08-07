import React from 'react'

import { Image } from 'react-native'

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

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'http://github.com/lutilipe.png' }} />

        <ProfileInfo>
          <Name>Luiz Felipe</Name>
          <Subject>Fisica</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>Entusiasta de desenvolvimento web backend.</Bio>
      <Footer>
        <Price>
          Preço/Hora: {'   '}
          <PriceValue>R$ 200</PriceValue>
        </Price>
        <ButtonsContainer>
          <Favorite style={{ backgroundColor: '#ed333d' }}>
            {/* <Image source={heartIcon} /> */}
            <Image source={unfavoriteIcon} />
          </Favorite>

          <Whatsapp>
            <Image source={whatsapp} />
            <ContactText>Entrar em contato</ContactText>
          </Whatsapp>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}

export default TeacherItem
