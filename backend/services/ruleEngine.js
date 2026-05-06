export const analyzeWithRules = (code) => {
  let issues = [];

  if (code.includes("var ")) {
    issues.push("Use 'let' or 'const' instead of 'var'");
  }

  if (code.includes("==")) {
    issues.push("Use '===' instead of '=='");
  }

  if (code.length < 20) {
    issues.push("Code too short to analyze properly");
  }

  return issues;
};