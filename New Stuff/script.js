// Get the container element
const container = document.querySelector('.services-lrg');

// Calculate the distance of the container from the top of the document
const containerTop = container.getBoundingClientRect().top;

// Calculate the height of the viewport
const windowHeight = window.innerHeight;

// Function to check if the container is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (windowHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  if (isElementInViewport(container)) {
    container.classList.add('animate');
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);