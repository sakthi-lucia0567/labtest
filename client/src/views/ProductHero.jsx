import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import productHero from "../assets/ProductHeroLab.jpg";

const backgroundImage = productHero;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography color='inherit' align='center' variant='h2' marked='center'>
        BUY YOUR OWN LAB TESTS
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Our cost-effective services stretch beyond diagnostics, meaning our
        tools and solutions scale with your business to meet your analytical,
        clinical and operational needs.
      </Typography>
      <Button
        color='secondary'
        variant='contained'
        size='large'
        component='a'
        href='/premium-themes/onepirate/sign-up/'
        sx={{ minWidth: 200 }}
      >
        Shop Tests
      </Button>
      <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
