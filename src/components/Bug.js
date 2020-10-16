import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
};

class Bug extends Component {
  render() {
    const {
      classes,
      bug: {
        body,
        createdAt,
        username,
        title,
        bugId,
        assignCount,
        commentCount,
      },
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent class={classes.content}>
          <Typography component={Link} to={`/bug/${bugId}`} color="primary">
            {title}
          </Typography>

          <Typography variant="body1">{body}</Typography>
          <Typography
            variant="body1"
            component={Link}
            to={`/users/${username}`}
            color="primary"
          >
            {username}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Bug);
