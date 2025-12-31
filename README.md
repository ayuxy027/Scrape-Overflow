# 🔍 ScrapOverflow

> **Smart Context Scraper** for AI conversations  
> Get Stack Overflow questions and Google results — instantly.

---

## 📊 How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                        YOUR SEARCH QUERY                        │
│                    "JavaScript memory leaks"                    │
└────────────────────┬────────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌──────────────┐          ┌──────────────┐
│ 🟠 STACK     │          │ 🔵 GOOGLE    │
│ OVERFLOW     │          │ SEARCH       │
│              │          │              │
│ 5 links      │          │ 5 links      │
│ (SO only)    │          │ (any site)   │
└──────┬───────┘          └──────┬───────┘
       │                         │
       └──────────┬──────────────┘
                  ▼
         ┌─────────────────┐
         │  📦 DATASET      │
         │                  │
         │  • Titles        │
         │  • URLs          │
         │  • Summaries     │
         └─────────────────┘
```

---

## ⚙️ Input Configuration

| Field                | Type    | Default | Description                                    |
|---------------------|---------|---------|------------------------------------------------|
| `searchQuery`       | string  | —       | What you're searching for                      |
| `stackOverflowLinks`| number  | 5       | How many SO links (0-50)                      |
| `googleLinks`       | number  | 5       | How many Google results (0-50)                |
| `proxyConfiguration`| object  | enabled | Apify proxy settings (recommended)            |

---

## 📤 Output Format

### Stack Overflow Result
```json
{
  "source": "stackoverflow",
  "url": "https://stackoverflow.com/questions/123456",
  "title": "How to fix memory leak in JavaScript?",
  "summary": "Detailed discussion about closure patterns..."
}
```

### Google Search Result
```json
{
  "source": "google", 
  "url": "https://developer.mozilla.org/...",
  "title": "Memory Management - JavaScript | MDN",
  "summary": "Learn about garbage collection and memory..."
}
```

---

## 🚀 Quick Start

```bash
# Install Apify CLI
npm install -g apify-cli

# Run locally
apify run

# Deploy to Apify
apify push
```

---

## 💡 Use Cases

**🤖 AI Context Building**  
Feed relevant SO discussions + docs to ChatGPT/Claude

**🔬 Research**  
Quick overview of solutions and community discussions

**📚 Learning**  
Collect curated resources on any topic

---

## 🛠 Tech Stack

- **Crawlee** - Web scraping framework
- **Playwright** - Headless browser (handles JavaScript)
- **Google Search** - Real-time results
- **Apify** - Serverless execution

---

## ⚡ Why This Works

✅ **Real browser** - Playwright executes JavaScript  
✅ **Handles modern web** - Works with dynamic content  
✅ **Apify proxies** - Bypasses bot detection  
✅ **Precise control** - Exact number of links per source  
✅ **No duplicates** - Smart deduplication  
✅ **Structured output** - Ready for AI consumption
✅ **Precise control** - Exact number of links per source  
✅ **No duplicates** - Smart deduplication  
✅ **Structured output** - Ready for AI consumption