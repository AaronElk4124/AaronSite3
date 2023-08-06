"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ComputerIcon from "@/icons/ComputerIcon.svg";
import { bebasNeue, robotoMono } from "@/theme/fonts";
import "../Header.css";
import { map as _map } from "lodash";

const linkArray = [
  {
    title: "Philanthropy",
    href: "/",
  },
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Education",
    href: "/",
  },
  {
    title: "Hobbies",
    href: "/",
  },
];

export const Header = () => {
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <Stack
        sx={{
          as: "head",
          height: "100px",
          background: "white",
          maxWidth: "100vw",
          boxShadow: "black",
          flexDirection: "row",
          alignItems: "center",
          px: "20px",
          justifyContent: "space-between",
          zIndex: "2000",
          borderBottom: "2px solid black",
          mb: "20px",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "200px",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "60px", height: "60px" }}>
            <Image src={ComputerIcon} alt="Computer" />
          </Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: bebasNeue.style.fontFamily,
              fontSize: "30px",
              background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Aaron Elkin
          </Typography>
        </Stack>
        <Box>
          {_map(linkArray, (linkInfo, i) => {
            return (
              <Button className="specialButton" href={linkInfo.href} key={i}>
                <Typography sx={{ fontFamily: robotoMono.style.fontFamily }}>
                  {linkInfo.title}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Stack>
    </header>
  );
};
