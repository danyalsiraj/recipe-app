import React, { Component } from 'react';


export default class NewRecipe extends Component{
  constructor(props){
    super(props)
    this.state={
      ingredients: ['']
    }


  }
  addIngredients(){
    console.log(this);
    this.setState({
      ingredients: [...this.state.ingredients,'']
    })
  }
  render(){

    let inputs=this.state.ingredients.map((ingredient,i)=>(

      <input
       class="form-control form-control-sm" type="text" name={`ingredient`} placeholder="Enter Ingredient"
     />
    ))
    return(

        <form onSubmit={this.props.saveRecipe} class="card" style={{width:'300px', margin: '1em auto'}}>
             Dish Name:<br/>
             <input class="form-control form-control-sm" type="text" name="dishName" placeholder="enter dish name"/>
             <br/>
             Ingredients:<br/>
              {inputs}
              <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.addIngredients.bind(this)}><i class="fas fa-plus"></i></button>
             <br/>
             Instructions:<br/>
             <textarea class="form-control" type="text" name="instructions" placeholder="Enter Instructions"/>
             <br/>
             Image URL:<br/>
             <input class="form-control form-control-sm" type="text" name="imageURL" placeholder="Enter Image URL"/>

             <br/><br/>
             <input type="submit" class="btn btn-outline-dark btn-sm" value="Submit"/>
          </form>

    )


   }

}








// const NewRecipe=(props)=>{
//   return(
//     <form onSubmit={props.saveRecipe}>
//       Dish Name:<br/>
//       <input type="text" name="dishName" placeholder="enter dish name"/>
//       <br/>
//       Ingredient:<br/>
//       <input type="text" name="ingredient" placeholder="Enter Ingredient"/>
//       <input type="text" name="ingredient" placeholder="Enter Ingredient"/>
//       <input type="text" name="ingredient" placeholder="Enter Ingredient"/>
//       <input type="text" name="ingredient" placeholder="Enter Ingredient"/>
//       <br/>
//       Instructions:<br/>
//       <input type="text" name="instructions" placeholder="Enter Instructions"/>
//       <br/>
//       Image URL:<br/>
//       <input type="text" name="imageURL" placeholder="Enter Image URL"/>
//
//       <br/><br/>
//       <input type="submit" value="Submit"/>
//     </form>
//
//   )
//
//
//
// }
// export default NewRecipe
