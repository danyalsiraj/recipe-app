import React, {Component} from 'react'
import './NavBar.css'

export default class NavBar extends Component{

  render(){
    return(
      <header>
        <h2><a>RECIPE APP</a></h2>
        <nav>
          <li><a>NEW RECIPE</a></li>
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
          <li><a>CONTACT US</a></li>
        </nav>
      </header>
    )
  }




}
