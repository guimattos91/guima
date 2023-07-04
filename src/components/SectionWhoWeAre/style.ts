import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.background.color};
  color: ${({ theme }) => theme.colorText.mainText};
`
export const DivBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colorText.mainText};
`
export const H3Styled = styled.h3`
  color: ${({ theme }) => theme.colorText.mainText};
  font-size: 5rem;
  margin: 0;
  padding-top: 1rem;
  margin-bottom: 2rem;
`
export const ColStyledImage = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 70%;
  }
`
export const RowStyled = styled(Row)`
  display: flex;
  justify-content: space-around;
`
