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
              title="Branding"
              description="Crie o DNA da sua marca."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Redes Sociais"
              description="Conecte-se com seus clientes."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Facebook Ads"
              description="Venda mais e aumente seu alcance."
            />
          </Col>
          <Col xs={12} sm={6}>
            <WorkCards
              title="Design"
              description="Criações para mídias on e offline."
            />
          </Col>
          {/* <Col xs={12} sm={6} lg={4}>
            <WorkCards title="Website" description="Crie seu site." />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <WorkCards
              title="Consultoria"
              description="O nosso know-how te acompanha."
            />
          </Col> */}
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default memo(SectionWorks)
