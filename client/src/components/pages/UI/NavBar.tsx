import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { logoutUserThunk } from '../../../features/redux/slices/user/thunks';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((store) => store.user);

  const dispatch = useAppDispatch();
  
  const logoutHandler = (): void => {
    void dispatch(logoutUserThunk());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.status === 'logged' ? `Hello, ${user.name}` : 'Guest'}
          </Typography>
          {user.status === 'logged' ? (
            <>
              <Button color="inherit" component={Link} to="/">
                Game
              </Button>
              <Button color="inherit" >
                LC
              </Button>
              <Button color="inherit" onClick={logoutHandler} component={Link} to="/">
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
