import {Routes, Route} from 'react-router-dom';
import LoginCallback from './components/LoginCallback';
import EhrApp from './components/EhrApp';
import Login from './components/Login';

import {useOktaAuth} from '@okta/okta-react';

import './App.css';


function App(){
  const {oktaAuth, authState} = useOktaAuth();

  
  async function login(){
    await oktaAuth.signInWithRedirect();
  }


  //main
  return(
    <Routes>
      <Route
        path = "/login/callback"
        element = {<LoginCallback />}
      />

      <Route
        path = "*"
        element = {
          !authState || !authState.isAuthenticated?(
            <Login
            login = {login}
            />
          ):(
            <EhrApp 
            oktaAuth = {oktaAuth}/>
          )
        }
      />
    </Routes> 
  );
}

export default App;