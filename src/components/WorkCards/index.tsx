import React, { memo } from 'react'

import { DivCard, H3Styled } from './style'

interface ICardProps {
  title: string
  description: string
}

const WorkCards: React.FC<ICardProps> = ({ title, description }) => {
  return (
    <DivCard>
      <H3Styled>{title}</H3Styled>
      <div>
        <p>{description}</p>
      </div>
    </DivCard>
  )
}

export default memo(WorkCards)
