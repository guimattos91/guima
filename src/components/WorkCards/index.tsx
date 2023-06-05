import React, { memo } from 'react'

import { BsCheck2Circle } from 'react-icons/bs'

import { BorderDivCard, DivCard, H3Styled } from './style'

interface ICardProps {
  title: string
  description: string
}

const WorkCards: React.FC<ICardProps> = ({ title, description }) => {
  return (
    <BorderDivCard>
      <DivCard>
        <div className="d-flex align-items-center pb-2">
          <BsCheck2Circle className="me-2" color="white" size={20} />
          <H3Styled>{title}</H3Styled>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </DivCard>
    </BorderDivCard>
  )
}

export default memo(WorkCards)
