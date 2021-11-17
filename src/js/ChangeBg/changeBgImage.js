("use strict");

const images = [
  { img: "alex.jpg" },
  { img: "Aurora.jpg" },
  { img: "nature2.jpg" },
  { img: "nature3.jpg" },
  { img: "nightSky.jpg" },
];

const login = document.querySelector("#successLogin");
const bgImg = document.createElement("img");

const setBgImage = () => {
  bgImg.src = `/src/image/${
    images[Math.floor(Math.random() * images.length)].img
  }`;
};

setBgImage();
setInterval(setBgImage, 10000);

bgImg.classList.add("bgImage");
login.appendChild(bgImg);
