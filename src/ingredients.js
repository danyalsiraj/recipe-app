import React, {Component} from 'react'

export default class ingredients extends Component{
  render(){
    const liStyle={fontSize:'1em'}
    return(
      <ul>
        {this.props.ingredients.map((ingredient,index)=>{
          return <li style={liStyle} key={index}>{ingredient}</li>
        })}
      </ul>
    )
  }


}
