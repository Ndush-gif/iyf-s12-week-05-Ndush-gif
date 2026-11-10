# Week 5: DOM Manipulation

## Author
- **Name:** Catherine Nduku
- **GitHub:** [Ndush-gif](https://github.com/Ndush-gif)
- **Date:** Nov 10, 2026

## Project Description
An interactive to-do list built with HTML, CSS and JavaScript, plus practice files for selecting, traversing, changing and creating elements, and for handling events. I built the to-do list following the class walkthrough and used the practice code to understand how the DOM and events work.

## Technologies Used
- HTML5
- CSS3
- JavaScript (DOM manipulation, events, event delegation)
- Git and GitHub
- GitHub Pages

## Features
- Add tasks, and show a message when the input is empty
- Click a task to mark it completed (it gets a strikethrough)
- Delete a task with a button that appears on hover or keyboard focus
- Filter tasks by All, Active and Completed
- "items left" counter and a Clear Completed button
- Double-click a task to edit it: Enter saves, Escape cancels
- One delegated click listener on the list handles toggling and deleting
- Accessible markup: a hidden label for the input, `aria-label` on delete buttons, `aria-pressed` on the filters and a `role="alert"` error message

## Practice Files
- `dom-practice.html` and `dom.js`: Tasks 9.1 to 9.4 (ten ways of selecting elements, traversing, changing text, attributes and classes, creating, cloning and removing elements) and the Lesson 10 event practice (event listeners, a click counter, the event object and keyboard shortcuts)

## How to Run
1. Clone this repository
2. Open `index.html` in your browser, or use the Live Server extension in VS Code
3. Open `dom-practice.html` the same way and press F12 to see the Console output

## Project Structure
```
iyf-s12-week-05-Ndush-gif/
├── index.html
├── styles.css
├── app.js
├── dom-practice.html
├── dom.js
├── .gitignore
└── README.md
```

## Lessons Learned
- `querySelector` returns the first match or `null`, and writing `.textContent` on `null` throws a `TypeError`, so I check the result first.
- `querySelectorAll` gives a static NodeList (a snapshot) and `getElementsByTagName` gives a live HTMLCollection. After I inserted a paragraph, the live one grew from 3 to 4 and the static one stayed at 3.
- A NodeList is not an array, so I spread it (`[...navItems].map(...)`) when I need `map`.
- `textContent` shows text as text, while `innerHTML` can run code, so user input must go in with `textContent`.
- Events bubble up from the clicked element to its parents, so one listener on the `ul` can handle every task. In the to-do list the array of tasks is the single source of truth, and `render()` redraws the page from it.

## Challenges Faced
- `console.log(element)` showed elements that already had later changes, such as the new link and class names. I learned that it logs a reference to the live element, not a frozen copy.
- I assumed `.textContent` on `null` would be safe, but it crashes the script, so I now check that the element exists first.
- TODO: add a real problem you hit while building or testing this project, and how you solved it.

## Live Demo
[View Live Demo](https://ndush-gif.github.io/iyf-s12-week-05-Ndush-gif/)