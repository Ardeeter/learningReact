

import React, {useState, useEffect} from "react";


const Movies = () => {

    const[movies, setMovies] = useState(null)

    useEffect(async () => {
    
            const url = `http://www.omdbapi.com/?s=batman&apikey=3e97afb3`

            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            setMovies(data.Search)

        
    }, []);

    console.log(movies);


    let movieList = movies.map((movie) => {
        <li key={movies.imdbID}>
            <h1>{movies.Title}</h1>
            <h3>{movies.Year}</h3>
            <p>{movies.Type}</p>
            <img src={movies.Poster} alt=""/>
        </li>
      
    }
    )

    return (
    <>
        {movieList}
    </>
    )
}

export default Movies
