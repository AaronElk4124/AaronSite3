import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ComputerIcon from "@/icons/ComputerIcon.svg";

export const Header = () => {
  return (
    <Stack
      sx={{
        height: "100px",
        position: "sticky",
        top: 0,
        background: "#2926F7",
        width: "100%",
        boxShadow: "black",
        flexDirection: "row",
        alignItems: "center",
        p: "10px",
      }}
    >
      <Box sx={{ width: "60px", height: "60px" }}>
        <Image src={ComputerIcon} alt="Computer" />
      </Box>
      <Link href="/">Philanthropy</Link>
      <Link href="/">Hellofgggg</Link>
    </Stack>
  );
};
