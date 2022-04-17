import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology"
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/destination" exact>
          <Destination />
        </Route>
        <Route path="/crew" exact>
          <Crew />
        </Route>
        <Route path="/technology" exact>
          <Technology />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
