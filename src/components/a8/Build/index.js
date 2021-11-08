import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducer = combineReducers({tweets:tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
  return(
      <Provider store={store}>
          <div>
              <Route path={["/", "/a8/twitter/home"]}
                     exact={true}
                     component={HomeScreen}/>
              <Route path="/a8/twitter/explore"
                     exact={true}
                     component={ExploreScreen}/>
              <Route path="/a8/twitter/profile"
                     exact={true}
                     component={ProfileScreen}/>
              <Route path="/a8/twitter/profile-edit"
                     exact={true}
                     component={EditProfileScreen}/>
          </div>
      </Provider>
  );
};

export default Build;