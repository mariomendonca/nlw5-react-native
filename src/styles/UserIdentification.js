import styled from 'styled-components/native'
import colors from './Colors'
import Fonts from './Fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
`

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
  /* background: green; */
`

export const Emoji = styled.Text`
  font-size: 44px;
  text-align: center;
`

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  /* border-color: ${colors.gray}; */
  border-color: ${(props) => props.color};
  color: ${colors.heading};
  width: 100%;
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  font-family: ${Fonts.heading};
`

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${Fonts.heading};
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const Header = styled.View`
  text-align: center;
`

export const Subtitle = styled.Text`
  font-family: ${Fonts.text};
  text-align: center;
  color: ${colors.heading};
  font-size: 17px;
  padding: 10px 20px;
`
