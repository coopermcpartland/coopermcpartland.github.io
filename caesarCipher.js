function processMessage() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var operation = document.getElementById("operation").value;

    var result = "";
    if (operation === "encode") {
        result = caesarCipherEncode(message, shift);
    } else if (operation === "decode") {
        result = caesarCipherDecode(message);
    }

    document.getElementById("processed-message").innerText = result;
}

function caesarCipherEncode(message, shift) {
    var encodedMessage = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encodedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encodedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encodedMessage += message[i];
        }
    }
    return encodedMessage;
}

function caesarCipherDecode(message) {
    // Automatically detect the shift value for decoding
    var shift = calculateShiftForDecoding(message);
    return caesarCipherEncode(message, 26 - shift);
}

function calculateShiftForDecoding(message) {
    // Calculate the most frequent character's occurrence to determine the shift value
    var charCount = {};
    for (var i = 0; i < message.length; i++) {
        var char = message.charAt(i).toUpperCase();
        if (char >= 'A' && char <= 'Z') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    var maxChar = '';
    var maxCount = 0;
    for (var char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    var shift = (maxChar.charCodeAt(0) - 'E'.charCodeAt(0) + 26) % 26;
    return shift;
}
