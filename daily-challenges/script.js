// ==========================================
// DAY 1: COLOR CHANGER
// ==========================================
const colorbtn = document.getElementById('colorBtn');
colorbtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.style.color = randomColor;
    }); 
});

// ==========================================
// DAY 2: DYNAMIC ELEMENT CREATOR
// ==========================================
const addParagraphBtn = document.getElementById('addParaBtn'); // Matched to HTML id="addParaBtn"
const paragraphContainer = document.getElementById('paraContainer'); // Matched to HTML id="paraContainer"
let paragraphCount = 1;

addParagraphBtn.addEventListener('click', () => {
    // Create a container block for this paragraph row
    const paraBlock = document.createElement('div');
    paraBlock.style.margin = "10px 0";

    // Create the numbered text span
    const textSpan = document.createElement('span');
    textSpan.textContent = `Paragraph ${paragraphCount} `;
    
    // Create an individual delete button for THIS specific paragraph
    const inlineDeleteBtn = document.createElement('button');
    inlineDeleteBtn.textContent = 'Delete';
    inlineDeleteBtn.style.marginLeft = '10px';
    
    // Clicking this specific button targets and removes its parent block
    inlineDeleteBtn.addEventListener('click', () => {
        paraBlock.remove();
    });

    // Assemble and append
    paraBlock.appendChild(textSpan);
    paraBlock.appendChild(inlineDeleteBtn);
    paragraphContainer.appendChild(paraBlock);
    
    paragraphCount++;
});

// ==========================================
// DAY 3: IMAGE REMOVER & TOGGLE
// ==========================================
// Note: If you don't have a remove button in your HTML, this variable evaluates to null safely.
const removeImagesBtn = document.getElementById('removeImagesBtn');
if (removeImagesBtn) {
    removeImagesBtn.addEventListener('click', () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => img.remove());
    });
}

const toggleImagesBtn = document.getElementById('toggleImgBtn'); // Matched to HTML id="toggleImgBtn"
let imagesVisible = true;

toggleImagesBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.display = imagesVisible ? 'none' : 'inline-block';
    });
    // Update button text visually to reflect state
    toggleImagesBtn.textContent = imagesVisible ? 'Show Images' : 'Hide Images';
    imagesVisible = !imagesVisible;
});

// ==========================================
// DAY 4: CONTENT COPIER
// ==========================================
const sourceDiv = document.getElementById('source'); // Matched to HTML id="source"
const targetDiv = document.getElementById('target'); // Matched to HTML id="target"
const copyContentBtn = document.getElementById('copyBtn'); // Matched to HTML id="copyBtn"

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

// ==========================================
// DAY 5: DARK MODE TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
