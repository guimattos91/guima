import React, { memo, useEffect } from 'react'

import Typed from 'typed.js'

import { H2Styled, SectionStyled, SpanTitle } from './style'

const SectionMainBanner: React.FC = () => {
  const el = React.useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Desenvolver</i>', '<i>Social Media</i>'],
      typeSpeed: 50,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <SectionStyled>
      <H2Styled>
        Vamos nessa &nbsp;
        <SpanTitle ref={el} />
      </H2Styled>
    </SectionStyled>
  )
}

export default memo(SectionMainBanner)
