"use client";

import { GetAvatarText } from "@/utils/function/avatarText";
import { IRespPostData } from "@/utils/service/post/interface";
import theme from "@/utils/theme";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IconPencilMinus, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { deletePostById, getPostById, updatePost } from "@/utils/service/post";
import { useState } from "react";
import { Group } from "../../Mockup/group";

type TCardProps = {
  data: IRespPostData[] | undefined;
  getMyPost: () => void;
};

const CardPost = ({ data, getMyPost }: TCardProps) => {
  dayjs.extend(relativeTime);
  const router = useRouter();
  const userId =
    typeof localStorage !== "undefined" ? localStorage.getItem("userId") : null;

  const [getIdPost, setGetIdPost] = useState<string>("");
  const [dialogEditOn, setDialogEditOn] = useState<boolean>(false);
  const [dataForEdit, setDataForEdit] = useState<IRespPostData>({
    _id: getIdPost,
    userId: userId || "",
    groupPost: "",
    subject: "",
    content: "",
  });
  const [alertDelete, setAlertDelete] = useState<boolean>(false);

  const getPostId = async (id: string) => {
    try {
      const resp = await getPostById(id);
      if (resp.result) {
        setDataForEdit({
          _id: id,
          userId: userId || "",
          groupPost: resp.result.groupPost,
          subject: resp.result.subject,
          content: resp.result.content,
        });
        setDialogEditOn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const resp = await deletePostById(id);
      if (resp.statusCode === 200) {
        setAlertDelete(true);
      }
      getMyPost();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      _id: dataForEdit._id,
      userId: dataForEdit.userId,
      groupPost: dataForEdit.groupPost,
      subject: dataForEdit.subject,
      content: dataForEdit.content,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      groupPost: Yup.string().required("Community is required"),
      subject: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const resp = await updatePost(values);
      if (resp.statusCode === 200) {
        resetForm();
        setDialogEditOn(false);
        getMyPost();
      }
    },
  });

  return (
    <>
      {data?.map((m, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {GetAvatarText(m?.createName)}
              </Avatar>
            }
            title={m?.createName}
            subheader={dayjs(new Date()).to(m?.createDate, true)}
            action={
              <>
                <IconButton
                  aria-label="Edit"
                  color="success"
                  onClick={() => {
                    setGetIdPost(m._id);
                    getPostId(m._id);
                  }}
                >
                  <IconPencilMinus />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  color="success"
                  onClick={() => {
                    deletePost(m._id);
                  }}
                >
                  <IconTrash />
                </IconButton>
              </>
            }
          />
          <Box paddingLeft="30px">
            <Chip label={m?.groupPost} />
          </Box>

          <CardContent sx={{ paddingTop: 2 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              color={theme.palette.text.primary}
              pb={1}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => router.push(`home/${m._id}`)}
            >
              {m?.subject}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {m?.content}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/*====Edit Post====*/}
      <Dialog onClose={() => setDialogEditOn(false)} open={dialogEditOn}>
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
                onClick={() => setDialogEditOn(false)}
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

      {/*==== Alert Delete====*/}

      <Snackbar
        open={alertDelete}
        autoHideDuration={6000}
        onClose={() => setAlertDelete(false)}
      >
        <Alert
          onClose={() => setAlertDelete(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Delete Success
        </Alert>
      </Snackbar>
    </>
  );
};

export default CardPost;
