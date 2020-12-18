module.exports = {
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    extends: ['airbnb-typescript-prettier'],
    rules: {
        'no-plusplus': [
            2,
            {
                allowForLoopAfterthoughts: true,
            },
        ],
    },
};
