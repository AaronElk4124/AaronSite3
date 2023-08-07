"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ComputerIcon from "@/icons/ComputerIcon.svg";
import { bebasNeue } from "@/theme/fonts";
import "../Header.css";
import { map as _map } from "lodash";

export const Header = () => {
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <Stack
        sx={{
          as: "head",
          height: "100px",
          maxWidth: "100vw",
          boxShadow: "black",
          flexDirection: "row",
          alignItems: "center",
          px: "20px",
          justifyContent: "center",
          zIndex: "2000",
          borderBottom: "2px solid black",
          mb: "20px",
          background: "#38383B",
        }}
      >
        <Box sx={{ width: "60px", height: "60px" }}>
          <Image src={ComputerIcon} alt="Computer" loading="lazy" />
        </Box>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontFamily: bebasNeue.style.fontFamily,
            fontSize: ["larger", "30px"],
            textAlign: "center",
            color: "#83B799",
            mx: "20px",
          }}
        >
          Aaron Elkin - Computer and Electrical Engineering Student at Michigan
          State University
        </Typography>
        <Box sx={{ width: "60px", height: "60px" }}>
          <Image src={ComputerIcon} alt="Computer" loading="lazy" />
        </Box>
      </Stack>
    </header>
  );
};
