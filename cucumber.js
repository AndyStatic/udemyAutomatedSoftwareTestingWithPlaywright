const common = `
    --require src/setup/assertions.js
    --require src/setup/hooks.js
    --require src/steps/login-step.js
`;
module.exports = {
  default: `${common} features/**/*.feature`,
};
