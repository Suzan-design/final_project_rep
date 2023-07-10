var typedTextSpan = document.querySelector(".typed-text");
var cursorSpan = document.querySelector(".cursor");

var textArray = ["ENG. Suzan Adnan Alkhdr"];
var textArrayIndex = 0;
var charIndex = 0;

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, 200);
    }
    else {
        setTimeout(erasing, 2000);
    }
}

function erasing() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, 100);
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(typing, 1500);
    }
}

window.onload = function () {
    setTimeout(typing, 2000);
}

$("figure").onmouseout(
    function () {
        $(this).removeClass("hover");
    }
);