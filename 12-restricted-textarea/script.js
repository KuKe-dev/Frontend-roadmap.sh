var textAreaContainer = document.querySelector('.textarea-container');
var textArea = document.querySelector('#textarea');
var charCountDisplay = document.querySelector('#charCount');
var maxChar = 250;

textArea.addEventListener('input', function() {
    const currentChar = textArea.value.length;

    charCountDisplay.textContent = currentChar + ' / ' + maxChar;

    if (currentChar >= maxChar) {
        textAreaContainer.setAttribute('maxReached', true);
        textArea.setAttribute('maxReached', true);
        charCountDisplay.setAttribute('maxReached', true);
    }
    else {
        textAreaContainer.removeAttribute('maxReached');
        textArea.removeAttribute('maxReached');
        charCountDisplay.removeAttribute('maxReached');
    }
});