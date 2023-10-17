import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

const RegistrodevozPage = () => {
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const navigate = useNavigate();
  const [mediaStream, setMediaStream] = useState(null);
  const [isImageBouncing, setIsImageBouncing] = useState(false);

  useEffect(() => {
    if (isMicrophoneActive) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setMediaStream(stream);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    } else {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setMediaStream(null);
      }
    }
  }, [isMicrophoneActive]);

  const toggleMicrophone = () => {
    setIsMicrophoneActive((prevIsMicrophoneActive) => !prevIsMicrophoneActive);
    setIsImageBouncing(!isMicrophoneActive);
  };

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
        <div className="bg-white-A700 flex flex-col items-center justify-center p-24 md:px-5 w-[41%] md:w-full">
          <Text
            className="mt-[13px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsBold26"
          >
            Vamos a registrar tu voz
          </Text>
           
            <Text
              className="mt-[7px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
              size="txtPoppinsMedium26"
            >
              Por favor di
            </Text>
            <Text
              className="mt-2.5 md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
              size="txtPoppinsLight26"
            >
              My name is ....
            </Text>
            <Img
              className={`h-[135px] mt-14 ${
                isImageBouncing ? "animate-bounce" : ""
              }`}
              src="images/img_vector.svg"
              alt="vector"
            />
          
          
            <Button
              className="cursor-pointer leading-[normal] mt-16 text-center text-sm w-[307px]"
              shape="round"
              onClick={toggleMicrophone}
            >
              {isMicrophoneActive ? "Detener micrófono" : "Activar micrófono"}
            </Button>
            <Button
              className="common-pointer cursor-pointer leading-[normal] mb-2.5 mt-7 text-center text-sm w-[307px]"
              onClick={() => navigate("/registroderostro")}
              shape="round"
            >
              Continuar
            </Button>
          
        </div>
      </div>
    </>
  );
};

export default RegistrodevozPage;