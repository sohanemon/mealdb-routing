import { useLoaderData } from "react-router-dom";

interface Props {}

const Categories: React.FC<Props> = () => {
  const data = useLoaderData();
  console.log(data);
  return <section>sfhj</section>;
};

export default Categories;
