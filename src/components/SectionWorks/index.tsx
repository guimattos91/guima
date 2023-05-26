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
          <Col xs={12} sm={6}>
            <WorkCards
              title="Social Media"
              description="Uma frase muito muito curta."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Branding"
              description="Uma frase muito muito curta."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Facebook Ads"
              description="Uma frase muito muito curta."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Design"
              description="Uma frase muito muito curta."
            />
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default memo(SectionWorks)
