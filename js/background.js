const background = document.querySelector("#background video");

const video = ["back01.mp4", "back02.mp4", "back03.mp4"];
const randomNumber = Math.floor(Math.random() * video.length);
background.setAttribute("src",`background/${video[randomNumber]}`);