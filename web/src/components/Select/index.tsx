import React, { SelectHTMLAttributes } from 'react'

import { SelectBlock } from './styles'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: {
    value: string
    label: string
  }[]
}

const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value="" {...rest}>
        <option value="" hidden disabled>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </SelectBlock>
  )
}

export default Select
