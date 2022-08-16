import { useEffect, useRef, useState } from "react";
import "./scrollIndicator.scss";

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(1);
  const parents = useRef<any>(null);
  const child = useRef<any>(null);
  useEffect(() => {
    const onScroll = () => {
      const s = window.pageYOffset;
      setScrollY(
        (parents.current.clientHeight - child.current.clientHeight) *
          (s / (document.body.scrollHeight - document.body.clientHeight))
      );
    };
    window.addEventListener("scroll", onScroll, true);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [parents, child]);
  useEffect(() => {}, [scrollY]);
  return (
    <div ref={parents} className={"scrollArea"}>
      <a
        ref={child}
        className={"scrollIndicatorText"}
        style={{
          transform: "translateY(" + scrollY + "px) translateX(0.1px)",
        }}
        href="https://github.com/hagi0929"
        target="_blank"
      >
        Made by hagi0929
      </a>
    </div>
  );
}

export default ScrollTracker;
