import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './Components/Sidebar.js';
import Homecontent from './Components/Homecontent.js';
import Basic from './Components/Basic.js';
import Intermediate from './Components/Intermediate.js';
import Advanced from './Components/Advanced.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import Questionnaire from './Components/Questionnaire.js'
import './Components/login.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/questionnaire">
            <div className="">
                <Questionnaire />
            </div>
          </Route>
        <Route path="/register">
            <div className="">
                <Register />
            </div>
          </Route>
          <Route path="/Login">
            <div className="">
                <Login />
            </div>
          </Route>

          <Route path="/advanced">
            <div className="finance_page_advanced">
              <Sidebar />
              <Advanced difficulty="Pro" description="We display the current IEX rates that are the most applicable to you. " age="Young Adult" />
            </div>
          </Route>
          <Route path="/intermediate">
            <div className="finance_page">
              <Sidebar />
              <Intermediate difficulty="Basic" description="Filter out news to see which sector is the best to invest in.   " age="Young Adult" />
            </div>
          </Route>


          <Route path="/basic">
          
            <div className="finance_page">
            
              <Sidebar/>
              <Basic difficulty="Beginner" description="We scoured the internet to bring forth the most up to date fixed-deposit interest rates from the various banks. You can find their latest 12 month fixed deposit rates below:  " age="Young Teen" />
              

            </div>
          </Route>

          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Homecontent />
            </div>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
