import { SET_INPUT, 
    SET_EPISODES, 
    SET_STATUS, 
    SET_DROPDOWN_STATE,
    RESET_FILTER
} from "./filter-action";

const initialState = {
  input: '',
  status: 'All',
  episodes: [],
  dropdownState: false
}

export const filterReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_INPUT: {
      return {
        ...state,
        input: payload
      }
    }
    case SET_EPISODES: {
      let resArr = [...state.episodes, payload]
      if (state.episodes.indexOf(payload) !== -1) {
        resArr = state.episodes.filter( item => item !== payload)
      }
      return {
        ...state,
        episodes: resArr
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: payload,
        dropdownState: false
      }
    }
    case SET_DROPDOWN_STATE: {
      return {
        ...state,
        dropdownState: !state.dropdownState
      }
    }
    case RESET_FILTER: {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
}