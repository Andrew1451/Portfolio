const images = document.querySelectorAll('.images')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.classList.contains('leftimages')) {
            entry.intersectionRatio > 0 ? entry.target.style.animation = 'fromLeft 1s forwards ease-out' : entry.target.style.animation = 'none'
        }
        if (entry.target.classList.contains('rightimages')) {
            entry.intersectionRatio > 0 ? entry.target.style.animation = 'fromRight 1s forwards ease-out' : entry.target.style.animation = 'none'
        }
    })
})
images.forEach(image => observer.observe(image))