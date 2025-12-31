# Lingo.dev - AI-Powered Localization Toolkit

Lingo.dev is an open-source, AI-powered internationalization (i18n) toolkit designed to automate localization for web and mobile applications. The project provides a comprehensive suite of tools including a build-time compiler for React applications, a command-line interface for translating various file formats, a real-time translation SDK for dynamic content, and CI/CD integrations for automated translation workflows. Built as a monorepo using pnpm and Turbo, it supports multiple frameworks (Next.js, Vite, React Router) and numerous file formats (JSON, YAML, Markdown, Android XML, iOS strings, and more).

The toolkit leverages Large Language Models (LLMs) to generate high-quality translations while maintaining code structure, formatting, and context. It features intelligent caching, fingerprinting to avoid redundant translations, lockfile management for consistency, and support for both managed translation services (Lingo.dev Engine) and custom LLM providers (OpenAI, Google, Anthropic, Mistral, Ollama, OpenRouter). The compiler enables zero-config localization by automatically transforming React components at build time, while the CLI provides granular control over translation workflows with support for various bucket types, key filtering, and watch mode for continuous translation.

## Lingo.dev Compiler API

Build-time localization for Next.js applications

The Lingo.dev Compiler integrates directly into your Next.js build configuration to automatically localize React components without modifying existing code. It supports both Webpack and Turbopack bundlers, works with React Server Components, and generates separate bundles for each target locale.

```typescript
// next.config.ts
import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  // Your existing Next.js configuration
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de", "ja", "zh"],
  sourceRoot: "app",
  lingoDir: "lingo",
  models: "lingo.dev",
  useDirective: true,
  debug: false,
  rsc: true,
  turbopack: {
    enabled: "auto",
    useLegacyTurbo: false
  }
})(nextConfig);
```

## Lingo.dev Compiler API (Vite)

Build-time localization for Vite and React Router applications

The Vite integration provides the same build-time localization capabilities for Vite-based projects including standalone React apps and React Router applications. It plugs into the Vite plugin system to transform components during the build process.

```typescript
// vite.config.ts
import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import lingoCompiler from "lingo.dev/compiler";

const viteConfig: UserConfig = {
  plugins: [react()],
};

export default defineConfig(() =>
  lingoCompiler.vite({
    sourceRoot: "src",
    sourceLocale: "en",
    targetLocales: ["es", "fr", "de"],
    models: "lingo.dev",
    debug: false
  })(viteConfig)
);
```

## Compiler Custom LLM Configuration

Using custom LLM providers with the compiler

The compiler supports configuring custom LLM providers for translation instead of using the managed Lingo.dev Engine. You can specify different models for different locale pairs using a mapping syntax.

```typescript
// next.config.ts with custom models
import lingoCompiler from "lingo.dev/compiler";

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "ja"],
  models: {
    "en:es": "google:gemini-2.0-flash",
    "en:fr": "openai:gpt-4o-mini",
    "en:ja": "anthropic:claude-3-5-haiku-20241022",
    "*:*": "google:gemini-2.0-flash" // Fallback for any other pair
  },
  prompt: "Translate the following text from {SOURCE_LOCALE} to {TARGET_LOCALE}. Preserve all formatting and placeholders."
})(nextConfig);

// Required environment variables:
// GOOGLE_GENERATIVE_AI_API_KEY=your-google-key
// OPENAI_API_KEY=your-openai-key
// ANTHROPIC_API_KEY=your-anthropic-key
```

## LingoDotDevEngine Class

Real-time translation SDK for dynamic content

The SDK provides programmatic access to translation APIs for translating user-generated content, dynamic data, and other runtime content that cannot be handled at build time. It supports text, objects, arrays, chat conversations, and HTML documents.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY,
  apiUrl: "https://engine.lingo.dev",
  batchSize: 25,
  idealBatchItemSize: 250
});

// Check authentication
const user = await engine.whoami();
console.log(`Authenticated as: ${user?.email}`);

// Translate a single text string
const translatedText = await engine.localizeText(
  "Welcome to our application!",
  {
    sourceLocale: "en",
    targetLocale: "es",
    fast: false
  }
);
// Result: "¡Bienvenido a nuestra aplicación!"

// Translate an object with nested strings
const content = {
  title: "User Dashboard",
  greeting: "Hello, {name}!",
  actions: {
    save: "Save Changes",
    cancel: "Cancel",
    delete: "Delete Account"
  }
};

