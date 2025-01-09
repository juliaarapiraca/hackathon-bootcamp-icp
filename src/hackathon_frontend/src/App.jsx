import { useState } from 'react';
import { hackathon_backend } from 'declarations/hackathon_backend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Evento from './components/Evento';
import Equipe from './components/Equipe';

function App() {
  

  return (
    <Router>
      <Routers>
        <Route path = '/' element = {<Evento/>} />
        <Route path = '/equipelink/:idEvento' element = {<Equipe/>} />
      </Routers>
    </Router>
  );
}

export default App;
