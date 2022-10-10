import { lazy, Suspense } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

interface Props {
  main: boolean;
}
const Card = lazy(() => import("./my-card"));
const Catalogue: React.FC<Props> = ({ main }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const meals: any = useLoaderData();
  return (
    <div className='min-h-screen'>
      <h1 className='text-3xl text-center'>
        {main ? "Our Latest Menus" : `Showing ${path} Food`}
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {meals &&
          meals.meals?.map((el: any) => (
            <Suspense fallback={""}>
              <Card main={main} key={el.idMeal} {...el} />
            </Suspense>
          ))}
      </section>
    </div>
  );
};

export default Catalogue;
