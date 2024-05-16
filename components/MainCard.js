import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from '@mui/icons-material/Star';

export const MainCard = ({ item }) => {
  const router = useRouter();
  return (
    <Card sx={{ width: {sm:315,lg:375,md:375,xs:315}, height: "auto" }}>
      <img
        src={item.image}
        alt=""
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {item.title.slice(0, 32)}
          {item.title.length > 32 && <span>...</span>}
        </Typography>
        <Typography variant="body2" className="text-red-700">
          ${item.price}
        </Typography>
        <Typography variant="body2" className="text-red-700">
          <Stack direction="row" spacing={1}>
            <Chip icon={<StarIcon style={{color:"yellowgreen"}} />} label={item.rating.rate}  />
          </Stack>
          
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className="mb-3 ml-6">
        
        <Button
          variant="contained"
          
          style={{borderRadius:"20px"}}
          className="button bg-purple-700"
          onClick={(e) => {
            router.push(`/detailPage/${item.id}`);
            localStorage.setItem("pid", item.id);
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
