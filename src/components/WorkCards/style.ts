import styled from 'styled-components'

export const BorderDivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1px;
  border-radius: 1em;
  background: linear-gradient(0.45turn, #02acd9, purple);
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 1em;
  background-color: #1d1d1d;

  p {
    color: white;
    font-size: 0.8rem;
  }
`
export const H3Styled = styled.h3`
  font-weight: 700;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
`
