import { Action, Reducer} from 'redux'

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

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export enum ActionType {
  GetDefaultImages,
  SearchBreed,
  ToggleLike,
  SearchBreedError
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
  if (action.type === ActionType.GetDefaultImages) {
    return {
      ...state, images: action.payload, error: null
    }
  } else if (action.type === ActionType.SearchBreed) {
    return {
      ...state, images: action.payload, error: null
    }
  } else if (action.type === ActionType.SearchBreedError) {
    return {
      ...state, error: 'Please Enter a Valid Breed'
    }
  } else if (action.type === ActionType.ToggleLike) {
    if (state.liked.includes(action.payload)) {
      return {
        ...state,
        liked: state.liked.filter((imgLink: string) => imgLink != action.payload)
      }
    } else {
      return { ...state, liked: [...state.liked, action.payload] }
    }
  } else {
    return state
  }
}
