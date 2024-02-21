function processMessage() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var operation = document.getElementById("operation").value;

    var result = "";
    if (operation === "encode") {
        result = caesarCipherEncode(message, shift);
    } else if (operation === "decode") {
        result = caesarCipherDecode(message, shift);
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

function caesarCipherDecode(message, shift) {
    return caesarCipherEncode(message, 26 - shift);
}
