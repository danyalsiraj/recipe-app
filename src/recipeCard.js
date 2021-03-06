import React, {Component} from 'react'
import Ingredients from './ingredients'
import PropTypes from 'prop-types'
import './App.css'

export default class recipeCard extends Component{

deleteRecipe(){
  console.log(this);
  this.props.deleteRecipe(this.props.id)
}
  render(){

    return (
      <div className="card">
        <h2 className="name">{this.props.name}</h2>
        <img src={this.props.image} alt="this is the food image" />
        <h5 className="heading">Ingredients:</h5>
        <Ingredients ingredients={this.props.ingredients}/>
        <h5 className="heading">Instructions:</h5>
        <p style={{fontSize:'1em'}} >{this.props.instructions}</p>
        <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.deleteRecipe.bind(this)}>DELETE</button>
      </div>
    )
  }
  static propTypes={
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
  }
}
