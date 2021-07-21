const images = document.querySelectorAll('.images')

const options = {
    root: null,
    rootMargin: '-100px',
    threshold: []
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.classList.contains('leftimages')) {
            entry.intersectionRatio > 0 ? entry.target.style.animation = 'fromLeft 1s forwards ease-out' : entry.target.style.animation = 'toLeft 1s forwards ease-out'
        }
        if (entry.target.classList.contains('rightimages')) {
            entry.intersectionRatio > 0 ? entry.target.style.animation = 'fromRight 1s forwards ease-out' : entry.target.style.animation = 'toRight 1s forwards ease-out'
        }
    })
}, options)
images.forEach(image => observer.observe(image))