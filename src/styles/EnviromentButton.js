import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Colors from './Colors'
import Fonts from './Fonts'

export const Container = styled(RectButton)`
  background: ${({ back }) => back ? Colors.green_light : Colors.shape};
  height: 40px;
  width: 76px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
`

export const ButtonText = styled.Text`
  color: ${({ color }) => color ? Colors.green_dark : Colors.heading};
  font-family: ${({ font }) =>font ? Fonts.heading : Fonts.text};
`
