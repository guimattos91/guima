import { Row } from 'react-bootstrap'
import styled from 'styled-components'

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
export const DivBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: rgb(32, 35, 41);
  padding: 2rem 0;
`
export const ImageStyled = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70px;
`
export const RowStyled = styled(Row)`
  display: flex;
  justify-content: space-around;
`
