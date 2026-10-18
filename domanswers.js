const h1 = document.querySelector("h1");                          // 1
const contents = document.querySelectorAll(".content");           // 2  (2 paragraphs)
const form = document.getElementById("contact-form");             // 3  (no #)
const emailInput = document.querySelector("#contact-form input[type='email']"); // 4
const navItems = document.querySelectorAll("nav li");             // 5  (3 items)
const firstNavLink = document.querySelector(".nav-link");         // 6  (Home)
const lastPara = document.querySelector("article p:last-of-type");// 7  (second paragraph)

// 8-10, your choice:
const submitBtn = document.querySelector("button[type='submit']");
const h2s = document.querySelectorAll("main h2");                 // 3 h2s
const footer = document.querySelector("footer");

console.log(h1, contents, form, emailInput, navItems, firstNavLink, lastPara);