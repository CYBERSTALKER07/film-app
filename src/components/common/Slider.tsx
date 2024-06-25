import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import styles from './Slider.module.css';

type TSliderData = {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface ISliderProps {
  data: TSliderData[],
  onPress: (id: number) => void
}

const Slider: React.FC<ISliderProps> = ({
  data,
  onPress
}) => {
  return (
    <Box className={styles.sliderContainer}>
      {data.map((item) => (
        <Card className={styles.card} key={item.title} variant="outlined" onClick={() => onPress(item.id)}>
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box className={styles.cardContent}>
            <Typography className={styles.cardTitle} level="title-md">{item.title}</Typography>
            <Typography className={styles.cardDescription} level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default React.memo(Slider);