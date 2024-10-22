import { Box, Grid, MenuItem, TextField, Typography, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';

function Register() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/; 
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/; 
    if (!formData.name || !nameRegex.test(formData.name)) {
      tempErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = 'Mobile number must contain exactly 10 digits';
    }

    if (!formData.address || !addressRegex.test(formData.address)) {
      tempErrors.address = 'Address can only contain letters, numbers, and common punctuation';
    }

    setErrors(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data stored successfully!!!

      Name: ${formData.name}
      Address: ${formData.address}
      Mobile: ${formData.mobile}
      Email: ${formData.email}
      Gender: ${formData.gender}
      DOB: ${formData.dob}
      Course: ${formData.course}`);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
    setErrors({});
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, p: 3, background: "url(../images/background.webp)", height: '600px', marginTop: '60px', marginLeft: '280px' }}>
        <Typography variant="h2" align="center" gutterBottom >
          <h4 style={{ color: 'red', marginTop: '30px', fontWeight: '600', fontSize: '50px' }}> Higher Secondary Admission Form</h4>
          <h5 style={{ color: 'blue', fontWeight: '600' }}>For 2025</h5>
          <p style={{ color: 'yellow', fontSize: '30px', fontWeight: '700px', paddingTop: '220px' }}>Your child's road to success begins here!</p>
        </Typography>
      </div>
      <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, p: 3, border: '1px solid lightgray', background: 'white', marginRight: '300px', zIndex: '1', boxShadow: '5px 5px 10px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="contained" color="success" type="submit">
                Register
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" style={{ color: 'red', borderColor: 'red', border: 'solid' }} onClick={handleReset}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default Register;