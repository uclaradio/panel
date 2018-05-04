import * as React from 'react';
import * as PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// const PageCard = glamorous.div({
//   width: 380,
//   height: 250,
//   backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   maxWidth: 380,
//   margin: '0 auto 30px',
// });

const styles = {
  card: {
    maxWidth: 345,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
};

function PageCard(props: any) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image="https://bzfd.it/2qMzcaE" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Tickets & Press Request Form
          </Typography>

          <Typography component="p">
            Want to go to a show for free? Fill this out.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            I SAID GO!!!
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PageCard;
