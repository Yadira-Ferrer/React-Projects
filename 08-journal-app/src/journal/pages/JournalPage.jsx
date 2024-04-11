import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ducimus
        accusantium rerum architecto voluptate ad aspernatur quibusdam nostrum
        perspiciatis, alias similique magnam expedita quia cupiditate unde,
        impedit non excepturi repudiandae!{' '}
      </Typography> */}
      <NoteView />
      {/*  <NothingSelectedView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
