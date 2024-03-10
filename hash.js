function crackPassword() {
    const hashedPassword = document.getElementById('hashed-password').value.trim();
    const characterSet = document.getElementById('character-set').value;
    const passwordLength = parseInt(document.getElementById('password-length').value, 10);

    const combinations = generateCombinations(characterSet, passwordLength);
    const hashedCombinations = combinations.map(password => {
        return { password, hashed: md5(password) }; 
    });

    const foundPassword = hashedCombinations.find(item => item.hashed === hashedPassword);

    if (foundPassword) {
        document.getElementById('cracked-password').textContent = `Password cracked: ${foundPassword.password}`;
    } else {
        document.getElementById('cracked-password').textContent = 'Password not found in the given character set and length.';
    }
}

function generateCombinations(characterSet, length) {
    const combinations = [];

    function generate(prefix, n) {
        if (n === 0) {
            combinations.push(prefix);
        } else {
            for (let i = 0; i < characterSet.length; i++) {
                generate(prefix + characterSet[i], n - 1);
            }
        }
    }

    generate('', length);
    return combinations;
}
