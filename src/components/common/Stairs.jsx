import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

function Stairs({ children }) {
  const currentPath = useLocation().pathname;
  // console.log(locate.pathname)
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stairs", {
      height: 0,
      transformOrigin: "top",
      duration: 1,
      stagger: -0.1,
      // ease: "power2.out",
    });

    tl.to(
      ".stairs",
      {
        y: "100%",
        duration: 1,
        stagger: -0.1,
      }
      // "+=0.3"
    );
    tl.to(stairParentRef.current, {
      display: "none",
    });

    tl.to(".stairs", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 3,
      scale:1.2
    });
  }, [currentPath]);
  return (
    <div c>
      <div ref={stairParentRef} className="h-screen w-screen top-0 fixed z-10 ">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
}

export default Stairs;
