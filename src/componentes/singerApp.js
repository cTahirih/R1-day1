import React from 'react';
import SearchBar from './searchBar';
import ListSinger from './listSinger';
import AboutSinger from './AboutSinger';
const data = [
  {name : 'Shakira', bio : 'cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana', url : 'http://d4.panamaamerica.com.pa/sites/default/files/imagenes/2017/12/06/_shakira_y_pique_.jpg' , canciones : ['ojos asi', 'tu', 'inevitable']},
  {name : 'Rihanna', bio : 'Robyn Rihanna Fenty, conocida simplemente como Rihanna, es una cantante, compositora, productora discográfica, actriz, modelo, bailarina, filántropa, diseñadora de moda y empresaria barbadense. ', url:'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/10/26/104799617-GettyImages-852745176.1910x1000.jpg', canciones:['Umbrella', 'We found love']},
  {name : 'Jenifer Lopez', bio:'actriz, cantante, bailarina, compositora, productora discográfica, diseñadora de modas, empresaria, productora de televisión, coreógrafa, perfumista y filántropa estadounidense de origen puertorriqueño.', url:'https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/02/06/jenniferlopez.jpg', canciones : ['lets get loud','love the cost a thing']},
];

const SingerApp = ({data}) => {
  return (
    <div className="container">
      <div className="row">
        <SearchBar />
      </div>  
      <div className="row">
        <div className="col-12 col-md-4">
          <ListSinger name = {'nombre del artista'}/>
        </div>
        <AboutSinger about = {'Esta es la biografia del artista'} name = {'Nombre del artista'} songs = {['cancion 1', 'cancion 2', 'cancion 3']}/>
      </div>
    </div>
  );
}

export default SingerApp;
