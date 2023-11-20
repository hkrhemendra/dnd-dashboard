import React from 'react';
import Dashboard from './pages/Dashboard';
import Navbar from './components/global/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


function App() {

  return (
    <>
      <Navbar/>
      <Dashboard/>
    </>
  );

};

export default App;
