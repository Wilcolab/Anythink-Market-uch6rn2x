function toKebabCase(input) {
    if (arguments.length !== 1) {
        throw new Error('toKebabCase expects exactly one argument.');
    }
    if (typeof input !== 'string' || input === undefined) {
        throw new Error('Input must be a defined string.');
    }

    // Convert to kebab-case
    const kebab = input
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
        .replace(/[\s_]+/g, '-')             // spaces and underscores to hyphens
        .replace(/[^a-zA-Z0-9-]/g, '')       // remove non-alphanumeric except hyphens
        .toLowerCase();

    return kebab;
}

// Example usage:
console.log(toKebabCase("Hello World_ExampleString")); // Output: hello-world-example-string