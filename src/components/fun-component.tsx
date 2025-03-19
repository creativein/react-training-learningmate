import {
    useState,
    useEffect,
    useRef,
    useMemo,
    useLayoutEffect,
    FunctionComponent,
  } from "react";
  
  const FunComponent: FunctionComponent<{ number: number }> = (props) => {
    const [number, setNumber] = useState(1);
    const prevPropsRef = useRef(props);
    const prevStateRef = useRef({ number });
  
    console.log("render (used for updating the DOM)");
  
    useEffect(() => {
      console.log(
        "componentDidMount (used for triggering fetch requests and setting state after response)"
      );
      return () => {
        console.log(
          "componentWillUnmount (used for clearing up side effects like setInterval)"
        );
      };
    },[]);
  
    useEffect(() => {
      console.log("componentDidUpdate");
      console.log("prevProps", prevPropsRef.current);
      console.log("prevState", prevStateRef.current);
  
      prevPropsRef.current = props;
      prevStateRef.current = { number };
    });
  
    useLayoutEffect(() => {
      console.log(
        "ADVANCED - getSnapshotBeforeUpdate (non-deprecated version of componentWillUpdate). This is used for capturing information from the DOM before the rendered component is committed to the DOM (like scroll position). It's called after render() but before changes are committed to the DOM. Anything returned here will be accessible in componentDidUpdate"
      );
      return () => {
        console.log('after DOM is updated');
      }
    }, [number]);
  
    useEffect(() => {
      console.log("getDerivedStateFromProps", props);
    }, [props]);
  
    const changeNumber = () => {
      setNumber(Math.floor(Math.random() * 3));
    };
  
    const shouldComponentUpdate = useMemo(() => {
      console.log(
        "shouldComponentUpdate (used for performance optimization to prevent unnecessary re-renders)"
      );
      console.log("nextProps", props);
      console.log("nextState", { number });
      console.log("should update?", props.number !== number);
      return props.number !== number;
    }, [props.number, number]);
  
    if (!shouldComponentUpdate) {
      return (
        <div>
          <h3>Functional Component Demo</h3>
          Number: {number}
          <p>
            <button onClick={changeNumber}>Change Number</button>
          </p>
        </div>
      );
    }
  
    return (
      <div>
        <h3>Functional Component Demo</h3>
        Number: {number}
        <p>
          <button onClick={changeNumber}>Change Number</button>
        </p>
      </div>
    );
  };
  
  export default FunComponent;