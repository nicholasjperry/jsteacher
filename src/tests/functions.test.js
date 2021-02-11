const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,3)).toBe(4);
}
);