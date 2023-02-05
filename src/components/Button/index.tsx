import React from 'react'
import { Container } from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ variant = 'primary' }) => {
  return <Container variant={variant}>Enviar</Container>
}
