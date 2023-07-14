import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/pages/UI/NavBar';
import MainPage from './components/pages/mainPage/MainPage';
import LoginPage from './components/pages/loginPage/LoginPage';
import { useAppDispatch, useAppSelector } from './features/redux/hooks';
import PrivateRouter from './components/HOC/PrivateRouter';
import { checkUserThunk } from './features/redux/slices/user/thunks';
import StartPage from './components/pages/startPage/StartPage';

function App(): JSX.Element {
  const status = useAppSelector((store) => store.user.status);

  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/mainPage"
          element={
            <PrivateRouter isAllowed={status === 'logged'}>
              <MainPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRouter isAllowed={status === 'empty'}>
              <LoginPage />
            </PrivateRouter>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
