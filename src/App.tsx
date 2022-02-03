import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Mint from './components/mint/Mint';
import Whitepaper from './components/whitepaper/Whitepaper';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>

    </>
  );
}

export default App;
