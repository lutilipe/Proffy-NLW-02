import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import Header from '../../components/PageHeader'

import warningIcon from '../../assets/images/icons/warning.svg'

import {
  Container,
  Main,
  Fieldset,
  Legend,
  Footer,
  ScheduleItem,
} from './styles'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ])

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ])
  }

  function handleCreateClass(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    api
      .post('/class', {
        name,
        whatsapp,
        bio,
        avatar,
        cost: Number(cost),
        subject,
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro efetuado com sucesso.')

        history.push('/')
      })
      .catch(() => {
        alert('ERROR: Cadastro cancelado.')
      })
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        }
      }

      return scheduleItem
    })

    setScheduleItems(updatedSchedule)
  }

  return (
    <Container>
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição."
      />

      <Main>
        <form action="POST" onSubmit={handleCreateClass}>
          <Fieldset>
            <Legend>Seus dados</Legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Fieldset>

          <Fieldset>
            <Legend>Sobre a aula</Legend>
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
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value)
              }}
            />
          </Fieldset>

          <Fieldset>
            <Legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </Legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="WARNING" />
              Importante! <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </form>
      </Main>
    </Container>
  )
}

export default TeacherForm
