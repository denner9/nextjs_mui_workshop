import PropertyCard from "@/app/components/PropertyCard";
import { Property } from "@/app/interfaces/property.interface";
import { Stack } from "@mui/material";

export default async function Home() {

  const response = await fetch('http://localhost:3000/api/properties');
  const properties = await response.json() as Property[];

  return (
    <Stack direction={'row'} gap={3} px={'50px'} sx={{
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </Stack>
  );
}