const localizedContent = await engine.localizeObject(
  content,
  {
    sourceLocale: "en",
    targetLocale: "fr",
    fast: false
  },
  (progress, sourceChunk, processedChunk) => {
    console.log(`Translation progress: ${progress}%`);
  }
);
// Result: { title: "Tableau de bord utilisateur", greeting: "Bonjour, {name}!", ... }
```

## SDK Batch Translation

Translating text to multiple locales simultaneously

The SDK can translate a single text string to multiple target locales in parallel, which is more efficient than sequential translation when you need the same content in multiple languages.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY
});

const sourceText = "Your order has been shipped and will arrive in 2-3 business days.";

const translations = await engine.batchLocalizeText(
  sourceText,
  {
    sourceLocale: "en",
    targetLocales: ["es", "fr", "de", "ja", "zh"],
    fast: true
  }
);

// Result: [
//   "Su pedido ha sido enviado y llegará en 2-3 días hábiles.",
//   "Votre commande a été expédiée et arrivera dans 2-3 jours ouvrables.",
//   "Ihre Bestellung wurde versandt und wird in 2-3 Werktagen eintreffen.",
//   "ご注文は発送され、2〜3営業日以内に到着します。",
//   "您的订单已发货，将在2-3个工作日内送达。"
// ]
```

## SDK String Array Translation

Translating arrays of strings while preserving order

When you have a list of strings that need to be translated together (such as form labels, menu items, or validation messages), the SDK can process them as a batch while maintaining their original order.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY
});

const formLabels = [
  "First Name",
  "Last Name",
  "Email Address",
  "Phone Number",
  "Date of Birth",
  "Terms and Conditions"
];

const translatedLabels = await engine.localizeStringArray(
  formLabels,
  {
    sourceLocale: "en",
    targetLocale: "de"
  }
);

// Result: [
//   "Vorname",
//   "Nachname",
//   "E-Mail-Adresse",
//   "Telefonnummer",
//   "Geburtsdatum",
//   "Allgemeine Geschäftsbedingungen"
// ]
```

## SDK Chat Translation

Translating chat conversations while preserving speaker identity

The SDK can translate entire chat conversations while maintaining the structure and preserving speaker names, making it ideal for chat applications, support tickets, and messaging systems.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY
});

const chatHistory = [
  { name: "Alice", text: "Hey, how are you doing today?" },
  { name: "Bob", text: "I'm doing great! Just finished my project." },
  { name: "Alice", text: "That's awesome! Want to grab coffee later?" },
  { name: "Bob", text: "Sure, let's meet at 3pm." }
];

const translatedChat = await engine.localizeChat(
  chatHistory,
  {
    sourceLocale: "en",
    targetLocale: "ja"
  },
  (progress) => console.log(`Progress: ${progress}%`)
);

// Result: [
//   { name: "Alice", text: "ねえ、今日はどうしてる?" },
//   { name: "Bob", text: "とても良いよ!プロジェクトを終えたばかりだ。" },
//   { name: "Alice", text: "それは素晴らしい!後でコーヒーでも飲まない?" },
//   { name: "Bob", text: "もちろん、午後3時に会おう。" }
// ]
```

## SDK HTML Translation

Translating complete HTML documents with structure preservation

The SDK can translate entire HTML documents while preserving all markup, structure, formatting, and localizable attributes. It handles text content, meta tags, alt attributes, placeholders, and titles.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY
});

const htmlDocument = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Welcome to our online store">
  <title>Online Store - Best Deals</title>
</head>
<body>
  <h1>Welcome to Our Store</h1>
  <p>Find the best products at <strong>amazing prices</strong>!</p>
  <img src="logo.png" alt="Company Logo">
  <input type="text" placeholder="Search products...">
  <a href="/help" title="Get help">Customer Support</a>
</body>
</html>
`;

const translatedHtml = await engine.localizeHtml(
  htmlDocument,
  {
    sourceLocale: "en",
    targetLocale: "es"
  },
  (progress) => console.log(`Translation: ${progress}%`)
);

// Result: Fully translated HTML with lang="es" and all text/attributes translated
// while preserving structure, scripts, styles, and markup
```

## SDK Language Detection

Detecting the language of arbitrary text

