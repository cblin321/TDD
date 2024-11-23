/**
 * Takes a string and captializes the 1st letter
 * @param {String} string to be capitalized
 */
function capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1, string.length)}`
}

/**
 * Takes a string and reverses the order
 * @param {String} string to be reversed
 */
function reverseString(string) {
    return string.split("").reverse().join("");
}

/**
 * Takes a string and encrypts it with the casesar cipher
 * @param {String} toEncrypt string of alphabetical characters (with whitespace) to encrypt
 * @param {Integer} shift, change in the plaintext alphabet
 */
function casesarCipher(toEncrypt, shift) {
    //only alphabetical/whitespace characters,
    let words = toEncrypt.split(/(\s+)/);
    words = words.map(x => shiftWord(x, shift));
    const shifted = words.join("");
    return shifted;

}

/**
 * Check if a character is alphabetical
 * @param {Character} char character to be checked 
 * @returns true if char is alphabetical, false otherwise
 */
function isAlphabetical(char) {
    const lowercase = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    const uppercase = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
    return uppercase || lowercase;
}

/**
 * Takes a word and shifts it according to the casesar cipher
 * @param {String} word 
 * @param {Integer} shift 
 * @returns shifted word
 */
function shiftWord(word, shift) { 
    const chars = word.split("");
    const shifted = chars.map((x) => {
        if (!isAlphabetical(x))
            return x;

        const start = x.toLowerCase() === x ? 96 : 64;  
        const end = x.toLowerCase() === x ? 122 : 90;  
        let ascii = 0;
        ascii = (x.charCodeAt(0) + shift) % end
        if (x.charCodeAt(0) + shift > end)
            ascii += start 
        else if (x.charCodeAt(0) + shift === end)
            ascii += end 
        return String.fromCharCode(ascii)
        }).join("");
    return shifted;
}

/**
 * Function to return a JSON of arr statistics
 * @param {*} arr 
 * @returns average, min, max, length of array
 */
function analyzeArray(arr) {
    const avg = arr.reduce((prev, curr) => prev + curr) / arr.length;
    const max = arr.reduce((prev, curr) => Math.max(prev, curr));
    const min = arr.reduce((prev, curr) => Math.min(prev, curr));
    return {
        average: avg,
        min: min,
        max: max,
        length: arr.length,
    }
}

export {capitalize, reverseString, casesarCipher, analyzeArray};