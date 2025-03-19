import { FunctionComponent } from "react";

const Button: FunctionComponent<{ color: string }> = ({ color }) => {
  return <button style={{backgroundColor: color}} >Color Me</button>;
}

export default Button;