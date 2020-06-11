import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/*ReactDOM.render(
React.createElement('div',null,React.createElement('div',null,"Child component or tag"),"Hello world"),
  document.getElementById('root')
);*/

ReactDOM.render(
  /*<div>Hello world by Zohaib Qadri</div>, /*Creating division in react dom*/
/*<span>New Text updated</span>*/ /* creating span tag in index.js */
/*<App/>, /* calling app.js (React tag(App)) from App.js*/ 
<div><App name="Zohaib Tahir" age={25} hobby = "Reading"/></div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
