import React from "react";
import "./App.css";
import axios from './axios/axios';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChatbotAuth from "./components/ChatbotAuth";
import ChatbotRegister from "./components/ChatbotRegister";
import Introduction from "./components/Introduction";
import Welcome from "./components/Welcome";
import { UserContext } from './contextProvider/contextProvider';
import AdminOffice from "./components/AdminOffice";
import { useHistory } from "react-router-dom";


const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    axios.get('/getcurrentuser').then((response)=>{
     
     setuser(response.data)
      })
   

 }, [])

 const [user, setuser] = React.useState()
 
    return (
      <div className="App">
          <div>
          <UserContext.Provider value={{user,setuser}}>
      
          <Switch>
                <Route path="/admin">
                    <AdminOffice/>
                </Route>
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
     
              </UserContext.Provider>
          
          </div>
      
     
    </div>
    );
}

export default App;



