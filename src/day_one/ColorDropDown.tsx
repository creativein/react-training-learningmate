import React, { FunctionComponent } from "react";

interface ColorDropDownProps {
  onColorChange: (color: string) => void;
}

const ColorDropDown: FunctionComponent<ColorDropDownProps> = ({ onColorChange }) => {
  const colors = ["red", "green", "blue", "yellow"];

  const options = colors.map((color: string, key: number) => {
    return <option key={key} value={color}>{color}</option>;
  });

  return (
    <div>
      <label htmlFor="colors">Choose a color:</label>
      <select id="colors" name="colors" onChange={(e) => onColorChange(e.target.value)}>
        {options}
      </select>
    </div>
  );
};

export default ColorDropDown;
