// ============================================
// LESSON 9 — CLASSWORK EXERCISE: dom.js (Tasks 9.1–9.4)
// Copy dom-practice.html AND this file into the root of iyf-s12-week-05-{username}.
// Live Server → open dom-practice.html → F12 → Console.
//
// RULES: querySelector by default · textContent for text · classList for looks
//        (no element.style) · const/let only
// ============================================

// small helper: logs ✓ or ✗ so you can check yourself
const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);


// ============================================
// STEP 1 — Task 9.1: select TEN ways. Store each in a const, then log it.
// ============================================
// TODO 1  the h1
const h1 = document.querySelector("h1");
console.log(h1);
// TODO 2  all elements with class "content"
const contents = document.querySelectorAll(".content");      
console.log (contents)
// TODO 3  the form with id "contact-form" (use getElementById — no #)
const form = document.getElementById("contact-form"); 
console.log(form)
// TODO 4  the email input INSIDE the form (one querySelector with a descendant selector)
const emailInput = document.querySelector("#contact-form input[type='email']");
console.log(emailInput)
// TODO 5  all list items in the nav
const navItems = document.querySelectorAll("nav li");   
console.log(navItems)

// TODO 6  the first .nav-link
const firstNavLink = document.querySelector(".nav-link"); 
console.log(firstNavLink)

// TODO 7  the last paragraph in the article   (hint: p:last-of-type)
const lastPara = document.querySelector("article p:last-of-type");
console.log(lastPara)

// TODO 8–10  three more of your own — e.g. the submit button, every h2 in main, the footer
const submitBtn = document.querySelector("button[type='submit']");
console.log(submitBtn)
const h2s = document.querySelectorAll("main h2"); 
console.log(h2s)
const footer = document.querySelector("footer");
console.log(footer)


// Then: what does document.querySelector(".does-not-exist") return? Log it.
const missingElement = document.querySelector(".does-not-exist");
console.log(missingElement); 

// And:  turn your nav items NodeList into an array of their text with [...list].map()
const navItemTexts = [...navItems].map(item => item.textContent.trim());
console.log(navItemTexts);
// ============================================
// STEP 2 — Task 9.2: traverse. Say the route out loud before you write it.
// ============================================
// TODO 1  from the header, find the nav inside it
const navInHeader = document.querySelector("header nav");
console.log(navInHeader);
// TODO 2  from the first .nav-link, get its parent li
const parentLi = firstNavLink.parentElement;
console.log(parentLi);
// TODO 3  from the article, get its next sibling (should be a section)
const article = document.querySelector("article");
const afterArticle = article.nextElementSibling;
console.log(afterArticle);
// TODO 4  from the ul, get all its child li elements
const ul = document.querySelector("ul");
const ulchildItems = ul.children;
console.log(ulchildItems);
// TODO 5  from the footer, go up to the body
const bodyFromFooter = footer.parentElement;
console.log(bodyFromFooter);


// TODO 6  from the first .nav-link, use closest() to reach the header
const headerFromNavLink = firstNavLink.closest("header");
console.log(headerFromNavLink);


// ============================================
// STEP 3 — Task 9.3: change things
// ============================================
// TODO 1  change the h1 text to something of yours   
h1.textContent = "Cate's DOM Practice";

// TODO 2  point the first .nav-link at https://developer.mozilla.org, open in a new tab
//         (target="_blank" and rel="noopener")
firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

// TODO 3  read the article's data-id and data-category with dataset; add data-status="reviewed"
console.log(article.dataset.id);
console.log (article.dataset.category);
article.dataset.status = "reviewed";

// TODO 4  add the class "highlight" to the first .content paragraph,
//         toggle "accent" on the second — NO element.style
contents[0].classList.add("highlight");
contents[1].classList.toggle("accent");

//
// TODO 5  THE INJECTION DEMO — run these two lines and watch:
const userInput = `<img src="x" onerror="alert('watch out!')">`;
// To SEE the attack: uncomment the next line, refresh (an alert pops up), then comment it out again.
// document.getElementById("unsafe").innerHTML = userInput;   // Demonstrates why inserting untrusted HTML is unsafe.
document.getElementById("safe").textContent = userInput;
// Use textContent for a user's comment because it displays input as text instead of executing it as HTML.


// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================
// LIVE vs STATIC: getElementsByTagName is live, querySelectorAll is a snapshot
const liveParas = document.getElementsByTagName("p");   // live HTMLCollection
const staticParas = document.querySelectorAll("p");     // static NodeList
console.log("before:", liveParas.length, staticParas.length); // 3 and 3

// TODO 1  write addNavItem(text, href): creates <li><a class="nav-link" href=…>text</a></li>
//         and appends it to .nav-list. Use textContent for the text.
function addNavItem(text, href) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("nav-link");
    link.href = href;
    link.textContent = text;
    li.appendChild(link);
    document.querySelector(".nav-list").appendChild(li);
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

// TODO 2  create a paragraph and insert it BEFORE the article's first paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is the new paragraph, inserted before the article's first paragraph.";
article.insertBefore(newParagraph, article.querySelector("p"));
console.log("after:", liveParas.length, staticParas.length);  // 4 and 3 — the live one grew

// TODO 3  clone the first nav li (deep), change its text to "Cloned", prepend it to the list
const navList = document.querySelector(".nav-list");
const clonedNavItem = navList.querySelector("li").cloneNode(true);
clonedNavItem.querySelector("a").textContent = "Cloned";
navList.prepend(clonedNavItem);

// TODO 4  remove the footer
footer.remove();



// ============================================
// STEP 5 — COMMIT as you go
//   git add dom-practice.html dom.js
//   git commit -m "Add: element selection practice"
//   git commit -m "Add: content, attribute and class changes"
//   git commit -m "Add: create and remove elements"
//   git push
// ============================================

// ============================================
// Lesson 10 Tasks
// ============================================
// Task 10.1: Event Listeners 🟢
// Exercise 1: Basic Events

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Exercise 2: Event Types

// Mouse events
// element.addEventListener("click", handler);
// element.addEventListener("dblclick", handler);
// element.addEventListener("mouseenter", handler);
// element.addEventListener("mouseleave", handler);
// element.addEventListener("mousemove", handler);

button.addEventListener("mouseenter", () => console.log("mouse entered"));
button.addEventListener("mouseleave", () => console.log("mouse left"));

// Keyboard events
// input.addEventListener("keydown", handler);
// input.addEventListener("keyup", handler);
// input.addEventListener("keypress", handler);  // Deprecated
const nameInput = document.getElementById("name");
nameInput.addEventListener("keydown", (event) => {
    console.log(`Key down: ${event.key}`);
});
nameInput.addEventListener("keyup", (event) => {
    console.log(`Key up: ${event.key}`);
});


// Form events
// form.addEventListener("submit", handler);
// input.addEventListener("focus", handler);
// input.addEventListener("blur", handler);
// input.addEventListener("input", handler);     // Real-time changes
// input.addEventListener("change", handler);    // On blur after change
nameInput.addEventListener("input", (event) => {
    console.log(`Input changed: ${event.target.value}`);
});
nameInput.addEventListener("change", (event) => {
    console.log(`Input changed (on blur): ${event.target.value}`);
});

// Window events
// window.addEventListener("load", handler);
// window.addEventListener("resize", handler);
// window.addEventListener("scroll", handler);
window.addEventListener("resize", () => {
    console.log("Window resized");
});
window.addEventListener("scroll", () => {
    console.log("Window scrolled");
});

// ============================================
// Build: Click Counter
// ============================================
// Create a counter display and buttons
let count = 0;
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `Count: ${count}`;
document.body.appendChild(counterDisplay);

const incrementButton = document.createElement("button");
incrementButton.textContent = "+";
document.body.appendChild(incrementButton);

const decrementButton = document.createElement("button");
decrementButton.textContent = "-";
document.body.appendChild(decrementButton);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

// Update display function
function updateDisplay() {
    counterDisplay.textContent = `Count: ${count}`;
}

// + button increases count
incrementButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});
// - button decreases count
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});
// Reset button sets to 0
resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Task 10.2: The Event Object 🟡

// Exercise: Using Event Properties

document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("click", function (event) {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
    // event.preventDefault();   
    // event.stopPropagation();  
});


//Build: Keyboard Shortcuts
// Implement these shortcuts:
// Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }
    return;
});

// Escape: Clear all form inputs
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const formInputs = document.querySelectorAll("input, textarea");
        formInputs.forEach(input => {
            input.value = "";
        });
    }
    return;
});

// Ctrl+Enter: Submit form
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        const form = document.querySelector("form");
        if (form) {
            form.submit();
        }
    }
    return;
});
