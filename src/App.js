import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Hello from './Hello';

function App({name, age, hobby}) {
  return <div>  
    Hello world from app.js updated <strong>{name}</strong> Age ={age-5} 
    <br/>
    <Hello myhob={hobby}></Hello>
    <div>
      <h2>Information about My Self</h2>
      <ul type="Square">
        <li> This is un-ordered list.</li>
        <li> My name is Zohaib.</li>
        <li> I am 27 years old.</li>
        <li> I have done Bachelors from Fast Nu, Isb in 2016.</li>
        <li> I have completed Masters in Systems Engineering from PIEAS,Isb in February 2020.</li>
        <li> Current i am taking AI course from PIAIC, i am from Islamabad and enrolled in batch 9.</li>
      </ul>
      <h2 className="myHeading"> Some other useful information</h2>
      <ol>
        <li> This is ordered list</li>
        <li> I am using Windows 10 pro.</li>
        <li> I am currently working on third assignment.</li> 
      </ol>
    </div>
    </div>   
}
export default App;
