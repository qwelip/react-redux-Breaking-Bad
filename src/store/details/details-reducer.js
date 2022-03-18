import { SET_DETAILS, SET_LOADING, SET_QUOTE, SET_DEATH_DETAILS, RESET_DETAILS, SET_NEXT_CARACTER } from "./details-action";

const initialState = {
  details: {},
  deathDetails: {},
  loading: false,
  quote: '',
  nextCaracter: ''
}

export const detailsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_DETAILS: {
      return {
        ...state,
        details: payload,
        loading: false
      }
    }
    case SET_DEATH_DETAILS: {
      return {
        ...state,
        deathDetails: payload
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_QUOTE: {
      return {
        ...state,
        quote: payload
      }
    }
    case RESET_DETAILS: {
      return {
        ...initialState
      }
    }
    case SET_NEXT_CARACTER: {
      return {
        ...state,
        nextCaracter: payload
      }
    }
    default: {
      return state
    }
  }
}