import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Signup from "./Pages/Signup/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
