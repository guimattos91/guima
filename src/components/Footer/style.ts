import styled from 'styled-components'

export const FooterDiv = styled.footer`
  background-color: rgb(32, 35, 41);
  color: rgb(158, 158, 158);
  padding: 0.5rem 0;
`

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  p {
    color: white;
  }

  @media (max-width: 767px) {
    p {
      flex-direction: column;
    }
  }
`
export const LinkStyled = styled.a`
  text-decoration: none;
  font-style: normal;
  color: white;
  font-weight: 700;

  &:hover {
    color: #02acd9;
  }
`
