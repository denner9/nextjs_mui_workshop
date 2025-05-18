import { Box, Stack, Typography } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react'

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: 'primary.light'
      }}
    >
      {/* Title section  */}
      <Stack direction={'row'} justifyContent={'center'} sx={{ py: 3 }}>
        <Typography
          component={'h1'}
          sx={{
            fontSize: { xs: '30px', md: '48px' },
            color: 'primary.dark',
            textAlign: 'center',
          }}
        >
          Recomendaciones de Propiedades
        </Typography>
      </Stack>

      {children}
    </Box>
  )
}

export default HomeLayout;