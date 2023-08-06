import { Card, CardContent, Button, Typography } from "@mui/material";
import { useState } from "react";
import { robotoMono } from "@/theme/fonts";

export const CardOne = () => {
  const [hoverColor, setHoverColor] = useState("#83B799");

  const onCardOneHover = () => {
    setHoverColor("#272324");
  };
  const onCardOneLeave = () => {
    setHoverColor("#83B799");
  };
  return (
    <Card
      variant="outlined"
      className="card2"
      sx={{
        background: hoverColor,
        transition: "background 1s ease",
        overflow: "auto",
        borderRadius: "10%",
        maxWidth: "300px",
        maxHeight: "300px",
      }}
    >
      <CardContent>
        <Button
          href={"/"}
          onMouseEnter={onCardOneHover}
          onMouseLeave={onCardOneLeave}
          sx={{
            "& .MuiTouchRipple-root": {
              color: "red",
            },
          }}
        >
          <Typography
            sx={{ fontFamily: robotoMono.style.fontFamily }}
            className="specialButton"
          >
            Philanthropy
          </Typography>
        </Button>
        <Typography
          sx={{
            fontFamily: robotoMono.style.fontFamily,
            color: "#FF6900",
            lineHeight: 2,
          }}
        >
          Learn More About Aaron's involvement with charity work throughout
          Michigan State
        </Typography>
      </CardContent>
    </Card>
  );
};
