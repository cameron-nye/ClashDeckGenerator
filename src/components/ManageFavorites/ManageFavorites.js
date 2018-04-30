import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button'
import '../ManageFavorites/manageFavorites.css'

class ManageFavorites extends Component {
  constructor(){
    super();
    this.state = {
      deckNames: [],
      selectedDeck: {
        id: null,
        name: ''
      }
    }
    this.editName = this.editName.bind(this)
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.deleteName = this.deleteName.bind(this)
    this.clearSelection = this.clearSelection.bind(this)
  }

  componentDidMount(){
    axios.get('/api/favorites').then(res => {
      this.setState({
        deckNames: res.data
      })
      console.log(this.state.deckNames)
    })
  }

  handleInput(val, edit){
    if(edit){
      this.setState({selectedDeck: {
        id: this.state.selectedDeck.id,
        name: val
    }})
  }
    else {
    this.setState({selectedDeck: {
      id: null,
      name: val
    }})
  }
  }


  handleSave(){
    const {selectedDeck} = this.state
    axios.post('/api/deckNames', {selectedDeck}).then( res => 
      this.setState({
        deckNames: res.data,
        selectedDeck: {
          id: null,
          name: ''
        }
        
      })
    )
  };

  deleteName() {
    axios.delete(`/api/favorites/${this.state.selectedDeck.id}`).then( res => {
      this.setState({ deckNames: res.data,
      selectedDeck: {
        id: null,
        name: ''
      } });
    });
  }

  editName(){
    let {selectedDeck} = this.state
    axios.put(`/api/favorites`, { selectedDeck }).then(res => {
      this.setState({deckNames: res.data})
    })
  }

  deckSelection(deck){
    this.setState({selectedDeck: deck})
  }

  clearSelection(){
    this.setState({selectedDeck: {
      id: null,
      name: ''
    }})
  }
 
  render() {
    let disabled = this.state.selectedDeck.id === null ? false : true;
    console.log(this.state)
    let favoritesList = this.state.deckNames.map((e,i) => {
      return(
        <div className='favorites' onClick = {() => this.deckSelection(e)} key= { e+i }> {e.name} </div>
      )
    })
    return (
      <div className="ManageFavorites">
      <div className="title">
        <h2>Favorite Decks</h2>
      </div>
        <input type="text"
          value = {this.state.selectedDeck.name} 
          onChange = {(e) => {this.handleInput(e.target.value, disabled)}}
          placeholder = 'Deck Name'
          className={'inputBox'} />
          <Button name={'Save'} 
                  method={this.handleSave}
                  disabled={disabled}/>
          <Button name={'Edit'}
                  method={this.editName}
                  disabled={!disabled}/>
          <Button name={'Delete'}
                  method={this.deleteName}
                  disabled={!disabled}/>
          <Button name={'Clear'}
                  method={this.clearSelection}
                  disabled={!disabled}/>

        { favoritesList }
                  
      </div>
    );
  }
}

export default ManageFavorites;