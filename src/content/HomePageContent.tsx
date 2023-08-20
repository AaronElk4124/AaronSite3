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
import "@/components/Header.css";
import { CustomCard } from "@/components/CustomCard/CustomCard";

export const HomePageContent = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: ["flex", "grid"],
        flexDirection: "column",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: 0,
        gridRowGap: 0,
       
      }}
    >
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
            fontSize: ["larger", "30px"],
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
              // borderRadius: "50%",
              backgroundImage:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(6,222,81,1) 100%, rgba(187,255,0,1) 100%, rgba(255,164,0,1) 100%, rgba(255,250,0,1) 100%, rgba(255,139,0,1) 100%, rgba(255,194,0,1) 100%)",
            }}
          >
            <Image
              src={Aaron}
              alt="Aaron"
              className="tilt-image"
              loading="lazy"
              style={{ maxHeight: "450px", width: "auto" }}
            />
          </Box>
        </Tilt>
      </Stack>
      <CustomCard
        title="Philanthropy"
        description="Learn More About Aaron's involvement with charity work throughout Michigan State"
        card="card2"
        hoverColor="#4F9900"
        href="/philanthropy"
      />
      <CustomCard
        title="About Me"
        description="Learn More About Aaron and his interests/background"
        card="card3"
        hoverColor="#1672F9"
        href="/about-me"
      />
      <CustomCard
        title="Education"
        description="Learn More About Aaron's Education through public school and university"
        card="card4"
        hoverColor="#CF3D00"
        href="/education"
      />
      <CustomCard
        title="Hobbies"
        description="Learn More About Aaron's Personal Activities"
        card="card5"
        hoverColor="#572D8A"
        href="/hobbies"
      />
    </Stack>
  );
};
