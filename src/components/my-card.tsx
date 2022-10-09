import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function MyCard({
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
}) {
  return (
    <Card className='max-w-md w-72 mx-auto  mt-20'>
      <CardHeader color='blue' className='relative h-56'>
        <img
          src={strMealThumb}
          alt='img-blur-shadow'
          className='h-full w-full'
        />
      </CardHeader>
      <CardBody className='text-center pt-6 pb-2'>
        <Typography variant='h5' className=''>
          {strMeal}
        </Typography>
      </CardBody>
      <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography variant='small'>{strCategory}</Typography>
        <Typography variant='small' color='gray' className='flex gap-1'>
          <i className='fas fa-map-marker-alt fa-sm mt-[3px]' />
          {strArea}
        </Typography>
      </CardFooter>
    </Card>
  );
}
