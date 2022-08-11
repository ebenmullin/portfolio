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


// observer = new IntersectionObserver;



// tried to turn standard js code into jQuery code

// let masks = $(".mask")

// masks.each(function() {
//   mask = this;
//   let image = $(mask).find("img");
//   console.log(image);
//   let iframe = $(mask) + $("iframe");
//   console.log(iframe);

//   let tl = gsap.timeline({
//     scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
//   });
  
//   tl.from(mask, 1.5, {xPercent: -100, ease: Power2.out});
//   tl.from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
//   tl.from(iframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
// })

let masks = document.querySelectorAll(".mask");

masks.forEach(mask => {
  let image = mask.querySelector("img");
  console.log(image);
  let iframe = mask.querySelector("iframe");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl
    .from(mask, 1.5, {xPercent: -100, ease: Power2.out})
    .from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
    .from(iframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
})



let tl = gsap.timeline({
  defaults: {ease: "power4.inOut", duration: 2}
});

tl
  .from($(".section-landing"), 1, {"background-image": "linear-gradient(90deg, #b3b4af 0%, #1a1a1d 0%)"})
  .to($(".hero"), 1, {width: "50%"}, "-=0.5")

// Homepage reactive Mouse

$(document).mousemove(function(event) {
  var xPos = (event.clientX / $(window).width())-0.5,
      yPos = (event.clientY/$(window).height())-0.5,
      plane = $(".hero");
 
 TweenLite.to(plane, 0.5, {
   rotationY: 10 * xPos, 
   rotationX: 10 * yPos,
   ease: "Power4.inOut",
   transformPerspective: 1000,
   transformOrigin: "center"
 });
});

// Changes Isometric Image on hover

$("#isometric").hover(function() {
  $("#isometric").attr("src", "assets/isometric-2.png");

}, function() {
  $("#isometric").attr("src", "assets/isometric-1.png");
});


// Modal for portfolio

const modal = $(".modal");
const previews = $(".image-box img");
const original = $(".modal-img");
const caption = $(".caption");

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