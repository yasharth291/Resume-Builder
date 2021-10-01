import React from "react";
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Switch>
        <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
