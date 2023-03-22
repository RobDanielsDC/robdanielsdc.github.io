const marquee = document.querySelector('.marquee');
const logos = marquee.querySelectorAll('img');

// duplicate the logos
logos.forEach((logo) => {
  const clone = logo.cloneNode(true);
  marquee.appendChild(clone);
});

// start the marquee
