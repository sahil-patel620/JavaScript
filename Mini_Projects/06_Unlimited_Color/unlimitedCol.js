const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBgColor = function () {
  let color = randomColor();
  body.style.backgroundColor = color;
  console.log(`Color: ${color}`);
};
let interval;

start.addEventListener("click", function () {
  interval = setInterval(changeBgColor, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
  console.log(`Interval Stopped`);
});
