import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { InitialState } from '../redux/reducer'
import { DogImage } from './DogImage'
import styled from '@emotion/styled'
import Heart from './Heart'

interface StateProps {
  liked: string[]
}

export const Favorites: FC = () => {
  const { liked } = useSelector<InitialState, StateProps>((state: InitialState) => {
    return {
      liked: state.liked,
    }
  })
  return (
    <div>
      <Title>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Header>Favorites</Header>
      </Title>
      <ImageContainer>
        {liked?.map((image: string, index: number) => (
          <DogImage imageLink={image} key={index} />
        ))}
      </ImageContainer>
    </div>
  )
}

const ImageContainer = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  margin: 'auto',
  justifyContent: 'space-between',
  height: 'auto',
})

const Title = styled.div({
  display: 'flex',
})

const Header = styled.h1({
  fontWeight: 'bold',
  paddingLeft: '5%',
  fontSize: '24px',
  lineHeight: '33px',
})
