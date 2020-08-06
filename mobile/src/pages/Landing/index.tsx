import React from 'react'

import {
  Container,
  BackgroundImage,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  TotalConnections,
} from './styles'

import { AppLoading } from 'expo'
import { Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo'

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Container>
        <BackgroundImage
          source={landingImg}
          style={{ resizeMode: 'contain' }}
        />
        <Title>
          Seja bem vindx, {'\n'}
          <TitleBold>O que deseja fazer?</TitleBold>
        </Title>
        <ButtonsContainer>
          <ButtonPrimary onPress={handleNavigateToStudyPages}>
            <Image source={studyIcon} />
            <ButtonText>Estudar</ButtonText>
          </ButtonPrimary>

          <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
            <Image source={giveClassesIcon} />
            <ButtonText>Dar aulas</ButtonText>
          </ButtonSecondary>
        </ButtonsContainer>

        <TotalConnections>
          Total de 285 conexões <Image source={heartIcon} />
        </TotalConnections>
      </Container>
    )
  }
}

export default Landing
