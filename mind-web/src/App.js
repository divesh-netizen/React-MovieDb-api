import React, { Component } from 'react';
import Classes from'./App.css';
import Head from './cssMod/Head.css';
import Movie from './Container/movieList';
import AUX from './auxiliary';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'batman',
      movies: []
    }
  }

  
  fetchApi = (url) => {
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      // console.log(data.Search)
      this.setState({movies: data.Search})
    })
    
  }
  
  fetchMovieTitle = (movieTitle) => {
    let url = `http://www.omdbapi.com/?apikey=97ffd55b&s=${movieTitle}`
    this.fetchApi(url);
  }
  
  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({title : e.target.value})
    // console.log(this.state.title)
  }


  render() {
    

    let form =
      <form className={Head.search} >
        <h1>search movies</h1>
        <input
          type='text '
          className='form-input'
          value={this.state.title}
          onChange={(e) => this.handleOnChange(e)}
          />
          <input type='submit' onSubmit={this.fetchMovieTitle(this.state.title)}  />
      </form>

    
    return (
      <AUX>
        <main className={Classes.App}>
          {form}
          <Movie data = {this.state.movies} />
        </main>
      </AUX>
    );
  }
};




export default App;
