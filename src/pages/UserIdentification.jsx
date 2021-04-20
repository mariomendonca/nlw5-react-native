import React, { useState } from 'react'
import colors from '../styles/Colors'
import { useNavigation } from '@react-navigation/core'
import { TouchableWithoutFeedback, Keyboard, Touchable } from 'react-native'

import {
  Container,
  Content,
  Emoji,
  Form,
  Input,
  Title,
  Footer,
  Header,
  KeyboardAvoiding,
} from '../styles/UserIdentification'

import { Button } from '../components/Button'
import { Platform } from 'react-native'

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFiled, setIsFiled] = useState(false)
  const [name, setName] = useState()

  const { navigate } = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFiled(!!name)
  }
  
  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value) {
    setIsFiled(!!value)
    setName(value)
  }

  function NavigateToNext() {
    navigate('Confirmation')
  }

  return (
    <Container>
      <KeyboardAvoiding
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Form>
          <Header>
            <Emoji>Feliz</Emoji>
            <Title>
              Como podemos {'\n'}
              chamar você?
            </Title>
          </Header>
            <Input 
              placeholder='Digite seu nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus} 
              onChangeText={handleInputChange}
              color={ (isFocused || isFiled) ? colors.green : colors.gray }
              />
            <Footer>
              <Button 
                title='Confirmar'
                onPress={NavigateToNext}
                />
            </Footer>
          </Form>
        </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding> 
    </Container>
  )
}
