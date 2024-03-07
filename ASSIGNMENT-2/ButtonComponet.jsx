import React from 'react';

export default function ButtonComponet({img,title,description}) {
  return (
    <div className='main'>
        <div className='container'>
            <img src={img} alt="placeholder" className='img'></img>
            <h1 className='text-x1 '>{title}</h1>
            <p className='loknath'>{description}</p>
            <a href='"vinay' className='vinay'>clickme</a>
    </div> 
        </div>
  )
}