import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";
import A9 from "./components/a9";
import History from "./components/history";
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import PreviousReactAssignment from "./components/PreviousReactAssignment";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Link to="/a8/practice">A8</Link> |
              <Link to="/a9/practice">A9</Link>
              <Route path="/a6">
                  <A6/>
              </Route>
              <Route path="/a7">
                  <A7/>
              </Route>
              <Route path="/a8">
                  <A8/>
              </Route>
              <Route path="/a9">
                  <A9/>
              </Route>
              <Route path="/history">
                  <History/>
              </Route>
              <Route path="/history/react">
                  <PreviousReactAssignment/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
