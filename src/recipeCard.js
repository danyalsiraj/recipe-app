import React, {Component} from 'react'
import Ingredients from './ingredients'
import './App.css'

export default class recipeCard extends Component{
  render(){

    return (
      <div className="card">
        <h2 className="name">{this.props.name}</h2>
        <img src={this.props.image} alt="this is the food image" />
        <h5 className="heading">Ingredients:</h5>
        <Ingredients ingredients={this.props.ingredients}/>
        <h5 className="heading">Instructions:</h5>
        <p style={{fontSize:'1em'}} >{this.props.instructions}</p>
      </div>
    )
  }
}
