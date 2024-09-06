import { useState } from 'react';

export default function BoardAssignment () {
   const boards = 
   [
      {
         label: "healthy lunch recipes",
         value: 1
      },
      {
         label: "recipes",
         value: 2
      },
      {
         label: "chicken recipes",
         value: 3
      }
   ];

   boards.map((board) => {
<select><option value={boards.value}>{boards.label}</option></select>
   })

   const[boardName, setName] = useState("no boards yet!")
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
