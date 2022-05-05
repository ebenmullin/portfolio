gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll(".mask");

$(document).ready(function(){
  $(this).scrollTop(0);
});

$(".toggle-button").click(function() {
  $(".nav-links").toggleClass("active");
})

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if(scroll >= 10) {
    $("nav").addClass("expanded");

  } else {
    $("nav").removeClass("expanded");
  }

});

masks.forEach(mask => {
  let image = mask.querySelector("img");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl.set(mask, {autoAlpha: 1});

  tl.from(mask, 1.5, {xPercent: -100, ease: Power2.out});

  tl.from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
})

let tl = gsap.timeline({
  defaults: {ease: "power4.inOut", duration: 2}
});

// let contactTransition = gsap.timeline({paused: true});
  

tl
  .set("body", {overflow: "hidden"})
  .to(".intro", {opacity: 1, y: 0, duration: 1, stagger: .2})
  .to(".overlay", {height: 0, display: "none", duration: 1, ease: "power1.in"})
  .set("body", {overflow: "auto"})
  .to("nav", {opacity: 1, y: 0, duration: 0.5})
  // .from(".section-landing", {width: 100 + "%", height: 100 + "vh", "border-radius": 0, margin: 0})
  .to(".welcome", {opacity: 1, y: 0, duration: 1})

// contactTransition
//   .to(".section-contact", {x: 0 + "%", duration: 1})
// $(".contact").click(function() {
//   contactTransition.play(0);
// });

$(document).mousemove(function(event) {
  var xPos = (event.clientX / $(window).width())-0.5,
      yPos = (event.clientY/$(window).height())-0.5,
      plane = $('.section-landing');
 
 TweenLite.to(plane, 0.5, {
   rotationY: 5 * xPos, 
   rotationX: 5 * yPos,
   ease: "Power4.inOut",
   transformPerspective: 1000,
   transformOrigin: "center"
 });
});