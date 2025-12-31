# 📚 Codebase Index

Complete index and documentation of the ScrapeOverflow Apify Actor codebase.

---

## 📁 Project Structure

```
scrape-overflow/
├── .actor/                    # Apify Actor configuration
│   ├── actor.json            # Actor metadata and configuration
│   ├── input_schema.json     # Input parameter definitions
│   ├── output_schema.json    # Output schema definition
│   ├── dataset_schema.json   # Dataset structure and views
│   ├── key_value_store_schema.json  # Key-value store organization
│   └── INPUT_TEST.json       # Test input file
├── src/
│   └── main.ts               # Main Actor entry point (implementation)
├── actor.json                # Root actor config (duplicate/legacy?)
├── Dockerfile                # Container image definition
├── package.json              # Node.js dependencies and scripts
├── tsconfig.json             # TypeScript compiler configuration
├── eslint.config.mjs         # ESLint configuration
├── README.md                 # User-facing documentation
├── AGENTS.md                 # AI agent development guidelines
└── Lingo.md                  # Domain-specific terminology

```

---

## 🔑 Key Files

### Core Implementation

#### `src/main.ts`
**Purpose:** Main Actor entry point and orchestration logic

**Key Responsibilities:**
- Initializes Apify Actor SDK
- Reads and validates input parameters
- Orchestrates two parallel scraping workflows:
  1. **Stack Overflow Search** - Google search with `site:stackoverflow.com` filter
  2. **General Google Search** - Regular Google search results
- Uses PlaywrightCrawler for JavaScript-heavy sites
- Handles CAPTCHA detection
- Deduplicates results using `Set<string>`
- Pushes structured data to dataset via `Actor.pushData()`
- Implements monetization via `Actor.charge()` for processed items

**Key Components:**
- `Input` interface - TypeScript type for actor input
- Two separate `PlaywrightCrawler` instances (SO and Google)
- Link extraction and URL cleaning logic
- Snippet extraction from search result containers
- Error handling and logging

**Lines of Code:** 206

---

### Configuration Files

#### `.actor/actor.json`
**Purpose:** Apify Actor metadata and runtime configuration

**Key Properties:**
- `name`: "scrape-overflow"
- `title`: "Stack Overflow + GitHub Context Scraper"
- `version`: "1.0"
- `input`: References `input_schema.json`
- `storages`: References dataset and key-value store schemas
- `dockerfile`: Points to root `Dockerfile`
- `meta.generatedBy`: "Claude Sonnet 4.5"

---

#### `.actor/input_schema.json`
**Purpose:** Defines input parameters with validation and UI form

**Input Parameters:**
1. `searchQuery` (string, required)
   - Default: "crawlee timeout error"
   - Description: Search query for Stack Overflow/Google

2. `stackOverflowLinks` (integer, optional)
   - Default: 5
   - Range: 0-50
   - Description: Number of Stack Overflow links to scrape

3. `googleLinks` (integer, optional)
   - Default: 5
   - Range: 0-50
   - Description: Number of general Google search links

4. `proxyConfiguration` (object, optional)
   - Default: `{ "useApifyProxy": true }`
   - Description: Apify proxy settings for anti-bot protection

---

#### `.actor/dataset_schema.json`
**Purpose:** Defines dataset structure and UI views for output

**Output Fields:**
- `source` (string): "stackoverflow" | "google"
- `title` (string): Question/page title
- `url` (string, URI format): Link to the resource
- `summary` (string): Brief snippet from search results

**Views:**
- `overview`: Table view showing all fields with proper formatting (URL as link)

---

#### `.actor/output_schema.json`
**Purpose:** Defines where Actor stores output and API templates

**Output Locations:**
- Dataset: Contains structured search results
- Links to API endpoints for accessing output

---

#### `.actor/key_value_store_schema.json`
**Purpose:** Organizes key-value store collections (if used)

**Note:** Currently actor primarily uses dataset storage

---

### Build & Development

#### `Dockerfile`
**Purpose:** Multi-stage Docker image for Apify platform

**Stages:**
1. **Builder stage**: 
   - Base: `apify/actor-node-playwright-chrome:22`
   - Installs dev dependencies
   - Builds TypeScript (`npm run build`)

2. **Production stage**:
   - Base: `apify/actor-node-playwright-chrome:22`
   - Installs production dependencies only
   - Copies built files from builder
   - Runs `npm run start:prod`

**Optimizations:**
- Layer caching for `package.json`
- Separate build/production stages
- Production stage omits dev dependencies

---

#### `package.json`
**Purpose:** Node.js project configuration and dependencies

**Dependencies:**
- `apify`: ^3.4.2 - Apify SDK
- `crawlee`: ^3.13.8 - Web scraping framework
- `playwright`: ^1.40.0 - Browser automation

**Dev Dependencies:**
- TypeScript toolchain (`typescript`, `tsx`, `@apify/tsconfig`)
- Linting (`eslint`, `@apify/eslint-config`)
- Formatting (`prettier`)

**Scripts:**
- `start` / `start:dev`: Run with `tsx` (development)
- `start:prod`: Run compiled JS (production)
- `build`: Compile TypeScript to JavaScript
- `lint` / `lint:fix`: ESLint checks and fixes
- `format` / `format:check`: Prettier formatting

---

#### `tsconfig.json`
**Purpose:** TypeScript compiler configuration

