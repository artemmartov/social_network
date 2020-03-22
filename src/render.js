import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import state from './redux/state'
import { newPost } from './redux/state'


export let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <App state={state} newPost={newPost}/>,
        document.getElementById("root")
      );
}
