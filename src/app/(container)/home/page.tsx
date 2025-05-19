import { getProperties } from "@/app/utils/getProperties";
import { Box } from "@mui/material";
import { FC } from "react";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const show = (await searchParams).show || '6';

  const properties = await getProperties(show as string);

  return (
    <Box>
      {properties && properties.map((property, i) => (
        <h1 key={i}>{property.name}</h1>
      ))}
    </Box>
  );
}

export default HomePage;
