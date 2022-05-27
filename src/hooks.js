import { useState } from "react";
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flip = () => {
    setIsFacingUp((oldStatus) => !oldStatus);
  };
  return [isFacingUp, flip];
};

const useAxios = (url) => {
  const [resps, setResps] = useState([]);

  const addData = async (
    formatter = (data) => data, restOfUrl = ""
    ) => {
    const res = await axios.get(url + restOfUrl);
    setResps((data) => [...data, formatter(res.data)]);
  };


  return [resps, addData];
};

export { useFlip, useAxios };
