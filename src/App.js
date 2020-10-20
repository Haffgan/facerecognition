import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import 'tachyons';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
    <Particles className="particles"/>

    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
    {
    // <FaceRecognition />
  }

     
    </div>
  );
}

export default App;
