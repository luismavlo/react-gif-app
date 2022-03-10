import React, { useState } from 'react'

const SearchGif = ({ setTermino }) => {

  const [text, setText] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTermino(text)
  }


  return (
    <form className='mt-2 mb-3' onSubmit={ handleSubmit }>
        <input 
            className="form-control" 
            type="text" 
            placeholder="Ingrese el gif a buscar" 
            aria-label="default input example"
            value={text}
            onChange={ (e) => setText(e.target.value)}
            >
        </input>
    </form>
  )
}

export default SearchGif