"use client";

import { GetAvatarText } from "@/utils/function/avatarText";
import { IRespPostData } from "@/utils/service/post/interface";
import theme from "@/utils/theme";
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
import { IconEdit, IconMessage, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type TCardProps = {
  data: IRespPostData[] | undefined;
};

const CardPost = ({ data }: TCardProps) => {
  dayjs.extend(relativeTime);
  const router = useRouter();

  return (
    <>
      {data?.map((m, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => router.push(`home/${m._id}`)}
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
                <IconButton aria-label="Edit">
                  <IconEdit />
                </IconButton>
                <IconButton aria-label="Delete">
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
            >
              {m?.subject}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {m?.content}
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
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
          </CardActions> */}
        </Card>
      ))}
    </>
  );
};

export default CardPost;
