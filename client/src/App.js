import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login ">
            <Login />
          </Route>
          <Route path="/signup ">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
