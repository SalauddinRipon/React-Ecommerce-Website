import React, {useState} from 'react';
import movie from './movie'
import Movie from './movie';

const MovieList = () => {
    const [movie,setMovie]= useState([
        {
            name:'Harry Potter',
            price:'$12',
            id:1
        },
        {
            name:'Man',
            price:'$22',
            id:2
        },
        {
            name:' World',
            price:'$15',
            id:3
        }
       
    ])
    return(
        <div>
            {movie.map(movie => (
               <Movie name={movie.name} price={movie.price} />
            ))}
            </div>
    )
}


export default MovieList