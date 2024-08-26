import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Surfs Up");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;