module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "off",
        "no-template-curly-in-string": "error",
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-else-return": "error",
        "no-new-wrappers": "error",
        "no-proto": "error",
        "no-warning-comments": "warn",
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": "error",
        "comma-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "key-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-lonely-if": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "semi": "error",
        "quotes": ["error", "single"],
        "semi-style": ["error", "last"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false
        }],
        "switch-colon-spacing": "error",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "no-var": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "template-curly-spacing": "error"
    }
};
