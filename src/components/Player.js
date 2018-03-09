import React from 'react'
import { connect } from 'react-redux'
import { selectPlayer } from '../actions/index'

// player already passed in as prop from Teamlist - no redux needed w/ it
const Player = (props) => {
  console.log(props)
  // connect is now passing in selectPlayer key in return freom mapDispatchToProps
  return (
    <div onClick={() => props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  // this is not literally the selectPlayer action - this is best practice
  return {
    selectPlayer: (player) => dispatch(selectPlayer(player))
  }
}

// we don't need mapStateToProps because player is passed from Teamlist,
// we only need the selectPlayer from store via reducer via action
export default connect(null,mapDispatchToProps)(Player)
