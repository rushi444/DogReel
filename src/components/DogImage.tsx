import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Heart from './Heart'
import { InitialState } from '../redux/reducer'
import { RootDispatcher } from '../redux/actions'

interface Props {
  imageLink: string
}

interface StateProps {
  liked: string[]
}

export const DogImage: FC<Props> = props => {
  const { liked } = useSelector<InitialState, StateProps>((state: InitialState) => {
    return {
      liked: state.liked,
    }
  })
  const dispatch = useDispatch()
  const rootDispatcher = new RootDispatcher(dispatch)
  return (
    <DogPicture style={{ backgroundImage: `url(${props?.imageLink}` }}>
      <HeartContainer onClick={() => rootDispatcher.toggleLike(props.imageLink)}>
        {liked && liked.includes(props.imageLink) ? (
          <Heart icon="redHeartIcon" alt="red heart icon" />
        ) : (
          <Heart icon="whiteHeartIcon" alt=" white heart icon" />
        )}
      </HeartContainer>
    </DogPicture>
  )
}

const DogPicture = styled.div({
  margin: '2%',
  height: '160px',
  width: '160px',
  backgroundSize: 'cover',
  borderRadius: '3px',
  position: 'relative',
})

const HeartContainer = styled.div({
  position: 'absolute',
  bottom: '0px',
  right: '3px',
})
