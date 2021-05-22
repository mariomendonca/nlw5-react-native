import React from 'react';
import { useNavigation } from '@react-navigation/core'

import {
  Container,
  Content,
  Form,
  Title,
  Emoji,
  Footer,
  Subtitle
} from '../styles/UserIdentification';


import { Button } from '../components/Button'

export function Confirmation() {
  const { navigate } = useNavigation()

  function HandleNavigate() {
    navigate('PlantSelect')
  }

  return (
    <Container>
      <Content>
        <Form>
          <Emoji>Feliz</Emoji>
          <Title>
            Prontinho
          </Title>
          <Subtitle>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidados
          </Subtitle>
          <Footer>
            <Button title='Continuar' onPress={HandleNavigate}/>
          </Footer>
        </Form>
      </Content>
    </Container>
  )
}
