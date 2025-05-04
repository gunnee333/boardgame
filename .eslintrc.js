module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 원하는 규칙 추가 가능
    "react/react-in-jsx-scope": "off", // Next.js나 CRA에서는 React import가 필요 없음
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
