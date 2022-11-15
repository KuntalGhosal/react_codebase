import { Box, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';

export interface IHomePageCardProps {
  imageContent:string;
  imagePosition:string;
  headerContent?:string;
  captionContent?:string;
}

export function HomePageCard(props: IHomePageCardProps) {
  const {imageContent,imagePosition,headerContent,captionContent}=props
  return (
    <Card style={{marginBottom:'1rem'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            <Box>
             {imagePosition==="L" &&<CardMedia
                component="img"
                sx={{ width: 151 }}
                image={imageContent}
                alt="Live from space album cover"
              />}
            </Box>
            <Box style={{alignSelf:'center',padding:"0.5rem"}}>
              <Typography variant='subtitle2' >Retain your customers</Typography>
              <Typography variant='caption'>Lock your frequent purchaser</Typography>
            </Box>
            <Box>
          { imagePosition ==="R" && <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={imageContent}
                alt="Live from space album cover"
              />}
            </Box>
          </Box>
        </CardContent>

      </Box>

    </Card>
  );
}
