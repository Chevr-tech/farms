import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news-room" component={Blog} />
      </Switch>
    </Router>
  );
};

export default App;