**Key Settings:**
- Extends: `@apify/tsconfig` (Apify's base config)
- Target: ES2022
- Module: NodeNext (ES modules)
- Output: `dist/` directory
- Includes: `./src/**/*`

---

### Documentation

#### `README.md`
**Purpose:** User-facing documentation

**Contents:**
- Project description and use cases
- Visual workflow diagram
- Input/output format documentation
- Quick start guide
- Tech stack overview

---

#### `AGENTS.md`
**Purpose:** AI agent development guidelines (workspace rules)

**Contents:**
- Apify Actors development best practices
- Do's and don'ts
- Project structure guidelines
- Schema specifications
- Commands reference

---

#### `Lingo.md`
**Purpose:** Domain-specific terminology and concepts

**Note:** Check file for specific domain vocabulary

---

## 🔄 Data Flow

```
1. Input (INPUT_TEST.json or Actor input)
   ↓
2. src/main.ts reads input via Actor.getInput()
   ↓
3. Two parallel PlaywrightCrawler instances:
   ├─ Stack Overflow Search (site:stackoverflow.com)
   └─ General Google Search
   ↓
4. Results extracted, deduplicated, cleaned
   ↓
5. Actor.pushData() → Dataset
   ↓
6. Dataset Schema defines output format
   ↓
7. Output Schema provides API links
   ↓
8. Actor.charge() for monetization
```

---

## 🎯 Entry Points

### Local Development
```bash
npm run start:dev    # Runs src/main.ts with tsx
apify run            # Runs Actor locally via Apify CLI
```

### Production
```bash
npm run build        # Compiles TypeScript → dist/
npm run start:prod   # Runs dist/main.js
```

### Deployment
```bash
apify push           # Builds Docker image and deploys to Apify
```

---

## 🧩 Architecture Patterns

### Crawler Pattern
- Uses **PlaywrightCrawler** from Crawlee
- Separate crawler instances for different search types
- Each crawler has its own `requestHandler` function
- CAPTCHA detection in request handlers

### Data Extraction Pattern
- Locator-based extraction (`page.locator()`)
- XPath for finding parent containers
- URL cleaning and normalization
- Snippet extraction from search result containers

### Deduplication Pattern
- Uses `Set<string>` to track seen URLs
- Checks before adding to results
- Prevents duplicate entries across both search types

### Monetization Pattern
- Tracks `processedItemsCount`
- Charges via `Actor.charge()` at end
- Wrapped in try-catch (graceful fallback if not configured)

---

## 🔍 Code Locations

### Input Handling
- Input interface: `src/main.ts:4-12`
- Input reading: `src/main.ts:16`
- Default values: `src/main.ts:19-21`
- Validation: `src/main.ts:24-26`

### Stack Overflow Scraping
- Crawler setup: `src/main.ts:44-109`
- Search URL construction: `src/main.ts:112`
- Link extraction: `src/main.ts:69-105`

### Google Search Scraping
- Crawler setup: `src/main.ts:121-181`
- Search URL construction: `src/main.ts:184`
- Link extraction: `src/main.ts:146-177`

### Data Output
- Data push: `src/main.ts:97-102`, `src/main.ts:169-174`
- Schema: `.actor/dataset_schema.json`

### Monetization
- Charge logic: `src/main.ts:193-202`

---

## 🛠 Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Runtime** | Node.js 18+ | JavaScript execution |
| **Language** | TypeScript | Type-safe development |
| **Framework** | Apify SDK | Actor orchestration |
| **Crawling** | Crawlee | Web scraping framework |
| **Browser** | Playwright | Headless browser automation |
| **Container** | Docker | Deployment and isolation |
| **Package Manager** | npm | Dependency management |

---

## 📝 Schema Files Summary

| File | Purpose | Key Definitions |
|------|---------|----------------|
| `input_schema.json` | Input validation | `searchQuery`, `stackOverflowLinks`, `googleLinks`, `proxyConfiguration` |
| `dataset_schema.json` | Dataset structure | `source`, `title`, `url`, `summary` fields + table view |
| `output_schema.json` | Output API links | Dataset and key-value store API endpoints |
| `key_value_store_schema.json` | KV store org | Collections organization (if used) |

---

## 🚨 Important Notes

1. **Browser Required**: Uses Playwright (not Cheerio) because Google Search requires JavaScript execution
2. **CAPTCHA Handling**: Detects CAPTCHA but doesn't solve (logs warning)
3. **Proxy Recommended**: Uses Apify proxy by default to avoid blocks
4. **Monetization**: Charges per processed item (optional, gracefully handles missing config)
5. **Deduplication**: Prevents duplicate URLs across both search types using a Set
6. **URL Cleaning**: Handles Google redirect URLs (`url?q=...`) by extracting actual URLs

---

## 🔗 External Dependencies

### Runtime
- **apify**: Actor SDK for Apify platform integration
- **crawlee**: Web scraping framework (provides PlaywrightCrawler)
- **playwright**: Browser automation engine

### Development
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **eslint**: Code linting
- **prettier**: Code formatting

---

## 📊 Metrics

- **Total Files**: ~15 configuration and source files
- **Source Code**: 1 main TypeScript file (~206 lines)
- **Configuration**: 6 JSON schema files
- **Documentation**: 3 markdown files

---

## 🔄 Version History

- **Current Version**: 1.0
- **Template**: `ts-crawlee-playwright`
- **Generated By**: Claude Sonnet 4.5

---

*Last indexed: Generated automatically*
