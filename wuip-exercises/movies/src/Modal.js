import React, { useState } from "react";
import "./Modal.css";
import {useEffect} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player/youtube'




export default function Modal() {
const [keyId, setKeyId] = useState('');
const [modal, setModal] = useState(false);

function MovieList() {
    const apiNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fbe43b73080fda2f9ade8e5978acd5b4&append_to_response=videos'
    const [movies, setMovies] = useState([]) 
    useEffect(() => {
      axios
        .get(apiNowPlaying)
        .then(response => {
          setMovies(response.data.results)
        })
    }, [])
    
  
  
    if (movies.length === 0) {
      return(
        <div style={{flex: 1, padding: 20}}>
          <p>Loading, please wait...</p>
        </div>
      )
    } else {
        const movieItems = movies.map((movie,index) =>
          <MovieListItem key={index} movie={movie}/>
        );
    
      return(
        <div style={{flex: 1, padding: 20}}>
          {movieItems}
        </div>
      )
    }
  }
  
  
  
  
  
  
  function MovieListItem(props) {
    const [movie, setMovie] = useState([])
  
    useEffect(() => {
      axios
        .get('https://api.themoviedb.org/3/movie/'+props.movie.id+'?api_key=fbe43b73080fda2f9ade8e5978acd5b4&append_to_response=videos')
        .then(response => {
          setMovie(response.data)
        })
    }, [])
  
  
    const IMAGEPATH = 'http://image.tmdb.org/t/p/w500'
    const imageurl = IMAGEPATH + movie.poster_path;
    function videoPressed(key){
        toggleModal();
        setKeyId(key)
      }
  
        let genres = "";  
      if (movie !== undefined && movie.genres !== undefined) {
        for (var i=0;i<movie.genres.length;i++) {
          genres += movie.genres[i].name+" ";
        }
      }
      var video = "";
  if (movie !== undefined && movie.videos !== undefined && movie.videos.results !== undefined) {
    video = <span style={{color:'green', cursor:'pointer'}}onClick={() => videoPressed(movie.videos.results[0].key)} >{movie.videos.results[0].name}</span>
  }
  
    return(
  
  
    <div className="Movie">
        <img src={imageurl}/>
        <p className="MovieTitle">{movie.original_title} : {props.movie.release_date}</p>
        <p className="MovieText">{movie.overview}</p>
        <span className="GenresText">Genres: {genres}</span><br/>
        <span className="VideosText">Video: {video}</span>
    </div>
    )
  }
  
  



  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <MovieList/>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${keyId}`} />
          </div>
        </div>
      )}
     
    </>
  );
}