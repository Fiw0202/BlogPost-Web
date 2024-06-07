"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import theme from "@/utils/theme";
import Image from "next/image";

//Image
import LoginImage from "../../../../public/images/Login-image.png";
import LoginWrapper from "./loginWrapper";

//service
import { login } from "@/utils/service/login";

const LoginDesktop = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);
  const [snackBarOn, setSnackbarOn] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>("");

  const Login = async () => {
    setValidate(true);
    try {
      const resp = await login(userName);
      if (resp.statusCode === 200) {
        localStorage.setItem("userId", resp.result.userId);
        localStorage.setItem("token", resp.result.token);
        setAlertMsg("Success");
        setSnackbarOn(true);
        router.push("/");
      } else {
        setAlertMsg(resp.statusText);
        setSnackbarOn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <Grid
        container
        sx={{
          height: "100vh",
        }}
      >
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
                  border:
                    validate && userName === "" ? "1px solid red" : "none",
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
                onChange={(e) => setUserName(e.target.value)}
              />
              {validate && userName === "" ? (
                <Typography color="red" mt={1}>
                  Please input your username!
                </Typography>
              ) : null}
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
                onClick={Login}
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

        <Grid item xs={6} alignContent={"center"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
              borderTopLeftRadius: "36px",
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
      </Grid>

      {/*=== Alert ====*/}
      <Snackbar
        open={snackBarOn}
        autoHideDuration={2000}
        onClose={() => setSnackbarOn(!snackBarOn)}
      >
        <Alert
          variant="filled"
          severity={alertMsg === "Success" ? "success" : "error"}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
    </LoginWrapper>
  );
};

export default LoginDesktop;
