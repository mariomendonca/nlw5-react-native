import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'

import { MainButton } from '../components/Button'

import {
  Container,
  Title,
  Img,
  Subtitle
} from '../styles/Welcome';

import wateringImg from '../assets/watering.png'

export function Welcome() {
  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas de {'\n'} 
        forma fácil
      </Title>
      <Img source={wateringImg} />
      <Subtitle>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar
      </Subtitle>
      {/* <MainButton title='test' onPress={() => console.log('test')}/> */}
      <MainButton title={<Feather name='chevron-right' size={25} color='#fff' />} onPress={() => setVisible(!visible)}/>
    </Container>
  )
}