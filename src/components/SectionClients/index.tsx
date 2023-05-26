import React, { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import H2Title from 'components/H2Title'

import Acougue from './assets/logo-acougue-nossa-senhora-das-gracas-branca.png'
import Biografia from './assets/logo-biografia-da-moda-branca.png'
import CentralNorte from './assets/logo-cn-rações-colorida.png'
import { DivBackground, ImageStyled, SectionStyled } from './style'

const SectionClients: React.FC = () => {
  return (
    <SectionStyled id="clientes">
      <H2Title title="Nossos Clientes" color="white" />
      <DivBackground>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <ImageStyled src={Biografia} alt="Biografia-da-Moda-Logo" />
            </Col>
            <Col className="d-flex justify-content-center">
              <ImageStyled
                src={Acougue}
                alt="Açougue-Nossa-Sra-das-Graças-Logo"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ImageStyled src={CentralNorte} alt="central-norte-rações-Logo" />
            </Col>
          </Row>
        </Container>
      </DivBackground>
    </SectionStyled>
  )
}

export default memo(SectionClients)
