const breakpoint = window.matchMedia('(max-width: 768px)');

if (breakpoint.matches) {
    const marquee = document.querySelector('.marquee');
    const logos = marquee.querySelectorAll('img');
    
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      marquee.appendChild(clone);
    });
    
    console.log('This code will only execute on screens smaller than 768 pixels');
}


