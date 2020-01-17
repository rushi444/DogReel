import { Dispatch } from 'redux';
import axios from 'axios'

export const GET_DEFAULT_IMAGES = 'GET_DEFAULT_IMAGES'
export const SEARCH_BREED = 'SEARCH_BREED'
export const SEARCH_BREED_ERROR = 'SEARCH_BREED_ERROR'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export class RootDispatcher {
    private readonly dispatch: Dispatch;

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
    }
    getDefaultImages = async () => {
        try {
            let res = await axios.get('https://dog.ceo/api/breeds/image/random/10')
            this.dispatch({ type: GET_DEFAULT_IMAGES, payload: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    searchBreed = async (breed: string) => {
        try {
            let res = await axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images`)
            this.dispatch({ type: SEARCH_BREED, payload: res.data })
        } catch (err) {
            this.dispatch({ type: SEARCH_BREED_ERROR, payload: {} })
        }
    }
    toggleLike = (url: string) => {
        try {
            this.dispatch({ type: TOGGLE_LIKE, payload: url })
        } catch (err) {
            console.log(err)
        }
    }
}
