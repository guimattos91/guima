import styled from 'styled-components'

export const DivTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;

  /* z-index: -5; */
`
export const H2Styled = styled.h2`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 1.5em;

  @media (max-width: 767px) {
    text-align: center;
  }
`
export const SectionStyled = styled.section`
  display: flex;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  z-index: -2;
`
export const SpanTitle = styled.span`
  color: #02acd9;
  font-weight: 900;
  width: 100%;
  font-size: 2rem;
`
export const VideoBanner = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  background-color: ${({ theme }) => theme.background.color};
`
