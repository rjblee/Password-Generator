var keywordList = "abcdefghijklmnopqrstuvwxyz1234567890";
var temporary = "";

function generatePassword(passwordLength) {
    temporary = "";
    for (let i = 0; i < passwordLength; i++) {
        temporary += keywordList.charAt(Math.floor(Math.random() * keywordList.length));
    }
    return temporary;
}

function populateform(enterLength) {
    document.passGen.output.value = generatePassword(enterLength)
}
