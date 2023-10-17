import React from "react";

import { Img, Text } from "components";

const LoginexitosoPage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-poppins gap-[21px] items-center justify-start mx-auto p-[209px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-[158px]"
          src="images/img_vector_white_a700.svg"
          alt="vector"
        />
        <div className="flex flex-col items-center justify-start mb-[130px]">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
            size="txtPoppinsMedium26WhiteA700"
          >
            Verificación exitosa
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoginexitosoPage;
