import { BrowserRouter, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from './components/About'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" component={Home} />
        <Layout exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
