import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

// components
import Profile from "./Profile";
import { IconMenu2 } from "@tabler/icons-react";
import theme from "@/utils/theme";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.primary.main,
    maxHeight: 60,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "60px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: theme.palette.text.secondary,
  }));
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("xl"));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Typography
          color={theme.palette.common.white}
          sx={{ fontStyle: "italic" }}
        >
          a Board
        </Typography>
        <Stack direction="row" alignItems="center">
          {!lgUp ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileSidebar}
            >
              <IconMenu2
                width="20"
                height="20"
                color={theme.palette.common.white}
              />
            </IconButton>
          ) : (
            <Box>
              <Profile />
            </Box>
          )}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
