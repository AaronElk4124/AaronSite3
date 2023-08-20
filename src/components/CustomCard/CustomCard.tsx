import { Card, CardContent, Button, Typography } from "@mui/material";
import { useState } from "react";
import { robotoMono } from "@/theme/fonts";

type CardInfo = {
  title: string;
  description: string;
  card: string;
  hoverColor: string;
  href: string;
};
export const CustomCard = (props: CardInfo) => {
  const [hoverColor, setHoverColor] = useState("#272324");

  const onCardOneHover = () => {
    setHoverColor(props.hoverColor);
  };

  const onCardOneLeave = () => {
    setHoverColor("#272324");
  };

  return (
    <Card
      variant="outlined"
      className={props.card}
      sx={{
        background: hoverColor,
        transition: "background 1s ease",
        overflow: "auto",
        borderRadius: "10%",
        maxWidth: "300px",
        maxHeight: "300px",
        mb: ["20px", 0],
      }}
    >
      <CardContent>
        <Button
          href={props.href}
          sx={{
            "& .MuiTouchRipple-root": {
              color: "red",
              transitionDuration: "1s",
            },
            "&:hover": {
              background: "none",
            },
          }}
        >
          <Typography
            sx={{ fontFamily: robotoMono.style.fontFamily }}
            className={`${props.card}-button`}
            onMouseEnter={onCardOneHover}
            onMouseLeave={onCardOneLeave}
          >
            {props.title}
          </Typography>
        </Button>
        <Typography
          sx={{
            fontFamily: robotoMono.style.fontFamily,
            color: "#FF6900",
            lineHeight: 2,
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
