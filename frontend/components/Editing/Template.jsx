import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import Swal from 'sweetalert2';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import { style } from '../../styles/Generic/template';
import { getRequest } from '../../utils/serviceCalls';
import { localStorageKey } from '../../stores/store';
import {
  reset as resetIntroduction,
  load as loadIntroduction,
} from '../../actions/introduction_action';
import {
  reset as resetAboutMe,
  load as loadAboutMe,
} from '../../actions/about_me_action';
import {
  reset as resetWorkExperience,
  load as loadWorkExperience,
} from '../../actions/work_experience_action';
import {
  reset as resetDefaultTheme,
  load as loadDefaultTheme,
} from '../../actions/default_theme_action';
import {
  reset as resetProject,
  load as loadProject,
} from '../../actions/project_action';
import { warningWidth } from '../../constants/writeups/index';

const useStyles = makeStyles(style);

const Template = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const introductionReducer = useSelector((state) => state.introductionReducer);
  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const workExperienceReducer = useSelector((state) => state.workExperienceReducer);
  const projectReducer = useSelector((state) => state.projectReducer);
  const { enable: introductionEnable } = introductionReducer;
  const { enable: aboutMeEnable } = aboutMeReducer;
  const { enable: workExperienceEnable } = workExperienceReducer;
  const { enable: projectEnable } = projectReducer;

  const [templates, setTemplates] = useState([]);

  const getTemplates = async () => {
    const response = await getRequest('/template/gettemplates');
    const { data } = response;
    const { data: templateData } = data;
    setTemplates(templateData);
  };

  useEffect(() => {
    getTemplates();
  }, []);

  const navigateTo = (link, state = {}) => {
    navigate(link, { state });
  };

  const discardChanges = () => {
    dispatch(resetIntroduction());
    dispatch(resetAboutMe());
    dispatch(resetWorkExperience());
    dispatch(resetDefaultTheme());
    dispatch(resetProject());
    localStorage.removeItem(localStorageKey);
  };

  const warnUnsavedChanges = (cb = null) => {
    Swal.fire({
      icon: 'warning',
      title: 'Unsaved Changes',
      text:
        // eslint-disable-next-line max-len
        'You have some unsaved changes present. Choosing a theme will reset all the progress you have made. Are you sure you want to continue ?',
      footer:
        // eslint-disable-next-line max-len
        '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
      showCancelButton: true,
      confirmButtonText: 'Continue',
    }).then((result) => {
      if (result.isConfirmed) {
        if (cb) cb();
      }
    });
  };

  const updateStore = (index) => {
    const template = templates[index];
    const { template_config: templateConfig } = template;
    const {
      introduction,
      aboutMe,
      workExperience,
      defaultTheme,
      project,
    } = templateConfig;
    dispatch(loadIntroduction(introduction));
    dispatch(loadAboutMe(aboutMe));
    dispatch(loadWorkExperience(workExperience));
    dispatch(loadDefaultTheme(defaultTheme));
    dispatch(loadProject(project));
    navigateTo('/introduction');
  };

  const renderFromTemplate = (index) => {
    if (introductionEnable || aboutMeEnable || workExperienceEnable || projectEnable) {
      warnUnsavedChanges(() => {
        updateStore(index);
      });
    } else {
      updateStore(index);
    }
  };

  const startFromScratch = () => {
    if (introductionEnable || aboutMeEnable || workExperienceEnable || projectEnable) {
      warnUnsavedChanges(() => {
        discardChanges();
        navigateTo('/introduction');
      });
    } else navigateTo('/introduction');
  };

  const renderTemplates = () => {
    const perChunk = 3;
    const chunkTemplates = templates.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        // eslint-disable-next-line no-param-reassign
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return chunkTemplates.map((templateList) => {
      const xsSize = templateList.length;
      return templateList.map((template, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={index} justify="center" container item xs={xsSize}>
          <Card raised className={classes.root} variant="outlined">
            <CardActionArea onClick={() => renderFromTemplate(index)}>
              <CardMedia
                className={classes.media}
                image={template.template_image}
                title="Test"
              />
              <CardContent className={classes.templateContent}>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  className={classes.templateName}
                >
                  {template.template_name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                href={template.template_link}
                target="_blank"
                rel="noreferrer"
                startIcon={<VisibilityIcon />}
              >
                View Theme
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ));
    });
  };

  const hasUnsavedChanges =
    introductionEnable || aboutMeEnable || workExperienceEnable || projectEnable;

  return (
    <>
      <Container width="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={clsx(classes.heading, {
            [classes.responsiveHeading]: window.innerWidth > warningWidth,
          })}
        >
          Choose a starting point
        </Typography>
        {hasUnsavedChanges && (
          <>
            <Typography align="center" style={{ margin: '2rem 0rem 1rem 0rem' }}>
              <Button variant="contained" onClick={() => navigateTo('/introduction')}>
                Continue
              </Button>
            </Typography>
            <Typography variant="subtitle1" align="center" style={{ color: 'white' }}>
              Or select one from
            </Typography>
          </>
        )}
        <Grid
          className={classes.templateContainer}
          container
          spacing={3}
          justify="space-evenly"
          alignItems="center"
        >
          {renderTemplates()}
        </Grid>
        <Grid
          className={classes.templateContainer}
          container
          spacing={3}
          justify="space-evenly"
          alignItems="center"
        >
          <Grid
            className={clsx(classes.specialTemplate, {
              [classes.responsiveSpecialTemplate]: window.innerWidth < warningWidth,
            })}
            item
            xs={4}
          >
            <Card raised className={classes.rootOwn} variant="outlined">
              <CardActionArea onClick={startFromScratch}>
                <CardContent className={classes.scratchContent}>
                  <img
                    src="public/images/create_from_scratch.png"
                    alt="Scratch"
                    className={classes.createOwnMedia}
                  />
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.templateName}
                  >
                    Start from scratch
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { Template };
