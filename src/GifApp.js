import React, { useState } from 'react';
import ListGifs from './components/ListGifs';
import SearchGif from './components/SearchGif';

const GifApp = () => {

  const [termino, setTermino] = useState('naruto');

  return (
    <div className='content-app mt-3'>
        <h1>APLICACIÓN DE GIFS</h1>
        <SearchGif setTermino={ setTermino } />
        <h2>LISTADO DE GIFS</h2>
        <ListGifs termino={termino}/>
    </div>
  )
}

export default GifApp