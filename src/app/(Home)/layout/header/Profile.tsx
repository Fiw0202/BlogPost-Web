import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Avatar, Typography, Grid } from "@mui/material";

const Profile = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item mr={2}>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            color={theme.palette.primary.contrastText}
          >
            Julia
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Avatar
          src={"/images/users/user2.jpg"}
          alt={"ProfileImg"}
          sx={{
            width: 30,
            height: 30,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Profile;
