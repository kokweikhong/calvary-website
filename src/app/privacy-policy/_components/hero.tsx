const Hero = () => {
  return (
    <div className="bg-[#F5F5F5] h-screen max-h-screen relative">
      <div className="flex flex-col gap-y-[30px] h-full items-center justify-center">
        <h1 className="text-4xl">Privacy Policy</h1>
        {/* <p className="text-xl">Updated December 22, 2022</p> */}
        <div className="flex flex-col gap-y-2 text-center">
          <a href="#privacy-content" className="border border-black px-4 py-2">
            Scroll Down
          </a>
          <span className="text-[11px]">Site Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
