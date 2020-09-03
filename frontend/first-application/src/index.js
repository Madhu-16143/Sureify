import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route} from 'react-router-dom';
// import Music from './music';
import AudioPlayer from './AudioPlayer';

// import Music from './music';
ReactDOM.render(
  // <React.StrictMode>
  //   <AudioPlayer/>
  // </React.StrictMode>,
  <BrowserRouter>
   <div>
     <Route exact={true} path='/' component={App} ></Route>
     <Route path='/AudioPlayer' component={AudioPlayer}/>
     {/* <Route path='/contacts' component={Contacts}/> */}
   </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
