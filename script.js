const tl = gsap.timeline();
document.body.style.overflow = "hidden";

function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 800);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisJs();

tl.from(
  ".page1-first",
  1.5,
  {
    left: "84vh",
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
    left: "-82vh",
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

tl.to(document.body, {
  overflow: "auto",
});

// window.addEventListener("load", function () {
//   window.scrollTo(0, 0);
// });

// // Additionally, if you want to handle the case when the page is reloaded using the browser's reload button
// window.addEventListener("beforeunload", function () {
//   window.scrollTo(0, 0);
// });

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  htmlTag.innerHTML = clutter;
}

clutterAnimation(".page2-right>h1");
gsap.from(".page2-right>h1>span", {
  y: 500,
  // transform: "scaleY(2)",
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 100%",
    end: "top 0%",
    // markers: true,
    scrub: 1,
  },
});

Shery.imageEffect(".page2-img", {
  style: 1,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -0.88, range: [-1, 1] },
    zindex: { value: "9", range: [-9999999, 9999999] },
    aspect: { value: 1.0833399835075679 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.53 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
Shery.imageEffect(".page3-img", {
  style: 1,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -0.92, range: [-1, 1] },
    zindex: { value: "9", range: [-9999999, 9999999] },
    aspect: { value: 3.268693639773362 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.6, y: 0.53 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
