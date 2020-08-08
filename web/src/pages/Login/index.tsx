import React from 'react'
import Input from '../../components/Input'

import {
  Container,
  Main,
  LoginContainer,
  SignIn,
  Legend,
  ButtonContainer,
  BackgroundContainer,
  BackgroundImage,
  AccountContainer,
  RememberAccount,
  Footer,
} from './styles'

import backgroundImage from '../../assets/images/background.svg'

const Login: React.FC = () => {
  return (
    <Container>
      <Main>
        <BackgroundContainer>
          <BackgroundImage src={backgroundImage} alt="Proffy" />
        </BackgroundContainer>

        <LoginContainer>
          <SignIn>
            <Legend>
              <strong>Fazer login</strong>
            </Legend>
            <form>
              <Input name="email" label="Email" />
              <Input name="password" label="Password" type="password" />
              <AccountContainer>
                <div>
                  <RememberAccount type="checkbox" name="remember" />
                  <label htmlFor="remember">Lembrar-me</label>
                </div>
                <a href="/">Esqueci minha senha</a>
              </AccountContainer>
              <ButtonContainer>
                <button type="submit">Entrar</button>
              </ButtonContainer>
            </form>
          </SignIn>

          <Footer>
            <p>Não tem conta?</p>
            <a href="/">Cadastre-se</a>
          </Footer>
        </LoginContainer>
      </Main>
    </Container>
  )
}

export default Login
