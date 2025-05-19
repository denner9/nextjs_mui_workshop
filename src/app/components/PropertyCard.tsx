import { FC } from 'react'
import { Property } from '../types/property.interface'
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import InformationWithIcon from './InformationWithIcon';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <Stack
      sx={{
        p: 1,
        backgroundColor: 'white',
        borderRadius: '5px',
        gap: 1,
      }}
    >
      {/* Image Section */}
      <Stack
        sx={{
          position: 'relative',
          width: '100%',
          height: '280px',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <Image
          src={property.images.main}
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Stack>
      {/* Information Section */}
      <Stack gap={'29px'}>
        <Stack>
          <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>
            {property.priceDetails.currencySymbol}{property.priceDetails.amount}
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>{property.name}</Typography>
          <Typography sx={{ fontSize: '14px', color: '#FF0000' }}>{property.location.country} - {property.location.state}</Typography>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-between'} gap={1}>
          <InformationWithIcon description={'Bedrooms'} icon='rooms' value={property.propertyDetails.rooms} />
          <InformationWithIcon description={'Bathrooms'} icon='bathrooms' value={property.propertyDetails.bathrooms} />
          <InformationWithIcon
            description={'Area'}
            icon='area'
            value={`${property.propertyDetails.area} ${property.propertyDetails.areaUnitsOfMeasurement}`}
          />
        </Stack>
      </Stack>

    </Stack>
  )
}

export default PropertyCard