import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export const Tilt = (props: Props) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleTilt = (event) => {
      const { left, top, width, height } =
        tiltRef.current.getBoundingClientRect();
      const x = (event.clientX - left - width / 2) / (width / 2);
      const y = (event.clientY - top - height / 2) / (height / 2);
      const tiltAmount = 30; // You can adjust the tilt amount
      tiltRef.current.style.transform = `perspective(800px) rotateX(${
        -y * tiltAmount
      }deg) rotateY(${x * tiltAmount}deg)`;
    };

    const handleMouseLeave = () => {
      tiltRef.current.style.transform = "";
    };

    tiltRef.current.addEventListener("mousemove", handleTilt);
    tiltRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tiltRef.current.removeEventListener("mousemove", handleTilt);
      tiltRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box ref={tiltRef} className="tilt">
      {props.children}
    </Box>
  );
};