The SDK can automatically detect the language of a given text, which is useful for routing user input to appropriate translation pipelines or for analyzing multilingual content.

```typescript
import { LingoDotDevEngine } from "lingo.dev/sdk";

const engine = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY
});

const texts = [
  "Hello, how are you?",
  "Bonjour, comment allez-vous?",
  "Hola, ¿cómo estás?",
  "こんにちは、お元気ですか?",
  "Hallo, wie geht es dir?"
];

for (const text of texts) {
  const detectedLocale = await engine.recognizeLocale(text);
  console.log(`"${text}" -> ${detectedLocale}`);
}

// Output:
// "Hello, how are you?" -> en
// "Bonjour, comment allez-vous?" -> fr
// "Hola, ¿cómo estás?" -> es
// "こんにちは、お元気ですか?" -> ja
// "Hallo, wie geht es dir?" -> de
```

## CLI Initialization

Setting up localization configuration for a project

The CLI provides an interactive initialization command that creates an `i18n.json` configuration file with schema validation, helping you set up source and target locales and configure translation buckets for your project.

```bash
# Interactive initialization
npx lingo.dev@latest init

# Non-interactive with defaults
npx lingo.dev@latest init -y

# The command creates i18n.json:
# {
#   "version": "1.10",
#   "$schema": "https://lingo.dev/schema/i18n.json",
#   "locale": {
#     "source": "en",
#     "targets": ["es", "fr", "de"]
#   },
#   "buckets": {
#     "json": {
#       "include": ["locales/[locale].json"]
#     }
#   }
# }
```

## CLI Translation Execution

Running the translation pipeline on configured files

The main CLI command processes all configured translation buckets, translating content from the source locale to all target locales. It supports filtering, forcing re-translation, watch mode, and validation.

```bash
# Basic translation run
npx lingo.dev@latest run

# Translate only specific locales
npx lingo.dev@latest run --target-locale es --target-locale fr

# Translate only specific bucket types
npx lingo.dev@latest run --bucket json --bucket yaml

# Filter by file path substring
npx lingo.dev@latest run --file messages.json

# Filter by key prefix (dot-separated)
npx lingo.dev@latest run --key auth.login --key dashboard

# Force re-translation (bypass cache)
npx lingo.dev@latest run --force

# Watch mode with auto-retranslation
npx lingo.dev@latest run --watch --debounce 5000

# Validate translations (CI mode)
npx lingo.dev@latest run --frozen

# With audio feedback
npx lingo.dev@latest run --sound

# Control concurrency
npx lingo.dev@latest run --concurrency 5

# Override API key
npx lingo.dev@latest run --api-key your-api-key-here
```

## CLI Configuration Management

Managing global and project settings

The CLI provides commands for managing configuration settings including API keys, provider settings, and other options. Settings can be stored globally (user-wide) or in project-specific configuration files.

```bash
# View all configuration
npx lingo.dev@latest show config

# Set Lingo.dev API key (user-wide)
npx lingo.dev@latest config set lingo.dev.key sk_your_api_key

# Set custom LLM provider API keys
npx lingo.dev@latest config set openai.key sk-your-openai-key
npx lingo.dev@latest config set google.key your-google-key
npx lingo.dev@latest config set anthropic.key sk-ant-your-key

# Get specific configuration value
npx lingo.dev@latest config get lingo.dev.key

# Remove configuration value
npx lingo.dev@latest config unset lingo.dev.key

# Login to Lingo.dev (interactive)
npx lingo.dev@latest login

# Check authentication status
npx lingo.dev@latest auth

# Logout
npx lingo.dev@latest logout
```

## i18n.json Configuration

Project-level translation configuration file

The `i18n.json` file is the central configuration file for CLI-based translations. It defines source and target locales, translation buckets (file types and patterns), provider settings, and various translation behaviors.

