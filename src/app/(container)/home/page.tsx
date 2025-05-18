import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const show = (await searchParams).show || '6';

  // TODO: Use the show const to dinamically render the properties cards.
  console.log('show', show)

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: '#F3FFF4'
      }}
    >
      {/* Title section  */}
      <Stack direction={'row'} justifyContent={'center'} sx={{ py: 3 }}>
        <Typography
          component={'h1'}
          sx={{
            fontSize: { xs: '30px', md: '48px' },
            color: '#048853',
            textAlign: 'center',
          }}
        >
          Recomendaciones de Propiedades
        </Typography>
      </Stack>
    </Box>
  );
}

export default HomePage;
