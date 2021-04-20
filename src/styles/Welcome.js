import styled from 'styled-components/native';
import colors from '../styles/Colors'
import fonts from '../styles/Fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
  line-height: 34px;
`

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 0 20px;
  font-family: ${fonts.text};
  color: ${colors.heading}
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
