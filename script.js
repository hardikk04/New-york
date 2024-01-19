const tl = gsap.timeline();

tl.from(
  ".page1-first",
  1.5,
  {
    left: "85vh",
    top: "26vh",
    overflow: "hidden",
    ease: "power3.inOut",
    width: "4vw",
  },
  1
);

tl.from(
  ".page1-second",
  1.5,
  {
    top: "26vh",
    left: "1vh",
    overflow: "hidden",
    ease: "power3.inOut",
    width: "4vw",
  },
  1
);

tl.from(
  ".page1-third",
  1.5,
  {
    left: "-83vh",
    top: "26vh",
    overflow: "hidden",
    ease: "power3.inOut",
    width: "4vw",
  },
  1
);

tl.to(".page1-black", {
  top: "-100vh",
  ease: "power3.inOut",
});
