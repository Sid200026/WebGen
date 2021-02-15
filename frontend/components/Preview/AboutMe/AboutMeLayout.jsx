import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { style } from '../../../styles/Preview/about_me_preview';
import { getMediaInfo } from '../../../utils/socialMediaDetector';
import { Skillbars } from '../../Skillbar.jsx';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const AboutMeLayout = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();
  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const {
    profile,
    description,
    descriptionColor,
    background,
    skills,
    skillsBackground,
    resumeURL,
    resumeButtonText,
    resumeButtonBorder,
    resumeButtonColor,
    resumeButtonHoverBG,
    resumeButtonHoverColor,
    resumeButtonBG,
    resumeHoverEnable,
    pageHeadline,
    pageHeadlineColor,
    mediaHandles,
  } = aboutMeReducer;
  const [hover, setHover] = useState(false);

  let buttonStyle = {};

  if (resumeHoverEnable && hover) {
    buttonStyle = {
      border: `1px solid ${resumeButtonHoverColor}`,
      backgroundColor: resumeButtonHoverBG,
      color: resumeButtonHoverColor,
    };
  } else {
    buttonStyle = {
      border: `1px solid ${resumeButtonBorder}`,
      color: resumeButtonColor,
      backgroundColor: resumeButtonBG,
    };
  }

  const getMediaHandles = () =>
    mediaHandles.map((media, index) => {
      const mediaInfo = getMediaInfo(media.media);
      const { status, lightTheme, darkTheme } = mediaInfo;
      if (status) {
        const themeType = media.theme ? lightTheme : darkTheme;
        const { colorPrimary, colorSecondary, logo } = themeType;
        return (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={media.url}
            type={index}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button
              className={classes.socialButton}
              style={{
                color: colorSecondary,
                background: colorPrimary,
              }}
              size="large"
              startIcon={
                <img
                  alt={mediaInfo.name}
                  src={
                    process.env.TYPE === 'app'
                      ? `public/images/assets/${logo}`
                      : `${process.env.PUBLIC_URL}/assets/${logo}`
                  }
                  className={classes.logoImage}
                />
              }
            >
              {mediaInfo.name}
            </Button>
          </a>
        );
      }
      if (media.theme) {
        // Light Theme
        return (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={media.url}
            type={index}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button
              className={classes.socialButton}
              style={{
                color: 'black',
                background: 'white',
              }}
              size="large"
              startIcon={
                <p style={{ fontWeight: 700, fontSize: '12px', color: 'grey' }}>
                  {media.media.slice(0, 2)}
                </p>
              }
            >
              {media.media}
            </Button>
          </a>
        );
      }
      return (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          href={media.url}
          type={index}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            className={classes.socialButton}
            style={{
              color: 'white',
              background: 'black',
            }}
            size="large"
            startIcon={
              <p style={{ fontWeight: 700, fontSize: '12px', color: 'wheat' }}>
                {media.media.slice(0, 2)}
              </p>
            }
          >
            {media.media}
          </Button>
        </a>
      );
    });

  const getResponsiveMediaHandles = () =>
    mediaHandles.map((media, index) => {
      const mediaInfo = getMediaInfo(media.media);
      const { status, lightTheme, darkTheme } = mediaInfo;
      if (status) {
        const themeType = media.theme ? lightTheme : darkTheme;
        const { logo } = themeType;
        return (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={media.url}
            type={index}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              alt={mediaInfo.name}
              src={
                process.env.TYPE === 'app'
                  ? `public/images/assets/${logo}`
                  : `${process.env.PUBLIC_URL}/assets/${logo}`
              }
              className={classes.responsiveLogoImage}
            />
          </a>
        );
      }
      if (media.theme) {
        return (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={media.url}
            type={index}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <p className={classes.customLogoLight}>{media.media.slice(0, 2)}</p>
          </a>
        );
      }
      return (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          href={media.url}
          type={index}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <p className={classes.customLogoDark}>{media.media.slice(0, 2)}</p>
        </a>
      );
    });

  const getMedia = () => {
    if (windowWidth >= 750) {
      return getMediaHandles();
    }
    return getResponsiveMediaHandles();
  };

  return (
    <div style={{ background }} className={classes.aboutMeLayout}>
      <Typography
        style={{ color: pageHeadlineColor }}
        className={clsx(classes.pageHeadline, {
          [classes.responsivePageHeadline]: windowWidth < 750,
        })}
      >
        {pageHeadline}
      </Typography>
      <div
        className={clsx(classes.aboutMeContainer, {
          [classes.responsiveAboutMeContainer]: windowWidth < 750,
        })}
      >
        <div
          className={clsx(classes.innerContainer, {
            [classes.responsiveInnerContainer]: windowWidth < 750,
          })}
        >
          {Object.keys(profile).length !== 0 && (
            <svg
              className={classes.svgProfile}
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="profileImage"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image
                    xlinkHref={
                      process.env.TYPE === 'app'
                        ? profile.url
                        : `${process.env.PUBLIC_URL}/images/${profile.name}`
                    }
                    x="-25"
                    width="150"
                    height="100"
                  />
                </pattern>
              </defs>
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#profileImage)"
              />
            </svg>
          )}
          <Typography
            align="center"
            variant="subtitle1"
            className={clsx(classes.descriptionText, {
              [classes.responsiveDescriptionText]: windowWidth < 750,
            })}
            style={{ color: descriptionColor }}
          >
            {description.split('\n').map((i, key) => {
              // eslint-disable-next-line react/no-array-index-key
              return <p key={key}>{i}</p>;
            })}
          </Typography>
        </div>
        <div
          className={clsx(classes.innerContainer, {
            [classes.responsiveInnerContainer]: windowWidth < 750,
          })}
        >
          <>
            <Skillbars skills={skills} skillsBackground={skillsBackground} />
            {resumeURL && (
              <a
                href={resumeURL}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  style={buttonStyle}
                  className={classes.resumeView}
                  variant="outlined"
                  size="large"
                >
                  {resumeButtonText}
                </Button>
              </a>
            )}
          </>
        </div>
      </div>
      <div className={classes.mediaHandles}>{getMedia()}</div>
    </div>
  );
};

export { AboutMeLayout };
