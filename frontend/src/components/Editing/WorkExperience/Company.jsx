import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  workExperienceAdd as workExperienceAddFunc,
  workExperienceDelete as workExperienceDeleteFunc,
  workExperienceModify as workExperienceModifyFunc,
} from '../../../actions/work_experience_action';
import '../../../styles/editForm.scss';

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

const useStyles = makeStyles(style);

const Company = () => {
  const classes = useStyles();
  const workExperienceReducer = useSelector((state) => state.workExperienceReducer);

  const defaultThemeReducer = useSelector((state) => state.defaultThemeReducer);

  const {
    subTextColor: defaultSubTextColor,
    informationColor: defaultInformationColor,
    companyNameColor: defaultCompanyNameColor,
  } = defaultThemeReducer;

  const { workExperienceList } = workExperienceReducer;
  const dispatch = useDispatch();

  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState({
    status: false,
    index: -1,
  });
  const [createData, setCreateData] = useState({
    companyName: '',
    companyNameColor: defaultCompanyNameColor,
    startDate: '',
    endDate: '',
    role: '',
    subTextColor: defaultSubTextColor,
    information: [],
    informationColor: defaultInformationColor,
  });

  const [editData, setEditData] = useState({
    companyName: '',
    companyNameColor: defaultCompanyNameColor,
    startDate: '',
    endDate: '',
    role: '',
    subTextColor: defaultSubTextColor,
    information: [],
    informationColor: defaultInformationColor,
  });

  const [error, setError] = useState('');

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  const handleEditOpen = (index) => {
    setEditOpen({
      index,
      status: true,
    });
    const workExp = workExperienceList[index];
    setEditData({
      companyName: workExp.companyName,
      companyNameColor: workExp.companyNameColor,
      startDate: workExp.startDate,
      endDate: workExp.endDate,
      role: workExp.role,
      subTextColor: workExp.subTextColor,
      information: workExp.information,
      informationColor: workExp.informationColor,
    });
  };

  const handleEditClose = () => {
    setEditOpen({
      index: -1,
      status: false,
    });
  };

  const addWorkExperience = () => {
    if (createData.companyName.length === 0) {
      setError('Company Name cannot be empty');
      return;
    }
    if (createData.role.length === 0) {
      setError('Role cannot be empty');
      return;
    }
    if (createData.information.length === 0) {
      setError('Information cannot be empty');
      return;
    }
    if (createData.startDate.length === 0) {
      setError('Start Date cannot be empty');
      return;
    }
    if (createData.endDate.length === 0) {
      setError('End Date cannot be empty');
      return;
    }
    dispatch(workExperienceAddFunc(createData));
    setCreateData({
      companyName: '',
      companyNameColor: defaultCompanyNameColor,
      startDate: '',
      endDate: '',
      role: '',
      subTextColor: defaultSubTextColor,
      information: [],
      informationColor: defaultInformationColor,
    });
    handleCreateClose();
  };

  const editWorkExperience = () => {
    if (editData.companyName.length === 0) {
      setError('Company Name cannot be empty');
      return;
    }
    if (editData.role.length === 0) {
      setError('Role cannot be empty');
      return;
    }
    if (editData.information.length === 0) {
      setError('Information cannot be empty');
      return;
    }
    if (editData.startDate.length === 0) {
      setError('Start Date cannot be empty');
      return;
    }
    if (editData.endDate.length === 0) {
      setError('End Date cannot be empty');
      return;
    }
    dispatch(workExperienceModifyFunc(editData, editOpen.index));
    setEditData({
      companyName: '',
      companyNameColor: defaultCompanyNameColor,
      startDate: '',
      endDate: '',
      role: '',
      subTextColor: defaultSubTextColor,
      information: [],
      informationColor: defaultInformationColor,
    });
    handleEditClose();
  };

  const getExperience = () =>
    workExperienceList.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={`${ele.companyName}`} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleEditOpen(index)}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              dispatch(workExperienceDeleteFunc(index));
            }}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

  const addInformation = () => {
    const element = document.querySelector('#createInformation');
    const information = element.value;
    if (information.length === 0) {
      setError('Information cannot be empty');
    } else {
      const newInformation = createData.information;
      newInformation.push(information);
      element.value = '';
      if (error) {
        setError('');
      }
      setCreateData({ ...createData, information: newInformation });
    }
  };

  const editAddInformation = () => {
    const element = document.querySelector('#editInformation');
    const information = element.value;
    if (information.length === 0) {
      setError('Information cannot be empty');
    } else {
      const newInformation = editData.information;
      newInformation.push(information);
      element.value = '';
      if (error) {
        setError('');
      }
      setEditData({ ...editData, information: newInformation });
    }
  };

  const createDeleteInformation = (index) => {
    setCreateData({
      ...createData,
      information: removeElementFromArray(createData.information, index),
    });
    if (error) {
      setError('');
    }
  };

  const editDeleteInformation = (index) => {
    setEditData({
      ...editData,
      information: removeElementFromArray(editData.information, index),
    });
    if (error) {
      setError('');
    }
  };

  const getInformation = () =>
    createData.information.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={`${ele}`} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              createDeleteInformation(index);
            }}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

  const getEditInformation = () =>
    editData.information.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={`${ele}`} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              editDeleteInformation(index);
            }}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

  return (
    <>
      <Dialog
        open={createOpen}
        onClose={handleCreateClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Work Experience</DialogTitle>
        {error && <Alert severity="error">{error}</Alert>}
        <DialogContent>
          <TextField
            id="createCompanyName"
            variant="outlined"
            label="Company Name"
            fullWidth
            value={createData.companyName}
            onChange={(event) => {
              setCreateData({ ...createData, companyName: event.target.value });
            }}
            helperText="For Eg. Amazon"
            className={classes.input}
            required
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createCompanyColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={createData.companyNameColor}
                onChange={(event) => {
                  setCreateData({
                    ...createData,
                    companyNameColor: event.target.value,
                  });
                }}
              />
            }
            label="Color of company name text"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <Divider />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createStartDate"
                type="month"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                }}
                value={createData.startDate}
                onChange={(event) => {
                  setCreateData({
                    ...createData,
                    startDate: event.target.value,
                  });
                }}
                placeholder="mm-yyyy"
              />
            }
            label="Start Date"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createEndDate"
                type="month"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                }}
                value={createData.endDate}
                onChange={(event) => {
                  setCreateData({
                    ...createData,
                    endDate: event.target.value,
                  });
                }}
                placeholder="mm-yyyy"
              />
            }
            label="End Date"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <TextField
            id="createRoleName"
            variant="outlined"
            label="Position Held"
            fullWidth
            value={createData.role}
            onChange={(event) => {
              setCreateData({ ...createData, role: event.target.value });
            }}
            helperText="For Eg. Senior Manager"
            className={classes.input}
            required
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createSubTextColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={createData.subTextColor}
                onChange={(event) => {
                  setCreateData({
                    ...createData,
                    subTextColor: event.target.value,
                  });
                }}
              />
            }
            label="Sub-Text Color"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createInformationColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={createData.informationColor}
                onChange={(event) => {
                  setCreateData({
                    ...createData,
                    informationColor: event.target.value,
                  });
                }}
              />
            }
            label="Information Color"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <TextField
            id="createInformation"
            variant="outlined"
            label="Information regarding work experience"
            fullWidth
            className={classes.input}
            required
          />
          <Button
            onClick={addInformation}
            color="primary"
            variant="contained"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            Add Information
          </Button>
          <Divider style={{ marginBottom: '10px' }} />
          <List className={classes.list}>{getInformation()}</List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addWorkExperience} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog Box */}

      <Dialog
        open={editOpen.status}
        onClose={handleEditClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Work Experience</DialogTitle>
        {error && <Alert severity="error">{error}</Alert>}
        <DialogContent>
          <TextField
            id="editCompanyName"
            variant="outlined"
            label="Company Name"
            fullWidth
            value={editData.companyName}
            onChange={(event) => {
              setEditData({ ...editData, companyName: event.target.value });
            }}
            helperText="For Eg. Amazon"
            className={classes.input}
            required
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createCompanyColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={editData.companyNameColor}
                onChange={(event) => {
                  setEditData({
                    ...editData,
                    companyNameColor: event.target.value,
                  });
                }}
              />
            }
            label="Color of company name text"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <Divider />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createStartDate"
                type="month"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                }}
                value={editData.startDate}
                onChange={(event) => {
                  setEditData({
                    ...editData,
                    startDate: event.target.value,
                  });
                }}
                placeholder="mm-yyyy"
              />
            }
            label="Start Date"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createEndDate"
                type="month"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                }}
                value={editData.endDate}
                onChange={(event) => {
                  setEditData({
                    ...editData,
                    endDate: event.target.value,
                  });
                }}
                placeholder="mm-yyyy"
              />
            }
            label="End Date"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <TextField
            id="createRoleName"
            variant="outlined"
            label="Position Held"
            fullWidth
            value={editData.role}
            onChange={(event) => {
              setEditData({ ...editData, role: event.target.value });
            }}
            helperText="For Eg. Senior Manager"
            className={classes.input}
            required
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createSubTextColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={editData.subTextColor}
                onChange={(event) => {
                  setEditData({
                    ...editData,
                    subTextColor: event.target.value,
                  });
                }}
              />
            }
            label="Sub-Text Color"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="createInformationColor"
                type="color"
                list="true"
                style={{
                  width: '12rem',
                  height: '2rem',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
                value={editData.informationColor}
                onChange={(event) => {
                  setEditData({
                    ...editData,
                    informationColor: event.target.value,
                  });
                }}
              />
            }
            label="Information Color"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
          <TextField
            id="editInformation"
            variant="outlined"
            label="Information regarding work experience"
            fullWidth
            className={classes.input}
            required
          />
          <Button
            onClick={editAddInformation}
            color="primary"
            variant="contained"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            Add Information
          </Button>
          <Divider style={{ marginBottom: '10px' }} />
          <List className={classes.list}>{getEditInformation()}</List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editWorkExperience} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: window.innerWidth < 750,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: window.innerWidth < 750,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              Customize Work Experience
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              Work experience will be ordered on the preview page based on the end-date
            </Typography>
            <Button
              variant="contained"
              style={{ marginTop: '25px' }}
              onClick={handleCreateOpen}
            >
              Add Work Experience
            </Button>
            {workExperienceList.length !== 0 && (
              <>
                <Typography
                  align="left"
                  variant="h6"
                  style={{ marginTop: '25px', textDecoration: 'underline' }}
                >
                  Work Experience
                </Typography>
                <List className={classes.list}>{getExperience()}</List>
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src="https://bit.ly/3cr31mU"
            alt="Test"
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < 750,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Company };
