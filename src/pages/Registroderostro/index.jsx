import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

const RegistroderostroPage = () => {
  const navigate = useNavigate();
  const [cameraActive, setCameraActive] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const handleCameraToggle = async () => {
    if (!cameraActive) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
      }
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
    }
    setCameraActive(!cameraActive);
  };

 
  return (
    <>
      <div className="bg-gradient flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-start justify-between mx-auto md:pl-10 sm:pl-5 pl-[97px] w-full">
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
                The most secure way to register
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[53px] md:px-5 w-[41%] md:w-full">
          <Img
            className="h-[82px] mt-[5px]"
            src="images/img_vector_blue_300.svg"
            alt="vector"
          />
          <Text
            className="mt-5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
            size="txtPoppinsBold24"
          >
            Registro por rostro
          </Text>
          <div className="my-3 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl">
            Por favor presiona iniciar cámara
          </div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="h-[240px] rounded-lg"
          />

          <div className="flex flex-col gap-[27px] items-center justify-start mt-3 mb-3 w-3/4 md:w-full">
            <Button
              className="cursor-pointer h-[57px] leading-[normal] text-base text-center w-[307px]"
              shape="round"
              onClick={handleCameraToggle}
            >
              {cameraActive ? "Detener cámara" : "Iniciar cámara"}
            </Button>
            <Button
              className="common-pointer cursor-pointer h-[57px] leading-[normal] text-base text-center w-[307px]"
              onClick={() => navigate("/registroexitoso")}
              shape="round"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroderostroPage;