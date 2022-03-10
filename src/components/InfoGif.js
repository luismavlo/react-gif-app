import React from 'react'

const InfoGif = ({gif}) => {

  return (
    <div className='col-4 mb-4'>
      <div className="card">
        <img src={gif.images.downsized_medium.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{gif.title}</p>
        </div>
      </div>
    </div>

  )
}

export default InfoGif