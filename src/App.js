import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cakes from "./components/pages/Cakes";
import Order from "./components/pages/Order";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cakes" exact component={Cakes} />
          <Route path="/order" exact component={Order} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
