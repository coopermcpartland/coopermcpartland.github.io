document.getElementById('vulnScannerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const target = document.getElementById('target').value;
    const scanType = document.getElementById('scanType').value;

    let scanOutput = '';

    switch(scanType) {
        case 'XSS':
            scanOutput = checkXSS(target);
            break;
        case 'SQLi':
            scanOutput = checkSQLi(target);
            break;
        case 'DT':
            scanOutput = checkDirectoryTraversal(target);
            break;
        case 'CI':
            scanOutput = checkCommandInjection(target);
            break;
        default:
            scanOutput = 'No vulnerabilities found.';
    }

    const vulnerabilitiesList = document.getElementById('vulnerabilitiesList');
    vulnerabilitiesList.innerHTML = `<li>${scanOutput}</li>`;

    document.getElementById('scanResult').style.display = 'block';
});

function checkXSS(target) {
    // Simulated XSS check
    const maliciousInput = '<script>alert("XSS Vulnerability Found!")</script>';
    if (target.includes(maliciousInput)) {
        return 'XSS vulnerability found: Malicious input detected.';
    }
    return 'No XSS vulnerabilities found.';
}

function checkSQLi(target) {
    // Simulated SQLi check
    const maliciousInput = "1' OR '1'='1";
    if (target.includes(maliciousInput)) {
        return 'SQL Injection vulnerability found: Malicious input detected.';
    }
    return 'No SQL Injection vulnerabilities found.';
}

function checkDirectoryTraversal(target) {
    // Simulated Directory Traversal check
    const maliciousInput = '../etc/passwd';
    if (target.includes(maliciousInput)) {
        return 'Directory Traversal vulnerability found: Malicious input detected.';
    }
    return 'No Directory Traversal vulnerabilities found.';
}

function checkCommandInjection(target) {
    // Simulated Command Injection check
    const maliciousInput = '; ls -la';
    if (target.includes(maliciousInput)) {
        return 'Command Injection vulnerability found: Malicious input detected.';
    }
    return 'No Command Injection vulnerabilities found.';
}
