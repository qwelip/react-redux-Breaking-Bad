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

export const getDetails = (name) => async (dispatch) => {
  dispatch(setLoading());

  const caracter = await fetch(`${getCaracterUrl}${name}`);
  const caracterRes = await caracter.json()
  dispatch(setDetails(caracterRes))

  const nextCaracter = await fetch(`${getCaracterByIdUrl}${caracterRes[0].char_id + 1}`);
  const nextCaracterRes = await nextCaracter.json();
  nextCaracterRes[0] && dispatch(setNextCaracter(nextCaracterRes[0].name))
}

export const getQuote = (name) => (dispatch) => {
  fetch(`${getRandomCaracterQuoteUrl}${name}`)
    .then(res => res.json())
    .then(data => {data[0] && dispatch(setQuote(data[0].quote))})
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