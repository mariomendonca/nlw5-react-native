import React from 'react';


import {  
  Container,
  ButtonText
} from '../styles/Button';

export function Button({ title, ...rest }) {
  return(
    <Container 
      activeOpacity={0.7}
      {...rest}  
    >
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  )
}

