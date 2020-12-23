import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { navigate } from '@reach/router';
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
import { style } from '../../styles/template';
import { getRequest } from '../../utils/serviceCalls';

const useStyles = makeStyles(style);

const Template = () => {
  const classes = useStyles();

  const [templates, setTemplates] = useState([]);

  const getTemplates = async () => {
    const response = await getRequest('/template/gettemplates', { a: 3 });
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

  const startFromScratch = () => {
    navigateTo('/introduction');
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
            <CardActionArea>
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

  renderTemplates();

  return (
    <>
      <Container width="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={clsx(classes.heading, {
            [classes.responsiveHeading]: window.innerWidth > 750,
          })}
        >
          Choose a starting point
        </Typography>
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
          <Grid className={classes.specialTemplate} item xs={4}>
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
