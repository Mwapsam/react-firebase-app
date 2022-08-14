import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login, Signup } from './components/index'
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
