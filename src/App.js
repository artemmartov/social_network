import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";


import { Route, BrowserRouter, Switch} from "react-router-dom";


function App(props) {
   

  

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />

        <div className="app-wrapper-content">  
          <Switch>

            <Route exact path="/dialoges">
              <Dialogs dataList={props.state.messagesPage.dataList} dataMessage={props.state.messagesPage.dataMessage}/>
            </Route>

            <Route exact path="/profile">
              <Profile profilePage={props.state.profilePage.postData} newPost={props.newPost}/>
            </Route>

          </Switch>
          {/* <Route path="/dialoges" component={Dialogs}/>
          <Route path="/profile" component={Profile} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
