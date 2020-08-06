import React, { InputHTMLAttributes } from 'react'

import { InputBlock } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...rest} />
    </InputBlock>
  )
}

export default Input
