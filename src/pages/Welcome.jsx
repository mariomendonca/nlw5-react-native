import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons'


import {
  Container,
  Title,
  Img,
  Subtitle,
  Button,
  Wrapper
} from '../styles/Welcome';

import wateringImg from '../assets/watering.png'

export function Welcome() {
  const {navigate} = useNavigation()

  function NavigateToNext() {
    navigate('UserIdentification')
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'} 
          suas plantas de {'\n'} 
          forma fácil
        </Title>
        <Img 
          source={wateringImg} 
          resize='contain'  
        />
        <Subtitle>
          Não esqueça mais de regar suas plantas. 
          Nós cuidamos de lembrar você sempre que precisar
        </Subtitle>
      
        <Button 
          activeOpacity={0.7}
          // onPress={() => console.log('text')}
          onPress={NavigateToNext}
        >
          <Feather name='chevron-right' size={25} color='#fff' />
      </Button>
    </Wrapper>
  </Container>

  )
}