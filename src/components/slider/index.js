import React, { useState } from "react";
import resource from "../../jsonData/img.json";
import {
  ButtonCustom,
  ContainerSlider,
  ImgSlider,
  PointButtons,
  RowButtons,
  RowImage,
  TextIndex,
} from "./styles";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import CustomButton from "../customButtons";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const [jsonData] = useState(resource);

  const handleClickRight = () => {
    index === jsonData.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickLeft = () => {
    index === 0 ? setIndex(jsonData.length - 1) : setIndex(index - 1);
  };

  const handleCLickOptions = (value) => {
    if (index < jsonData.length - 1) {
      index >= 0 ? setIndex(index + 1) : setIndex(index - value);
    } else {
      setIndex(index - value - 3);
    }
  };

  return (
    <ContainerSlider>
      <RowImage>
        <ImgSlider src={jsonData[index]} />
      </RowImage>
      <RowButtons>
        <ButtonCustom onClick={() => { handleClickLeft() }}>
          <FaCaretLeft color="#fff" size="30" />
        </ButtonCustom>
        <TextIndex>{index}</TextIndex>
        <ButtonCustom onClick={() => {handleClickRight()}} >
          <FaCaretRight color="#fff" size="30" />
        </ButtonCustom>
      </RowButtons>
      <PointButtons>
        <CustomButton action={handleCLickOptions} />
        <CustomButton action={handleCLickOptions} />
        <CustomButton action={handleCLickOptions} />
      </PointButtons>
    </ContainerSlider>
  );
};
export default Slider;
