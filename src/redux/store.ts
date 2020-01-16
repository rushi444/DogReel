import { createStore } from 'redux'
import { rootReducer, DispatchAction, InitialState } from './reducer'

export default createStore<InitialState, DispatchAction, null, null>(rootReducer)