```json
{
  "version": "1.10",
  "$schema": "https://lingo.dev/schema/i18n.json",
  "locale": {
    "source": "en",
    "targets": ["es", "fr", "de", "ja", "zh", "ar"],
    "extraSource": "en-US"
  },
  "buckets": {
    "json": {
      "include": ["src/locales/[locale].json", "public/i18n/[locale].json"],
      "exclude": ["src/locales/debug-[locale].json"],
      "injectLocale": ["$locale"],
      "lockedKeys": ["appVersion", "buildNumber"],
      "lockedPatterns": ["\\$\\{.*?\\}", "\\[\\[.*?\\]\\]"],
      "ignoredKeys": ["internal.debug", "_meta"]
    },
    "yaml": {
      "include": ["config/locales/[locale].yml"]
    },
    "markdown": {
      "include": ["docs/[locale]/**/*.md"]
    },
    "android": {
      "include": ["android/app/src/main/res/values-[locale]/strings.xml"]
    },
    "flat": {
      "include": [
        {
          "path": "locales/[locale].properties",
          "delimiter": "_"
        }
      ]
    }
  },
  "provider": {
    "id": "google",
    "model": "gemini-2.0-flash",
    "prompt": "Translate from {SOURCE_LOCALE} to {TARGET_LOCALE}.",
    "baseUrl": "https://api.example.com",
    "settings": {
      "temperature": 0.3
    }
  },
  "formatter": "prettier"
}
```

## GitHub Actions CI/CD Integration

Automated translation workflow on every push

The GitHub Actions integration automatically translates content on every push to your repository, commits the translations, and can optionally create pull requests. It keeps your translations synchronized with your code changes without manual intervention.

```yaml
# .github/workflows/i18n.yml
name: Lingo.dev i18n

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: lingodotdev/lingo.dev@main
        with:
          api-key: ${{ secrets.LINGODOTDEV_API_KEY }}
          # Optional: Create PR instead of direct commit
          create-pr: true
          pr-title: "chore: update translations"
          pr-body: "Automated translation updates"
          # Optional: Specify target locales
          target-locale: es,fr,de
          # Optional: Run in frozen mode (validate only)
          frozen: false
```

## CLI Inspection Commands

Viewing project configuration and translation state

The CLI provides several commands for inspecting your project's translation configuration, viewing files that will be processed, examining locked/ignored keys, and checking the status of translations.

```bash
# Show full project configuration
npx lingo.dev@latest show config

# List all files that will be translated
npx lingo.dev@latest show files

# Show locked keys (keys that won't be overwritten)
npx lingo.dev@latest show locked-keys

# Show ignored keys (keys that won't be translated)
npx lingo.dev@latest show ignored-keys

# Show specific locale file contents
npx lingo.dev@latest show locale es

# Check translation status
npx lingo.dev@latest status

# View lockfile for consistency tracking
npx lingo.dev@latest show lockfile
```

---

## Integration Patterns and Use Cases

Lingo.dev's modular architecture enables diverse integration patterns for different application requirements. For frontend applications, the compiler approach offers zero-configuration localization by integrating directly into build pipelines—Next.js apps use `lingoCompiler.next()` in their config, while Vite projects use `lingoCompiler.vite()`, both generating localized bundles without code changes. The compiler handles React components, JSX strings, and template literals automatically at build time, making it ideal for static content, UI labels, and error messages. For dynamic content scenarios such as e-commerce product descriptions, user-generated content, or real-time chat applications, the SDK provides the `LingoDotDevEngine` class with methods like `localizeText()`, `localizeObject()`, and `localizeChat()` for on-demand translation. This SDK integration works seamlessly in server-side API routes, serverless functions, and microservices where translations need to happen at request time based on user preferences or content updates.

The CLI-based workflow suits projects with structured translation files across multiple formats. Teams using traditional i18n libraries (i18next, react-intl, FormatJS) can maintain their existing JSON/YAML structure while leveraging Lingo.dev's AI-powered translations through the `npx lingo.dev run` command. This approach excels for mobile app localization (Android XML, iOS strings, Flutter ARB), content management systems (Markdown, MDX, HTML), and configuration files. The CLI's bucket system allows mixing different file formats in a single project, with support for glob patterns like `locales/[locale].json` and advanced features like key locking (`lockedKeys`), pattern locking (`lockedPatterns` for preserving interpolation syntax), and locale injection (`injectLocale` for embedding locale codes). CI/CD integration via GitHub Actions automates the entire workflow: developers commit changes to source locale files, the action runs `lingo.dev run`, translations are generated/updated, and changes are committed back or submitted as pull requests. The `--frozen` flag enables validation mode for PR checks, ensuring translations remain synchronized before merging. This multi-tool approach—compiler for build-time, SDK for runtime, CLI for files, CI/CD for automation—provides comprehensive coverage for internationalization needs across the entire development lifecycle while maintaining flexibility to use each component independently or in combination.

