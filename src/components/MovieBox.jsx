import React from 'react'

const MovieBox = ({list}) => {
    return (
        <div className="movie-box">
            <div className="overlay">
            <img src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={`${list && list.title} Poster`}/>
            </div>
        </div>
    )
}

export default MovieBox
