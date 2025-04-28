const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kevin-picture2.jpg") {
    myImage.setAttribute("src", "images/kevin-picture2.jpg");
  } else {
    myImage.setAttribute("src", "images/kevin-picture1.jpg");
  }
};
