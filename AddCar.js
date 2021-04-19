import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './EmployeeForm.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormLabel-root': {
      paddingLeft: '0.3em',
    },
  },
}));

function EmployeeForm() {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(matches);
  return (
    <div className='main'>
      <h2>Enter Car Details</h2>
      <form className={classes.root}>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField variant='outlined' label='Brand Name' />
            <TextField variant='outlined' label='Model Name' />
            <TextField variant='outlined' label='Image URL' />
            <TextField variant='outlined' type='number' label='Price' />
            <TextField
              variant='outlined'
              type='number'
              label='Number of Seats'
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Select Car Category
              </InputLabel>
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField variant='outlined' type='number' label='Age' />
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Select Car Availability
              </InputLabel>
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Check AC Availability
              </InputLabel>
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id=''
              label='Description'
              multiline
              rows={1}
              variant='outlined'
            />
          </Grid>
        </Grid>
      </form>
      <div className='checkbox'>
        <input type='checkbox' />
        <p>
          I HAVE READ AND UNDERSTAND THE{' '}
          <a href='#'>PRIVACY AND COOKIES POLICY</a>
        </p>
      </div>
      <button className='btn'>Add Car</button>
      <Grid container display={matches ? 'grid' : 'flex'}>
        <div className='first'>First</div>
        <div className='second'>Second</div>
        <div className='third'>Third</div>
      </Grid>
    </div>
  );
}

export default EmployeeForm;
