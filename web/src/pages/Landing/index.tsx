import React, { useState, useEffect } from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import {
  PageLanding,
  PageContent,
  LogoContainer,
  ButtonsContainer,
  HeroImage,
  TotalConnections,
} from './styles'

import { Link } from 'react-router-dom'
import api from '../../services/api'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data
      setTotalConnections(total)
    })
  }, [totalConnections])
  return (
    <PageLanding>
      <PageContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingimg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas.
          <img src={purpleHeartIcon} alt="Coracao roxo" />
        </TotalConnections>
      </PageContent>
    </PageLanding>
  )
}

export default Landing
