const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const type = document.getElementById("type");

const context = canvas.getContext("2d");


const frameCount = 200;
const currentFrame = index => (
  `./animation_done/${index.toString().padStart(4, '0')}.png`
    // https://hryohni.github.io//animation_done/
  )

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=window.screen.availWidth ;

canvas.height=window.screen.availHeight;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()


    new TypeIt("#element", {
        speed: 50,
        waitUntilVisible: true,
        loop: true,
      })
        .type("I am ", { delay: 500 })
        .type("3D artist")
        .pause(500)
        .delete(9)
        .pause(500)
        .type("Frontend Programer")
        .pause(500)
        .delete(18)
        .type("Backend Programer")
        .pause(500)
        .delete(17)

        .type("Android App developer")
        .pause(500)
        .delete(22)

        .type("Designer")
        .pause(500)
        .delete(7)

    
        .go();






        const startAnimation = (entries, observer) => {
          entries.forEach(entry => {
            entry.target.classList.toggle("tracking-in-expand", entry.isIntersecting);
          });
        };
        
        const observer = new IntersectionObserver(startAnimation);
        const options = { root: null, rootMargin: '0px', threshold: 1 }; 
        
        const elements = document.querySelectorAll('.tracking-in-expand');
        elements.forEach(el => {
          observer.observe(el, options);
        });


        const startAnimation1 = (entries, observer) => {
          entries.forEach(entry => {
            entry.target.classList.toggle("slide-in-fwd-center", entry.isIntersecting);
          });
        };
        
        const observer1 = new IntersectionObserver(startAnimation);
        const options1 = { root: null, rootMargin: '0px', threshold: 1 }; 
        
        const elements1 = document.querySelectorAll('.slide-in-fwd-center');
        elements.forEach(el => {
          observer.observe(el, options);
        });





        