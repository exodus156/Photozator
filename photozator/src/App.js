import React from 'react';
import Title from './components/title/Title';
import Photo from './components/photo/Photo';
import Translator from './components/translator/Translator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Photo />
      <hr />
      <Translator />
    </div>
  );
}

export default App;
