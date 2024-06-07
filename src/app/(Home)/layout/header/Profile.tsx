import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import { userContext } from "@/utils/context/usercontext";
import { useRouter } from "next/navigation";

const Profile = () => {
  const theme = useTheme();
  const route = useRouter();
  const user = useContext(userContext);

  const getAvatarText = (name: string | undefined) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <Grid container>
      {user ? (
        <>
          <Grid
            item
            mr={2}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              color={theme.palette.primary.contrastText}
            >
              {user?.displayName}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt="ProfileImg"
              sx={{
                width: 30,
                height: 30,
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.text.primary,
              }}
            >
              {getAvatarText(user?.displayName)}
            </Avatar>
          </Grid>
        </>
      ) : (
        <Grid item>
          <Button
            onClick={() => route.push("/login")}
            sx={{
              backgroundColor: theme.palette.primary.dark,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              Sign in
            </Typography>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Profile;
