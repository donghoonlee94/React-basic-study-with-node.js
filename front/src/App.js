import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={auth(LandingPage, null)} />
          <Route exact path="/login" component={auth(LoginPage, true)} />
          <Route exact path="/register" component={auth(RegisterPage, true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
