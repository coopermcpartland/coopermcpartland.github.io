document.addEventListener('keypress', function(event) {
    const key = event.key;
    showKeystroke(key);
});

function showKeystroke(key) {
    const keystrokeElement = document.createElement('div');
    keystrokeElement.id = 'keystroke';
    keystrokeElement.textContent = key;
    document.body.appendChild(keystrokeElement);

    // Trigger a reflow before adding the 'show' class to trigger the CSS transition
    void keystrokeElement.offsetWidth;

    keystrokeElement.style.opacity = '1';

    setTimeout(function() {
        keystrokeElement.style.opacity = '0';
        setTimeout(function() {
            keystrokeElement.remove();
        }, 1000); // Adjust this value to control how long the keystroke is displayed
    }, 1000); // Adjust this value to control how long the keystroke is displayed
}
