const SINGERS = [
  {id: '1asd', name : 'Shakira', bio : 'cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana', url : 'http://d4.panamaamerica.com.pa/sites/default/files/imagenes/2017/12/06/_shakira_y_pique_.jpg' , canciones : ['ojos asi', 'tu', 'inevitable']},
  {id: '2asd', name : 'Rihanna', bio : 'Robyn Rihanna Fenty, conocida simplemente como Rihanna, es una cantante, compositora, productora discográfica, actriz, modelo, bailarina, filántropa, diseñadora de moda y empresaria barbadense. ', url:'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/10/26/104799617-GettyImages-852745176.1910x1000.jpg', canciones:['Umbrella', 'We found love']},
  {id: '3asd', name : 'Jenifer Lopez', bio:'actriz, cantante, bailarina, compositora, productora discográfica, diseñadora de modas, empresaria, productora de televisión, coreógrafa, perfumista y filántropa estadounidense de origen puertorriqueño.', url:'https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/02/06/jenniferlopez.jpg', canciones : ['lets get loud','love the cost a thing']},
  {id: '3usd', name : 'Mon Laferte', bio:'Norma Monserrat Bustamante Laferte, más conocida como Mon Laferte, es una cantante y compositora chilena. Toca diversos instrumentos musicales y sus principales influencias son el rock, blues y pop.', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysBVSRKEVpvAnBKujKIOF--8H92VwVnGWRs3vmjNrnztc6-oy0g', canciones : ['Amarrame','Tu falta de querer']}
];
  
const INIT_STATE = {
  artist: SINGERS,
  filterText: '',
};
  
export default (state = INIT_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};