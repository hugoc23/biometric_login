import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const InicioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient  flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-start justify-between mx-auto md:pl-10 sm:pl-5 pl-[97px] w-full">
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[355px] w-[22%] md:w-full">
          <div className="flex flex-col gap-[23px] items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtPoppinsBold40"
              >
                Biometric
              </Text>
              <Text
                className="mt-[3px] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
                The most secure way to log in
              </Text>
            </div>
            <Button
              className="cursor-pointer leading-[normal] min-w-[135px] rounded-[18px] text-center text-sm"
              size="xs"
            >
              Read More
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[54px] items-end justify-center p-[84px] md:px-5 w-[41%] md:w-full">
          <div className="flex flex-col gap-[9px] items-start justify-start mt-[158px]">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
              size="txtPoppinsBold26"
            >
              Hello!
            </Text>
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtPoppinsRegular18"
            >
              Please login to your account or register
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start mb-[158px] mr-0.5 w-[88%] md:w-full">
            <Button
              className="common-pointer cursor-pointer leading-[normal] text-center text-sm w-[307px]"
              onClick={() => navigate("/login")}
              shape="round"
            >
              Log In
            </Button>
            <Button
              className="common-pointer cursor-pointer leading-[normal] text-center text-sm w-[307px]"
              onClick={() => navigate("/register")}
              shape="round"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioPage;
