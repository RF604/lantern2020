const animatedItem = document.querySelectorAll("section img, .map, .project-image")

animatedItem.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  let delay = 0.2  
  
  animatedItem.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    if (window.getComputedStyle(tag).opacity == 0 && tagTop < window.innerHeight) {
      tag.style.animation = `fadein .5s ${delay}s both`
      delay = delay + 0.14
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()
})

window.addEventListener("resize", function () {
  fadeIn()
})