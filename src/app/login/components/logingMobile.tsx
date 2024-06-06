"use client";
import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import theme from "@/utils/theme";
import Image from "next/image";

//Image
import LoginImage from "../../../../public/images/Login-image.png";
import LoginWrapper from "./loginWrapper";

const LoginMobile = () => {
  return (
    <LoginWrapper>
      <Grid
        container
        direction="column"
        sx={{
          height: "100vh",
        }}
      >
        <Grid item xs={6} alignContent={"center"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "50vh",
              borderBottomRightRadius: "36px",
              borderBottomLeftRadius: "36px",
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            <Grid container spacing={1} direction="column" padding="10%">
              <Grid item xs={12}>
                <Image
                  src={LoginImage}
                  alt={"Logo"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  color={theme.palette.primary.contrastText}
                  style={{ fontStyle: "italic", fontSize: 28 }}
                >
                  a Board
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} alignContent={"center"}>
          <Grid container spacing={1} direction="column" padding="20%">
            <Grid item xs={12}>
              <Typography
                variant="h2"
                color={theme.palette.primary.contrastText}
              >
                Sign in
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="Username-Input"
                label="Username"
                variant="filled"
                size="small"
                sx={{
                  maxWidth: 500,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "white",
                    "&:focus-within": {
                      backgroundColor: "white",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "white",
                    color: theme.palette.primary.contrastText,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  maxWidth: 500,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.text.primary,
                  },
                }}
              >
                <Typography
                  color={theme.palette.primary.contrastText}
                  sx={{
                    "&:hover": {
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  Sign in
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LoginWrapper>
  );
};

export default LoginMobile;
