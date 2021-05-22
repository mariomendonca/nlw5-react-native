import React from 'react';

import {
  Container,
  CardText,
  CardImg
} from '../styles/PlantCardPrimary';

export function PlantCardPrimary({ data, ...rest }){
  return (
    <Container>
      
      <CardImg
        uri={data.photo} 
        width={80} 
        height={80}
      />
      <CardText>
        {data.name}
      </CardText>

    </Container>
  )
}
