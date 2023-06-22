import React, { memo } from 'react'

import { BsCheck2Circle } from 'react-icons/bs'

import { BorderDivCard, DivCard, DivCardTitle, H3Styled } from './style'

interface ICardProps {
  title: string
  description: string
}

const WorkCards: React.FC<ICardProps> = ({ title, description }) => {
  return (
    <BorderDivCard>
      <DivCard>
        <DivCardTitle>
          <BsCheck2Circle className="me-2" size={20} />
          <H3Styled>{title}</H3Styled>
        </DivCardTitle>
        <p>{description}</p>
      </DivCard>
    </BorderDivCard>
  )
}

export default memo(WorkCards)
