import { memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LogoBranca from '../../assets/Logo/logo-branca.png'
import LogoBrancaMobile from '../../assets/Logo/logo-mobile-branca.png'
import {
  ImgStyled,
  ImgStyledSmall,
  NavStyled,
  SectionStyled,
  SectionStyledSmall,
  MenuMobile,
  ButtonStyled,
} from './style'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  // const [menuActivate, setMenuActivate] = useState(false)

  const handleClick = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive])

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
              <ButtonStyled
                className={`hamburger--squeeze ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={handleClick}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </ButtonStyled>
            </SectionStyledSmall>
          </Col>
        </Row>
      </Container>
      {isActive && (
        <MenuMobile>
          <nav>
            <a
              href="#clientes"
              className="px-3"
              onClick={() => setIsActive(false)}
            >
              Nossos Clientes
            </a>
            <a
              href="#trabalho"
              className="px-3"
              onClick={() => setIsActive(false)}
            >
              Nossos Trabalhos
            </a>
            <a
              href="#contato"
              className="px-3"
              onClick={() => setIsActive(false)}
            >
              Contato
            </a>
          </nav>
        </MenuMobile>
      )}
    </header>
  )
}

export default memo(Header)
