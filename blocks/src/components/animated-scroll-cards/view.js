gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  

  gsap.utils.toArray(".wp-block-atoms-animated-scroll-card").forEach(card => {

    gsap.to(card, {
      "--border-gradient": "linear-gradient(87deg, #FFFFFF 0%, #388E3C 50%, #EEEEEE 100%)",
      ease: "slow(0.7,0.7,false)",
      scrollTrigger: {
        trigger: card, // individual card
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });

    let line = card.querySelector(".line");
    if (line) {
      gsap.to(line, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card, // same card
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });
    }
  });
})