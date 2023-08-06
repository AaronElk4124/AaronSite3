"use client";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Aaron from "@/images/AaronElkinSenior Pic.jpg";
import { robotoMono } from "@/theme/fonts";
import { Tilt } from "@/components/Tilt/Tilt";
import "../components/Header.css";
import { CardOne } from "@/components/CardOne/CardOne";

export const HomePageContent = () => {
  return (
    <Stack
      className="parent"
      sx={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: ["center", "center"],
      }}
    >
      <CardOne />
      <Stack
        className="card1"
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        <Tilt>
          <Box
            sx={{
              background: "blur",
              zIndex: "900",
              p: "30px",
              border: "10px solid",
              borderStyle: "double",
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(6,222,81,1) 100%, rgba(187,255,0,1) 100%, rgba(255,164,0,1) 100%, rgba(255,250,0,1) 100%, rgba(255,139,0,1) 100%, rgba(255,194,0,1) 100%)",
            }}
          >
            <Image
              src={Aaron}
              alt="Aaron"
              className="tilt-image"
              style={{ maxHeight: "450px", width: "auto", borderRadius: "50%" }}
            />
          </Box>
        </Tilt>
      </Stack>
      <Card className="card3">About Me</Card>
    </Stack>
  );
};
