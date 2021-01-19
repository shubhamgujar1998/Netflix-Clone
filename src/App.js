import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <div>
      <Helmet>
        <meta charSet="UTF-8"/>
        <title>Netflix</title>
      </Helmet>
      </div>
      <Nav />

      <Banner />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
