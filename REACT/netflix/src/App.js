import Row from './Row';
import requests from './requests';

import './App.css';
import Banner from './Banner'
import Navbar from './Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row
      isLargeRow={true} 
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}/>
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/> */}
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrending}/>
       <Row title="TOPRATED MOVIES" fetchUrl={requests.fetchTopRated}/>
       <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
