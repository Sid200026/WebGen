import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  projectTableColor as projectTableColorFunc,
  projectTableBg as projectTableBgFunc,
} from '../../../actions/project_action';
import { warningWidth } from '../../../constants/writeups/index';
import { ProjectTableInfo } from '../../../constants/writeups/project';

const useStyles = makeStyles(style);

const ProjectTable = () => {
  const classes = useStyles();
  const projectReducer = useSelector((state) => state.projectReducer);
  const { projectTableColor, projectTableBg } = projectReducer;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: window.innerWidth < warningWidth,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: window.innerWidth < warningWidth,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              {ProjectTableInfo.title}
            </Typography>
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectTableBg}
                  onChange={(event) => {
                    dispatch(projectTableBgFunc(event.target.value));
                  }}
                />
              }
              label={ProjectTableInfo.field.projectTableBackground.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectTableColor}
                  onChange={(event) => {
                    dispatch(projectTableColorFunc(event.target.value));
                  }}
                />
              }
              label={ProjectTableInfo.field.projectTableTextColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={ProjectTableInfo.image.src}
            alt={ProjectTableInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ProjectTable };
