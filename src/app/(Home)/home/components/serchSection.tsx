"use client";

import theme from "@/utils/theme";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
const Group = [
  {
    value: "History",
    label: "History",
  },
  {
    value: "Food",
    label: "Food",
  },
  {
    value: "Pets",
    label: "Pets",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Fashion",
    label: "Fashion",
  },
  {
    value: "Exercise",
    label: "Exercise",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const SearchSection = () => {
  const [selected, setSelected] = useState();

  return (
    <>
      <Grid container>
        <Grid p={2} item xs={12} md={8} lg={8}>
          <TextField
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <IconButton aria-label="search">
                  <IconSearch />
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: theme.palette.primary.contrastText,
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
        <Grid p={2} item xs={12} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="select-group">Community</InputLabel>
            <Select
              id="select-group"
              value={selected}
              label="Community"
              onChange={(e) => console.log(e.target.value)}
              sx={{ backgroundColor: "white" }}
            >
              {Group.map((m) => (
                <MenuItem key={m.label} value={m.value}>
                  {m.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid p={2} item xs={12} md={2} lg={2}>
          <Button
            fullWidth
            sx={{
              bgcolor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              height: "100%",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <Typography>Create +</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchSection;
