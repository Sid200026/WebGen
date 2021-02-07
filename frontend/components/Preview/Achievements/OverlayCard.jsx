import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../../styles/Preview/overlay.scss';

// eslint-disable-next-line max-len
// Credit : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_slidetop

const OverlayCard = (props) => {
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
  return (
    <div className="overlay-card">
      <img
        className="overlay-card-front-image"
        src={
          process.env.TYPE === 'app'
            ? image.link
            : `${process.env.PUBLIC_URL}/images/${image.name}`
        }
        alt={image.name}
      />
      <div className="overlay-card-front-content">
        <div className="overlay-card-front-text">
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
        </div>
      </div>
      <div className="overlay-card-back" style={{ backgroundColor: cardColor }}>
        <div className="overlay-card-front-text overlay-card-bottom-text">
          <Typography align="center" variant="h6" style={{ color: titleColor }}>
            {title}
          </Typography>
          <Typography
            className="overlay-card-back-description"
            align="center"
            variant="body2"
            style={{ color: descriptionColor }}
          >
            {description}
          </Typography>
          {link.length >= 0 && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                className="overlay-card-back-button"
                size="small"
                variant="outlined"
                style={{ borderColor: viewBtnBorder, color: viewBtnColor }}
              >
                View
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

OverlayCard.propTypes = {
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

OverlayCard.defaultProps = {
  link: '',
};

export { OverlayCard };
