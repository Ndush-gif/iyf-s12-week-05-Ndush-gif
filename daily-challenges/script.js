// day 1: color changer
const colorbtn = document.getElementById('colorBtn');
colorbtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => {
    heading.style.color = randomColor;
}); 
});

// day 2: dynamic element creator
// Create a button that adds a new paragraph each time clicked.

// Each paragraph should be numbered
// Include a delete button for each

const addParagraphBtn = document.getElementById('addParagraphBtn');
const paragraphContainer = document.getElementById('paragraphContainer');
let paragraphCount = 1;
addParagraphBtn.addEventListener('click', () => {
    const paraBlock = document.createElement(`p`);
    paraBlock.textContent = `Paragraph ${paragraphCount}`;
    paragraphContainer.appendChild(paraBlock);
    paragraphCount++;
});
const deleteParagraphBtn = document.getElementById('deleteParagraphBtn');
deleteParagraphBtn.addEventListener('click', () => {
    if (paragraphContainer.lastChild) {
        paragraphContainer.removeChild(paragraphContainer.lastChild);
        paragraphCount--;
    } 
})

// Day 3: Image Remover 🟢
// Create a button that removes all images from the page.
// Bonus: Toggle between hide/show instead of remove
const removeImagesBtn = document.getElementById('removeImagesBtn');
removeImagesBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => img.remove());
});
const toggleImagesBtn = document.getElementById('toggleImagesBtn');
let imagesVisible = true;
toggleImagesBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.display = imagesVisible ? 'none' : 'block';
    });
    imagesVisible = !imagesVisible;
});

// Day 4: Content Copier 🟡
// Create two divs - source and target.
// A button copies content from source to target
// Bonus: Copy on drag and drop
const sourceDiv = document.getElementById('sourceDiv');
const targetDiv = document.getElementById('targetDiv');
const copyContentBtn = document.getElementById('copyContentBtn');
copyContentBtn.addEventListener('click', () => {
    targetDiv.innerHTML = sourceDiv.innerHTML;
});
targetDiv.addEventListener('dragover', (event) => {
    event.preventDefault();
});
targetDiv.addEventListener('drop', (event) => {
    event.preventDefault();
    targetDiv.innerHTML = sourceDiv.innerHTML;
});

// Day 5: Dark Mode Toggle 🟡
// Implement a dark mode toggle:

// Toggle class on body element
// Save preference (hint: localStorage is taught in Week 7 — try it early if you like)
// Animate the transition

