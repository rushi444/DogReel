import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialState } from '../redux/reducer'
import { RootDispatcher } from '../redux/actions'
import { DogImage } from './DogImage'
import styled from '@emotion/styled'

interface StateProps {
  images: string[]
  error: string
}

export const SearchResults: FC = () => {
  const { images, error } = useSelector<InitialState, StateProps>((state: InitialState) => {
    return {
      images: state.images,
      error: state.error,
    }
  })
  const dispatch = useDispatch()
  const rootDispatcher = new RootDispatcher(dispatch)

  useEffect(() => {
    rootDispatcher.getDefaultImages()
  }, [])
  return (
    <>
      {error && <div>{error}</div>}
      <ImageContainer>
        {images?.message.map(
          (image: string, index: number) =>
            index < 12 && <DogImage imageLink={image} key={index} />,
        )}
      </ImageContainer>
    </>
  )
}

const ImageContainer = styled.div({
  borderBottom: '1px solid gray',
  display: 'flex',
  flexFlow: 'row wrap',
  margin: 'auto',
  marginBottom: '5%',
  justifyContent: 'space-between',
})
