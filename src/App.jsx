//import { useState } from "react";
import { useEffect, useState } from "react";
import { ColofulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsSowFace] = useState(false);
  
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsSowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsSowFace(true);
      } else {
        isShowFace && setIsSowFace(false);
      }
    }
  }, [num]);

  

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="green">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>٩(ˊᗜˋ*)و</p>}
    </>
  );
};
