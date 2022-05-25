import { useState } from "react";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flip = () => {
    setIsFacingUp((oldStatus) => !oldStatus);
  };
  return [isFacingUp, flip];
};

export default useFlip;
