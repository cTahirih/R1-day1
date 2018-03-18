import React from 'react';
import SearchBar from './searchBar';
import ListSinger from './listSinger';
import AboutSinger from './AboutSinger';

const SingerApp = ({data}) => {
  return (
    <div className="container">
      <div className="row">
        <SearchBar />
      </div>  
      <div className="row">
        <div className="col-12 col-md-4" >
          <ListSinger dataList = {data}/>
        </div>
        {data.map(about => (
          <AboutSinger 
            key={about.id}
            {...about} 
          />
        ))}
      </div>
    </div>
  );
}

export default SingerApp;
