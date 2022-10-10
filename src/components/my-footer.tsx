interface Props {}

const MyFooter: React.FC<Props> = () => {
  return (
    <>
      <footer className='relative bg-blue-gray-200 pt-8 pb-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-left lg:text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <h4 className='text-3xl font-semibold text-blue-gray-700'>
                Let's get connected!
              </h4>
              <h5 className='text-lg mt-0 mb-2 text-blue-gray-600'>
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className='mt-6 lg:mb-0 mb-6'>
                <button
                  onClick={() =>
                    window && window.open("https://twitter.com/sohanemon")
                  }
                  className='bg-white text-light-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  onClick={() =>
                    window && window.open("https://facebook.com/m.sohanemon")
                  }
                  className='bg-white text-light-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-facebook-square'></i>
                </button>
                <button
                  onClick={() =>
                    window && window.open("https://dribbble.com/sohanemon")
                  }
                  className='bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
                <button
                  onClick={() =>
                    window && window.open("https://github.com/sohanemon")
                  }
                  className='bg-white text-blue-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-github'></i>
                </button>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                  <span className='block uppercase text-blue-gray-500 text-sm font-semibold mb-2'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Github
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <span className='block uppercase text-blue-gray-500 text-sm font-semibold mb-2'>
                    Other Resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className='text-blue-gray-600 hover:text-blue-gray-800 font-semibold block pb-2 text-sm'>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-blue-gray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blue-gray-500 font-semibold py-1'>
                Sohan R. Emon
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
