import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { IconMessage } from "@tabler/icons-react";

const CardPost = () => {
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">S</Avatar>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
    </>
  );
};

export default CardPost;
