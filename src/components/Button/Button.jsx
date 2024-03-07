import { useState } from "react";
import s from "./Button.module.css";

function Button({ onClickHandler }) {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [color, setColor] = useState(getRandomColor());

  const functionOnClick = () => {
    setColor(getRandomColor);
    onClickHandler();
  };

  return (
    <button
      className={s.button}
      onClick={functionOnClick}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {color}
    </button>
  );
}
export default Button;
