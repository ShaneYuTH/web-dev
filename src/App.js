import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Practice from "./components/a7/Practice";
import PracticeA6 from "./components/a6/Practice";
import BuildA6 from "./components/a6/Build";
import HelloA6 from "./components/a6/HelloWorld";
import Build from "./components/a7/Build"
import History from "./components/history";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import PreviousReactAssignment from "./components/PreviousReactAssignment";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/a6", "/a6/practice"]} exact={true}>
                  <PracticeA6/>
              </Route>
              <Route path={["/a6/twitter/home"]} exact={true}>
                  <BuildA6/>
              </Route>
              <Route path={["/a6/hello"]} exact={true}>
                  <HelloA6/>
              </Route>
              <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a7/twitter">
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
