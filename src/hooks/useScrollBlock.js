/* eslint-disable no-unused-vars */
// import { useRef } from "react";

// const safeDocument = typeof document !== "undefined" ? document : {};

// export default () => {
//   const scrollBlocked = useRef();
//   const html = safeDocument.documentElement;
//   const { body } = safeDocument;

//   const blockScroll = () => {
//     if (!body || !body.style || scrollBlocked.current) return;

//     const scrollBarWidth = window.innerWidth - html.clientWidth;
//     const bodyPaddingRight =
//       parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

//     html.style.position = "relative";
//     html.style.overflow = "hidden";
//     body.style.position = "relative";
//     body.style.overflow = "hidden";
//     body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

//     scrollBlocked.current = true;
//   };

//   const allowScroll = () => {
//     if (!body || !body.style || !scrollBlocked.current) return;

//     html.style.position = "";
//     html.style.overflow = "";
//     body.style.position = "";
//     body.style.overflow = "";
//     body.style.paddingRight = "";

//     scrollBlocked.current = false;
//   };

//   return [blockScroll, allowScroll];
// };

import { useState } from "react";

const useScrollBlock = () => {
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);

  const blockScroll = () => {
    setIsScrollBlocked(true);
    document.body.classList.add("body-scroll-lock");
  };

  const allowScroll = () => {
    setIsScrollBlocked(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return [blockScroll, allowScroll];
};

export default useScrollBlock;
