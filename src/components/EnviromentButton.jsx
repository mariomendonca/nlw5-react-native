import React from 'react';

import {
  Container,
  ButtonText
} from '../styles/EnviromentButton';

export function EnviromentButton({ title, active, ...rest }) {
  return (
    <Container 
      back={active}
     {...rest}
    >
      <ButtonText color={active} font={active}>
        {title}
      </ButtonText>
    </Container>
  )
}
