import React, { Component } from 'react';

const NewRecipe=(props)=>{
  return(
    <form onSubmit={props.saveRecipe}>
      Dish Name:<br/>
      <input type="text" name="dishName" placeholder="enter dish name"/>
      <br/>
      Ingredient:<br/>
      <input type="text" name="ingredient" placeholder="Enter Ingredient"/>
      <br/>
      Instructions:<br/>
      <input type="text" name="instructions" placeholder="Enter Instructions"/>
      <br/>
      Image URL:<br/>
      <input type="text" name="imageURL" placeholder="Enter Image URL"/>

      <br/><br/>
      <input type="submit" value="Submit"/>
    </form>

  )



}
export default NewRecipe
