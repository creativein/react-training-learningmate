import { FunctionComponent, useState } from "react";
import Button from "./Button";
import ColorDropDown from "./ColorDropdown";

const ColorMe: FunctionComponent = () => {
  const [color, setColor] = useState("red");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div>
      <h2> Color Me Challenge </h2>
      <ColorDropDown onColorChange={handleColorChange} /><br/>
      <Button color={color} /><br/><br/>
      <span>The text color is {color}</span>
    </div>
  );
};

export default ColorMe;
