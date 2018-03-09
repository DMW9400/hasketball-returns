import gamesData from '../gamesData'

const defaultState = {teams: gamesData.teams,
  selectedPlayer: null}

export const rootReducer = (state = defaultState, action) => {

  switch(action.type){
    case "SELECT_PLAYER":
      return {
        ...state,
        selectedPlayer: action.payload
      }
    default:
      return state
  }

}
