import React from 'react';
import ImagesSinger from './imageSinger';

const ListSinger = ({dataList}) => (
  <div className="card mt-2 mb-2">
    <div>
      {dataList.map(list => (
        <ImagesSinger
          key={list.id}
          {...list} 
        />
      ))}
    </div>
  </div>
)

export default ListSinger;