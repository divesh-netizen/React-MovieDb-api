import React, { Component } from 'react';

import NOTFOUND from './notFound';
import Movie from './movie';
import AUX from './../auxiliary';
import Classes from './../cssMod/movie.css';


class movie extends Component {

    render () {

        let movies = this.props.data
        const mov = [];
        mov.push(Classes.movies);
        mov.push(Classes.section);
        
        
        return(
            <AUX>
            <article className={mov.join(' ')}>

                {movies !== undefined ? movies.map((movie, index)=>
                    <Movie
                    key={movie.imdbID}
                    index = {index}
                    {...movies}
                    />
                    ) : <NOTFOUND />}
                </article>
        </AUX>
    );
    }

};


export default movie;
