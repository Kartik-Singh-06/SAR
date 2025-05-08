import React from "react";
import logo from "../../public/images/logo.png";
import navigation from "../../public/images/navigation.png";

const EndingPage = () => {
  return (
    <div className=" relative w-full h-full flex justify-center flex-col  items-center">
      <img src={logo} alt="PRD Robotech Logo" />
      <img src={navigation} alt="navigation" className="absolute top-0 -right-10" />
      <p className="w-fit text-[14px] mt-10 text-gray-600 font-bold">
        www.prdrobotechsolutions.com
        <br />
        prdrobotechsolutions@gmail.com
      </p>
    </div>
  );
};

export default EndingPage;
