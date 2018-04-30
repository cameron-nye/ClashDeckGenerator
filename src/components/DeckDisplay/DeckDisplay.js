import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button.js'
import './deckDisplay.css'

class DeckDisplay extends Component{
  constructor(){
    super();
    this.state = {
      randomDeck: []
    }
    this.generateDeck = this.generateDeck.bind(this);

  }
  
  generateDeck(){
    axios.get('http://www.clashapi.xyz/api/random-deck').then( res => 
      this.setState({
        randomDeck: res.data
      })
    )
  }

  render(){
    
    console.log(this.state.randomDeck)
    let randomDeckToDisplay = this.state.randomDeck.map((element, index) => {
      return(
        <div className='randomDeck' key={element + index}>{element.name}</div>
      )
    })
    return(
      <div randomSplash>
        <h3 className='random'>Random Deck</h3>
        {randomDeckToDisplay}
        {/* <button onClick={this.generateDeck}>Generate Deck</button> */}
        <Button name={'Generate Deck'} 
                method={this.generateDeck}
                width='300px'/>
      </div>
    )
  }
}


export default DeckDisplay