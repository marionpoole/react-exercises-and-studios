import SaveButton from "./SaveButton.jsx";
import ClickedButton from "./ClickedButton.jsx"
import "./styling.css";

function Button(props) {
  const saveButton = props.saveButton;
  saveButton ? SaveButton : ClickedButton;
  return (saveButton ? <SaveButton handleClick={handleClick}/> : <ClickedButton handleClick={handleClick}/>);
}
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
