import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
interface Props {
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
}
const MyCard: React.FC<Props> = ({
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
}) => {
  const nav = useNavigate();
  return (
    <Card className='max-w-md w-72 mx-auto  mt-20'>
      <CardHeader
        onClick={() => nav(`meal/${strMeal}`)}
        color='gray'
        className='relative h-56 cursor-pointer'
      >
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
        <Typography
          variant='small'
          color='gray'
          className='flex items-center gap-1'
        >
          <i className='fas fa-map-marker-alt fa-sm' />
          {strArea}
        </Typography>
      </CardFooter>
    </Card>
  );
};
export default MyCard;
