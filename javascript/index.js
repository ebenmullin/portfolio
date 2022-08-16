$(".hamburger").click(function() {
  navExpanded.reversed() ? navExpanded.play() : navExpanded.reverse();
});

$(".nav-link ul li").click(function() {
  console.log("working")
});

// let navExpanded = gsap.timeline({paused: true});

// navExpanded
//   .to($(".hamburger .bar:nth-child(1)"), 0.3, {y: 8, rotation: 45}, "start")
//   .to($(".hamburger .bar:nth-child(2)"), 0.3, {opacity: 0}, "start")
//   .to($(".hamburger .bar:nth-child(3)"), 0.3, {y: -8, rotation: -45}, "start")

//   .to($(".nav-links ul"), {duration: 1, ease: "power1.out", "clip-path": "circle(150% at 100% 0%)"}, "start")
//   .staggerFrom($(".nav-links li, .nav-links button"), 0.5, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=0.3")

// tried to turn standard js code into jQuery code

let Jmasks = $(".mask");

Jmasks.each(Jmask => {
  let Jimage = $(Jmask).find("img")
  console.log(Jimage + "this is cool");
  let Jiframe = $(Jmask).find("iframe")
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: Jmask, toggleActions: "restart none none reset"}
  });
  
  tl
  .from(Jmask, 1.5, {xPercent: -100, ease: Power2.out})
  .from(Jimage, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
  .from(Jiframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
})

// let masks = document.querySelectorAll(".mask");

// masks.forEach(mask => {
//   let image = mask.querySelector("img");
//   console.log(image + "testing testing");
//   let iframe = mask.querySelector("iframe");
  
//   let tl = gsap.timeline({
//     scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
//   });

//   tl
//     .from(mask, 1.5, {xPercent: -100, ease: Power2.out})
//     .from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
//     .from(iframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
// });



let tl = gsap.timeline({
  defaults: {ease: "power2.easeInOut", duration: 2}
});

tl
  .from($(".section-landing"), 1, {"background-image": "linear-gradient(90deg, #b3b4af 0%, #1a1a1d 0%)"}, "start")
  .to($("nav"), 2, {opacity: 1}, "start")
  .from($(".hero"), 2, {xPercent: -130}, "start")
  .from($(".hero img"), 2, {xPercent: 130}, "start")
  .from($(".text-container"), 1, {opacity: 0, yPercent: 20}, "=-1")
// Homepage reactive Mouse

$(document).mousemove(function(event) {
  var xPos = (event.clientX / $(window).width())-0.5,
      yPos = (event.clientY / $(window).height())-0.5,
      plane = $(".hero");
 
 TweenLite.to(plane, 0.5, {
   rotationY: 100 * xPos, 
   rotationX: -100 * yPos,
   x: -200 * xPos,
   y: -200 * yPos,
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


const target = document.querySelector(".section-landing");

const observer = new IntersectionObserver(() => {
    $("nav").toggleClass("expanded")
});

observer.observe(target);