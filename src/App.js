import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeCard from './recipeCard'

class App extends Component {
  render() {
    let name="Milkshake"
    let image="http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg"
    let ingredients=["2 scoops ice cream","milk"]
    let instructions="make me a milkshake"
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App">
      <RecipeCard name={name} image={image} ingredients={ingredients} instructions={instructions} />
      <RecipeCard name={name} image={image} ingredients={ingredients} instructions={instructions} />
      </div>
    );
  }
}

export default App;
