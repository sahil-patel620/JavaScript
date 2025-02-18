const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector('body');

let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBgColor= function (){
    body.style.backgroundColor = randomColor();
}
let interval;

start.addEventListener('click',function(){
    // console.log(`Color: ${randomColor()}`)
    interval = setInterval(changeBgColor,1000);
})

stop.addEventListener('click',function(){
    clearInterval(interval)
})
 