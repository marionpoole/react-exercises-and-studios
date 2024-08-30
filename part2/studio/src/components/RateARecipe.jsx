let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  
 function GiveRating() {
  {props.RateARecipe.map((stars) => {
  return ( 
  <h3>{stars[props.rating - 1]}</h3>
  )}
)}
 }
  return stars;
}

props === props>=1 && props<=5 ? GiveRating : "null"


export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
