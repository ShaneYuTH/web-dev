import {Link} from "react-router-dom";

const History = () => {
  return(
      <div>
          <h2>Non React.js Assignments</h2>
          <ul>
              <li><a href="a2/practice/index.html">HTML Index</a></li>
              <li><a href="a4/twitter/navigation.html">Twitter clone</a></li>
              <li><a href="a2/practice/iframe/index.html">Iframes</a></li>
              <li><a href="a2/practice/svg/index.html">SVG</a></li>
              <li><a href="a3/practice/css/index.html">CSS</a></li>
              <li><a href="a3/challenge/index.html">a3 Challenge</a></li>
              <li><a href="a4/practice/bootstrap/index.html">Bootstrap</a></li>
              <li><a href="a5/practice/js/index.html">js</a></li>
              <li><a href="a5/build/ExploreScreen/explore.html">a5 Build</a></li>
          </ul>

          <Link to="/">
              Back
          </Link>
      </div>
  );
};

export default History;