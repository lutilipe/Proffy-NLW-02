import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  overflow-x: hidden;

  @media (min-width: 700px) {
    max-width: 100%;
  }

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }
`
export const Form = styled.form`
  margin-top: 3.2rem;

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem 'Archivo';
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background-color: var(--color-secondary-dark);
    }

    &:focus {
      outline: 0;
    }

    @media (min-width: 700px) {
      margin-top: 4.55rem;
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    column-gap: 16px;
    bottom: -28px;
  }
`

export const Main = styled.div`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 1.4rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`
