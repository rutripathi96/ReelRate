import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import StarRating from './StarRating';
import { useState } from 'react';
import App from './App';

function Test(){
  const [movieRating,setMovieRating] = useState(0);
  return(
    <div>
      <StarRating color="blue" maxRating={10}
      onSetRating={setMovieRating}></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} color={"red"} messages={["terrible","bad","okay","good","great"]} defaultRating={3}/> */}
    {/* <Test/> */}
    <App/>
  </React.StrictMode>
);

