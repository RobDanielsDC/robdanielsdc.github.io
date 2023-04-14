const section = document.querySelector('.text-scroll');
const leftLine = document.querySelector('.left');
const rightLine = document.querySelector('.right');
const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;
const scrollSpeed = 1; /* adjust the scroll speed as needed */

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const scrollBottom = scrollTop + window.innerHeight;

  /* check if the section is in view */
  if (scrollBottom > sectionTop && scrollTop < sectionTop + sectionHeight) {
    /* calculate the scroll distance from the top of the section */
    const scrollDistance = (scrollBottom - sectionTop) / sectionHeight;
    
    /* update the transform property of the lines of text */
    leftLine.style.transform = `translateX(${scrollDistance * 100}%)`;
    rightLine.style.transform = `translateX(-${scrollDistance * 100}%)`;
  } else {
    /* reset the transform property of the lines of text */
    leftLine.style.transform = 'translateX(-100%)';
    rightLine.style.transform = 'translateX(100%)';
  }
});
