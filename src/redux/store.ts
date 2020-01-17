import { createStore } from 'redux'
import { rootReducer, InitialState } from './reducer'

export default createStore<InitialState, null, null, null>(rootReducer)
