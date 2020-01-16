import { Dispatch } from 'redux';
import axios from 'axios'
import { DispatchAction, ActionType } from './reducer'

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch;
    }
    getDefaultImages = async () => {
        try {
            let res = await axios.get('https://dog.ceo/api/breeds/image/random/10')
            this.dispatch({ type: ActionType.GetDefaultImages, payload: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    searchBreed = async (breed: string) => {
        try {
            let res = await axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images`)
            this.dispatch({ type: ActionType.SearchBreed, payload: res.data })
        } catch (err) {
            this.dispatch({ type: ActionType.SearchBreedError, payload: {} })
        }
    }
    toggleLike = (url: any) => {
        try {
            this.dispatch({ type: ActionType.ToggleLike, payload: url })
        } catch (err) {
            console.log(err)
        }
    }
}
