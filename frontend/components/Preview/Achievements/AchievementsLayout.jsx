import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import { style } from '../../../styles/Preview/achievement_preview';
import { OverlayCard } from './OverlayCard.jsx';
import { CarouselCard } from '../Project/CarouselCard.jsx';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const AchievementLayout = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();
  const achievementReducer = useSelector((state) => state.achievementReducer);
  const {
    pageHeadline,
    pageHeadlineColor,
    background,
    achievementCardColor,
    achievementDescriptionColor,
    achievementTitleColor,
    achievementViewBtnBorder,
    achievementViewBtnColor,
    achievements,
  } = achievementReducer;

  const getAchievements = () => {
    if (windowWidth < 750) {
      return (
        <Carousel
          autoPlay={false}
          timeout={300}
          className={classes.mobileCarouselContainer}
          navButtonsAlwaysVisible
          fullHeightHover={false}
        >
          {achievements.map((achievement, index) => (
            <CarouselCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={achievement.achievementTitle}
              caption={achievement.achievementCaption}
              description={achievement.achievementDescription}
              link={achievement.achievementLink}
              image={{
                name: achievement.achievementImage.achievementImageName,
                link: achievement.achievementImage.achievementImageURL,
              }}
              cardColor={achievementCardColor}
              titleColor={achievementTitleColor}
              descriptionColor={achievementDescriptionColor}
              viewBtnBorder={achievementViewBtnBorder}
              viewBtnColor={achievementViewBtnColor}
            />
          ))}
        </Carousel>
      );
    }
    const perChunk = 3;
    const chunkAchievement = achievements.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        // eslint-disable-next-line no-param-reassign
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    return chunkAchievement.map((chunk, indexParent) => {
      return (
        <Grid
          // eslint-disable-next-line react/no-array-index-key
          key={indexParent}
          container
          direction="row"
          className={classes.achievementContainer}
          justify="center"
          alignItems="center"
          spacing={6}
        >
          {chunk.map((achievement, index) => (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
            >
              <OverlayCard
                title={achievement.achievementTitle}
                caption={achievement.achievementCaption}
                description={achievement.achievementDescription}
                link={achievement.achievementLink}
                image={{
                  name: achievement.achievementImage.achievementImageName,
                  link: achievement.achievementImage.achievementImageURL,
                }}
                cardColor={achievementCardColor}
                titleColor={achievementTitleColor}
                descriptionColor={achievementDescriptionColor}
                viewBtnBorder={achievementViewBtnBorder}
                viewBtnColor={achievementViewBtnColor}
              />
            </Grid>
          ))}
        </Grid>
      );
    });
  };

  return (
    <>
      <div className="achievement__container" />
      <div style={{ background }} className={classes.achievementLayout}>
        <Typography
          style={{ color: pageHeadlineColor }}
          className={clsx(classes.pageHeadline, {
            [classes.responsivePageHeadline]: windowWidth < 750,
          })}
        >
          {pageHeadline}
        </Typography>
        {getAchievements()}
        <div className={classes.achievementContainerParent} />
      </div>
    </>
  );
};

export { AchievementLayout };
