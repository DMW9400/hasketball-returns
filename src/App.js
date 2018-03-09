import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'


class App extends Component {

  // this was the original state we have now made over to the store in index.js
  // we can now use connect, imported above, to tell these components about the store in index.js

  // state = {
  //   teams: gamesData.teams,
  //   selectedPlayer: null
  // }

  handleSelectPlayer = (player) => {
    this.setState({
      selectedPlayer: player
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavHeader />
        <TeamList selectPlayer={this.handleSelectPlayer}/>
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}



// keys of the object returned will be the props passed on
const mapStateToProps = (state) =>{
  return {
    selectedPlayer: state.selectedPlayer
  }
}

//connect is what allows us to give the information from reducer(which imported games data)=>createStore=>provider=>this app

export default connect(mapStateToProps)(App);
