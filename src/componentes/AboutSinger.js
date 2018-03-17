import React from 'react';
import ImagesSinger from './imageSinger';
import ListSongs from './listSongs';

const AboutSinger = ({about, name, songs}) => (
  <div className="card col-12 col-md-8">
    <ImagesSinger />
    <div className="card-body">
      <h2 className="card-text">{name}</h2>
      <p className="card-text">{about}</p>
      <ul>{songs.map(listsong =>
        <ListSongs
          key={songs}
          {...songs}
        />
      )}
      </ul>
    </div>
  </div> 
)

export default AboutSinger;