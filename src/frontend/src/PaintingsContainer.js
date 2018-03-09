import React from 'react'
import PaintingsList from './PaintingsList'

export default class PaintingsContainer extends React.Component{
  state = {
      paintings:[],
      sortBy:'All',
      filter:{
        title:'',
        date:''
      }
    }

  fetchPaintings = ()=> {
    fetch('http://localhost:3000/api/v1/paintings').then(res=>res.json())
    .then(json => {
      this.setState({paintings: json})
    });
  }

  componentDidMount(){
    this.fetchPaintings()
  }

  handleTitleChange = (event) => {

    this.setState({
      filter: {
        title: event.target.value,
        date: this.state.filter.date
      }
    })
  }

  handleDateChange = (event) => {
    this.setState({
      filter: {
        title: this.state.filter.title,
        date: event.target.value
      }
    })
  }

  handleSelect = (event) => {
    let value = event.target.value
    this.setState({
      sortBy: value
    });
  }

  filterDates(paintings){
    const return_paintings = paintings.filter(painting =>
      painting.date !== null && painting.date.length === 4 && parseInt(painting.date) !== NaN
    )
    return return_paintings
  }

  sortGallery = () =>{
    let sortedPaintings = null
      if (this.state.sortBy ==='All'){
        sortedPaintings = this.state.paintings
        return sortedPaintings
      }else if (this.state.sortBy==='Title'){
        let paintingsCopy = [...this.state.paintings]
        sortedPaintings = paintingsCopy.sort((a,b) =>{
          // return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        })
        return sortedPaintings
      }
      else if(this.state.sortBy==='Date'){
        let paintingsCopy = [...this.state.paintings]
        let relPaintings = this.filterDates(paintingsCopy)
        sortedPaintings = relPaintings.sort((a,b) =>{
          return b.date - a.date
        })
        return sortedPaintings.reverse()
      }
    }


  render(){
    return(
      <div>
        <input type='text' name="Title" placeholder='Search By Title' value={this.state.filter.title} onChange={this.handleTitleChange}>
        </input>
        <input type='text' name="Date" placeholder='Search By Date' value={this.state.filter.date} onChange={this.handleDateChange}>
        </input>
        <select
          name='Sort'
          value={this.state.sortBy}
          onChange={this.handleSelect}>
          <option value='All'>All</option>
          <option value='Title'>Sort By Title</option>
          <option value='Date'>Sort By Date</option>
        </select>
        <PaintingsList paintings={this.sortGallery()}
                       filter={this.state.filter}
                       sortStatus={this.state.sortBy}/>
      </div>
    )
  }
}
