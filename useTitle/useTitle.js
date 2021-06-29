import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  // change the text field in <title>
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // when component mount, call updateTitle
  // if title updates, we will call updateTitle again
  useEffect(updateTitle, [title]);
  return setTitle;
};
