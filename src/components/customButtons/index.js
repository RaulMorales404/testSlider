import React from "react";
import { OptionsButtons } from "../slider/styles";

const CustomButton = ({action}) => {
  return <OptionsButtons onClick={()=>{action(1)}}></OptionsButtons>;
};
export default CustomButton;
