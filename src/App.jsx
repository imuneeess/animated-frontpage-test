import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.9,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 1.5,
      }).to("#intro-slider", {
        xPercent : "-100",
        duration : 1.3,
      }).from("#welcome", {
        opacity:0,
        duration:0.5,
      });
    }, comp.current); // Correct usage of comp.current to access the DOM element
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
        <h1 className="text-8xl" id="title-1">
          Owner of beads world
        </h1>
        <h1 className="text-8xl" id="title-2">
          Best roblox player
        </h1>
        <h1 className="text-8xl" id="title-3">
          Music lover
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center items-center">
        <h1 id="Welcome" className="text-9xl font-oswald font-bold text-gray-100">Sara Sarita.</h1>
        <h1 id="Welcome" className="text-3xl font-oswald font-bold text-gray-100">(Sara el ouazzani)</h1>
      </div>
    </div>
  );
}

export default App;
