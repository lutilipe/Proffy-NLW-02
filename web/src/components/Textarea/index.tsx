import React, { TextareaHTMLAttributes } from 'react'

import { TextareaBlock } from './styles'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <TextareaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} />
    </TextareaBlock>
  )
}

export default Textarea
