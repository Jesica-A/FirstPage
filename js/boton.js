var which = 0;
var cambiara = new Array(
  "img/6.jpg",
  "img/11.jpg",
  "img/8.jfif",
  "img/2.jpeg",
  "img/9.jpg",
  "img/1.jpeg",
  "img/4.jpeg",
  "img/5.png",
  "img/7.jpg",
  "img/10.jpg",
  "img/3.jpeg",
  "img/12.jpg"
);

function next() {
  if (which < 11) which++;
  document.getElementById("imagen").src = cambiara[which];
}

function prev() {
  if (which > 0) which--;
  document.getElementById("imagen").src = cambiara[which];
}
