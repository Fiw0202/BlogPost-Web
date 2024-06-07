import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CardPost from "./components/cardPost";
import SearchSection from "./components/serchSection";

const HomePage = () => {
  return (
    <>
      <Stack spacing={2} direction={"column"}>
        <SearchSection />
        <CardPost />
      </Stack>
    </>
  );
};

export default HomePage;
