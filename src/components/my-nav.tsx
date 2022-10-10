import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function MyNav() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          to='/'
          className={`flex items-center focus:outline outline-1 rounded-lg px-3 ${
            pathname === "/" && "text-blue-700 font-semibold"
          }`}
        >
          Home
        </Link>
      </Typography>{" "}
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          to='videos'
          className={`flex items-center focus:outline outline-1 rounded-lg px-3 ${
            pathname === "/videos" && "text-blue-700 font-semibold"
          }`}
        >
          Videos
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          to='about'
          className={`flex items-center focus:outline outline-1 rounded-lg px-3 ${
            pathname === "/about" && "text-blue-700 font-semibold"
          }`}
        >
          About
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          to='contact'
          className={`flex items-center focus:outline outline-1 rounded-lg px-3 ${
            pathname === "/contact" && "text-blue-700 font-semibold"
          }`}
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mb-10'>
      <div className='container mx-auto flex items-center focus:outline outline-1 rounded-lg px-3 justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          className='mr-4 cursor-pointer py-1.5 font-normal'
        >
          <span className='text-lg font-bold bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-deep-orange-600'>
            React Chef
          </span>
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        <Button
          onClick={() => navigate("/contact")}
          variant='gradient'
          size='sm'
          className='hidden lg:inline-block'
        >
          <span>Contact</span>
        </Button>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
          onClick={() => navigate("/contact")}
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2'
        >
          <span>Contact</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
