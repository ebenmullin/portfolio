



// navigation burger animation

let navExpanded = gsap.timeline({ paused: true });

navExpanded
  .to($(".hamburger .bar:nth-child(1)"), 0.3, { y: 8, rotation: 45 }, "start")
  .to($(".hamburger .bar:nth-child(2)"), 0.3, { opacity: 0 }, "start")
  .to($(".hamburger .bar:nth-child(3)"), 0.3, { y: -8, rotation: -45 }, "start")
  .to($(".nav-links .wrapper"), { duration: 1, ease: "power1.out", "clip-path": "circle(150% at 100% 0%)" }, "start")
  .staggerTo($(".nav-links li, .nav-links button"), 0.5, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.1, "-=0.3");

// Toggle the navigation animation on hamburger click
$(".hamburger").click(function() {
  navExpanded.reversed() ? navExpanded.play() : navExpanded.reverse();
});

// Close the navigation when a link is clicked
$(".nav-links a").click(function() {
  navExpanded.reverse();
});


// Project Slide in Animation

let masks = document.querySelectorAll(".mask");

masks.forEach(mask => {
  let image = mask.querySelector("img");
  let video = mask.querySelector("video");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl
    .from(mask, 1.5, {xPercent: -100, ease: Power2.out})
    .from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
    .from(video, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
});


// GSAP Loading Animation

let tl = gsap.timeline({
  defaults: {ease: "power2.out", duration: 2}
});


tl
  .staggerFrom($(".hero .paragraph"), 2, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1)
  .staggerFrom($(".content"), 2, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=2")
  .to(".preloader", 1, {opacity: 0}, "-=0.5")
  .from("nav", 1, {opacity: 0}, "=-1");


// Landing Video Resize  

const vid = document.querySelector('.landing-video');
const ratio = 16/9;
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight; 
  const scale =  ((w / h) > ratio) ? (w / (ratio * h)) : (h * ratio / w);

  vid.style.transform = 'scale(' + scale + ')';
}
vid.onload = resize;
window.onresize = resize;