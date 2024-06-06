import styled from "@emotion/styled";
import { useTheme } from "@mui/material";

const LoginWrapper = styled("div")(() => {
  const theme = useTheme();
  return {
    backgroundColor: theme.palette.primary.main,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
  };
});

export default LoginWrapper;
