import styled from 'styled-components'

export const BorderDivCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px;
  border-radius: 1em;
  background: linear-gradient(0.45turn, #02acd9, purple);
  height: 100%;
  @media (max-width: 576px) {
    height: auto;
  }
`
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.background.color};
  height: 100%;

  @media (max-width: 576px) {
    height: auto;
  }
  @media (max-width: 475px) {
    height: auto;
    padding: 1rem 0rem 1rem 2rem;
  }
`
export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: auto;
`
export const DivCardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colorText.mainText};
`
export const H3Styled = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colorText.mainText};
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
`
