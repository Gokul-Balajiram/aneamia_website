import * as React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row items-center">
      <Link href="/">
        <Button variant="text" className=" text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            About
          </Typography>
        </Button>
      </Link>
      <Link href="/causes">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            Causes
          </Typography>
        </Button>
      </Link>
      <Link href="/symptoms">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            Symptoms
          </Typography>
        </Button>
      </Link>
      <Link href="/treatments">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            Treatment
          </Typography>
        </Button>
      </Link>
      <Link href="/diet">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            Diet
          </Typography>
        </Button>
      </Link>
      <Link href="/dataset">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            DataSet
          </Typography>
        </Button>
      </Link>
      <Link href="/e-anemia">
        <Button variant="text" className=" text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            E - Anemia
          </Typography>
        </Button>
      </Link>
      <Link href="/team">
        <Button variant="text" className="text-black ml-auto mr-auto">
          <Typography className="flex items-center capitalize text-lg font-medium">
            The Team
          </Typography>
        </Button>
      </Link>
    </ul>
  );

  return (
    <Navbar className="fixed inset-0 z-10 h-fit max-w-full rounded-none lg:px-16 lg:py-2 bg-backgroundColor bg-opacity-50 backdrop-blur-lg mb-3 border-b-1 border-t-0 border-r-0 border-l-0 border-none shadow-none">
      <div className="flex items-center justify-between text-blue-black-900">
        <Link href="/">
          <Image src={logo} alt="Anokha Logo" className="w-8 h-auto" />
        </Link>
        <div className="flex items-center gap-4 md:gap-1">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default NavigationBar;
