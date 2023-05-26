import React, { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import H2Title from 'components/H2Title'
import WorkCards from 'components/WorkCards'

import { SectionStyled } from './style'

const SectionWorks: React.FC = () => {
  return (
    <SectionStyled id="trabalho">
      <H2Title title="O que fazemos?" color="white" />
      <Container>
        <Row>
          <Col>
            <WorkCards
              title="Falalala"
              description="Uma frase muito muito curta."
            />
          </Col>
          <Col>
            <WorkCards
              title="Falalala"
              description="Uma frase muito muito curta."
            />
          </Col>
          <Col>
            <WorkCards
              title="Falalala"
              description="Uma frase muito muito curta."
            />
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default memo(SectionWorks)
