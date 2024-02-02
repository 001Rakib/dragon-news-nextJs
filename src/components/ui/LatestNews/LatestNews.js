import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={topNews} width={800} alt="top-news"></Image>
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

        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="top-news"></Image>
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-2 my-5 rounded">
                    Technology
                  </span>
                  <Typography gutterBottom>
                    Bitcoin climbs up as Elon Musk says Tesla likely to accept
                    it again.
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By Rakib Hasan - Feb 2, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="top-news"></Image>
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-2 my-5 rounded">
                    Technology
                  </span>
                  <Typography gutterBottom>
                    Bitcoin climbs up as Elon Musk says Tesla likely to accept
                    it again.
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By Rakib Hasan - Feb 2, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="top-news"></Image>
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-2 my-5 rounded">
                    Technology
                  </span>
                  <Typography gutterBottom>
                    Bitcoin climbs up as Elon Musk says Tesla likely to accept
                    it again.
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By Rakib Hasan - Feb 2, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="top-news"></Image>
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-2 my-5 rounded">
                    Technology
                  </span>
                  <Typography gutterBottom>
                    Bitcoin climbs up as Elon Musk says Tesla likely to accept
                    it again.
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By Rakib Hasan - Feb 2, 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
