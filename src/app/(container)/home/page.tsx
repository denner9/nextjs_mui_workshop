import { Box } from "@mui/material";
import { FC } from "react";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const show = (await searchParams).show || '6';

  return (
    <Box>Home Page Content - Show Content {show}</Box>
  );
}

export default HomePage;
