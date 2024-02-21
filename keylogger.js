let keystrokeElement; // Global variable to keep track of the keystroke element

document.addEventListener('keypress', function(event) {
    const key = event.key;
    showKeystroke(key);
});

function showKeystroke(key) {
    // If there's an existing keystroke element, remove it
    if (keystrokeElement) {
        keystrokeElement.remove();
    }

    // Create a new keystroke element
    keystrokeElement = document.createElement('div');
    keystrokeElement.className = 'keystroke-item'; // Added class for styling
    keystrokeElement.textContent = key;
    const keyloggerSection = document.getElementById('keylogger');
    keyloggerSection.appendChild(keystrokeElement);
}
