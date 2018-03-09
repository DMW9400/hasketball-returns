// type will always be key, value will be referenced
// in the switch case in reducer
// payload will pass on the date taken in

// the const selectPlayer is the 'action creator'
const selectPlayer = (player) =>{
  console.log(player)
  // this is the 'action'
  return {
    type: "SELECT_PLAYER",
    payload: player
  }
}
export {selectPlayer}
