import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import A6 from "./components/a6";
import A7 from "./components/a7";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import History from "./components/history";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import PreviousReactAssignment from "./components/PreviousReactAssignment";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6">
                  <A6/>
              </Route>
              <Route path="/a7">
                  <A7/>
              </Route>
              <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a8/twitter">
                  <Build/>
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
