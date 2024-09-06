import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.erinliveswhole.com/";
   let authorPhoto = "https://www.erinliveswhole.com/wp-content/uploads/2020/10/about-600x600.jpg";
   let authorName = "Erin Lives Whole";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["shredded chicken breast", "buffalo sauce", "plain greek yogurt", "garlic powder", "blue cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Healthy Buffalo Chicken Salad</h1>
            <p>Enjoy the spicy, tangy, flavorful taste of this delicious Healthy Buffalo Chicken Salad. Ready in just 10 minutes, this tasty dish is perfect for enjoying multiple ways -- on crackers, bread, salad, you name it!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.erinliveswhole.com/wp-content/uploads/2023/09/Buffalochickensalad-7-650x975.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
