import React from 'react';


import {  
  Button,
  ButtonText
} from '../styles/Welcome';

export function MainButton({ title, ...rest }) {
  return(
    <Button 
      activeOpacity={0.7}
      {...rest}  
    >
      <ButtonText>
        {title}
      </ButtonText>
    </Button>
  )
}

