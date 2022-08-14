import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login, Signup } from './components/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
