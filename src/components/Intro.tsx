const Intro=()=>{
    return (
         <div className="w-full h-screen flex flex-col-reverse sm:flex-row items-center justify-center px-5 bg-white shadow-lg">

          <div className="sm:w-1/2 w-full flex flex-col items-start justify-center text-left space-y-6 p-10">
            <h1 className="text-3xl sm:text-5xl leading-from-tight text-gray-800">
              Great <span className="font-bold bg-gradient-to-b from-green-500 to-purple-500 text-transparent bg-clip-text">Product</span> is <span className="font-bold">built</span> by great <span className="bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text font-bold">
              teams
            </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              We help build and manage a team of world class developers to bring your vision to life.
            </p>
            <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300">
              Let's get started
            </button>
          </div>

          <div className="sm:w-1/2 w-full flex items-center justify-center mb-8 sm:mb-0">
            <img
              src="/teamImage.jpg"
              alt="team"
              className="w-full max-w-md sm:max-w-full h-auto object-contain"
            />
          </div>
      </div>
    );
}

export default Intro;