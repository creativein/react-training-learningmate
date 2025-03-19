import { FunctionComponent } from 'react';

const FunctionalComponentWithOutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>;
};

const FunctionalComponentWithProps: FunctionComponent<{ number: number }> = ({ number }) => {
  console.log("number", number);
  return <div>FunctionalComponentWithProps {number}</div>;
}

export { FunctionalComponentWithOutProps, FunctionalComponentWithProps };
