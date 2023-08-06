import React from "react";

import { Metadata } from "next";
import { Box, Container } from "@mui/material";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Aaron Elkin",
  description: "Welcome to Aaron's life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "ghostwhite", margin: 0 }}>
        <Header />
        <Container sx={{ maxWidth: "1400px" }}>{children}</Container>
        <script src="vanilla-tilt.js" />
      </body>
    </html>
  );
}
