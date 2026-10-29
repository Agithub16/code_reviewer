
require("dotenv").config();

const OpenAI = require("openai");

const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const SYSTEM_INSTRUCTION = `
You are a senior code reviewer with extensive software
development experience.

Review code for:
1. Code quality and maintainability
2. Bugs and logical errors
3. Performance and efficiency
4. Security vulnerabilities
5. Best practices and readability
6. DRY and SOLID principles
7. Testing and documentation

Explain issues clearly, suggest improvements, and provide
corrected code where useful. Be concise and constructive.
Do not claim code was tested unless it was actually run.
`;

async function generateContent(prompt) {
    try {
        const result = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "system",
                    content: SYSTEM_INSTRUCTION,
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const response = result.choices[0].message.content;

        console.log(response);
        return response;
    } catch (error) {
        console.error("Groq API error:", error.message);
        throw error;
    }
}

module.exports = generateContent;
   