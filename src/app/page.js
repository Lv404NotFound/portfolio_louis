import "./globals.css";

export default function Home() {
  const largeTextStyle = {
    fontSize: '40px'
  };

  return (
    <div className="grid grid-cols-4 gap-4 font-semibold text-green h-[100vh] border border-green-500">
      <div className="col-span-1 border-r border-green-500 flex flex-col justify-between hover:bg-green-500 hover:text-white transform hover:scale-110 transition duration-300 relative number-container">
        <div className="text-[30px] py-5 px-5 number">01</div>
        <div className="flex justify-center items-center h-full mb-5"><h1 className="col-span-1" style={largeTextStyle}>ABOUT <br/> <span className="pl-10">ME</span></h1></div>
      </div>
      <div className="col-span-1 border-r border-green-500 flex flex-col justify-between hover:bg-green-500 hover:text-white transform hover:scale-110 transition duration-300 relative number-container">
        <div className="text-[30px] py-5 px-5 number">02</div>
        <div className="flex justify-center items-center h-full mb-5"><h1 className="col-span-1" style={largeTextStyle}>PROJECTS</h1></div>
      </div>
      <div className="col-span-1 border-r border-green-500 flex flex-col justify-between hover:bg-green-500 hover:text-white transform hover:scale-110 transition duration-300 relative number-container">
        <div className="text-[30px] py-5 px-5 number">03</div>
        <div className="flex justify-center items-center h-full mb-5"><h1 className="col-span-1" style={largeTextStyle}>EXPERIENCES</h1></div>
      </div>
      <div className="col-span-1 flex flex-col justify-between hover:bg-green-500 hover:text-white transform hover:scale-110 transition duration-300 relative number-container">
        <div className="text-[30px] py-5 px-5 number">04</div>
        <div className="flex justify-center items-center h-full mb-5"><h1 className="col-span-1" style={largeTextStyle}>CONTACT</h1></div>
      </div>
    </div>
  );
}