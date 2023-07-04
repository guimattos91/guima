import styled from 'styled-components'

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.background.color};
`
