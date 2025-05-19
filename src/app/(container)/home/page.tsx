import PropertyCard from "@/app/components/PropertyCard";
import { getProperties } from "@/app/utils/getProperties";
import { Box, Stack } from "@mui/material";
import { FC } from "react";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const show = (await searchParams).show || '6';

  const properties = await getProperties(show as string);

  return (
    <Stack direction={'row'} sx={{gap: '30px', flexWrap: 'wrap', justifyContent: 'center', px: '25px', pb: '100px'}}>
      {properties && properties.map((property, i) => (
        <Box
          key={i}
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
              md: '30%',
            },
          }}>
          <PropertyCard property={property} />
        </Box>
      ))}
    </Stack>
  );
}

export default HomePage;
