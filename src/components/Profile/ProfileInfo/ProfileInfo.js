import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {

    
  return (
    <div>
      <img src="https://mycanon.canon.ru/Upload/CKEditor/Masterskaya/Panoramnaya_semka/91371.jpg" alt="" />
      <div className={classes.descriptionBlock}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo
