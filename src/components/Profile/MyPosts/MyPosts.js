import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = props => {
  let newDataPost = props.postData.map(elem => {
    return <Post message={elem.message} />;
  });

  let newPostElement = React.createRef();

  let newPostTwo = () => {
    let text = newPostElement.current.value;
    props.newPost(text)
    // console.log(text);
}

let onPostChamge = () => {
    
}

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} cols="30" rows="2"></textarea>
        </div>
        <div>
          <button onClick={newPostTwo}>Отправить</button>
        </div>
      </div>
      <div className={classes.posts}>{newDataPost}</div>
    </div>
  );
};

export default MyPosts;
