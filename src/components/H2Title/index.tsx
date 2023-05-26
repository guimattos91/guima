import React, { memo } from 'react'

import { DivStyled, H2Styled } from './style'

interface IH2Props {
  title: string
  color: string
}

const H2Title: React.FC<IH2Props> = ({ title, color }) => {
  return (
    <DivStyled>
      <H2Styled fontcolor={color}>{title}</H2Styled>
    </DivStyled>
  )
}

export default memo(H2Title)
