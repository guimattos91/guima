import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LogoBranca from '../../assets/Logo/logo-branca.png'
import LogoBrancaMobile from '../../assets/Logo/logo-mobile-branca.png'
import {
  ImgStyled,
  ImgStyledSmall,
  NavStyled,
  SectionStyled,
  SectionStyledSmall,
} from './style'

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xs={6} md={6}>
            <ImgStyled src={LogoBranca} alt="logo" className="my-3" />
            <ImgStyledSmall
              src={LogoBrancaMobile}
              alt="logo"
              className="my-3"
            />
          </Col>
          <Col xs={6} md={6}>
            <SectionStyled>
              <NavStyled>
                <a href="#clientes" className="px-3">
                  Nossos Clientes
                </a>
                <a href="#trabalho" className="px-3">
                  Nossos Trabalhos
                </a>
                <a href="#contato" className="px-3">
                  Contato
                </a>
              </NavStyled>
            </SectionStyled>
            <SectionStyledSmall>
              <nav className="d-flex align-items-center">
                <button className="hamburger hamburger--squeeze" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </nav>
            </SectionStyledSmall>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default memo(Header)
