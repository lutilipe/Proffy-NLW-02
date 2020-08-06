import React, { useState, FormEvent } from 'react'

import Header from '../../components/PageHeader'
import { Container, Form, Main } from './styles'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('/class', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(response.data)
  }

  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Educacao Fisica', label: 'Educacao Fisica' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Programacao', label: 'Programacao' },
              { value: 'Literatura', label: 'Literatura' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value)
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </Form>
      </Header>
      <Main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </Main>
    </Container>
  )
}

export default TeacherList
