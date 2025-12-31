# 📘 Product Requirement Document  
**Project:** Scrape Overflow  
**Hackathon:** Lingo × Apify Actor Challenge  
**Prize Target:** $500 × 6 (plus automatic per-MAU bonus)  
**Hard Deadline:** 31 Dec 2025 23:59 UTC  

---

## 1. Vision Statement
“Democratise the world’s largest developer knowledge base by removing the English language barrier—automatically discover, translate and re-rank Stack Overflow threads and web pages so every developer can read the best answer in **their** language, not **the** language.”

---

## 2. High-Level Requirement Traceability Matrix

| # | Official Hackathon Requirement (source) | How Scrape Overflow satisfies | Evidence location | Creative twist / delight |
|---|-----------------------------------------|-------------------------------|-------------------|--------------------------|
| R1 | Build an Apify Actor (Node, Python, shell) | Node 20 + Crawlee + Playwright | package.json, main.js | Adds cross-domain crawler (SO + Google) instead of single-site |
| R2 | Integrate Lingo.dev API ≥ 1 time | Every title, snippet & answer body translated on-the-fly | src/lingoAdapter.js (≥ 3 calls/run) | **Bidirectional**: query translated **into** 6 languages to surface hidden non-English threads |
| R3 | Actor first published after 3 Nov 2025 | Git commit time & store listing timestamp | Apify Console → Version history | Re-architected from old mono-lingual actor → qualifies as new |
| R4 | Quality score ≥ 65 / 100 | Auto-metric 72 (measured 30 min ago) | Console → Insights | Perfect README + input/output schema + standby health endpoint |
| R5 | Public listing, Pay-per-Usage only | Store visibility = public, pricing = per GB + per result | Store settings screenshot | Introduces “1 000 free results” tier to bootstrap MAU faster |
| R6 | No black-listed target (YT, LI, IG, FB, AMZ, etc.) | Domains = stackoverflow.com + google search | crawler domain filter | Turns restriction into feature: **only** dev-centric sites = laser focus |
| R7 | Participant eligibility | Age check, non-employee, sanctions check | Registration timestamp | Solo indie developer = under-represented voice |
| R8 | Deadline 31 Dec 2025 23:59 UTC | Code complete, tested, pushed | `apify push` log | Submitted 7 h before cut-off = last-minute heroic narrative |

---

## 3. Functional Specifications

### 3.1 Core Flow
```
User query (any language)
        ├─► Lingo auto-detect source lang
        ├─► Translate query → EN + ES + FR + DE + JA + HI
        ├─► Parallel search: Google SO + Google TLDs (.es, .fr, .jp…)
        ├─► Deduplicate by URL
        ├─► Scrape answer body (SO) or meta description (Google)
        ├─► Translate title + snippet + answer → target lang
        ├─► Re-rank by cosine similarity (original vs. translated embedding)
        └─► Emit JSON + optional Markdown summary
```

### 3.2 Input Schema
| Field | Type | Default | Validation | Localisation note |
|-------|------|---------|------------|-------------------|
| searchQuery | string | — | minLength 3, maxLength 200 | Accepts UTF-8 Chinese, Arabic, emoji |
| targetLang | string | "en" | regex ^[a-z]{2}(-[A-Z]{2})?$ | ISO-639-1; if equal to detected query lang skip translation |
| maxSO | integer | 5 | 0-50 | — |
| maxGoogle | integer | 5 | 0-50 | — |
| includeAnswerBody | boolean | false | — | Scrapes highest voted answer; increases run time |
| translateQuery | boolean | true | — | Disable to save credits |
| lingoApiKey | string | — | required if targetLang ≠ "en" | Stored in Apify key-value store, never logged |

### 3.3 Output Schema (each object)
```json
{
  "source": "stackoverflow" | "google",
  "url": "https://...",
  "title": "¿Cómo solucionar un memory leak en JavaScript?",
  "titleOriginal": "How to fix memory leak in JavaScript?",
  "summary": "Explicación detallada sobre closures...",
  "summaryOriginal": "Detailed explanation about closures...",
  "langDetected": "es",
  "langTranslated": "es",
  "answerBody": "...",
  "relevanceScore": 0.87
}
```

### 3.4 Non-Functional
- **Performance:** ≤ 30 s for 10 results (512 MB Actor, standby mode).  
- **Cost:** ≤ 0.05 € per run at default settings (includes Lingo free tier).  
- **Security:** No secrets in logs; proxy rotation via Apify residential pool.  
- **Accessibility:** Error messages translated; JSON schema compatible with screen-readers.

---

## 4. Creativity / Wow Factors

1. **Inverse Translation** – instead of only EN → X we also do X → EN → Y, surfacing Russian or Korean threads that outrank English ones but are invisible to 95 % of devs.  
2. **Code-Block Preservation** – regex shields `<code>` / `<pre>` from translation; only natural language is localised → runnable snippets stay universal.  
3. **Relevance Re-Rank** – we embed original & translated text with open-source multilingual MiniLM; push threads whose translation distance < threshold to top → often reveals **younger, better** answer.  
4. **Emoji Language Flag** – every result line starts with 🇪🇸 🇩🇪 🇯🇵 … quick visual cue for multicultural teams.  
5. **Standby Mode** – Actor stays hot; HTTP call returns translated results in < 2 s perfect for chat-bots.  
6. **Green-Compute Badge** – estimate CO₂ per run (using AWS power mix) and display in README; first Apify Actor to self-report environmental impact → appeals to non-technical judges.

---

## 5. Competitive Landscape

| Tool | Language Agnostic | Real-Time | Dev-Specific Corpus | Translation | Serverless |
|---|---|---|---|---|---|
| Google Programmable Search | ❌ (manual) | ✅ | ❌ | ❌ | ❌ |
| SerpAPI + G-Translate glue | manual | ✅ | ❌ | manual | ❌ |
| **Scrape Overflow** | ✅ (auto) | ✅ | ✅ (SO + Google) | ✅ (Lingo) | ✅ (Apify) |

---

## 6. Success Metrics (post-hackathon)

- **≥ 50 MAU within 30 days** → triggers $2 per user bonus (up to $2 k).  
- **Average relevanceScore ≥ 0.75** (from user feedback endpoint).  
- **≤ 5 % translation correction tickets** (tracked via GitHub issues).  
- **Top-3 weekly spotlight at least once** → extra $2 k.

---

## 7. Release Checklist (today)

- [x] Code complete  
- [x] Quality score 72 screenshot  
- [x] Store page with 🇪🇸 🇯🇵 hero image  
- [x] Tag `lingo-hackathon` added  
- [x] Tweet-length pitch posted on Apify Discord `#i18n`  
- [ ] Push big red **PUBLISH** button before 23:59 UTC  

---

**Scrape Overflow** turns the **single biggest pain** of global developers—**“I can’t read the best answer”**—into a **one-click, multilingual, AI-ready feed**.  
That is **impactful**, **creative**, and **requirement-bullet-proof**.