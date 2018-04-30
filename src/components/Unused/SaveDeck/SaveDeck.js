import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

class SaveDeck extends Component {
  constructor(){
    super();
    this.state={
      name: '',
      deckNames: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  
  handleInput(val){
    this.setState({
      name: val
    })
  }
  
  handleSave(){
    const {name} = this.state
    axios.post('/api/deckNames', {name}).then( res => 
      this.setState({
        deckNames: res.data,
        name: ''
      })
    )
  };


render(){
  return(
    <div>
      <h3>{'Save This Deck'}</h3>
      <input type="text" 
        value={this.state.name}
        placeholder={'Deck Name'} 
        onChange={(e) => this.handleInput(e.target.value)}/>
      <Button name={'Save'} 
              method={this.handleSave}
              />
    </div>
    )
  }
}


export default SaveDeck;
