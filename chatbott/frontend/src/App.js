import React from "react";
import "./App.css";



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChatbotAuth from "./components/ChatbotAuth";
import ChatbotRegister from "./components/ChatbotRegister";
import Introduction from "./components/Introduction";
import Welcome from "./components/Welcome";


//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <div className="App">
          <div>

          <Switch>
                <Route path="/Introduction">
                   <Introduction/>
                </Route>
                <Route path="/register">
                  <ChatbotRegister/>
                </Route>
                <Route path="/auth">
                  <ChatbotAuth/>
                </Route>
                <Route path="/">
                  <Welcome/>
                </Route>
              </Switch>
     
          
          </div>
      
     
    </div>
    );
}

export default App;



