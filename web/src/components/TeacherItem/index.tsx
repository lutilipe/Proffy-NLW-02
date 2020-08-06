import React from 'react'

import { Container, ItemHeader, Footer } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
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
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id,
    })
  }
  return (
    <Container>
      <ItemHeader>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </ItemHeader>
      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/hora:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  )
}

export default TeacherItem
