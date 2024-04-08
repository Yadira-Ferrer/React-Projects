import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <form>
        <Grid container>
          {/* NAME */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Enter your full name..."
              fullWidth
            ></TextField>
          </Grid>
          {/* EMAIL */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email..."
              fullWidth
            ></TextField>
          </Grid>
          {/* PASSWORD */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password..."
              fullWidth
            ></TextField>
          </Grid>
          {/* BUTTONS */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 4 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
