import React from 'react'
import { Image } from 'react-native'

import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

import { Container, TopBar, Button, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
}

const PageHeader: React.FC<Props> = ({ title }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <Container>
      <TopBar>
        <Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </Button>
        <Image source={logoImage} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  )
}

export default PageHeader
