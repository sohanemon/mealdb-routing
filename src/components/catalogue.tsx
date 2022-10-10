import { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import Fallback from "./fallback";

interface Props {}
const Card = lazy(() => import("./my-card"));
const Catalogue: React.FC<Props> = () => {
  const meals: any = useLoaderData();
  return (
    <div className=''>
      <h1 className='text-3xl text-center'>Our Latest Menu</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {meals &&
          meals.meals?.map((el: any) => (
            <Suspense fallback={""}>
              <Card key={el.idMeal} {...el} />
            </Suspense>
          ))}
      </section>
    </div>
  );
};

export default Catalogue;
