import React from 'react';

import {
  Container,
  AvatarImg,
  GreetingText,
  NameContainer,
  NameText
} from '../styles/Header';


import Avatar from '../assets/avatar.jpeg'

export function Header() {
  return (
    <Container>
      <NameContainer>
        <GreetingText>Olá,</GreetingText>
        <NameText>Mário</NameText>
      </NameContainer> 
      <AvatarImg source={Avatar} />
    </Container>
  )
}

