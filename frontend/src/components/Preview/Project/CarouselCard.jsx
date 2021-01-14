import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { style } from '../../../styles/carouselCard';

const useStyles = makeStyles((theme) => style(theme));

const CarouselCard = (props) => {
  const {
    title,
    caption,
    description,
    link,
    image,
    cardColor,
    titleColor,
    descriptionColor,
    viewBtnBorder,
    viewBtnColor,
  } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ backgroundColor: cardColor }}>
      <CardMedia
        className={classes.media}
        image={
          process.env.TYPE === 'app'
            ? image.link
            : `${process.env.PUBLIC_URL}/images/${image.name}`
        }
        title={image.name}
      />
      <CardContent>
        <Typography align="center" variant="h6" style={{ color: titleColor }}>
          {title}
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          style={{ color: descriptionColor }}
        >
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {link.length >= 0 && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button
              className="flip-card-back-button"
              size="small"
              variant="outlined"
              style={{ borderColor: viewBtnBorder, color: viewBtnColor, zIndex: 50 }}
            >
              View
            </Button>
          </a>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{ zIndex: 50 }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            align="center"
            variant="body2"
            style={{ color: descriptionColor }}
          >
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

CarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  titleColor: PropTypes.string.isRequired,
  descriptionColor: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired,
  viewBtnBorder: PropTypes.string.isRequired,
  viewBtnColor: PropTypes.string.isRequired,
};

CarouselCard.defaultProps = {
  link: '',
};

export { CarouselCard };
