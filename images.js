const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.2) {
      entry.target.classList.add("fade")
    } else {
      entry.target.classList.remove("fade")
    }
  })
}, {
  threshold: [0, 0.2, 0.8, 1]
})

const images = document.querySelectorAll('img');
images.forEach(image => {
  observer.observe(image)
})

const h1s = document.querySelectorAll('h1');
h1s.forEach(h1 => {
  observer.observe(h1)
})
