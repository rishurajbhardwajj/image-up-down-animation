var rec = document.querySelector("#rectangle");
// rec.addEventListener("mousemove", function (dets) {
//   console.log("lola");
// });

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

rec.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://images.pexels.com/photos/10459942/pexels-photo-10459942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );

    div.appendChild(image);
    gsap.to(image, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });

    gsap.to(image, {
      y: "100%",
      ease: Power2,
      delay: 0.6,
      // duration: 0.6,
    });

    document.body.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
    // console.log("loal");
  }, 200)
);
