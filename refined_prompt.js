/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * then transforms the first word to lowercase and capitalizes the first letter
 * of each subsequent word, joining them together without separators.
 *
 * @param {string} input - The string to convert to camelCase. Must be a non-null, non-undefined string.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} Throws an error if the input is not a non-null, non-undefined string.
 *
 * @example
 * toCamelCase("first name"); // returns "firstName"
 * toCamelCase("First-Name"); // returns "firstName"
 * toCamelCase("first_name"); // returns "firstName"
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * then transforms all words to lowercase and joins them with dots.
 *
 * @param {string} input - The string to convert to dot.case. Must be a non-null, non-undefined string.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} Throws an error if the input is not a non-null, non-undefined string.
 *
 * @example
 * toDotCase("first name"); // returns "first.name"
 * toDotCase("First-Name"); // returns "first.name"
 * toDotCase("first_name"); // returns "first.name"
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string');
    }

    // Trim and split by non-alphanumeric characters
    const words = input.trim().split(/[\s_\-]+/);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// toCamelCase("first name") => "firstName"
// toCamelCase("First-Name") => "firstName"
// toCamelCase("first_name") => "firstName"
// toCamelCase(true) => throws Error

function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string');
    }

    // Trim and split by non-alphanumeric characters
    const words = input.trim().split(/[\s_\-]+/);

    if (words.length === 0) return '';

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// toDotCase("first name") => "first.name"
// toDotCase("First-Name") => "first.name"
// toDotCase("first_name") => "first.name"
// toDotCase(true) => throws Error

