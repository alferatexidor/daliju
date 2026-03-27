/* Daliju Studio – script.js additions */

/* Reveal animation on scroll */
const reveals = document.querySelectorAll('.work');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
reveals.forEach(el => el.classList.add('reveal'));


/* Simple fullscreen artwork viewer */
const images = document.querySelectorAll('.work__img');

const viewer = document.createElement('div');
viewer.style.position = 'fixed';
viewer.style.inset = '0';
viewer.style.background = 'rgba(0,0,0,.9)';
viewer.style.display = 'flex';
viewer.style.alignItems = 'center';
viewer.style.justifyContent = 'center';
viewer.style.zIndex = '9999';
viewer.style.cursor = 'zoom-out';
viewer.style.opacity = '0';
viewer.style.transition = 'opacity .3s';
viewer.style.pointerEvents = 'none';

const viewerImg = document.createElement('img');
viewerImg.style.maxWidth = '90%';
viewerImg.style.maxHeight = '90%';
viewerImg.style.objectFit = 'contain';

viewer.appendChild(viewerImg);
document.body.appendChild(viewer);

images.forEach(img => {
  img.addEventListener('click', () => {
    viewerImg.src = img.src;
    viewer.style.opacity = '1';
    viewer.style.pointerEvents = 'all';
  });
});

viewer.addEventListener('click', () => {
  viewer.style.opacity = '0';
  viewer.style.pointerEvents = 'none';
});
