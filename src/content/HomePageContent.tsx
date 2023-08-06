"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Aaron from "@/images/AaronElkinSenior Pic.jpg";
import { robotoMono } from "theme/fonts";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export const HomePageContent = () => {
  return (
    <Stack sx={{ alignItems: "center", flexDirection: "column" }}>
      <Typography
        sx={{
          fontFamily: robotoMono.style.fontFamily,
          fontSize: "30px",
          color: "steelblue",
          mb: "20px",
        }}
      >
        Welcome to Aaron's site
      </Typography>
      <Box
        sx={{
          background: "blur",
          p: "30px",
          border: "10px solid",
          borderStyle: "double",
          borderRadius: "50%",
          backgroundImage:
            "linear-gradient(90deg, rgba(9,121,30,1) 0%, rgba(2,0,36,1) 0%, rgba(0,221,255,1) 100%)",
        }}
      >
        <Tilt>
          <Image
            src={Aaron}
            alt="Aaron"
            className="tilt-image"
            style={{ width: "auto", borderRadius: "50%" }}
          />
        </Tilt>
      </Box>
    </Stack>
  );
};
