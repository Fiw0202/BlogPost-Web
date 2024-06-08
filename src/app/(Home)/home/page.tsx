"use client";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CardPost from "./components/cardPost";
import { useEffect, useState } from "react";
import { IRespPostData } from "@/utils/service/post/interface";
import { createPost, getAllPost } from "@/utils/service/post";
import theme from "@/utils/theme";
import { IconSearch } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Group } from "../Mockup/group";

const HomePage = () => {
  const userId =
    typeof localStorage !== "undefined" ? localStorage.getItem("userId") : null;
  const [data, setData] = useState<IRespPostData[]>();
  const [searchText, setSearchText] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [dialogOn, setDialogOn] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: userId,
      groupPost: "",
      subject: "",
      content: "",
    },
    validationSchema: Yup.object({
      groupPost: Yup.string().required("Community is required"),
      subject: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await createPost(values);
      await getPost();
      resetForm();
      setDialogOn(false);
    },
  });

  const getPost = async () => {
    setLoading(true);
    try {
      const resp = await getAllPost();
      setTimeout(() => {
        setData(resp.result);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filteredData = data?.filter((post) => {
    const searchTextMatch =
      post.subject.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase());

    const groupMatch = selected === "" || post.groupPost === selected;

    return searchTextMatch && groupMatch;
  });

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={2} direction={"column"}>
        {/* <SearchSection /> */}

        <Grid container>
          <Grid p={2} item xs={12} md={8} lg={8}>
            <TextField
              fullWidth
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
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
              <InputLabel id="search-select-group">Community</InputLabel>
              <Select
                id="search-select-group"
                value={selected}
                label="Community"
                onChange={(e) => setSelected(e.target.value)}
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
              onClick={() => setDialogOn(true)}
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

        <CardPost data={filteredData} />
      </Stack>

      {/*==== Dialog ==== */}
      <Dialog onClose={() => setDialogOn(false)} open={dialogOn}>
        <DialogTitle>
          <Typography variant="h2">Create Post</Typography>
        </DialogTitle>
        <Box
          sx={{
            padding: 4,
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1} pb={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-group">Choose Community</InputLabel>
                  <Select
                    id="select-group"
                    name="groupPost"
                    value={formik.values.groupPost}
                    label="Choose Community"
                    onChange={formik.handleChange}
                    sx={{ backgroundColor: "white" }}
                    error={
                      formik.touched.groupPost &&
                      Boolean(formik.errors.groupPost)
                    }
                  >
                    {Group.map((m) => (
                      <MenuItem key={m.label} value={m.value}>
                        {m.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.groupPost && formik.errors.groupPost ? (
                    <Typography color="error">
                      {formik.errors.groupPost}
                    </Typography>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="subject"
                  name="subject"
                  placeholder="Title"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
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
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="content"
                  name="content"
                  placeholder="What's on your mind..."
                  value={formik.values.content}
                  onChange={formik.handleChange}
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
                  error={
                    formik.touched.content && Boolean(formik.errors.content)
                  }
                  helperText={formik.touched.content && formik.errors.content}
                />
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Button
                sx={{ border: `4px solid ${theme.palette.primary.light}` }}
                onClick={() => setDialogOn(false)}
              >
                <Typography variant="h5" color={theme.palette.primary.dark}>
                  Cancel
                </Typography>
              </Button>
              <Button
                type="submit"
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      color: theme.palette.primary.dark,
                    },
                  }}
                >
                  Post
                </Typography>
              </Button>
            </Stack>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default HomePage;
