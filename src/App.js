import "./App.css";
import Navbar from "./components//navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cakes from "./pages/cakes/Cakes";
import Order from "./pages/order/Order";

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
