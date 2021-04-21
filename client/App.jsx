import React from 'react';
import { authPage } from './pages/authPage.jsx';
import { gamePage } from './pages/gamePage.jsx';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute';

const App = () => {
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Switch>
        <Route exact path="/" component={authPage} />
        <ProtectedRoute path="/game" component={gamePage} />
      </Switch>
    </div>
  );
};

export default App;
