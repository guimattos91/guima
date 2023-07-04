import React, { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import H2Title from 'components/H2Title'

import BannerQuemSomos from '../../assets/img-conectar-01.png'
import {
  ColStyledImage,
  DivBackground,
  DivText,
  H3Styled,
  SectionStyled,
} from './style'

const SectionWhoWeAre: React.FC = () => {
  return (
    <SectionStyled id="quem-somos-nos">
      <H2Title title="Quem Somos" />
      <DivBackground>
        <Container>
          <Row>
            <ColStyledImage xs={12} md={5}>
              <img src={BannerQuemSomos} alt="Quem Somos" />
            </ColStyledImage>
            <Col xs={12} md={7}>
              <DivText>
                <H3Styled>Lorem ipsum dolor sit amet</H3Styled>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in felis et ex lobortis egestas.
                </p>
              </DivText>
            </Col>
          </Row>
        </Container>
      </DivBackground>
    </SectionStyled>
  )
}

export default memo(SectionWhoWeAre)
