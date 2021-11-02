import React, { Component } from 'react';
import Classes from './../cssMod/movie.css'

const urln =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

class movie extends Component {
    // console.log(props[props.index].Title)
    render () {
        let url = this.props[this.props.index].Poster;
        if(this.props[this.props.index].Poster === 'N/A')
            url = urln

        return (
            <div className={Classes.movie}>
            <img className={Classes.img} src={url} alt="movie" />
            <div className={Classes.movie_info}>
                <h5>{this.props[this.props.index].Title}</h5>
                <p>{this.props[this.props.index].Year}</p>
            </div>
        </div>
    );
    }
};

export default movie;   