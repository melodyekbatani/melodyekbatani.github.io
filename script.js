// I wanted to make the horizontal scroll trigger through vertical scroll since vertical scrolling is typically more intuitive. I found this link through stackover. 
// https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal
// Removing event.preventDefault lets users scroll both horizontally or vertically

const projects = document.querySelector('.projects')

projects.addEventListener('wheel', function(e) {
    if (window.innerWidth >= 768) {
        projects.scrollLeft += e.deltaY
    }
})