import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Favorite, Comment } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function ImageCard({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image.image}
        title={image.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {image.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {image.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {image.likes_count}
        </Typography>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {image.comments.length}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ImageCard;