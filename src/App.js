import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

// <button> start a battle royal
// create a link with unique, you share that
// when you visit the link it will ask you for the codewars username
// the challenge is timed
// winner is the person that solves it the fastest

const App = () => {
  const [term, setTerm] = useState("");
  const [kata, setKata] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  // In order to get the axios call to work you have to type
  // the kata name exactly for example valid-braces or opposite-number.

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/code-challenges/${term}`
    );
    // feel free to delete console logs if you want
    console.log(response.data);
    setKata(response.data);
  };

  const renderKata = () => {
    return (
      <ul>
        <li>
          <strong>{kata.name}</strong>
        </li>
        <li>{kata.description}</li>
        <li>
          <a href={kata.url} target="new">
            {kata.url}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Code War</h1>
      <form>
        <input value={term} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      {renderKata()}
    </div>
  );
};

export default App;
