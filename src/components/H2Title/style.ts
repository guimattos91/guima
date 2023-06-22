import styled from 'styled-components'

export const H2Styled = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colorText.mainText};
  font-weight: 600;
  font-size: 24pt;
  text-align: center;

  ::after {
    background-color: #02acd9;
    content: '';
    display: block;
    height: 5px;
    position: absolute;
    width: 50%;
    align-content: center;
    margin-top: 0.2rem;
    color: #02acd9;
  }
`
export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  :after {
    background-color: #02acd9;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: bottom;
    width: 50%;
    align-content: center;
    margin-top: 0.2rem;
  }
`
