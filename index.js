gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll(".mask");

$(document).ready(function(){
  $(this).scrollTop(0);
});

// Custom Cursor

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", e=> {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
// })

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

tl
  .to("nav", {opacity: 1, y: 0, duration: 0.3})
  .to("h1", {opacity: 1, y: 0, duration: 1})
  // .to(".section-landing", {width: 95 + "%", height: 95 + "vh", opacity: 1, "border-radius": 25, duration: 2})








var rollingTween = new TimelineMax();
var time = 20;
var $rollingTextgoLeft = $(".rolling-text");
var $text = $(".text")

function startRolling() {

  $text.css({width:"auto"});
  $text.width(width);
  var width = $text.width();
  

  rollingTween.to(".rolling-text", time, {
    x: -width,
    ease: Linear.easeNone,
    repeat: -1
  })

  return rollingTween;
}

function rollingText(){
  $('.rolling-text').clone().appendTo(".wrapper-rolling-text");
  startRolling();   
}
rollingText();

function resizeCheck(){
  var progress = rollingTween.progress(); //record the progress so that we can match it with the new tween (jump to the same spot)
  rollingTween.time(0).kill(); //rewind and kill the original tween.
  //time = 5;
  
  startRolling().progress(progress); //create a new tween based on the new size, and jump to the same progress value.
};

resizeCheck();
$(window).resize(resizeCheck);


