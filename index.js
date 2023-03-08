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
canvas.width=1920 ;
canvas.height=1500;
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

if (word = "test")
    word = "new test"
else
    word = "test"

    new TypeIt("#element", {
        speed: 50,
        waitUntilVisible: true,
        loop: true,
      })
        .type("I am ", { delay: 500 })
        .type("3D artist")
        .pause(500)
        .delete(10)
        .pause(500)
        .type("Frontend Programer")
        .pause(500)
        .delete(19)
        .type("Backend Programer")
        .pause(500)
        .delete(18)

        .type("Android App developer")
        .pause(500)
        .delete(22)

    
        .go();