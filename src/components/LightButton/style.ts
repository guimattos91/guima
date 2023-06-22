import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: white;
  box-shadow: 0 0 0 0;
  outline: 0;
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
