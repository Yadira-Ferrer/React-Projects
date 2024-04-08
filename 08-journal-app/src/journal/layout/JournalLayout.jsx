import { Box } from '@mui/system';
import { NavBar } from '../components';

const drawerWidth = 240;

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* SIDEBAR drawerWidth */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}

        {children}
      </Box>
    </Box>
  );
};
