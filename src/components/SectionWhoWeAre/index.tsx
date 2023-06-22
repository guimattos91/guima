import React, { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import H2Title from 'components/H2Title'

import { DivBackground, SectionStyled } from './style'

const SectionWhoWeAre: React.FC = () => {
  return (
    <SectionStyled id="quem-somos-nos">
      <H2Title title="Quem Somos" />
      <DivBackground>
        <Container>
          <Row>
            <Col xs={6} md={8}>
              <h3>SectionWhoWeAre</h3>
            </Col>
          </Row>
        </Container>
      </DivBackground>
    </SectionStyled>
  )
}

export default memo(SectionWhoWeAre)
