import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LogoBranca from '../../assets/Logo/logo-branca.png'
import LogoBrancaMobile from '../../assets/Logo/logo-mobile-branca.png'
import { LinkStyleds } from '../../styles/GlobalStyles/index'
import { H1Styled, ImgStyled, ImgStyledSmall, SectionStyled } from './style'

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xs={12} md={6}>
            <H1Styled>
              <ImgStyled src={LogoBranca} alt="logo" />
              <ImgStyledSmall src={LogoBrancaMobile} alt="logo" />
            </H1Styled>
          </Col>
          <Col xs={12} md={6}>
            <SectionStyled>
              <nav className="d-flex align-items-center">
                <LinkStyleds
                  linkcolor="white"
                  to="/characters"
                  className="px-3"
                >
                  Portfólio
                </LinkStyleds>
              </nav>
            </SectionStyled>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default memo(Header)
