import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native'
import api from '../services/Api'

import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  Plants
} from '../styles/PlantSelect';

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import { PlantCardPrimary } from './PlantCardPrimary';

export function PlantSelect() {
  const [isActive, setIsActive] = useState(false)
  const [environments, setEnvironments] = useState([])
  const [plants, setPlants] = useState([])

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ])
    }

    fetchEnviroment()
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants')
      setPlants(data)
    }

    fetchPlants()
  }, [])

  return (
    <Container>
      <Wrapper>
        <Header />
        <Title>
          Em qual ambiente
        </Title>
        <Subtitle>
          você quer colocar sua planta?
        </Subtitle>
        <FlatList
          contentContainerStyle={{
            height: 40,
            justifyContent: 'center',
            paddingBottom: 5,
            marginVertical: 32,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={environments}
          renderItem={({ item }) => (
            <EnviromentButton 
              // key={index}
              title={item.title} 
              active={!isActive} 
              onPress={() => setIsActive(!isActive)}
            />
          )}
        />
      </Wrapper>
      <Plants>
        <FlatList   
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          
        />
      </Plants>
    </Container>
  )
}

