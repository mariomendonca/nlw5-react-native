import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native'
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
import { Load } from '../components/Load'
import { PlantCardPrimary } from './PlantCardPrimary';
import Colors from '../styles/Colors';

export function PlantSelect() {
  const [environments, setEnvironments] = useState([])
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  const [isActive, setIsActive] = useState('all')
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(true)
  const [loadedAll, setLoadedAll] = useState(false)

  async function fetchPlants() {
    const { data } = await api
    .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if (!data) 
      return setLoading(false)
    
    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  function handleActive(key) {
    setIsActive(key)

    if (key == 'all') 
    return setFilteredPlants(plants)

    const filtered = plants.filter(plant => 
        plant.environments.includes(key)
    )

    setFilteredPlants(filtered)
  }

  function handleFetchMore(distance) {
    if(distance < 1)
      return

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fetchPlants()
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
      .get('plants_environments?_sort=title&_order=asc')
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
    fetchPlants()
  }, [])

  if(loading)
  return <Load />
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
          renderItem={({ item, index }) => (
            <EnviromentButton 
              key={index}
              title={item.title} 
              active={item.key == isActive} 
              // onPress={handleActive(item.key)}
              onPress={() => handleActive(item.key)}
            />
          )}
        />
      </Wrapper>
      <Plants>
        <FlatList   
          // data={plants}
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distacnteFromEnd }) => {
            handleFetchMore(distacnteFromEnd)
          }}
          ListFooterComponent={
            loadingMore && <ActivityIndicator color={Colors.green}/> 
          }
        />
      </Plants>
    </Container>
  )
}

