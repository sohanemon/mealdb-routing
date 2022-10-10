import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
const SingleMeal = () => {
  const about = useRef<any>(null);
  /* ------------------------ hooks uses generics ------------------------ */
  const meals: any = useLoaderData();
  useEffect(() => {
    about && about?.current?.click();
    return () => {};
  }, []);

  const {
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strYoutube,
    strInstructions,
  } = meals.meals[0];
  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    const x = meals.meals[0][`strIngredient${i}`];
    x && ingredients.push(x);
  }
  const measures: any = [];
  for (let i = 0; i < 20; i++) {
    const x = meals.meals[0][`strMeasure${i}`];
    const y = x?.trim();
    y && measures.push(x);
  }
  const data = [
    {
      label: <p ref={about}>About</p>,
      value: "about",
      desc: (
        <Card className='w-full max-w-3xl mx-auto'>
          <CardHeader floated={false} className='h-80'>
            <img src={strMealThumb} alt={strMeal} className=' object-cover ' />
          </CardHeader>
          <CardBody className='text-center'>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              {strMeal}
            </Typography>
            <Typography color='blue' className='font-medium' textGradient>
              {strCategory}
            </Typography>
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Ingredients",
      value: "ingredients",
      desc: (
        <table className='table-fixed w-full text-center'>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Measures</th>
            </tr>
          </thead>
          <tbody className='!w-full'>
            {ingredients.map((el: any, i: number) => (
              <tr key={el}>
                <td>{el}</td>
                <td>{measures[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      label: "Instruction",
      value: "instruction",
      desc: <p className='py-10'>{strInstructions}</p>,
    },
    {
      label: "Video",
      value: "video",
      desc: (
        <>
          <iframe
            className='aspect-video w-full max-w-3xl mx-auto'
            src={strYoutube.replace("watch?v=", "embed/")}
          ></iframe>
        </>
      ),
    },
  ];

  return (
    <Tabs id='custom-animation' className='h-screen' value='html'>
      <TabsHeader className=''>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
export default SingleMeal;
