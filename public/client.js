const elements = document.getElementsByClassName("hover");

const nav = document.querySelector("nav");
const home = document.querySelector(".section-landing");

const homeOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(function(
  entries,
  homeObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("solid")
      } else {
        nav.classList.remove("solid");
      }
    })
  },
  homeOptions);

  homeObserver.observe(home);

for (let i = 0; i <= elements.length; i++) {
	elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('animated');
	});

  elements[i].addEventListener('mouseover', function(e) {
    elements[i].classList.add('animated')
  })
}
