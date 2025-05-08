import logo2 from "../../public/images/logo2.png";
import upper from "../../public/images/upperDesign.png";
import lower from "../../public/images/lowerDesign.png";

const Page = ({ children, hideLogo = false, hideFooter }) => {
  return (
    <div
      className="relative max-w-[794px] h-[1123px] mx-auto mb-6 bg-white shadow-xl overflow-hidden py-2 md:p-10 "
      
    >
      {!hideLogo && (
        <header className="w-full relative">
          <img
            src={logo2}
            alt="PRD Robotech Logo"
            className="w-[50px] h-[60px] sm:w-[60px] sm:h-[70px] md:w-[60px] md:h-[60px]"
          />

          <img
            src={upper}
            alt="Upper Design"
            className="absolute right-[-12%] top-[-40px] w-[200px] h-[60px] sm:w-[250px] sm:h-[70px] md:w-[400px] md:h-[150px]"
          />
        </header>
      )}

      <div className="relative z-10 h-full w-full">{children}</div>

      <footer className="w-full absolute font-semibold bottom-2 sm:bottom-4 md:pt-20 md:bottom-6 text-xs sm:text-sm md:text-sm text-gray-600 print:text-sm print:bottom-6">
        {!hideFooter && (
          <p className="w-fit">
            www.prdrobotechsolutions.com
            <hr className="border-[#dadada] pt-1" />
            prdrobotechsolutions@gmail.com
          </p>
        )}
        <img
          src={lower}
          alt="Lower Design"
          className={`absolute right-0 -top-0 ${
            hideFooter
              ? "w-[300px] h-[300px] sm:w-[150px] sm:h-[40px] md:-top-11 md:w-[450px] md:h-[150px]" 
              : "w-[200px] h-[60px] sm:w-[300px] sm:h-[80px] md:w-[430px] md:h-[150px]" 
          }`}
        />
      </footer>
    </div>
  );
};

export default Page;
