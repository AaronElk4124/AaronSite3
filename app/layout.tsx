import React from "react"

import { Metadata } from 'next'
import { Box } from "@mui/material"
 
export const metadata: Metadata = {
  title: 'Aaron Elkin',
  description: "Welcome to Aaron's life",
}

export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body style={{background: '#cccccc', margin: 0}}>
            <Box>
            {children}
            </Box>
        </body>
      </html>
    )
  }