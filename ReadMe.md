## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- positioing (Relative and Absolute)
- Web-first workflow
- Background image
- javaScript

\*Note: These are just my examples. Delete this note and replace the list above with your own choices\*\*

### What I learned

i learnt alot while building these Quote web application. such as the implimentation of the the Api voice uttrance, more on color blending and more on how to improved my code.

`css
    background-blend-mode: overlay;`

`` js

let utterance = new SpeechSynthesisUtterance(
`${document.getElementById("quote").innerHTML}`
);
speechSynthesis.speak(utterance);
``
