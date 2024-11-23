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
    const chars = toEncrypt.split("");
    const re = new RegExp("^([a-zA-Z]|\s)*$")
    if (!re.test(toEncrypt)) 
        throw new Error("Alphabetical strings only");
    console.log(chars.map((x) => String.fromCharCode(x.charCodeAt(0) + shift % 26)))
    return chars.map((x) => String.fromCharCode(x.charCodeAt(0) + shift % 26)).join("");

}

export {capitalize, reverseString, casesarCipher};