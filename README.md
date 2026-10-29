# AI Code Reviewer 🚀

An AI-powered code review tool that helps developers identify potential bugs, improve code quality, and write cleaner, more maintainable code using Large Language Models (LLMs).

## ✨ Overview

**AI Code Reviewer** simplifies the code review process by analyzing submitted code and providing actionable feedback on potential issues, readability, performance, and best practices.

Instead of manually reviewing every line, developers can use AI-generated insights to understand possible problems and discover opportunities to improve their code.

## 🔥 Features

- **AI-Powered Code Analysis:** Get automated feedback on submitted code.
- **Bug Detection:** Identify potential logical errors and common coding mistakes.
- **Code Quality Suggestions:** Improve readability, maintainability, and structure.
- **Performance Insights:** Discover possible inefficiencies and optimization opportunities.
- **Best Practices:** Receive suggestions for writing cleaner code.
- **Actionable Feedback:** Understand potential issues and suggested improvements through AI-generated explanations.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Application development |
| Node.js | Backend runtime |
| Express.js | Backend API and routing |
| React | Frontend user interface |
| Vite | Frontend development and build tooling |
| Groq API | AI-powered code analysis |
| dotenv | Environment variable management |

## 📁 Project Structure

```text
code_reviewer/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── services/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Agithub16/code_reviewer.git
cd code_reviewer
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
GROQ_API_KEY=your_groq_api_key
```

Get your API key from the [Groq Console](https://console.groq.com/).

Start the backend:

```bash
npm start
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | API key used to access the Groq inference API |

**Security note:** Never commit your `.env` file or expose your API key in frontend code or public repositories.

## 💡 How It Works

1. Submit code through the frontend.
2. The frontend sends the code to the backend API.
3. The backend passes the code to the configured AI model.
4. The model analyzes the code and generates review feedback.
5. The frontend displays the generated review.

## 🎯 Use Cases

- Learning from common programming mistakes.
- Reviewing code before submitting a pull request.
- Improving code readability and maintainability.
- Exploring potential performance improvements.
- Practicing better coding habits.

## ⚠️ Limitations

- AI-generated suggestions may occasionally be incorrect or incomplete.
- Review results depend on the model and the quality of the submitted code.
- API usage is subject to the provider's rate limits and quotas.
- AI feedback should complement, not replace, testing and manual review.

## 🚀 Future Improvements

- Support for multiple programming languages.
- Side-by-side code comparison.
- Syntax highlighting and improved review formatting.
- Downloadable review reports.
- Automated test-case suggestions.
- Review history and user accounts.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## 📄 License

No license has been specified yet. Add an appropriate open-source license before inviting others to reuse or distribute the project.

---

**Built to help developers write better code, one review at a time.**
