import { getAllCaractersUrl } from "../../utils/api";


export const SET_CARACTERS = '@@caracters/SET_CARACTERS';
export const SET_LOADING = '@@caracters/SET_LOADING';

export const setLoading = () => ({
  type: SET_LOADING
})

const setCaracters = (array) => ({
  type: SET_CARACTERS,
  payload: array
})

export const getAllCaracters = () => (dispatch) => {
  dispatch(setLoading());
  fetch(getAllCaractersUrl)
    .then(res => res.json())
    .then(data => dispatch(setCaracters(data)))
    .catch(err => console.log(`${err} Can't fetch data`))
}