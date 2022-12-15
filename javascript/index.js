$(".hamburger").click(function() {
  navExpanded.reversed() ? navExpanded.play() : navExpanded.reverse();
});

$(".nav-link ul li").click(function() {
  console.log("working")
});

let navExpanded = gsap.timeline({paused: true});

// navExpanded
//   .to($(".hamburger .bar:nth-child(1)"), 0.3, {y: 8, rotation: 45}, "start")
//   .to($(".hamburger .bar:nth-child(2)"), 0.3, {opacity: 0}, "start")
//   .to($(".hamburger .bar:nth-child(3)"), 0.3, {y: -8, rotation: -45}, "start")

//   .to($(".nav-links ul"), {duration: 1, ease: "power1.out", "clip-path": "circle(150% at 100% 0%)"}, "start")
//   .staggerFrom($(".nav-links li, .nav-links button"), 0.5, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=0.3")

// tried to turn standard js code into jQuery code

let masks = document.querySelectorAll(".mask");

masks.forEach(mask => {
  let image = mask.querySelector("img");
  console.log(image + "testing testing");
  let iframe = mask.querySelector("iframe");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl
    .from(mask, 1.5, {xPercent: -100, ease: Power2.out})
    .from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
    .from(iframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
});

let counter = {
  value: 0
}

// let percent = $(".percent");
let precent = document.getElementById("percent")

let tl = gsap.timeline({
  defaults: {ease: "power2.out", duration: 2}
});

tl
  .to(counter, 1, {ease: "none", value: 100, onUpdate: () => percent.innerHTML = Math.round(counter.value) + "%"})
  .to(".percent", 1, {opacity: 0})
  .to(".preloader", 1, {width: 0}, "-=0.5")
  .from(".bg-left", 1, {ease: "power4.inOut", width: 0})
  .from("nav", 1, {opacity: 0}, "=-1")
  .from(".hero", 2, {xPercent: -130}, "=-0.5")
  .from(".hero img", 2, {xPercent: 130}, "=-2")
  .from(".text-container", 1, {opacity: 0, yPercent: 20}, "=-1")
  .from(".rotate", 1, {opacity: 0}, "=-1")
  .set(".hero", {"box-shadow": "0 0 50px rgba(0, 0, 0, 0.9)"});
  // .from("body", 2, {"background-image": "radial-gradient(at 50% 50%, transparent 0%, transparent 100%)"});

$(document).mousemove(function(event) {
  var xPos = (event.clientX / $(window).width())-0.5,
      yPos = (event.clientY / $(window).height())-0.5,
      plane = $(".hero");
 
 TweenLite.to(plane, 0.5, {
   rotationY: 20 * xPos, 
   rotationX: -20 * yPos,
  //  x: -200 * xPos,
  //  y: -200 * yPos,
   ease: "Power4.inOut",
   transformPerspective: 1000,
   transformOrigin: "center"
 });
});

// Modal for portfolio

const modal = $(".modal"),
      previews = $(".image-box img"),
      original = $(".modal-img"),
      caption = $(".caption");

previews.each(function(preview) {
  $(this).on("click", () => {
    modal.addClass("open");
    original.addClass("open");

    const imgDir = $(this).attr("data-original");
    original.attr("src", "./assets/" + imgDir);
    caption.text($(this).attr("alt")); 
  });
});

modal.on("click", (e) => {
  if($(e.target).hasClass("modal")) {
    modal.removeClass("open");
    original.removeClass("open");

  }
});

// apply parallax effect to any element with a data-speed attribute
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window), ease: "none",
  scrollTrigger: {start: 0, end: "max", invalidateOnRefresh: true, scrub: 0}
});

// const config = {
//   rootMargin: "0px",
//   threshold: 0.05
// };

// const observer = new IntersectionObserver(function (entries, self) {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       $("nav").addClass("nav-dark")
//     } else {
//       $("nav").removeClass("nav-dark")
//     }
//   });
// }, config);

// const entry = document.querySelectorAll(".dark");

// entry.forEach(section => {
//   observer.observe(section);
// });