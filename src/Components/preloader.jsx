import { useState, useEffect } from "react";
import { Circle } from "react-preloaders";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [loading]);

  return (
    <Circle
      customLoading={loading}
      time={0}
      color={"#2980b9"}
      background="#2c3e50"
      animation="fade"
    />
  );
};

export default Preloader;
