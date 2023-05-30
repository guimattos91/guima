import React, { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Typed from 'typed.js'

import { H1Styled, SectionStyled, SpanTitle } from './style'

const SectionMainBanner: React.FC = () => {
  const el = React.useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Desenvolvimento', 'Mídias Sociais', 'Design', 'Marketing'],
      typeSpeed: 50,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <H1Styled>
              Soluções para a sua marca&nbsp;
              <div>
                <SpanTitle ref={el} />
              </div>
            </H1Styled>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default memo(SectionMainBanner)
