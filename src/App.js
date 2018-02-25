import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeCard from './recipeCard'
import Navbar from './NavBar'
import RecipeList from './RecipeList'
import NewRecipeForm from './NewRecipe'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showForm:false,
      recipies:[{
        id:1,
        name:"Milkshake",
        image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
        ingredients:["2 scoops ice cream","milk"],
        instructions:"make me a milkshake"
      },{
        id:2,
        name:"Milkshake",
        image:"http://del.h-cdn.co/assets/15/24/980x490/landscape-1433889344-del-milkshakes-index.jpg",
        ingredients:["2 scoops ice cream","milk"],
        instructions:"make me a milkshake"
      }],
      nextRecipeId:3
    }
  }
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
  saveRecipe(e){
    e.preventDefault()
    console.log(document.getElementsByName("ingredient"));
    let recipe={
      id: this.state.nextRecipeId,
      name: document.getElementsByName("dishName")[0].value,
      ingredients: this.saveIngredients(document.getElementsByName("ingredient")),
      instructions:document.getElementsByName("instructions")[0].value,
      image:document.getElementsByName("imageURL")[0].value
    }
    this.setState((prevState)=>{
      return {
        showForm:false,
        recipies:[
          ...prevState.recipies,
          recipe
        ],
        nextRecipeId: prevState.nextRecipeId +1
      }
    })
    e.target.reset()
  }
  saveIngredients(ingList){
    let ingredients=[]
    ingList.forEach((currentValue)=>{
        ingredients.push(currentValue.value)

    })
    return ingredients
  }
  showForm(){
    this.setState({...this.state,showForm:true})
  }

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
        <Navbar showForm={this.showForm.bind(this)}/>
        {this.state.showForm ? <NewRecipeForm saveRecipe={this.saveRecipe.bind(this)}/>:null }
        <div className="App">
          <RecipeList recipies={this.state.recipies}/>
        </div>
      </div>
    )
  }
}

export default App;
