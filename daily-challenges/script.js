// day 1: color changer
const colorbtn = document.getElementById('colorBtn');
colorbtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => {
    heading.style.color = randomColor;
}); 
})
