function processMessage() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const operation = document.getElementById('operation').value;
    let processedMessage;
    if (operation === 'encode') {
        processedMessage = caesarCipher(message, shift);
    } else {
        processedMessage = caesarCipher(message, -shift); // Decoding by shifting in opposite direction
    }
    document.getElementById('processed-message').innerText = "Processed Message: " + processedMessage;
}

function caesarCipher(message, shift) {
    return message.replace(/[a-zA-Z]/g, function(char) {
        let charCode = char.charCodeAt(0);
        let offset = charCode >= 65 && charCode <= 90 ? 65 : 97;
        return String.fromCharCode(((charCode - offset + shift + 26) % 26) + offset);
    });
}
