import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import CreateAcc from './CreateAcc';
import Login from './Login';


const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/CreateAcc" component={CreateAcc} />
        <Route path="/Login" component={Login} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
