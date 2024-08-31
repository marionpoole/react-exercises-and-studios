import { useState } from 'react';
import data from './data.json';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    const projects = data.projects
    
    let project = projects[index]


    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

     return(
        <div>
       <button onClick={handleClick}>
        Next
       </button>
        <ul>
            <h2>My future hikes: </h2>
            <li>{project.location}</li>
            <li>{project.trail}</li>
            <li>{project.difficulty}</li>
            <li><img src={project.photo} /></li>
        </ul>
        </div>
     )

}