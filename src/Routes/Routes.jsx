import { Switch, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Register">
        <Register />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
    </Switch>
  );
};
