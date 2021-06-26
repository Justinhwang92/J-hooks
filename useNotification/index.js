import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  // if the browser doesn't support notification
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      // ask permission
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // allowed
          new Notification(title, options);
        } else {
          // denied
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("WOW!!!!!", { body: "done :)" });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
