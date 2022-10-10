import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

interface Props {}

const Videos: React.FC<Props> = () => {
  const data: any = useLoaderData();
  const [currentVideo, setCurrentVideo] = useState<any>();
  const [playing, setPlaying] = useState(false);

  const videos: any = data.meals.map(
    (el: { strYoutube: string; strMeal: string }) => {
      //   let link = el.strYoutube.replace("watch?v=", "embed/");
      return { name: el.strMeal, link: el.strYoutube };
    }
  );
  useEffect(() => {
    setCurrentVideo(videos[0]);
    return () => {};
  }, []);
  const changeTrack = (isNext: boolean) => {
    const all = videos.map((el: any, i: number) => {
      if (el.name === currentVideo?.name) return i + 1;
    });
    const [index] = all.filter((el: any) => el);
    if (isNext && index < 25) {
      setCurrentVideo(videos[parseInt(index)]);
    } else if (!isNext && index > 1) {
      setCurrentVideo(videos[parseInt(index) - 2]);
    } else window?.alert('Don"t scam');
  };

  return (
    <>
      <main className='mx-auto  space-y-2 p-2 mb-10'>
        <header
          style={{
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className='w-max max-w-3xl mx-auto overflow-hidden rounded-md'
        >
          {/* <iframe
            allowFullScreen={true}
            loading='lazy'
            allow='autoplay; encrypted-media'
            src={currentVideo?.link}
            className='aspect-video w-full'
          ></iframe> */}
          <ReactPlayer playing={playing} url={currentVideo?.link} />

          <div className='flex items-center justify-center bg-black/30 p-2'>
            <div className='flex items-center space-x-2'>
              <svg
                onClick={() => changeTrack(false)}
                className='h-6 w-6 text-white'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path d='M31.1 64.03c-17.67 0-31.1 14.33-31.1 32v319.9c0 17.67 14.33 32 32 32C49.67 447.1 64 433.6 64 415.1V96.03C64 78.36 49.67 64.03 31.1 64.03zM267.5 71.41l-192 159.1C67.82 237.8 64 246.9 64 256c0 9.094 3.82 18.18 11.44 24.62l192 159.1c20.63 17.12 52.51 2.75 52.51-24.62v-319.9C319.1 68.66 288.1 54.28 267.5 71.41z' />
              </svg>

              <svg
                onClick={() => setPlaying((p) => !p)}
                className='h-8 w-8 text-white'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
              </svg>

              <svg
                onClick={() => changeTrack(true)}
                className='h-6 w-6 text-white'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path d='M287.1 447.1c17.67 0 31.1-14.33 31.1-32V96.03c0-17.67-14.33-32-32-32c-17.67 0-31.1 14.33-31.1 31.1v319.9C255.1 433.6 270.3 447.1 287.1 447.1zM52.51 440.6l192-159.1c7.625-6.436 11.43-15.53 11.43-24.62c0-9.094-3.809-18.18-11.43-24.62l-192-159.1C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6z' />
              </svg>
            </div>
          </div>

          <div className='h-1.5 bg-blue-400/20' />
        </header>

        <div className='w-full rounded-md bg-neutral-700 p-2'>
          <div>
            <input
              type='text'
              placeholder='type to search'
              className='w-full rounded-md border-none bg-neutral-800 p-1.5 text-white ring-1 ring-transparent focus:outline-none focus:ring-yellow-500'
            />
          </div>

          <div className='h-0.5 w-full bg-yellow-400'></div>

          <div className='h-96 overflow-y-auto pl-7 py-4'>
            {videos?.map((el: any, i: number) => (
              <article className='flex items-baseline space-x-2 '>
                <div className='text-sm w-5'>
                  {currentVideo?.name === el?.name ? (
                    <i className='fa-solid fa-pause'></i>
                  ) : (
                    <i className='fa-solid fa-play'></i>
                  )}
                </div>
                <div
                  onClick={() => setCurrentVideo(el)}
                  className={`${
                    currentVideo?.name === el?.name && "text-blue-800 "
                  } font-medium py-1 cursor-pointer shrink-0 select-none text-neutral-300`}
                >
                  {el.name.trim()}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;
