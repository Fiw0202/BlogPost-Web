"use client";

import { GetAvatarText } from "@/utils/function/avatarText";
import { createComment, getCommentByPostId } from "@/utils/service/comment";
import { IRespCommentDetail } from "@/utils/service/comment/interface";
import { getPostById } from "@/utils/service/post";
import { IRespPostData } from "@/utils/service/post/interface";
import theme from "@/utils/theme";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { IconMessage } from "@tabler/icons-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CardComment = () => {
  dayjs.extend(relativeTime);
  const params = useParams();
  const userId =
    typeof localStorage !== "undefined" ? localStorage.getItem("userId") : null;
  const [loading, setLoading] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<IRespCommentDetail[]>();
  const [commentCount, setCommentCount] = useState<number>();
  const [commentText, setCommentText] = useState<string>("");
  const [postData, setPostData] = useState<IRespPostData>();
  const [isComment, setIsComment] = useState<boolean>(false);
  const [validateComment, setValidateComment] = useState<boolean>(false);

  const getPost = async () => {
    try {
      const resp = await getPostById(params.id);
      setPostData(resp.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getComment = async () => {
    setLoading(true);
    try {
      const resp = await getCommentByPostId(params.id);
      setTimeout(() => {
        setCommentData(resp.result);
        setCommentCount(resp.result.length);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const createCom = async () => {
    const req = {
      userId: userId,
      postId: params.id,
      content: commentText,
    };
    try {
      if (validateComment && commentText !== "") {
        const resp = await createComment(req);
        await getComment();
        setValidateComment(false);
        setCommentText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getComment();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ backgroundColor: "white", height: "100vh", padding: 2 }}>
        <Card
          sx={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: "0",
            boxShadow: "none",
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {GetAvatarText(postData?.createName)}
              </Avatar>
            }
            title={postData?.createName}
            subheader={dayjs(new Date()).to(postData?.createDate, true)}
          />
          <Box paddingLeft="30px">
            <Chip label={postData?.groupPost} />
          </Box>

          <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              color={theme.palette.text.primary}
              pb={1}
            >
              {postData?.subject}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {postData?.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Grid container spacing={1} paddingLeft={2}>
              <Grid item>
                <IconButton aria-label="comments">
                  <IconMessage />
                </IconButton>
              </Grid>
              <Grid item alignContent={"center"}>
                <Typography variant="subtitle2">{`${commentCount} comments`}</Typography>
              </Grid>
            </Grid>
          </CardActions>
          {!isComment ? (
            <Button
              variant="outlined"
              onClick={() => setIsComment(true)}
              sx={{
                margin: 3,
                border: `2px solid ${theme.palette.success.main}`,
                color: theme.palette.success.main,
                "&:hover": {
                  color: theme.palette.primary.dark,
                  border: `2px solid ${theme.palette.primary.dark}`,
                },
              }}
            >
              Add Comment
            </Button>
          ) : (
            <Grid container sx={{ paddingLeft: 3, paddingRight: 3 }}>
              <Grid item xs={12} paddingBottom={2}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  id="content"
                  name="content"
                  placeholder="What's on your mind..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
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
                {validateComment && commentText === "" ? (
                  <Typography color={"red"}>Comment Is required</Typography>
                ) : null}
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    mr: 2,
                    border: `2px solid ${theme.palette.success.main}`,
                    color: theme.palette.success.main,
                    "&:hover": {
                      color: theme.palette.primary.dark,
                      border: `2px solid ${theme.palette.primary.dark}`,
                    },
                  }}
                  onClick={() => {
                    setIsComment(false);
                    setCommentText("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setValidateComment(true);
                    createCom();
                  }}
                  sx={{ backgroundColor: theme.palette.success.main }}
                >
                  Post
                </Button>
              </Grid>
            </Grid>
          )}
        </Card>

        {commentData?.map((m) => (
          <Card
            sx={{
              backgroundColor: "white",
              width: "100%",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {GetAvatarText(m.createName)}
                </Avatar>
              }
              title={m?.createName}
              subheader={dayjs(new Date()).to(m.createDate, true)}
            />
            <CardContent sx={{ paddingTop: 1, paddingLeft: 10 }}>
              <Typography variant="body2">{m?.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default CardComment;
