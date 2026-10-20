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
//document.getElementById("unsafe").innerHTML = userInput;   // Demonstrates why inserting untrusted HTML is unsafe.
//document.getElementById("safe").textContent = userInput;
// Use textContent for a user's comment because it displays input as text instead of executing it as HTML.


// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================
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
newParagraph.textContent = "This is the new paragraph,inserted before the article's first paragraph.";
article.insertBefore(newParagraph, article.querySelector("p"));

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
