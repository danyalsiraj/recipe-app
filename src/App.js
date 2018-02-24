import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeCard from './recipeCard'
import Navbar from './NavBar'
import RecipeList from './RecipeList'

class App extends Component {
  // static defaultProps={
  //   recipies:[{
  //     name:"Milkshake",
  //     image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
  //     ingredients:["2 scoops ice cream","milk"],
  //     instructions:"make me a milkshake"
  //   },{
  //     name:"Milkshake",
  //     image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
  //     ingredients:["2 scoops ice cream","milk"],
  //     instructions:"make me a milkshake"
  //   }
  //
  // ]
  // }
  render() {
    // let name="Milkshake"
    // let image="http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg"
    // let ingredients=["2 scoops ice cream","milk"]
    // let instructions="make me a milkshake"
    // return (
    //   <div className="App">
    //   <RecipeCard name={name} image={image} ingredients={ingredients} instructions={instructions} />
    //   <RecipeCard name={name} image={image} ingredients={ingredients} instructions={instructions} />
    //   </div>
    // );

    /// another way
    return(
      <div>
        <Navbar/>
        <div className="App">
          <RecipeList/>
        </div>
      </div>
    )
  }
}

export default App;
