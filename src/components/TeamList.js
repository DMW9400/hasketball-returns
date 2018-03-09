import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'


// the arg params for TeamList are deconstructed - essentiall props.teams, props.selectPlayer
const TeamList = ({ teams, selectPlayer }) => {

  const renderedTeams = teams.map(team => {
    return <Team key={team.id} team={team} selectPlayer={selectPlayer} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

// keys of the object returned will be the props passed on
const mapStateToProps = (state) =>{
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer
  }
}

//connect is what allows us to give the information from reducer(which imported games data)=>createStore=>provider=>this app

export default connect(mapStateToProps)(TeamList);
