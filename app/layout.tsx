import React from "react";

import { Metadata } from "next";
import { Container } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Aaron Elkin",
  description: "Welcome to Aaron's life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#1A1A1A", margin: 0 }}>
        <Header />
        <Container sx={{ maxWidth: "1400px" }}>{children}</Container>
        <Analytics />
      </body>
    </html>
  );
}
