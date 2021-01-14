import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import { style } from '../../../styles/project_preview';
import { FlipCard } from './FlipCard.jsx';
import { CarouselCard } from './CarouselCard.jsx';
import { StickyTable } from './StickyTable.jsx';

const useStyles = makeStyles(style);

const otherProjectColumn = [
  { id: 'projectTitle', label: 'Project Title', minWidth: 115, sticky: true },
  { id: 'projectCaption', label: 'Project Caption', minWidth: 160 },
  {
    id: 'projectDescription',
    label: 'Project Description',
    minWidth: 300,
    align: 'right',
  },
  {
    id: 'projectLink',
    label: 'View Project',
    minWidth: 120,
    align: 'center',
    button: true,
  },
];

const ProjectLayout = () => {
  const classes = useStyles();
  const projectReducer = useSelector((state) => state.projectReducer);
  const {
    background,
    pageHeadline,
    pageHeadlineColor,
    popularProject,
    projectCardColor,
    projectTitleColor,
    projectDescriptionColor,
    projectViewBtnColor,
    projectViewBtnBorder,
    otherProject,
    projectTableBg,
    projectTableColor,
  } = projectReducer;

  const getPopularProjects = () => {
    if (window.innerWidth < 750) {
      return (
        <Carousel
          autoPlay={false}
          timeout={300}
          className={classes.mobileCarouselContainer}
        >
          {popularProject.map((project, index) => (
            <CarouselCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={project.projectTitle}
              caption={project.projectCaption}
              description={project.projectDescription}
              link={project.projectLink}
              image={{
                name: project.projectImage.projectImageName,
                link: project.projectImage.projectImageURL,
              }}
              cardColor={projectCardColor}
              titleColor={projectTitleColor}
              descriptionColor={projectDescriptionColor}
              viewBtnBorder={projectViewBtnBorder}
              viewBtnColor={projectViewBtnColor}
            />
          ))}
        </Carousel>
      );
    }
    let perChunk = 3;
    if (otherProject.length === 0) {
      perChunk = popularProject.length > 4 ? 3 : 2;
    }
    const chunkProject = popularProject.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        // eslint-disable-next-line no-param-reassign
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    return chunkProject.map((chunk, indexParent) => {
      return (
        <Grid
          // eslint-disable-next-line react/no-array-index-key
          key={indexParent}
          container
          direction="row"
          className={classes.popularProjectContainer}
          justify="center"
          alignItems="center"
          spacing={6}
        >
          {chunk.map((project, index) => (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
              className={classes.popularProject}
            >
              <FlipCard
                title={project.projectTitle}
                caption={project.projectCaption}
                description={project.projectDescription}
                link={project.projectLink}
                image={{
                  name: project.projectImage.projectImageName,
                  link: project.projectImage.projectImageURL,
                }}
                cardColor={projectCardColor}
                titleColor={projectTitleColor}
                descriptionColor={projectDescriptionColor}
                viewBtnBorder={projectViewBtnBorder}
                viewBtnColor={projectViewBtnColor}
              />
            </Grid>
          ))}
        </Grid>
      );
    });
  };

  return (
    <>
      <div className="project__container" />
      <div style={{ background }} className={classes.projectLayout}>
        <Typography
          style={{ color: pageHeadlineColor }}
          className={clsx(classes.pageHeadline, {
            [classes.responsivePageHeadline]: window.innerWidth < 750,
          })}
        >
          {pageHeadline}
        </Typography>
        {getPopularProjects()}
        <div className={classes.popularProjectContainerParent} />
        <div className={classes.otherProjectContainer}>
          {otherProject.length > 0 && (
            <StickyTable
              rows={otherProject}
              columns={otherProjectColumn}
              projectTableBg={projectTableBg}
              projectTableColor={projectTableColor}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { ProjectLayout };
