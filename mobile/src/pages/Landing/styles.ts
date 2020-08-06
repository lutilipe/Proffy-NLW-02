import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #8267e5;
  justify-content: center;
  padding: 40px;
`
export const BackgroundImage = styled.Image`
  width: 100%;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  line-height: 30px;
  margin-top: 40px;
`
export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`
export const ButtonPrimary = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background-color: #9178f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`

export const ButtonSecondary = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background-color: #04d361;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`
export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 18px;
`
export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-height: 140px;
  margin-top: 20px;
`
