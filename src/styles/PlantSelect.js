import styled from 'styled-components/native';
import colors from '../styles/Colors'
import Fonts from './Fonts';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const Wrapper = styled.View`
  padding: 0 30px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-size: 17px;
  font-family: ${Fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${Fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`

export const Plants = styled.View`
  flex: 1;
  padding: 0 32px;
  display: flex;
  justify-content: center;
`

