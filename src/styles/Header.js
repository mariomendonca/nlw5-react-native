import styled from "styled-components/native"
import Colors from "./Colors"
import Fonts from './Fonts'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: 20px;
  /* background: ${Colors.green_dark}; */
`

export const NameContainer = styled.View``

export const AvatarImg = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`

export const GreetingText = styled.Text`
  font-size: 32px;
  color: ${Colors.heading};
  font-family: ${Fonts.text};  
`

export const NameText = styled.Text`
  font-size: 32px;
  font-family: ${Fonts.heading};
  color: ${Colors.heading};
  line-height: 40px;
`