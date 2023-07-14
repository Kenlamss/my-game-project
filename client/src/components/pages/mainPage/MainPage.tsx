import { Box, Button } from '@mui/material';
import React from 'react';

export default function MainPage(): JSX.Element {
 
  return (
   
// const handler = () => {

// };

      <Box
        sx={{
          backgroundImage:
            'url(https://alp-itsm.ru/upload/assets/images/stati/razvitie_it_infrastrukturyi.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      <Button    
        color="secondary"
        sx={{ marginTop: '-250px', marginRight: '-100px',  width: '200px', height: '60px'}} >  </Button>
      </Box>
  
  );
}
