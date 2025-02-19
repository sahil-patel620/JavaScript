const requestUrl = "https://api.github.com/users/sahil-patel620";
let imgUrl;
let name;
let followers;

const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
// onreadystatechange event is triggered everytime the readyState property of an XMLHttpRequest object changes
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // console.log(data.followers);
    imgUrl = data.avatar_url;
    name = data.name;
    followers = data.followers;
  }
};
xhr.send();

const card = document.querySelector("#card");
const img = document.createElement("img");
const p = document.createElement("p");
const button = document.createElement("button");
button.innerHTML = "Show Details";

card.parentNode.insertBefore(button, card);

button.addEventListener("click", function () {
  card.appendChild(img);
  card.classList.add("card-style");
  img.src = imgUrl;
  card.appendChild(p);
  p.innerHTML = `Name: ${name} <br> Followers: ${followers}`;
});
