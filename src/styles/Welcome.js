import styled from 'styled-components/native';
import colors from '../styles/Colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 0 30px;
`

export const Img = styled.Image`
  width: 292px;
  height: 284px;
`

export const Button = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`

export const ButtonText = styled.Text`
  color: #fff;
`