let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "inline-block";
}




let slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
  function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "inline-block";
  }
let slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
  function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "inline-block";
  }
let slideIndex4 = 1;
showSlides4(slideIndex4);
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
  function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "inline-block";
  }
  
let slideIndex5 = 1;
showSlides5(slideIndex5);
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}
  function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "inline-block";
  }
///////

  window.addEventListener("load", () => {
    const title = document.getElementById("animated-title");
    setTimeout(() => {
      title.classList.add("visible");
      title.style.animation = "glow 1.5s infinite alternate";
    }, 500);
  });
  