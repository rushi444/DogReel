import { Reducer } from 'redux'
import { GET_DEFAULT_IMAGES, SEARCH_BREED, SEARCH_BREED_ERROR, TOGGLE_LIKE } from './actions'

export interface DefaultImages {
  message: string[]
  status: string
}

export interface InitialState {
  images: DefaultImages | any
  liked: string[] | any
  error: string
}

const initialState: InitialState = {
  images: null,
  liked: [],
  error: null
}

export const rootReducer: Reducer<InitialState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFAULT_IMAGES:
      return {
        ...state, images: action.payload, error: null
      }
    case SEARCH_BREED:
      return {
        ...state, images: action.payload, error: null
      }
    case SEARCH_BREED_ERROR:
      return {
        ...state, error: 'Please Enter a Valid Breed'
      }
    case TOGGLE_LIKE:
      if (state.liked.includes(action.payload)) {
        return {
          ...state,
          liked: state.liked.filter((imgLink: string) => imgLink != action.payload)
        }
      } else {
        return { ...state, liked: [...state.liked, action.payload] }
      }
    default:
      return state
  }
}
