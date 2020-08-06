import React from 'react'

import { useNavigation } from '@react-navigation/native'

import {
  Container,
  BackgroundImage,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <Container>
      <BackgroundImage resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, cadastre-se na nossa plataforma web.
        </Description>
      </BackgroundImage>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  )
}

export default GiveClasses
