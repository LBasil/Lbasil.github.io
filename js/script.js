const hoverImage = document.getElementById("hoverImage");
hoverImage.addEventListener("mouseover", function () {
  hoverImage.src = "../img/index/work/pandagenda.png";
},
  hoverImage.addEventListener("mouseout", function () {
    hoverImage.src = "../img/index/work/pikmin.png";
  }),
  //Mobile
  hoverImage.addEventListener("touchstart", function () {
    hoverImage.src = "../img/index/work/pandagenda.png";
  }),
  hoverImage.addEventListener("touchend", function () {
    hoverImage.src = "../img/index/work/pikmin.png";
  }));

const hoverImage2 = document.getElementById("hoverImage2");
hoverImage2.addEventListener("mouseover", function () {
  hoverImage2.src = "../img/index/work/rembourse.png";
}),
  hoverImage2.addEventListener("mouseout", function () {
    hoverImage2.src = "../img/index/work/gengar.png";
  }),
  //Mobile
  hoverImage2.addEventListener("touchstart", function () {
    hoverImage2.src = "../img/index/work/rembourse.png";
  }),
  hoverImage2.addEventListener("touchend", function () {
    hoverImage2.src = "../img/index/work/gengar.png";
  });

const hoverImage3 = document.getElementById("hoverImage3");
hoverImage3.addEventListener("mouseover", function () {
  hoverImage3.src = "../img/index/work/swapbike.png";
}),
  hoverImage3.addEventListener("mouseout", function () {
    hoverImage3.src = "../img/index/work/agumon.png";
  }),
  //Mobile
  hoverImage3.addEventListener("touchstart", function () {
    hoverImage3.src = "../img/index/work/swapbike.png";
  }),
  hoverImage3.addEventListener("touchend", function () {
    hoverImage3.src = "../img/index/work/agumon.png";
  });