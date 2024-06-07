"use client";

import { GetAvatarText } from "@/utils/function/avatarText";
import { IRespPostData } from "@/utils/service/post/interface";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { IconMessage } from "@tabler/icons-react";

type TCardProps = {
  data: IRespPostData[] | undefined;
};

const CardPost = ({ data }: TCardProps) => {
  return (
    <>
      {data?.map((m, index) => (
        <Card key={index} sx={{ width: "100%" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {GetAvatarText(m?.createName)}
              </Avatar>
            }
            title={m?.subject}
            subheader="September 14, 2016"
          />
          <Box paddingLeft="30px">
            <Chip label={m?.groupPost} />
          </Box>

          <CardContent sx={{ paddingTop: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {m?.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Grid container spacing={1}>
              <Grid item>
                <IconButton aria-label="comments">
                  <IconMessage />
                </IconButton>
              </Grid>
              <Grid item alignContent={"center"}>
                <Typography variant="subtitle2"> 32 comments</Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default CardPost;
