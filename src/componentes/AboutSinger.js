import React from 'react';
import ImagesSinger from './imageSinger';
import ListSongs from './listSongs';

const AboutSinger = ({name, url, bio, canciones}) => (
  <div className="card col-12 col-md-8">
    <ImagesSinger url={url}/>
    <div className="card-body">
      <h2 className="card-text">{name}</h2>
      <p className="card-text">{bio}</p>
      <ul>
        {canciones.map(canciones => (
          <ListSongs 
            key = {canciones}
            canciones={canciones}
          />
        ))}
      </ul>
    </div>
  </div> 
)

export default AboutSinger;