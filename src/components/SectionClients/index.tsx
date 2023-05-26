import React, { memo } from 'react'

import H2Title from 'components/H2Title'

import Acougue from './assets/logo-acougue-nossa-senhora-das-gracas-preta.png'
import Biografia from './assets/logo-biografia-da-moda-preta.png'
import { DivBackground, ImageStyled, SectionStyled } from './style'

const SectionClients: React.FC = () => {
  return (
    <SectionStyled id="clientes">
      <H2Title title="Nossos Clientes" color="white" />
      <DivBackground>
        <ImageStyled src={Biografia} alt="Biografia-da-Moda-Logo" />
        <ImageStyled src={Acougue} alt="Açougue-Nossa-Sra-das-Graças-Logo" />
      </DivBackground>
    </SectionStyled>
  )
}

export default memo(SectionClients)
