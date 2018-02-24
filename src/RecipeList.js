import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RecipeCard from './recipeCard'
import './RecipeList.css'

export default class RecipeList extends Component{
  static defaultProps={
    recipies:[{
      name:"Milkshake",
      image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
      ingredients:["2 scoops ice cream","milk"],
      instructions:"make me a milkshake"
    },{
      name:"Milkshake",
      image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
      ingredients:["2 scoops ice cream","milk"],
      instructions:"make me a milkshake"
    }

  ]
  }

  render (){
    const recipies=this.props.recipies.map((recipie,index)=>(
      <RecipeCard key={index} {...recipie}/>
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
