import React from "react";
import { Route, Routes } from "react-router-dom";
import Movie from "./component/Movie";
import Trailer from "./pages/Trailer";
import {useState} from 'react'

const App = () => {
  const [id, setId] = useState([])
   const handleId = (e) => {
     console.log(e.id);
    setId({...e})
   };
   ;
  return (
    <div className="App">
     
      <main className="container"></main>
      <Routes>
        <Route path="/" element={<Movie handleId={handleId} />} />
        <Route path="/trailer" element={<Trailer id={id} />} />
      </Routes>
    </div>
  );
};

export default App;
