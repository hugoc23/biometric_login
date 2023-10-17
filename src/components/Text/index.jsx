import React from "react";

const sizeClasses = {
  txtPoppinsBold26: "font-bold font-poppins",
  txtPoppinsLight26: "font-light font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium26WhiteA700: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium26: "font-medium font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
