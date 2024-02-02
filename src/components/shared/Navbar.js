"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo.png";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Header from "./Header";

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

function Navbar() {
  return (
    <>
      <Header></Header>
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo"></Image>

            <Box className="w-full text-center">
              {navItems.map((Item) => (
                <Link key={Item} href={Item.pathname}>
                  <Button className="text-white">{Item.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack
                direction={"row"}
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
