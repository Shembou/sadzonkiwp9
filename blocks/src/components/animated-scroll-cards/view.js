gsap.registerPlugin(ScrollTrigger);

gsap.to(".wp-block-atoms-animated-scroll-card::after", {
  // animate the mask-size to "reveal" border
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%", // Safari
  duration: 2,
  ease: "none",
  scrollTrigger: {
    trigger: ".wp-block-atoms-animated-scroll-card",
    start: "top center",
    end: "bottom center",
    scrub: false,
    toggleActions: "restart none restart none" // replays when you scroll up again
  }
});
