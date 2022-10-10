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
  main: boolean;
  strCategory: string;
}
const MyCard: React.FC<Props> = ({
  main,
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
}) => {
  const nav = useNavigate();
  return (
    <Card className='max-w-md w-72 mx-auto shadow-sm hover:shadow-lg transition-all duration-300 group  mt-20'>
      <CardHeader
        onClick={() => nav(`meal/${strMeal}`)}
        color='gray'
        className='relative h-56 cursor-pointer !mt-0 !shadow-none  !m-0 rounded-t-xl rounded-b-none'
      >
        <img
          src={strMealThumb}
          alt='img-blur-shadow'
          className='h-full w-full transition-all duration-1000 group-hover:scale-110'
        />
      </CardHeader>
      <CardBody className='text-center pt-6 pb-2'>
        <Typography variant='h5' className=''>
          {strMeal}
        </Typography>
      </CardBody>

      {main ? (
        <CardFooter divider className='flex items-center justify-between py-3'>
          <span
            className='cursor-pointer'
            onClick={() => nav(`/category/${strCategory}`)}
          >
            <Typography variant='small'>{strCategory}</Typography>
          </span>
          <span
            onClick={() => nav(`/area/${strArea}`)}
            className='cursor-pointer'
          >
            <Typography
              variant='small'
              color='gray'
              className='flex items-center gap-1'
            >
              <i className='fas fa-map-marker-alt fa-sm' />
              {strArea}
            </Typography>
          </span>
        </CardFooter>
      ) : null}
    </Card>
  );
};
export default MyCard;
