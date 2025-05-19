import { Box, Stack, Typography } from "@mui/material";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "primary.light",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ justifyContent: "center", my: 3 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontWeight: "600",
              fontSize: {
                xs: "24px",
                md: "48px",
              },
            }}
          >
            Lista de Propiedades
          </Typography>
        </Stack>

        {children}
      </Box>
    </>
  );
};

export default HomeLayout;
