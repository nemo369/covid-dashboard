import React from 'react';
import './App.scss';
import HeaderBar from './components/Header/HeaderBar';
import Main from './components/Main/Main';
import DataContextProivder from './contexts/DataContext';
import Footer from './components/Footer/Footer';


 

function App() {
  return (
    <div className="App">
      <DataContextProivder>
        <HeaderBar/>
        <Main/>
        <Footer/>
      </DataContextProivder>
    </div>
  );
}

export default App;
