import React from 'react';
import { Box } from '@mui/material';

export default function StartPage(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://kartinkin.net/uploads/posts/2022-02/thumbs/1645709457_24-kartinkin-net-p-informatsionnie-tekhnologii-kartinki-28.jpg)', // 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}

