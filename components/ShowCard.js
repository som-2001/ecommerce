import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from 'next/link';

export default function ShowCard({title,image}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',width:{xs:"90vw",lg:'25vw',md:"45vw",sm:"45vw"}}}>
        <CardContent sx={{ flex: '1 0 auto',backgroundColor:'#ffd7ff',}}>
          <Typography component="div" variant="p" className='text-2xl w-40'>
            {title}
          </Typography>
          <Link variant="subtitle1" color="text.secondary" component="div" style={{position:"relative",top:"44%",cursor:"pointer",borderRadius:"20px" }} href={`/category/${title}`} onClick={(e)=>{localStorage.setItem('title',title)}} className='button bg-purple-700 p-2 text-white'>
            View all
          </Link>
        </CardContent>
      <Box className="flex items-center justify-end">
        <CardMedia
          component="img"
          sx={{ width: 201, height: 201 }}
          image={image}
          alt="Live from space album cover"
        />
      </Box>
      
    </Card>
  );
}
