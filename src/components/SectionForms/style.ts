import styled from 'styled-components'

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::-webkit-input-placeholder {
    color: white;
  }
`
export const DivBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: #02acd9;
  color: white;
`
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-color: #00728f;
`
export const InputStyled = styled.input`
  background: none;
  color: white;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  border-bottom: 2px;
  padding: 0 1rem 0 1rem;
  border-style: solid;
  margin-bottom: 2rem;
  margin-top: 0.75rem;
  width: 30%;
  @media (max-width: 767px) {
    width: 80%;
  }
`
export const TextareaStyled = styled.textarea`
  background: none;
  color: white;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border: 2px;
  border-style: solid;
  margin-bottom: 2rem;
  margin-top: 0.75rem;
  width: 30%;
  min-height: 150px;
  @media (max-width: 767px) {
    width: 80%;
  }
`
export const ButtonStyled = styled.button`
  background: none;
  color: white;
  font-weight: 700;
  box-shadow: 0 0 0 0;
  border: 0 none;
  padding: 0.5em 3em 0.5em 3em;
  outline: 0;
  background-color: #00728f;

  :hover {
    background-color: #004354;
  }
`
