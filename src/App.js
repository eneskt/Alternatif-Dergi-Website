import "./App.css";
import Body from "./component/Body";
import Nav from "./component/Nav";
import Sss from "./component/Sss";
import Issue from "./component/Issue";
import What from "./component/What"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/sayilar" component={Issue} />
          <Route path="/sss" component={Sss} />
          <Route path="/nedir" component={What} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
