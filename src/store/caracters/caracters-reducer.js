import { SET_CARACTERS, SET_LOADING } from "./caracters-action"

const initialState = {
  loading: false,
  caracters: []
}

export const caractersReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_CARACTERS: {
      return {
        ...state,
        caracters: payload,
        loading: false
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    default: {
      return state
    }
  }
}