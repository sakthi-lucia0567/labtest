import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import GallaryImage1 from "../assets/GallaryImage1.jpg";
import GallaryImage2 from "../assets/GallaryImage2.jpg";
import GallaryImage3 from "../assets/GallaryImage3.jpg";
import GallaryImage4 from "../assets/GallaryImage4.jpg";
import GallaryImage5 from "../assets/GallaryImage5.jpg";
import GallaryImage6 from "../assets/GallaryImage6.jpg";
import GallaryImage7 from "../assets/GallaryImage7.jpg";
import GallaryImage8 from "../assets/GallaryImage8.jpg";
import GallaryImage9 from "../assets/GallaryImage9.jpg";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: `${GallaryImage1}`,
    title: "Complete Blood Count",
    width: "40%",
  },
  {
    url: `${GallaryImage2}`,
    title: "Gout",
    width: "20%",
  },
  {
    url: `${GallaryImage3}`,
    title: "magnesium test",
    width: "40%",
  },
  {
    url: `${GallaryImage4}`,
    title: "Urinalysis",
    width: "38%",
  },
  {
    url: `${GallaryImage5}`,
    title: "Cholesterol test",
    width: "38%",
  },
  {
    url: `${GallaryImage6}`,
    title: "Pregnancy",
    width: "24%",
  },
  {
    url: `${GallaryImage7}`,
    title: "Blood Type",
    width: "40%",
  },
  {
    url: `${GallaryImage8}`,
    title: "Hiv Test",
    width: "20%",
  },
  {
    url: `${GallaryImage9}`,
    title: "Fertility",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container component='section' sx={{ mt: 8, mb: 4 }}>
      <Typography variant='h4' marked='center' align='center' component='h2'>
        Tailored Tests for Every Need
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className='imageBackdrop' />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component='h3'
                variant='h6'
                color='inherit'
                className='imageTitle'
              >
                {image.title}
                <div className='imageMarked' />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
