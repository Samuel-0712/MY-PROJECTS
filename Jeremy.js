const heading = document.getElementById('typingH');

// Use \n for line breaks
const text = "Never Guess Your Next Trim.\n Choose It.";
let index = 0;

function type() {
    if (index < text.length) {
        // Replace \n with <br> for HTML line breaks
        if (text.charAt(index) === "\n") {
            heading.innerHTML += "<br>";
        } else {
            heading.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(type, 100); // typing speed
    } else {
        heading.classList.add('blink'); // keep cursor blinking
    }
}

type();
