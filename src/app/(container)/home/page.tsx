import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography
        component={'h1'}
        sx={{ color: 'primary.main', fontSize: '32px' }}
      >
        Welcome to NextJS + MUI introduction.
      </Typography>
    </Box>
  );
}
