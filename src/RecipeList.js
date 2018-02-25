import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RecipeCard from './recipeCard'
import './RecipeList.css'

export default class RecipeList extends Component{

  render (){
    const recipies=this.props.recipies.map((recipie)=>(
      <RecipeCard key={recipie.id} {...recipie}/>
    ))
    return (
      <div className="recipeList">
        {recipies}
      </div>

    )
  }

  static propTypes={
    recipies:PropTypes.arrayOf(PropTypes.object).isRequired
  }

}
