import React from "react";
import requests from "../../APIs/Requests";
import Row from "../Row/Row";
import "./RowList__Style/RowList.css";

function RowList() {
  return (
    <div className="rowlist">
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular Shows" fetchUrl={requests.fetchPopularTv} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentry Movies" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimations} />
    </div>
  );
}

export default RowList;
