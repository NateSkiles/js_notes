const prompt = require('prompt-sync')();

// Returns true if the given character is a vowel
let isVowel = char => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(char.toLowerCase()) !== -1;
}

let capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

let removeLastChar = string => string.slice(0, -1);

// Return an array of translated words
let translator = words => {
    let translation = [];
    words.forEach(word => {
        word += "-";
        let firstLetter = word.charAt(0);
        if (isVowel(firstLetter)) {
            word += "yay";
        } else {
            word += firstLetter;
            word += "ay";
            word = word.slice(1);
        }
        translation.push(word);
    });
    return translation;
}

let output = words => {
    let translation = translator(words);
    let string1 = "";
    let string2 = "";
    words.forEach(word => string1 += `${capitalizeFirstLetter(word)} `);

    translation.forEach(word => string2 += `${capitalizeFirstLetter(word)} `);
    return `Original: "${removeLastChar(string1)}"\nTranslation: "${removeLastChar(string2)}"\n`;
}

let app = () => {
    while (true) {
        let input = prompt(`Please enter a word or phrase you'd like translate: `).toLowerCase();
        if (input === 'quit' || input === 'q' ) {
            return false;
        } else {
            console.log(`${output(input.split(' '))}\n\nTo stop, please type quit or q\n\n`);
        }
    }
}

app();