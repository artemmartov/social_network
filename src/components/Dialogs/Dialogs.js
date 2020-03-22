import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { NavLink } from "react-router-dom";

const Dialogs = props => {
  

  return (
    <div className={classes.dialogs}>
      <div className={classes["dialogs-items"]}>
        {props.dataList.map(elem => {
          return <DialogItem name={elem.name} id={elem} />;
        })}
      </div>

      <div className={classes.messages}>
        {/* <Message message="HIIIIII" /> */}
        {props.dataMessage.map(elem => {
            return <Message message={elem.message} />
        })}
      </div>
    </div>
  );
};

export default Dialogs;
