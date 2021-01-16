import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  //variables
  const [sideToggle, setSideToggle] = useState(false);

  //functions

  return (
    <Router>
      {/** Navbar*/}
      <Navbar click={() => setSideToggle(true)} />
      {/** SideDrawer*/}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/**Backdrop */}
      {/**Probably a better way */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/**HomeScreen */}
      {/**CartScreen */}
    </Router>
  );
}

export default App;
