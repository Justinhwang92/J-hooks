import { useEffect } from "react";

export const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    // console.log("leaving");
    // console.log(event);
    const { clientY } = event;
    // execute function only move your mous to the top
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // when componenWillUnMount
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};