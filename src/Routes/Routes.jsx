import { Switch, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { useEffect, useState } from "react";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("hubToken"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route exact path="/Register">
        <Register authenticated={authenticated}/>
      </Route>
      <Route exact path="/Home">
        <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
    </Switch>
  );
};
