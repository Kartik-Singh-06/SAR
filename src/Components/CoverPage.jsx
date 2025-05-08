import logo from "../../public/images/logo.png";
import navigation from "../../public/images/navigation.png";

const CoverPage = ({ name }) => {
  return (
    <div className="relative h-[100vh] w-full px-5">
      <img
        src={navigation}
        alt="navigation"
        className="absolute top-1.1 w-[300px] md:w-[550px] -right-1 md:-right-10 md:-top-6"
      />
      <div className="w-full h-full ">
        <header className="w-fit">
          <img
            src={logo}
            alt="PRD Robotech Logo"
            className="w-[150px] pt-2 h-[50px] md:h-[100px] md:w-[350px] md:p-0"
          />
        </header>
        <div className="mt-[37vh]">
          <h1 className="text-[12vw] leading-11 md:text-[6.5rem] md:leading-22 font-bold text-black">
            CAREER <br /> COMPASS <br /> MAP
          </h1>
          <div className="mt-7">
            <span className="text-[#f79d25] uppercase text-[15px]">
              <strong>of</strong>
            </span>
            <h2 className="text-2xl font-semibold text-black">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
