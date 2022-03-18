import { getCaracterUrl, getRandomCaracterQuoteUrl, getDeathInfoUrl, getCaracterByIdUrl } from "../../utils/api";

export const SET_DETAILS = '@@details/SET_DETAILS';
export const SET_DEATH_DETAILS = '@@details/SET_DEATH_DETAILS';
export const SET_LOADING = '@@details/SET_LOADING';
export const SET_QUOTE = '@@details/SET_QUOTE';
export const RESET_DETAILS = '@@details/RESET_DETAILS';
export const SET_NEXT_CARACTER = '@@details/SET_NEXT_CARACTER';

const setDetails = (details) => ({
  type: SET_DETAILS,
  payload: details
})

const setDeathDetails = (details) => ({
  type: SET_DEATH_DETAILS,
  payload: details
})

const setLoading = () => ({
  type: SET_LOADING
})

const setQuote = (quote) => ({
  type: SET_QUOTE,
  payload: quote
})

export const resetDetails = () => ({
  type: RESET_DETAILS
})

const setNextCaracter = (name) => ({
  type: SET_NEXT_CARACTER,
  payload: name
})

// todo добавить добавление в стор стейта ошибки и обновление статуса загрузки

export const getDetails = (name) => (dispatch) => {
  dispatch(setLoading());
  fetch(`${getCaracterUrl}${name}`)
    .then(res => res.json())
    .then(data => dispatch(setDetails(data)))
    .catch(err => console.log(`${err} Can't fetch data`))
}

export const getQuote = (name) => (dispatch) => {
  fetch(`${getRandomCaracterQuoteUrl}${name}`)
    .then(res => res.json())
    .then(data => dispatch(setQuote(data[0].quote)))
    .catch(err => {
      console.log(`${err} Can't fetch data`);
      dispatch(setQuote('none'))
    })
}

export const getDeathDetails = (name) => async (dispatch) => {
  fetch(`${getDeathInfoUrl}${name}`)
    .then(res => res.json())
    .then(data => dispatch(setDeathDetails(data[0])))
    .catch(err => console.log(`${err} Can't fetch data`))
}

// export const getCaracterById = (id) => (dispatch) => {
//   fetch(`${getCaracterByIdUrl}/${id}`)
//     .then(res => res.json())
//     .then(data => dispatch(setNextCaracter(data)))
//     .catch(err => console.log(`${err} Can't fetch data`))
// }