import React from "react";
import classes from './Post.module.css'

const Post = props => {
    return (
            <div className={classes.post}>
                <img src="https://www.panorama.am/news_images/624/1870613_2/86.thumb.jpg" alt=""/>
                <div className={classes.item}>{props.message}</div>
                <div><span>like</span></div>
            </div>
    )
};

export default Post
