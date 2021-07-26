import React from 'react';
import Home from './view/home';
import Register from './view/register';
import {Switch, BrowserRouter, Route} from 'react-router-dom'

const App: React.FunctionComponent = () => {
  return <BrowserRouter>
            <Switch>
              <Route exact path ="/">
                <Home/>
              </Route>
              <Route path ="/cadastro">
                <Register/>
              </Route>
            </Switch>
  </BrowserRouter>
}

export default App;
