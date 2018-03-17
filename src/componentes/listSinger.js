import React from 'react';
import ImagesSinger from './imageSinger';

const ListSinger = ({name}) => (
  <div className="card mt-2 mb-2">
    <ImagesSinger />
    <div className="card-body">
      <p className="card-text">{name}</p>
    </div>
  </div>
)

export default ListSinger;