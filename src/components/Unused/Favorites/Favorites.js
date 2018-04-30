import React, {Component} from 'react';
import axios from 'axios';
import Button from '../Button/Button'
import './favorites.css'

class Favorites extends Component{
  constructor(){
    super();
    this.state = {
      deckNames: []
    }
    this.editName=this.editName.bind(this)
    this.deleteName=this.deleteName.bind(this)
  }

  componentDidMount(){
    axios.get('/api/favorites').then(res => {
      this.setState({
        deckNames: res.data
      })
      console.log(this.state.deckNames)
      this.editName=this.editName.bind(this)
      this.deleteName=this.deleteName.bind(this)
    })
  }

  editName(id, name){
    axios.put(`/api/favorites/:${id}`, { name }).then(res => {
      this.setState({deckNames: res.data})
    })
  }

  deleteName( id ) {
    axios.delete(`api/favorites/${id}` ).then( res => {
      this.setState({ deckNames: res.data });
    });

  }

  render(){
    let favoritesList = this.state.deckNames.map((e, i) => {
       return (
         <div key={e+i}>{e.name}</div>
       )
    })
    return(
      <div>
        <h3>Favorite Decks</h3>
          <div>
            {favoritesList[0]}
            <Button name={'Edit Name'} method={this.editName}/>
            <Button name={'Delete'} method={this.deleteName} />
          </div>
          <div>
            {favoritesList[1]}
            <Button name={'Edit Name'} />
            <Button name={'Delete'} />
          </div>
          <div>
            {favoritesList[2]}
            <Button name={'Edit Name'} />
            <Button name={'Delete'} />
          </div>
          <div>
            {favoritesList[3]}
            <Button name={'Edit Name'} />
            <Button name={'Delete'} />
          </div>
      </div>
    )
  }
}




export default Favorites;