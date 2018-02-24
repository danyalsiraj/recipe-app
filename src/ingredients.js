import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class ingredients extends Component{
  // static defaultProps={//if the ingredient list is not passed it it uses the default list. it would give error otherwise
  //   ingredients:[]
  // }
 //// since we are using proptypes and saying that ingredients is isRequired we dont need defaultProps
  static propTypes={
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }

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

// ingredients.defaultProps={//this is same as static defaultProps
//   ingredients:[]
// }
