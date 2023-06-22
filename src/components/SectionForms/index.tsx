import React, { memo } from 'react'

import Config from 'Config'

import H2Title from 'components/H2Title'

import {
  ButtonStyled,
  DivBackground,
  FormStyled,
  InputStyled,
  SectionStyled,
  TextareaStyled,
} from './style'

const SectionForms: React.FC = () => {
  return (
    <SectionStyled id="contato">
      <DivBackground className="py-5">
        <H2Title title="Quer Falar Conosco?" />

        <FormStyled action={Config.app.form} method="POST">
          <InputStyled
            type="text"
            name="nome"
            id="nome"
            placeholder="Seu nome"
            className="mt-0"
            required
          />
          <InputStyled
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            required
          />
          <TextareaStyled
            id="message"
            name="message"
            placeholder="Sua mensagem"
            required
          />
          <ButtonStyled type="submit">Enviar</ButtonStyled>
        </FormStyled>
      </DivBackground>
    </SectionStyled>
  )
}

export default memo(SectionForms)
