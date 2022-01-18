import styled from "styled-components";

export const ContainerSlider = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RowImage = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgSlider = styled.img`
  width: 97%;
  border-radius: 5px;
  height: 650px;
`;

export const RowButtons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 325px;
  justify-content: space-between;
  width: 99%;
  height: 50px;
`;
export const TextIndex = styled.p`
  font-size: 52px;
  background: #333333;
  padding: 0 17px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
`;

export const ButtonCustom = styled.button`
  background: #333333;
  display: flex;
  border-radius: 50px;
  padding: 10px;
  border: 1px solid #333333;
  cursor: pointer;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px #6f7478 inset;
    transition: all 0.2s;
  }

  &:active {
    background: #5c6063;
    border: 3px solid #5c6063;
  }
`;
export const PointButtons = styled.div`
  position: absolute;
  top: 630px;
  left: 47%;
  justify-content: space-between;
  display: flex;
  width: 100px;
  height: 20px;
`;

export const OptionsButtons = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #333333;
  border: 1px solid #5c6063;
  cursor: pointer;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px #6f7478 inset;
    transition: all 0.2s;
  }

  &:active {
    background: #5c6063;
    border: 4px solid #5c6063;
  }
`;
