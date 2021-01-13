import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../../styles/flip_card.scss';

// Credit : https://codepen.io/Corpus/pen/REybzG

const FlipCard = (props) => {
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
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ backgroundColor: cardColor }}>
            <img className="flip-card-front-image" src={image.link} alt={image.name} />
            <div className="flip-card-front-content">
              <div className="flip-card-front-text">
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
          </div>
          <div className="flip-card-back" style={{ backgroundColor: cardColor }}>
            <div className="flip-card-front-text flip-card-bottom-text">
              <Typography align="center" variant="h6" style={{ color: titleColor }}>
                {title}
              </Typography>
              <Typography
                className="flip-card-back-description"
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
                    className="flip-card-back-button"
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
      </div>
    </>
  );
};

FlipCard.propTypes = {
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

FlipCard.defaultProps = {
  link: '',
};

export { FlipCard };
