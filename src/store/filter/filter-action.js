export const SET_INPUT = '@@filter/SET_INPUT';
export const SET_STATUS = '@@filter/SET_STATUS';
export const SET_EPISODES = '@@filter/SET_EPISODES';
export const SET_DROPDOWN_STATE = '@@filter/SET_DROPDOWN_STATE';
export const RESET_FILTER = '@@filter/RESET_FILTER';

export const setInput = (str) => ({
  type: SET_INPUT,
  payload: str
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status
})

export const setEpisodes = (edisode) => ({
  type: SET_EPISODES,
  payload: edisode
})

export const setDropdownState = () =>({
  type: SET_DROPDOWN_STATE
})

export const resetFilter = () => ({
  type: RESET_FILTER
})