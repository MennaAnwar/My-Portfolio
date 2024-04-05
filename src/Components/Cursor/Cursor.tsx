import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  // Mouse position state
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Cursor and Follower positions
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    // GSAP animation loop
    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: () => {
          // Update positions smoothly
          posX.current += (mouseX.current - posX.current) / 9;
          posY.current += (mouseY.current - posY.current) / 9;

          // Apply the positions to the follower
          if (followerRef.current) {
            gsap.set(followerRef.current, {
              css: {
                left: posX.current - 12,
                top: posY.current - 12,
              },
            });
          }

          // Apply the positions to the cursor
          if (cursorRef.current) {
            gsap.set(cursorRef.current, {
              css: {
                left: mouseX.current,
                top: mouseY.current,
              },
            });
          }
        },
      }
    );

    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
}
