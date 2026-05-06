import { analyzeWithRules } from "./ruleEngine.js";
import { callAI } from "./aiService.js";
import { formatResponse } from "../utils/formatter.js";

export const analyzeCode = async (code) => {
  // 1. Rule-based analysis
  const ruleIssues = analyzeWithRules(code);

  // 2. AI analysis
  const aiResult = await callAI(code);

  // 3. Combine results
  const finalResult = {
    ruleIssues,
    aiResult
  };

  return formatResponse(finalResult);
};