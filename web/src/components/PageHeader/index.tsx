import React from 'react'

import {
  PageHeader,
  TopBarContainer,
  HeaderContent,
} from './styles'
import { Link } from 'react-router-dom'

import logoIcon from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface Props {
  title: string
  description?: string
}

const Header: React.FC<Props> = ({
  title,
  children,
  description,
}) => {
  return (
    <PageHeader>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoIcon} alt="Proffy" />
      </TopBarContainer>
      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </PageHeader>
  )
}

export default Header
