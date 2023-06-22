import { memo, useCallback, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LightButton from 'components/LightButton'

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
  H1Styled,
  HeaderDiv,
  AStyled,
} from './style'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [bgColorDiv, setBgColorDiv] = useState(false)

  const handleClick = useCallback(() => {
    setIsActive(!isActive)
    setBgColorDiv(!bgColorDiv)
  }, [isActive, bgColorDiv])

  return (
    <HeaderDiv bgcolor={bgColorDiv ? '#1d1d1d' : 'none'}>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xs={6}>
            <H1Styled>
              <ImgStyled src={LogoBranca} alt="logo" className="my-3" />
              <ImgStyledSmall
                src={LogoBrancaMobile}
                alt="logo"
                className="my-3"
              />
            </H1Styled>
          </Col>
          <Col xs={6}>
            <SectionStyled>
              <LightButton />
              <NavStyled>
                {/* <AStyled
                  linkcolor="white"
                  linkhovercolor="#02acd9"
                  href="#clientes"
                  className="me-3"
                >
                  Nossos Clientes
                </AStyled> */}
                <AStyled
                  linkcolor="white"
                  linkhovercolor="#02acd9"
                  href="#trabalho"
                  className="me-3"
                >
                  Nossos Trabalhos
                </AStyled>
                <AStyled
                  linkcolor="white"
                  linkhovercolor="#02acd9"
                  href="#contato"
                >
                  Contato
                </AStyled>
              </NavStyled>
            </SectionStyled>
            <SectionStyledSmall>
              <LightButton />
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
              onClick={() => {
                setIsActive(false)
                setBgColorDiv(false)
              }}
            >
              Nossos Clientes
            </a>
            <a
              href="#trabalho"
              className="px-3"
              onClick={() => {
                setIsActive(false)
                setBgColorDiv(false)
              }}
            >
              Nossos Trabalhos
            </a>
            <a
              href="#contato"
              className="px-3"
              onClick={() => {
                setIsActive(false)
                setBgColorDiv(false)
              }}
            >
              Contato
            </a>
          </nav>
        </MenuMobile>
      )}
    </HeaderDiv>
  )
}

export default memo(Header)
