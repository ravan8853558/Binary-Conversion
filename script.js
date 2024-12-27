// Clear Error Message
function clearMessages() {
    document.getElementById("error").textContent = "";
}

// Binary Conversions
function binToDec() {
    clearMessages();
    let bin = document.getElementById("binToDecInput").value.trim();
    if (/^[01]+$/.test(bin)) {
        let dec = parseInt(bin, 2);
        document.getElementById("binToDecResult").textContent = `Decimal: ${dec}`;
    } else {
        document.getElementById("error").textContent = "Invalid Binary Input.";
    }
}

function binToHex() {
    clearMessages();
    let bin = document.getElementById("binToHexInput").value.trim();
    if (/^[01]+$/.test(bin)) {
        let hex = parseInt(bin, 2).toString(16).toUpperCase();
        document.getElementById("binToHexResult").textContent = `Hexadecimal: ${hex}`;
    } else {
        document.getElementById("error").textContent = "Invalid Binary Input.";
    }
}

function binToOct() {
    clearMessages();
    let bin = document.getElementById("binToOctInput").value.trim();
    if (/^[01]+$/.test(bin)) {
        let oct = parseInt(bin, 2).toString(8);
        document.getElementById("binToOctResult").textContent = `Octal: ${oct}`;
    } else {
        document.getElementById("error").textContent = "Invalid Binary Input.";
    }
}

// Decimal Conversions
function decToBin() {
    clearMessages();
    let dec = document.getElementById("decToBinInput").value.trim();
    if (/^\d+$/.test(dec)) {
        let bin = (parseInt(dec)).toString(2);
        document.getElementById("decToBinResult").textContent = `Binary: ${bin}`;
    } else {
        document.getElementById("error").textContent = "Invalid Decimal Input.";
    }
}

function decToHex() {
    clearMessages();
    let dec = document.getElementById("decToHexInput").value.trim();
    if (/^\d+$/.test(dec)) {
        let hex = (parseInt(dec)).toString(16).toUpperCase();
        document.getElementById("decToHexResult").textContent = `Hexadecimal: ${hex}`;
    } else {
        document.getElementById("error").textContent = "Invalid Decimal Input.";
    }
}

function decToOct() {
    clearMessages();
    let dec = document.getElementById("decToOctInput").value.trim();
    if (/^\d+$/.test(dec)) {
        let oct = (parseInt(dec)).toString(8);
        document.getElementById("decToOctResult").textContent = `Octal: ${oct}`;
    } else {
        document.getElementById("error").textContent = "Invalid Decimal Input.";
    }
}

// Hexadecimal Conversions
function hexToBin() {
    clearMessages();
    let hex = document.getElementById("hexToBinInput").value.trim();
    if (/^[0-9A-Fa-f]+$/.test(hex)) {
        let bin = (parseInt(hex, 16)).toString(2);
        document.getElementById("hexToBinResult").textContent = `Binary: ${bin}`;
    } else {
        document.getElementById("error").textContent = "Invalid Hexadecimal Input.";
    }
}

function hexToDec() {
    clearMessages();
    let hex = document.getElementById("hexToDecInput").value.trim();
    if (/^[0-9A-Fa-f]+$/.test(hex)) {
        let dec = parseInt(hex, 16);
        document.getElementById("hexToDecResult").textContent = `Decimal: ${dec}`;
    } else {
        document.getElementById("error").textContent = "Invalid Hexadecimal Input.";
    }
}

function hexToOct() {
    clearMessages();
    let hex = document.getElementById("hexToOctInput").value.trim();
    if (/^[0-9A-Fa-f]+$/.test(hex)) {
        let oct = parseInt(hex, 16).toString(8);
        document.getElementById("hexToOctResult").textContent = `Octal: ${oct}`;
    } else {
        document.getElementById("error").textContent = "Invalid Hexadecimal Input.";
    }
}

// Octal Conversions
function octToBin() {
    clearMessages();
    let oct = document.getElementById("octToBinInput").value.trim();
    if (/^[0-7]+$/.test(oct)) {
        let bin = (parseInt(oct, 8)).toString(2);
        document.getElementById("octToBinResult").textContent = `Binary: ${bin}`;
    } else {
        document.getElementById("error").textContent = "Invalid Octal Input.";
    }
}

function octToDec() {
    clearMessages();
    let oct = document.getElementById("octToDecInput").value.trim();
    if (/^[0-7]+$/.test(oct)) {
        let dec = parseInt(oct, 8);
        document.getElementById("octToDecResult").textContent = `Decimal: ${dec}`;
    } else {
        document.getElementById("error").textContent = "Invalid Octal Input.";
    }
}

function octToHex() {
    clearMessages();
    let oct = document.getElementById("octToHexInput").value.trim();
    if (/^[0-7]+$/.test(oct)) {
        let hex = parseInt(oct, 8).toString(16).toUpperCase();
        document.getElementById("octToHexResult").textContent = `Hexadecimal: ${hex}`;
    } else {
        document.getElementById("error").textContent = "Invalid Octal Input.";
    }
}

// Binary Calculator
function binaryCalculator() {
    clearMessages();
    let bin1 = document.getElementById("binCalcInput1").value.trim();
    let bin2 = document.getElementById("binCalcInput2").value.trim();
    let operation = document.getElementById("calcOperation").value;

    if (/^[01]+$/.test(bin1) && /^[01]+$/.test(bin2)) {
        let num1 = parseInt(bin1, 2);
        let num2 = parseInt(bin2, 2);
        let result;

        switch (operation) {
            case "add":
                result = (num1 + num2).toString(2);
                break;
            case "sub":
                result = (num1 - num2).toString(2);
                break;
            case "mul":
                result = (num1 * num2).toString(2);
                break;
            case "div":
                result = (num1 / num2).toString(2);
                break;
            default:
                result = "Invalid Operation";
        }
        document.getElementById("binCalcResult").textContent = `Result: ${result}`;
    } else {
        document.getElementById("error").textContent = "Invalid Binary Input.";
    }
}
