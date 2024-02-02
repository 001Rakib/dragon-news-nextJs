import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
  {
    route: "About",
    pathname: "/about",
  },
];

const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((Item) => (
            <Link key={Item} href={Item.pathname}>
              <Button className="text-white">{Item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color={"gray"} variant="body2" textAlign={"center"}>
          @2024 The Dragon News. Designed By Programming Hero.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
