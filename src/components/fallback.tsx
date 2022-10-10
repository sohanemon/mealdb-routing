interface Props {}

const Fallback: React.FC<Props> = () => {
  return (
    <div className='grid place-content-center h-screen'>
      <h1 className='text-3xl  max-w-sm text-center p-10'>
        Bunty, tomar internet slow naki? 🤣
      </h1>
    </div>
  );
};

export default Fallback;
