const scrollprompt = document.querySelector("div.scrollprompt")

const togglescrollprompt = function () {
  const pixels = window.pageYOffset
  
  if (pixels > 50) {
    scrollprompt.classList.add("scrolled")
  }
}

togglescrollprompt()

document.addEventListener("scroll", function () {
  togglescrollprompt()
})