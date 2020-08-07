import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`

export const ScrollView = styled.ScrollView`
  margin-top: -40px;
`
export const SearchForm = styled.View`
  margin-bottom: 8px;
`

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`

export const Input = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InputBlock = styled.View`
  width: 48%;
`
export const SubmitButton = styled.TouchableOpacity`
  background-color: #04d361;
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const SubmitButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 14px;
  color: #fff;
`
