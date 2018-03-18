import React from 'react';

const ImagesSinger = ({url, nombre}) => (
  <img className="card-img-top" src={url} alt={nombre} />
)

export default ImagesSinger;