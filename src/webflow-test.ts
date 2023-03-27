window.Webflow ||= [];
window.Webflow.push(() => {
  function slider1() {
    const splides = document.getElementsByClassName('splide');

    for (let i = 0; i < splides.length; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perMove: 1,
        //padding: '5em',
        focus: window.innerWidth > 800 ? 'left' : '', // 0 = left and 'center' = center
        type: 'slide', // 'loop' or 'slide'
        gap: window.innerWidth > 800 ? '4.6875em' : '', // space between slides
        arrows: 'slider', // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 500, // transition speed in miliseconds
        //dragAngleThreshold: 30, // default is 30
        //autoWidth: true, // for cards with differing widths
        // rewind: true, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        //updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          3200: {
            perPage: 5,
          },
          2600: {
            perPage: 5,
          },
          1909: {
            perPage: 4,
          },
          1644: {
            perPage: 4,
          },
          1532: {
            perPage: 3,
          },
          1122: {
            perPage: 2,
          },
          //mobile
          785: {
            perPage: 1,
          },
        },
      }).mount();
    }
  }

  slider1();
});
