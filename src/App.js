import React, { Component } from 'react';
import DeckDisplay from './components/DeckDisplay/DeckDisplay.js'
import Header from './components/Header/Header'
import ManageFavorites from './components/ManageFavorites/ManageFavorites.js';
import './reset.css';
import './App.css';


class App extends Component {
  constructor(){
    super();
  }
    
  render() {
    
    return (
      <main>
        <Header />
        <div className='displayContainer'>
          <div className="deckDisplay">
            <DeckDisplay  />
          </div>
        </div>
        <div className='listContainer'>
          <div className='splash'>  
           <ManageFavorites />
          </div>
        </div>
      </main>
    )
  }
}


export default App;
