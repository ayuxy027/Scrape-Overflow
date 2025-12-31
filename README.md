# 🌍 ScrapOverflow

> **Multilingual Developer Search** powered by AI  
> Search Stack Overflow & Google in ANY language — results auto-translated by [Lingo.dev](https://lingo.dev)

---

## 🎯 The Problem

95% of Stack Overflow's best answers are in English. If you're a developer who thinks in Spanish, Japanese, or Hindi, you're missing out on the world's largest knowledge base.

**ScrapOverflow fixes this.**

---

## ✨ What It Does

```
┌─────────────────────────────────────────────────────────────────────┐
│                     YOUR QUERY (any language)                        │
│              "メモリリーク JavaScript" (Japanese)                     │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
                   🔄 LINGO.DEV AI
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   🇺🇸 English         🇪🇸 Spanish        🇩🇪 German
   "memory leak       "fuga memoria     "Speicherleck
    JavaScript"        JavaScript"       JavaScript"
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                   🔍 PARALLEL SEARCH
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
        ▼                                       ▼
   🟠 STACK OVERFLOW                      🔵 GOOGLE
   (site:stackoverflow.com)               (general web)
        │                                       │
        └───────────────────┬───────────────────┘
                            │
                   🔄 TRANSLATE BACK
                            │
                            ▼
              ┌─────────────────────────┐
              │   📦 TRANSLATED RESULTS  │
              │                         │
              │ 🇯🇵 Title (Japanese)     │
              │ 🇺🇸 Original (English)   │
              │ 📝 Summary              │
              │ 🔗 URL                  │
              └─────────────────────────┘
```

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🌐 **Any Language Input** | Search in English, Spanish, Japanese, Chinese, Hindi, Arabic... |
| 🔄 **Auto Translation** | Queries translated to 6 languages for maximum coverage |
| 🎯 **Smart Results** | Results translated back to YOUR preferred language |
| 🏷️ **Language Flags** | Visual indicators: 🇺🇸 🇪🇸 🇯🇵 🇩🇪 🇫🇷 🇨🇳 |
| 📖 **Answer Bodies** | Optional: Scrape full SO answers (not just titles) |
| 🔒 **Code Preserved** | Code blocks stay untouched during translation |
| ⚡ **Fast** | Parallel searches across multiple languages |

---

## ⚙️ Input Configuration

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `searchQuery` | string | — | Your search query (any language, UTF-8, emoji) |
| `targetLang` | string | `"en"` | Translate results to this language |
| `stackOverflowLinks` | integer | `5` | Number of SO results (0-50) |
| `googleLinks` | integer | `5` | Number of Google results (0-50) |
| `translateQuery` | boolean | `true` | Translate query to find multilingual results |
| `includeAnswerBody` | boolean | `false` | Scrape full SO answers (slower) |
| `lingoApiKey` | string | — | Your Lingo.dev API key |

### Supported Languages

🇺🇸 English • 🇪🇸 Spanish • 🇫🇷 French • 🇩🇪 German • 🇯🇵 Japanese  
🇨🇳 Chinese • 🇮🇳 Hindi • 🇧🇷 Portuguese • 🇰🇷 Korean • 🇸🇦 Arabic

---

## 📤 Output Format

### Example Result

```json
{
  "source": "stackoverflow",
  "url": "https://stackoverflow.com/questions/123456",
  "title": "¿Cómo solucionar memory leaks en JavaScript?",
  "titleOriginal": "How to fix memory leaks in JavaScript?",
  "summary": "Explicación detallada sobre closures y garbage collection...",
  "summaryOriginal": "Detailed explanation about closures and garbage collection...",
  "langDetected": "en",
  "langTarget": "es",
  "langFlag": "🇺🇸"
}
```

### With Answer Body

```json
{
  "source": "stackoverflow",
  "url": "https://stackoverflow.com/questions/123456",
  "title": "メモリリークの修正方法",
  "titleOriginal": "How to fix memory leaks",
  "summary": "クロージャとガベージコレクションについての説明...",
  "summaryOriginal": "Explanation about closures...",
  "answerBody": "解決策：WeakMapを使用してください...",
  "langDetected": "en",
  "langTarget": "ja",
  "langFlag": "🇺🇸"
}
```

---

## 🔧 Setup

### 1. Get Your Lingo.dev API Key

1. Sign up at [lingo.dev](https://lingo.dev)
2. Get your API key from the dashboard
3. Add it as `LINGODOTDEV_API_KEY` environment variable or pass via input

### 2. Run Locally

```bash
# Install dependencies
npm install

# Set your API key
export LINGODOTDEV_API_KEY=your_key_here

# Run the actor
apify run
```

### 3. Deploy to Apify

```bash
apify login
apify push
```

---

## 💡 Use Cases

### 🤖 AI Context Building
Feed relevant SO discussions to ChatGPT/Claude in YOUR language:
```
Query: "React hooks best practices" → Target: 🇯🇵 Japanese
Result: Full context ready for Japanese developers
```

### 🌍 Global Team Collaboration
Your team speaks different languages? Everyone gets results in their preferred language.

### 📚 Learning in Your Native Language
Read the world's best programming answers without language barriers.

### 🔬 Research Across Languages
Find solutions that only exist in German, Russian, or Japanese forums.

---

## 🏆 Hackathon

Built for the **Lingo × Apify Actor Hackathon** 🎉

### Requirements Met

| Requirement | Status |
|-------------|--------|
| Apify Actor (Node.js) | ✅ |
| Lingo.dev API integration | ✅ Uses `LingoDotDevEngine` for translation |
| Quality score ≥65 | ✅ |
| Public listing | ✅ |
| Pay-per-usage | ✅ |
| Published after Nov 3, 2025 | ✅ |
| No blacklisted sources | ✅ Only SO + Google |

---

## 🛠 Tech Stack

- **[Crawlee](https://crawlee.dev)** — Web scraping framework
- **[Playwright](https://playwright.dev)** — Headless browser
- **[Lingo.dev](https://lingo.dev)** — AI-powered translation
- **[Apify](https://apify.com)** — Serverless execution
- **TypeScript** — Type-safe code

---

## ⚡ Why ScrapOverflow?

| Feature | Other Scrapers | ScrapOverflow |
|---------|---------------|---------------|
| Multilingual search | ❌ | ✅ |
| Auto-translation | ❌ | ✅ |
| Language detection | ❌ | ✅ |
| Cross-language discovery | ❌ | ✅ |
| Code preservation | ❌ | ✅ |
| Real browser | Maybe | ✅ Playwright |
| Proxy support | Maybe | ✅ Apify |

---

## 📊 Example Run

```
🚀 ScrapOverflow - Multilingual Developer Search
================================================
📝 Query: "React useEffect cleanup"
🎯 Target language: 🇪🇸 ES
📊 SO links: 5, Google links: 5
🔄 Translate query: true

🔍 Detected query language: 🇺🇸 EN

📋 Search queries (4 variants):
   1. React useEffect cleanup
   2. React useEffect limpieza
   3. React useEffect Bereinigung
   4. React useEffect nettoyage

🟠 Searching Stack Overflow for 5 results...
  ✓ 🇺🇸 How to clean up useEffect subscriptions...
  ✓ 🇺🇸 useEffect cleanup function not working...
  ✓ 🇩🇪 useEffect Cleanup-Funktion richtig...
  ✓ 🇪🇸 Limpieza correcta de useEffect...
  ✓ 🇺🇸 Memory leak in useEffect...

🔵 Searching Google for 5 results...
  ✓ 🇺🇸 React docs: Using the Effect Hook...
  ✓ 🇫🇷 Guide complet useEffect React...
  ✓ 🇺🇸 Best practices for useEffect...

================================================
✅ ScrapOverflow Complete!
📊 Total results: 10
   🟠 Stack Overflow: 5
   🔵 Google: 5

🌍 Languages found:
   🇺🇸 EN: 6
   🇩🇪 DE: 2
   🇪🇸 ES: 1
   🇫🇷 FR: 1
```

---

## 📜 License

ISC

---

**ScrapOverflow** — *The world's developer knowledge, in YOUR language.* 🌍
