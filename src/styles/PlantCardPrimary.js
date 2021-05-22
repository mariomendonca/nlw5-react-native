import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import Colors from '../styles/Colors'
import Fonts from './Fonts';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background: ${Colors.shape};
  border-radius: 20px;
  padding: 20px 0;
  margin: 10px;
  align-items: center;
`

export const CardText = styled.Text`
  color: ${Colors.green_dark};
  font-family: ${Fonts.heading};
`

export const CardImg = styled(SvgFromUri)``
