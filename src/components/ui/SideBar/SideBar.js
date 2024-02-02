import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideTopNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideTopNews} width={800} alt="top-news"></Image>
          </CardMedia>
          <CardContent>
            <span className="bg-red-500 text-white px-2 my-5 rounded">
              Technology
            </span>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin climbs up as Elon Musk says Tesla likely to accept it
              again.
            </Typography>
            <Typography className="my-3" gutterBottom>
              By Rakib Hasan - Feb 2, 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
