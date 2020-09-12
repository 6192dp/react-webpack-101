module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  env: {
    browser: true
  },
  rules: {
    camelcase: [0, { properties: "never" }],
    "no-param-reassign": 0,
    "react/prefer-stateless-function": [0, { ignorePureComponents: false }],
    "react/prop-types": 0,
    "import/prefer-default-export": "off",
    "no-console": 1,
    "no-unused-vars": [
      2,
      {
        varsIgnorePattern: "(^_)",
        args: "all",
        argsIgnorePattern: "(^_)"
      }
    ]
  }
};
