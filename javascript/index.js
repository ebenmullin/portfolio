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
  let iframe = mask.querySelector("iframe");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl.from(mask, 1.5, {xPercent: -100, ease: Power2.out});

  tl.from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
  tl.from(iframe, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
})

let tl = gsap.timeline({
  defaults: {ease: "power4.inOut", duration: 2}
});

// let contactTransition = gsap.timeline({paused: true});
  

tl
  .set("html", {"overflow": "hidden"})
  .to(".intro", {opacity: 1, y: 0, duration: 1, stagger: .2})
  .to(".overlay", {height: 0, display: "none", duration: 1, ease: "power1.in"})
  .set("html", {"overflow-y": "auto"})
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
      plane = $(".section-landing");
 
 TweenLite.to(plane, 0.5, {
   rotationY: 5 * xPos, 
   rotationX: 5 * yPos,
   ease: "Power4.inOut",
   transformPerspective: 1000,
   transformOrigin: "center"
 });
});


// var cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
// });

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click')
// });


              // Plays video on scroll

// const videoUrl = "https://www.youtube.com/embed/mwpSjEGBJV8?controls=0&loop=1&playlist=mwpSjEGBJV8";

// const observer = new IntersectionObserver(elements => {
//   if(elements[0].intersectionRatio > 0) {
//     console.log("The element is in view!");
//     $("#player").attr("src", videoUrl + "&autoplay=1");
//   }else {
//     console.log("The element is out of view")
//     $("#player").attr("src", videoUrl);

//   }
// })

// const iframe = $("iframe")[0];

// observer.observe(iframe);

$("#isometric").hover(function() {
  $("#isometric").attr("src", "assets/isometric-2.png");

}, function() {
  $("#isometric").attr("src", "assets/isometric-1.png");
});

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