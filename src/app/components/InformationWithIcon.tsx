import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import AreaIcon from '&/images/areaIcon.png';
import BathIcon from '&/images/bathIcon.png';
import BedIcon from '&/images/bedIcon.png';


interface InformationWithIconProps {
  icon: 'rooms' | 'bathrooms' | 'area';
  value: string;
  description: string;
}

const InformationWithIcon: FC<InformationWithIconProps> = ({ icon, description, value }) => {
  let srcImage = BedIcon;

  if (icon === 'area') {
    srcImage = AreaIcon;
  } else if (icon === 'bathrooms') {
    srcImage = BathIcon;
  }

  return (
    <Box>
      <Stack gap={'4px'} direction={'row'}>
        <Image
          alt='icon'
          src={srcImage}
          height={25}
          width={25}
        />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {value}
        </Typography>
      </Stack>
      <Typography fontSize={'12px'}>{description}</Typography>
    </Box>
  )
}

export default InformationWithIcon