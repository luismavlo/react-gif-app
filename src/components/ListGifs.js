import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfoGif from './InfoGif'

const ListGifs = ({ termino }) => {


  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=I9iBBMxqm15FjeYSfVjl5hDGy5NCvdlQ&limit=20&q=${termino}`)
      .then(res => setGifs(res.data.data))
  }, [termino]);

  const filteredGif = () =>{
    return gifs.slice(currentPage, currentPage + 5)
  }

  const handleNext = () =>{
    setCurrentPage(currentPage + 5)
  }

  const handlePrevious = () =>{
    if(currentPage > 0)
    setCurrentPage(currentPage - 5)
  }

  console.log(currentPage)

  return (
    <section className='content-gifs row'>
      {
        filteredGif().map(gif => (
          <InfoGif gif={gif} key={gif.id} />
        ))
      }
      <div className="btn-group mb-5" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={ handlePrevious }>Previous</button>
        <button type="button" className="btn btn-primary" onClick={ handleNext }>Next</button>
      </div>
    </section>
  )
}

export default ListGifs