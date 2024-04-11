import { MenuOutlined, PowerSettingsNewRounded } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inheri"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {' '}
            JournalApp{' '}
          </Typography>
          <IconButton color="error">
            <PowerSettingsNewRounded />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
