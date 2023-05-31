import React, { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Typed from 'typed.js'

import VideoBG from '../../assets/videobg.mp4'
import { H2Styled, SectionStyled, SpanTitle, VideoBanner } from './style'

const SectionMainBanner: React.FC = () => {
  const el = React.useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Site', 'Mídias Sociais', 'Design', 'Marketing', 'Branding'],
      typeSpeed: 50,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <SectionStyled>
      <VideoBanner autoPlay loop muted>
        <source src={VideoBG} />
      </VideoBanner>
      <Container>
        <Row>
          <Col xs={12}>
            <H2Styled>
              Soluções para a sua marca&nbsp;
              <div>
                <SpanTitle ref={el} />
              </div>
            </H2Styled>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default memo(SectionMainBanner)
