const elements = document.getElementsByClassName("hover");

const nav = document.querySelector("nav");

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