import { doSomething } from "../utils.js";

const body = document.body;

const cursor = () => {
  const circleCursor = doSomething("div", "circle-cursor");

  document.body.addEventListener("mousemove", (e) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    circleCursor.style.top = `${pageY - 10}px`;
    circleCursor.style.left = `${pageX - 10}px`;
  });

  document.addEventListener("mousedown", () => {
    circleCursor.classList.add("cursor-down");
  });

  document.addEventListener("mouseup", () => {
    circleCursor.classList.remove("cursor-down");
  });
  body.appendChild(circleCursor);
};

export default cursor;
