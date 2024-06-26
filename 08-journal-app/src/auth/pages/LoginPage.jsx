import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/signup">
              Create a new account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
