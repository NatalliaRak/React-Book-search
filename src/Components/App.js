import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBook from './fetching';



function App() {
  return ( 
  
  
      <>
      <div className='main container-fluid'>
        <h1>Знайдзіце кнігу ці аўтара</h1>
        <SearchBook />

      </div>
      </>


  );
}

export default App;
