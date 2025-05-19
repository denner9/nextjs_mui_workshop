import { FC } from "react";
import { Property } from "../interfaces/property.interface";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import InformationWithIcon from "./InformationWithIcon";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        gap: 1,
        p: 1,
      }}
    >
      {/* Image Section */}
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          height: "280px",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        <Image
          src={property.images.main}
          alt={property.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Stack>
      {/* Details Section */}
      <Stack sx={{ gap: "4px" }}>
        <Typography
          sx={{ fontSize: { xs: "16px", md: "24px" }, fontWeight: 600 }}
        >
          {property.priceDetails.currencySymbol}{" "}
          {property.priceDetails.amount.toLocaleString()}
        </Typography>

        <Typography sx={{ fontSize: "14px" }}>{property.name}</Typography>
        <Typography sx={{ fontSize: "14px", color: "#FF0000" }}>
          {property.location.country}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
        <InformationWithIcon
          description={"Cuartos"}
          icon="rooms"
          value={property.propertyDetails.rooms}
        />
        <InformationWithIcon
          description={"Baños"}
          icon="bathrooms"
          value={property.propertyDetails.bathrooms}
        />
        <InformationWithIcon
          description={"Área"}
          icon="area"
          value={`${property.propertyDetails.area} ${property.propertyDetails.areaUnitsOfMeasurement}`}
        />
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
