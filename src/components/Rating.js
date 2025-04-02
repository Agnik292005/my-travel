import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import historical from "../assets/historical.jpeg";

const images = [
  {
    url: "https://andtour-react.netlify.app/static/media/hotel2.3e4b06c0456866ba2d94.png",
    title: "Paradise Island Retreats",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel3.7daea2be758071426c02.png",

    title: "Private Getaway Villas",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel8.980e6eaf416d34809cf6.png",
    title: "Luxury Seaside Resorts",
    width: "30%",
  },
  {
    url: "https://andtour-react.netlify.app/static/media/hotel6.71ece295cac75a47c576.png",
    title: "Elegant Urban Stays",
    width: "30%",
  },
  {
    url: historical,
    // url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32W3HwAVSUoFiS6-HKfKzn-Xgt0WBygt9Kw&s",
    title: "Historical Heritage Sites",
    width: "30%",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4tVsUMYM_XV8tuXtNabqudNVxE2c_mZSpQ&s",
    title: "Breathtaking Lakeside Escape",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  // marginLeft: "4rem",

  left: 4,
  right: 7,
  top: 8,
  bottom: 8,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 14px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "2.5rem",
        marginRight:"1rem",
        alignSelf:"center",
        marginTop: "5rem",
        marginBottom: "1rem",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
