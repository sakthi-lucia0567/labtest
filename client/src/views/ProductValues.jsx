import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

import productValues3 from "../assets/productValues3.svg";
import ProductCurvyLines from "../assets/appCurvyLines.png";

import Clinic from "../assets/clinical.png";
import Health from "../assets/health.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component='section'
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component='img'
          src={ProductCurvyLines}
          alt='curvy lines'
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component='img'
                src={Clinic}
                alt='suitcase'
                sx={{ height: 55 }}
              />
              <Typography variant='h6' sx={{ my: 5 }}>
                Clinical Trials
              </Typography>
              <Typography variant='h5'>
                {
                  "Browse global clinical trials to find new treatment options for you or a loved one"
                }

                {", go for a test just a few stops away from your home."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component='img'
                src={Health}
                alt='graph'
                sx={{ height: 55 }}
              />
              <Typography variant='h6' sx={{ my: 5 }}>
                Health Resources
              </Typography>
              <Typography variant='h5'>
                {
                  "Learn about screenings, condition management and more in our resource center. "
                }

                {"your Tests will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component='img'
                src={productValues3}
                alt='clock'
                sx={{ height: 55 }}
              />
              <Typography variant='h6' sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant='h5'>
                {
                  "you can get health insights at an affordable price with lab tests under $100. "
                }
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
