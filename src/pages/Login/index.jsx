import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient  flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-start justify-between mx-auto md:pl-10 sm:pl-5 pl-[97px] w-full">
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[355px] w-[22%] md:w-full">
          <div className="flex flex-col items-start justify-start w-auto">
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
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[37px] items-center justify-center p-[106px] md:px-5 w-[41%] md:w-full">
          <Text
            className="mt-[142px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 w-full"
            size="txtPoppinsBold26"
          >
            Por favor, ingresa tu email
          </Text>
          <Input
            name="email"
            placeholder="Correo"
            className="leading-[normal] p-0 placeholder:text-blue_gray-900_75 text-left text-sm w-full"
            wrapClassName="border border-gray-200 border-solid flex w-full"
            prefix={
              <Img
                className="h-6 mr-2 my-auto"
                src="images/img_bxbxsuser.svg"
                alt="bx:bxs-user"
              />
            }
          ></Input>
          <Button
            className="common-pointer cursor-pointer leading-[normal] mb-[145px] text-center text-sm w-[307px]"
            onClick={() => navigate("/loginvoz")}
            shape="round"
          >
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
