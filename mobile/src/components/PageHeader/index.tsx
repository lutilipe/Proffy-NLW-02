import React, { ReactNode } from 'react'
import { Image } from 'react-native'

import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

import { Container, TopBar, Button, Title, Header } from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<Props> = ({ title, children, headerRight }) => {
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

      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  )
}

export default PageHeader
