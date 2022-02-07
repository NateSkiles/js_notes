const prompt = require('prompt-sync')();

// Util functions
// Returns true if the given character is a vowel
let isVowel = char => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(char.toLowerCase()) !== -1;
}

let capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

let removeLastChar = string => string.slice(0, -1);

// Logic
// Return an array of translated words
let output = words => {
    return words.map(function (word) {
        word += "-";
        let firstLetter = word.charAt(0);
        if (isVowel(firstLetter)) {
            word += "yay";
        } else {
            word += firstLetter;
            word += "ay";
            word = word.slice(1);
        }
        return word
    })
}

let translator = input => {
    let words = input.split(' ');
    let translation = output(words);
    let string = "";

    translation.forEach(word => string += `${capitalizeFirstLetter(word)} `);
    return `Original: "${input}"\nTranslation: "${removeLastChar(string)}"\n`;
}

// App
let app = () => {
    while (true) {
        let input = prompt(`Please enter a word or phrase you'd like translate: `).toLowerCase();
        if (input === 'quit' || input === 'q') {
            return false;
        } else {
            console.log(`${translator(input)}\n\nTo stop, please type quit or q\n\n`);
        }
    }
}

app();