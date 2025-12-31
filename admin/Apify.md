### Complete CheerioCrawler Setup and Execution Example

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This comprehensive example combines all previous steps to demonstrate a fully functional `CheerioCrawler`. It sets up the `RequestQueue`, defines the `handlePageFunction`, configures the `CheerioCrawler` with these components, and then runs the crawler to process requests and extract data.

```javascript
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();

        console.log(`The title of "${request.url}" is: ${title}.`);
    };

    // Set up the crawler, passing a single options object as an argument.
    const crawler = new Apify.CheerioCrawler({
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Basic Apify CheerioCrawler Implementation

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This example demonstrates a fundamental setup for Apify's CheerioCrawler. It initializes a RequestQueue with a starting URL, defines a `handlePageFunction` to process the downloaded HTML using Cheerio (extracting the page title), and then runs the crawler. This showcases the core components required for a simple CheerioCrawler operation.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();

        console.log(`The title of "${request.url}" is: ${title}.`);
    };

    // Set up the crawler, passing a single options object as an argument.
    const crawler = new Apify.CheerioCrawler({
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Install Apify CLI Globally

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Installs the Apify Command Line Interface globally, enabling project creation and management for Apify SDK.

```Shell
npm install -g apify-cli
```

--------------------------------

### Verify Node.js and NPM Installation

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Checks the installed versions of Node.js and NPM to ensure prerequisites are met for Apify SDK development.

```Shell
node -v
```

```Shell
npm -v
```

--------------------------------

### Apify API: Getting Started Section

Source: https://docs.apify.com/api/v2/user-get

An introductory section providing guidance and initial steps for developers to begin interacting with the Apify API. It covers fundamental concepts and setup instructions.

```APIDOC
API Section: /api/v2/getting-started
```

--------------------------------

### Create New Apify SDK Project

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Initializes a new Apify SDK project using the Apify CLI, prompting for a template selection (e.g., 'Hello world'). This command creates a new directory and installs necessary dependencies.

```Shell
apify create my-new-project
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Install the main 'crawlee' meta-package, which re-exports most of the '@crawlee/*' packages and contains all crawler classes, simplifying installation for general use cases.

```bash
npm install crawlee
```

--------------------------------

### API: Getting Started with Apify API v2

Source: https://docs.apify.com/api/v2/storage-key-value-stores

This section provides an entry point for understanding how to interact with the Apify API v2, with a link to the main getting started guide.

```APIDOC
Documentation Link: /api/v2/getting-started
```

--------------------------------

### Apify API: Getting Started

Source: https://docs.apify.com/api/v2/act-run-metamorph-post

Provides an entry point for understanding and using the Apify API. This section typically covers general API information and initial setup, though specific endpoints are not detailed beyond the introductory path.

```APIDOC
GET /api/v2/getting-started: Introduction to Apify API
```

--------------------------------

### Apify API v2 Overview and Getting Started

Source: https://docs.apify.com/api/v2/webhook-dispatches-get

Provides an introduction to the Apify API version 2, including general information and a link to the getting started guide.

```APIDOC
Apify API v2
  Getting started: /api/v2/getting-started
```

--------------------------------

### Apify API v2: Getting Started

Source: https://docs.apify.com/api/v2/actor-run-abort-post

Provides an entry point for understanding the Apify API v2, covering initial setup and basic concepts for interacting with the platform.

```APIDOC
/api/v2/getting-started
```

--------------------------------

### Apify API: Getting Started Endpoint

Source: https://docs.apify.com/api/v2/act-run-sync-get-dataset-items-get

This snippet provides the base endpoint for getting started with the Apify API v2. It serves as an entry point for understanding the API structure and initial setup.

```APIDOC
GET /api/v2/getting-started
```

--------------------------------

### Example Single Category Store URL

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

An example URL for accessing a specific category (ENTERTAINMENT) within the Apify store. This demonstrates a typical start URL for a focused crawl when a single category is targeted.

```URL
https://apify.com/store?category=ENTERTAINMENT
```

--------------------------------

### Apify API: Getting Started

Source: https://docs.apify.com/api/v2/key-value-stores-get

Overview of the Apify API v2, providing a starting point for interacting with the platform programmatically.

```APIDOC
Getting Started:
  Endpoint: /api/v2/getting-started
```

--------------------------------

### API Reference: Getting Started

Source: https://docs.apify.com/api/v2/actor-build-delete

Provides the introductory endpoint for the Apify API, guiding users on how to begin interacting with the platform's programmatic interface.

```APIDOC
Getting started: /api/v2/getting-started
```

--------------------------------

### Apify API v2 Overview and Getting Started

Source: https://docs.apify.com/api/v2/actors-actor-versions

This section outlines the main entry point for the Apify API v2 and provides a link to the getting started guide. It serves as the top-level navigation for all subsequent API categories.

```APIDOC
Apify API v2:
  GET /api/v2/getting-started - Getting started guide
```

--------------------------------

### Apify API Getting Started

Source: https://docs.apify.com/api/v2/dataset-delete

Provides an overview of the Apify API and its main entry point for initial setup and understanding.

```APIDOC
/api/v2/getting-started: Getting started with Apify API
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/changelog

Installs the main Crawlee meta-package from the 'next' distribution tag, which includes most `@crawlee/*` packages and crawler classes. This is a common starting point for new Crawlee projects.

```bash
npm install crawlee@next
```

--------------------------------

### Multiple Start URLs for Apify Store Categories

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

A list of manually collected start URLs for different categories in the Apify store. This approach is used when dynamic scraping of category links is not feasible with tools like CheerioCrawler due to JavaScript dependencies, requiring a pre-defined set of entry points.

```URL
https://apify.com/store?category=TRAVEL
https://apify.com/store?category=ECOMMERCE
https://apify.com/store?category=ENTERTAINMENT
```

--------------------------------

### Apify API Getting Started

Source: https://docs.apify.com/api/v2/post-resurrect-run

Provides an entry point for understanding and interacting with the Apify API.

```APIDOC
GET /api/v2/getting-started - Getting started with Apify API
```

--------------------------------

### Initialize Apify Actor Development in Existing Project

Source: https://docs.apify.com/cli/docs/installation

Explains how to configure an existing project directory for Apify Actor development using `apify init`. This command sets up necessary local files like `.actor/actor.json` and `apify_storage`. It also provides an example of how to define the Actor's start command in the `package.json` file.

```bash
cd ./my/awesome/project
apify init
```

```json
{
    ...
    "scripts": {
        "start": "node your_main_file.js"
    },
    ...
}
```

--------------------------------

### Apify API Getting Started

Source: https://docs.apify.com/api/v2/actor-task-put

Overview of the Apify API, providing a starting point for integration and understanding the API structure.

```APIDOC
GET /api/v2/getting-started: Getting started with Apify API
```

--------------------------------

### Full Apify CheerioCrawler for Category and Detail Pages

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This comprehensive JavaScript example demonstrates a complete Apify CheerioCrawler setup. It initializes the crawler with predefined category URLs, manages request queues, and implements a `handlePageFunction` that conditionally scrapes detailed actor information from detail pages or enqueues new links from category pages, ensuring efficient navigation and data collection.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue();

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50,
        requestList,
        requestQueue,
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            // This is our new scraping logic.
            if (request.userData.detailPage) {
                const urlArr = request.url.split('/').slice(-2);

                const results = {
                    url: request.url,
                    uniqueIdentifier: urlArr.join('/'),
                    owner: urlArr[0],
                    title: $('header h1').text(),
                    description: $('header span.actor-description').text(),
                    modifiedDate: new Date(
                        Number($('ul.ActorHeader-stats time').attr('datetime')),
                    ),
                    runCount: Number(
                        $('ul.ActorHeader-stats > li:nth-of-type(3)')
                            .text()
                            .match(/[\d,]+/)[0]
                            .replace(',', ''),
                    ),
                };
                console.log('RESULTS', results);
            }

            // Only enqueue new links from the category pages.
            if (!request.userData.detailPage) {
                await Apify.utils.enqueueLinks({
                    $,
                    requestQueue,
                    selector: 'div.item > a',
                    baseUrl: request.loadedUrl,
                    transformRequestFunction: (req) => {
                        req.userData.detailPage = true;
                        return req;
                    },
                });
            }
        },
    });

    await crawler.run();
});
```

--------------------------------

### Install Specific Crawlee Package (Cheerio)

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Install a specific Crawlee package, such as '@crawlee/cheerio', when only a particular functionality is required, minimizing the installed dependencies.

```bash
npm install @crawlee/cheerio
```

--------------------------------

### Run Apify Actor and Retrieve Data

Source: https://docs.apify.com/api/client/python/docs/overview/getting-started

Demonstrates how to programmatically start an Apify Actor, wait for its completion, and then fetch the results from its default dataset using the Apify Client for Python. This example requires an Apify API token and the target Actor's ID.

```Python (Async)
from apify_client import ApifyClientAsync

# You can find your API token at https://console.apify.com/settings/integrations.
TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    apify_client = ApifyClientAsync(TOKEN)

    # Start an Actor and wait for it to finish.
    actor_client = apify_client.actor('john-doe/my-cool-actor')
    call_result = await actor_client.call()

    if call_result is None:
        print('Actor run failed.')
        return

    # Fetch results from the Actor run's default dataset.
    dataset_client = apify_client.dataset(call_result['defaultDatasetId'])
    list_items_result = await dataset_client.list_items()
    print(f'Dataset: {list_items_result}')
```

```Python (Sync)
from apify_client import ApifyClient
```

--------------------------------

### Example Dockerfile for Node.js Apify Actor (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/next/guides/docker-images

This Dockerfile provides a standard setup for a Node.js Apify actor using JavaScript. It copies package.json for dependency installation, then copies the rest of the source code, and sets npm start as the default command.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent
```

--------------------------------

### Apify API Getting Started

Source: https://docs.apify.com/api/v2/actor-build-abort-post

Provides an entry point for understanding how to interact with the Apify API, outlining the initial steps for API usage.

```APIDOC
Getting started: /api/v2/getting-started
```

--------------------------------

### Apify API: Getting Started

Source: https://docs.apify.com/api/v2/actor-task-delete

This section provides the introductory endpoint for the Apify API, guiding users on how to begin interacting with the platform's programmatic interface.

```APIDOC
Getting Started:
  Endpoint: /api/v2/getting-started
```

--------------------------------

### Initializing Apify Main Function and Request Queue

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This code illustrates how to use `Apify.main()` to set up the primary execution context for an Apify actor. It also shows the initialization of a `RequestQueue` and adding an initial URL to it, which serves as the starting point for the crawler.

```javascript
const Apify = require('apify');

// This is how you use the Apify.main() function.
Apify.main(async () => {
    // First we create the request queue instance.
    const requestQueue = await Apify.openRequestQueue();
    // And then we add a request to it.
    await requestQueue.addRequest({ url: 'https://apify.com' });
});
```

--------------------------------

### Apify API v2 Getting Started

Source: https://docs.apify.com/api/v2/users

Provides an entry point for understanding how to interact with the Apify API v2.

```APIDOC
Resource: Getting Started
  Endpoint: /api/v2/getting-started
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Installs the main Crawlee meta-package from the 'next' distribution tag, providing access to most `@crawlee/*` packages and crawler classes. This is a general installation for comprehensive Crawlee usage.

```Shell
npm install crawlee@next
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This command installs the Apify SDK version 1 along with the Puppeteer browser automation library. This setup is similar to previous SDK versions and is suitable for projects that continue to use Puppeteer.

```bash
npm install apify puppeteer
```

--------------------------------

### Apify API v2 Getting Started

Source: https://docs.apify.com/api/v2/request-queues-post

Provides an entry point for understanding the Apify API v2 structure and how to begin interacting with it.

```APIDOC
GET /api/v2/getting-started
```

--------------------------------

### Apify API v2: Getting Started Endpoint

Source: https://docs.apify.com/api/v2/datasets-post

Provides an overview and initial steps for interacting with the Apify API v2.

```APIDOC
GET /api/v2/getting-started: Getting started with Apify API v2
```

--------------------------------

### Verify Node.js Scraping Setup in main.js

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/project-setup

This JavaScript code snippet, intended for 'main.js', imports the 'gotScraping' and 'cheerio' libraries and prints "it works!" to the console. It serves as a basic test to ensure that the libraries are correctly installed and the ES module setup is functional.

```JavaScript
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

console.log('it works!');
```

--------------------------------

### Dockerfile Example for Node.js JavaScript Actor

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/docker-images

This Dockerfile provides a standard setup for an Apify actor written in Node.js with JavaScript. It optimizes build times by copying package.json first for dependency installation, then copying the rest of the source code, and finally defines the command to start the actor.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent
```

--------------------------------

### Install Crawlee with Browser Dependencies (Playwright)

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Demonstrates how to install Crawlee alongside specific browser automation libraries like Playwright. This approach allows users to control the version of the browser dependency explicitly.

```bash
npm install crawlee playwright
# or npm install @crawlee/playwright playwright
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This command installs the Apify SDK v1 along with the Puppeteer browser automation library. This setup is similar to previous versions of the SDK where Puppeteer was bundled.

```Shell
npm install apify puppeteer
```

--------------------------------

### Apify API v2 Getting Started

Source: https://docs.apify.com/api/v2/request-queue-head-lock-post

Provides an introduction and initial steps for interacting with the Apify API v2.

```APIDOC
Getting started:
  - Introduction: /api/v2/getting-started
```

--------------------------------

### Install Apify CLI for Local Development

Source: https://docs.apify.com/platform/actors/development/quick-start/web-ide

Instructions for installing the Apify Command Line Interface (CLI) tool, which is essential for interacting with the Apify platform from your local machine. Provides commands for both macOS/Linux (using Homebrew) and other platforms (using npm).

```bash
brew install apify-cli
```

```npm
npm -g install apify-cli
```

--------------------------------

### Example Dockerfile for Node.js JavaScript Actor

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/docker-images

This Dockerfile provides a standard setup for an Apify Node.js actor written in JavaScript. It demonstrates how to efficiently copy `package.json` for layer caching, install production dependencies, and then copy the rest of the source code before defining the `npm start` command. This ensures a fast build process for iterative development.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent

```

--------------------------------

### Example Output of Apify CLI Version Check

Source: https://docs.apify.com/cli/docs/next/installation

Illustrates the expected output when verifying the Apify CLI installation, showing the CLI version, operating system, and Node.js version.

```text
apify-cli/0.19.1 linux-x64 node-v18.17.0
```

--------------------------------

### Full Apify CheerioCrawler Example with Manual Link Enqueuing

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

A complete Apify `CheerioCrawler` example demonstrating how to initialize a request queue, add a starting URL, handle page content (extracting titles and links), manually filter same-domain links, and enqueue them back into the queue. This example also integrates the `maxRequestsPerCrawl` limit.

```JavaScript
const { URL } = require('url');
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);

        // Here starts the new part of handlePageFunction.
        const links = $('a[href]')
            .map((i, el) => $(el).attr('href'))
            .get();

        const { origin } = new URL(request.loadedUrl);
        const absoluteUrls = links.map(
            (link) => new URL(link, request.loadedUrl),
        );

        const sameDomainLinks = absoluteUrls.filter(
            (url) => url.origin === origin,
        );

        console.log(`Enqueueing ${sameDomainLinks.length} URLs.`);
        for (const url of sameDomainLinks) {
            await requestQueue.addRequest({ url: url.href });
        }
    };

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 20,
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Apify API v2: Getting Started and General Actor Management Endpoints

Source: https://docs.apify.com/api/v2/act-runs-get

This section details the initial setup and core API endpoints for managing Actors on the Apify platform. It covers operations such as listing, creating, retrieving, updating, and deleting Actors.

```APIDOC
GET /api/v2/getting-started - Introduction to Apify API v2
GET /api/v2/actors - Get list of Actors
POST /api/v2/acts-post - Create Actor
GET /api/v2/act-get - Get Actor
PUT /api/v2/act-put - Update Actor
DELETE /api/v2/act-delete - Delete Actor
```

--------------------------------

### Apify API Getting Started

Source: https://docs.apify.com/api/v2/schedule-delete

An introductory overview to the Apify API, providing a starting point for understanding its structure and capabilities.

```APIDOC
GET /api/v2/getting-started - Getting started with Apify API
```

--------------------------------

### Apify SDK CheerioCrawler Example with Manual Same-Domain Link Enqueueing

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript code demonstrates a basic web crawler using Apify's `CheerioCrawler`. It initializes a `RequestQueue`, adds a starting URL, and defines a `handlePageFunction` to extract page titles. Crucially, it manually parses all `<a>` tags, filters for same-domain links, converts them to absolute URLs, and enqueues them for further crawling. The crawler is configured with `maxRequestsPerCrawl`.

```JavaScript
const { URL } = require('url'); // <------ This is new.
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);

        // Here starts the new part of handlePageFunction.
        const links = $('a[href]')
            .map((i, el) => $(el).attr('href'))
            .get();

        const ourDomain = 'https://apify.com';
        const absoluteUrls = links.map((link) => new URL(link, ourDomain));

        const sameDomainLinks = absoluteUrls.filter((url) =>
            url.href.startsWith(ourDomain),
        );

        console.log(`Enqueueing ${sameDomainLinks.length} URLs.`);
        for (const url of sameDomainLinks) {
            await requestQueue.addRequest({ url: url.href });
        }
    };

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 20, // <------ This is new too.
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Quickstart: Configure Apify Proxy using SDKs

Source: https://docs.apify.com/platform/proxy

These examples demonstrate how to quickly set up and use Apify Proxy in your applications. The JavaScript example uses `PuppeteerCrawler` from Crawlee, while the Python example integrates with the `requests` library. Both show how to create a proxy configuration and make an anonymous request to test the proxy.

```JavaScript
import { Actor } from 'apify';
import { PuppeteerCrawler } from 'crawlee';

await Actor.init();

const proxyConfiguration = await Actor.createProxyConfiguration();

const crawler = new PuppeteerCrawler({
    proxyConfiguration,
    async requestHandler({ page }) {
        console.log(await page.content());
    },
});

await crawler.run(['https://proxy.apify.com/?format=json']);

await Actor.exit();
```

```Python
import requests, asyncio
from apify import Actor

async def main():
    async with Actor:
        proxy_configuration = await Actor.create_proxy_configuration()
        proxy_url = await proxy_configuration.new_url()

        proxies = {
            'http': proxy_url,
            'https': proxy_url,
        }

        response = requests.get('https://api.apify.com/v2/browser-info', proxies=proxies)
        print(response.text)

if __name__ == '__main__':
    asyncio.run(main())
```

--------------------------------

### Run Apify SDK Project Locally with Purge

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Navigates into the newly created project directory and executes the Apify actor. The '-p' flag stands for '--purge' and clears out persistent storages before starting the actor, preventing old state from interfering with the current run.

```Shell
cd my-new-project
```

```Shell
apify run -p
```

--------------------------------

### Install Apify Command-Line Interface (CLI)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Installs the Apify CLI globally, which helps manage Apify projects, create boilerplates, and deploy code to the Apify platform.

```Shell
npm -g install apify-cli
```

--------------------------------

### Apify API v2 Getting Started

Source: https://docs.apify.com/api/v2

Provides the foundational entry point for interacting with the Apify API v2, indicating the base path for all subsequent API calls.

```APIDOC
API Endpoint: /api/v2/getting-started
```

--------------------------------

### Apify API Getting Started Endpoint

Source: https://docs.apify.com/api/v2/dataset-put

This section outlines the initial endpoint for interacting with the Apify API, providing a starting point for API integration.

```APIDOC
GET /api/v2/getting-started - Get started with the Apify API
```

--------------------------------

### Configure package.json Start Script for Apify Actor

Source: https://docs.apify.com/cli/docs/next/installation

Modifies the `package.json` file to define the start command for an Apify Actor, allowing it to be run locally using `apify run`. The `start` script should point to the Actor's main file.

```json
{
    ...
    "scripts": {
        "start": "node your_main_file.js"
    },
    ...
}
```

--------------------------------

### Create New Apify Project

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Initializes a new Apify SDK project with a specified name. This command prompts the user to select a project template, creates a new directory, sets up package.json, and installs necessary dependencies.

```bash
apify create my-new-project
```

--------------------------------

### Initialize Crawlee Project with CLI

Source: https://docs.apify.com/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up

This command uses the Crawlee CLI to create a new project directory with a specified name. It prompts the user to select a boilerplate template, such as CheerioCrawler, for the project's initial setup.

```shell
npx crawlee create amazon-crawler
```

--------------------------------

### Quick Start: Run Actor and Fetch Dataset Items

Source: https://docs.apify.com/api/client/js/docs/2

This example demonstrates a common quick start scenario: programmatically starting an Apify Actor and then retrieving the results from its default dataset after the Actor has completed its execution. It showcases basic interaction with the Apify API using the client library.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish
const { defaultDatasetId } = await client.actor('username/actor-name').call();

// Lists items from the Actor's dataset
const { items } = await client.dataset(defaultDatasetId).listItems();
```

--------------------------------

### Example Apify Actor Input JSON for Categories

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JSON array provides an example of the expected structure for the actor's input, specifically for defining categories to be scraped. This input can be set via the Apify platform's actor input form or by creating an 'INPUT.json' file locally.

```JSON
["TRAVEL", "ECOMMERCE", "ENTERTAINMENT"]
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

Installs the main Crawlee meta-package from the 'next' distribution tag. This package re-exports most @crawlee/* packages, providing all core crawler classes and functionalities.

```bash
npm install crawlee@next
```

--------------------------------

### Simple Dockerfile for Apify Node.js Actor

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/docker-images

This Dockerfile provides a basic setup for an Apify Node.js actor. It copies package files, installs dependencies, copies source code, and defines the start command. It's optimized for quick rebuilds by leveraging Docker layer caching.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

Installs Apify SDK v1 along with the Puppeteer browser automation library. This setup is suitable for projects that rely on Puppeteer for web scraping and automation tasks, maintaining compatibility with previous SDK versions' Puppeteer-based functionalities.

```javascript
npm install apify puppeteer
```

--------------------------------

### Basic Apify enqueueLinks usage

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Demonstrates a standard usage of Apify.utils.enqueueLinks() from a previous chapter, showing how to enqueue links based on pseudo URLs.

```javascript
await enqueueLinks({
    $,
    requestQueue,
    pseudoUrls: ['http[s?]://apify.com[.*]'],
    baseUrl: request.loadedUrl,
});
```

--------------------------------

### Basic Dockerfile for Apify Node.js Actor

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/docker-images

This Dockerfile provides a basic setup for an Apify Node.js actor. It copies package files, installs production dependencies, and then copies the application source code. The `npm start` command is used to run the actor.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Initialize a new npm project

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/project-setup

This command initializes a new npm project in the current directory, creating a package.json file. The -y flag automatically answers 'yes' to all prompts, allowing for quick default project setup without interactive questions.

```Bash
npm init -y
```

--------------------------------

### Install Apify Python SDK

Source: https://docs.apify.com/platform/integrations/qdrant

This command installs the necessary Apify Python SDK package using pip, enabling programmatic interaction with Apify services.

```Python
pip install apify-client
```

--------------------------------

### Install Crawlee Cheerio Package Only

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Installs only the `@crawlee/cheerio` package from the 'next' distribution tag. This is suitable for projects that specifically require Cheerio support and want to minimize dependencies.

```Shell
npm install @crawlee/cheerio@next
```

--------------------------------

### Install Web Scraping Libraries with npm

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/project-setup

This command installs 'got-scraping' and 'cheerio' npm packages. 'got-scraping' is an HTTP client specifically designed for web scraping, and 'cheerio' is used for parsing and manipulating HTML, offering a jQuery-like syntax.

```Shell
npm install got-scraping cheerio
```

--------------------------------

### Apify CheerioCrawler: Automated Link Enqueuing with enqueueLinks()

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript example showcases an Apify CheerioCrawler utilizing the `Apify.utils.enqueueLinks()` helper function. It replaces manual link processing with an automated solution, simplifying the `handlePageFunction` by automatically extracting and enqueuing links based on provided pseudo-URLs.

```JavaScript
const Apify = require('apify');
const {
    utils: { enqueueLinks },
} = Apify;

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);

        // Enqueue links
        const enqueued = await enqueueLinks({
            $,
            requestQueue,
            pseudoUrls: ['http[s?]://apify.com[.*]'],
            baseUrl: request.loadedUrl,
        });
        console.log(`Enqueued ${enqueued.length} URLs.`);
    };

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 20,
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Passing an input to the Actor

Source: https://docs.apify.com/api/client/js/docs/examples

The fastest way to get results from an Actor is to pass input directly to the `call` function. Input can be passed to `call` function and the reference of running Actor (or wait for finish) is available in `runData` variable. This example starts an Actor that scrapes 20 posts from the Instagram website based on the hashtag.

```javascript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const actorClient = client.actor('apify/instagram-hashtag-scraper');

const input = { hashtags: ['rainbow'], resultsLimit: 20 };

// Run the Actor and wait for it to finish up to 60 seconds.
// Input is not persisted for next runs.
const runData = await actorClient.call(input, { waitSecs: 60 });

console.log('Run data:');
console.log(runData);
```

--------------------------------

### Configure TypeScript for Crawlee/Apify Projects

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Provides a 'tsconfig.json' example for Crawlee and Apify SDK projects. It extends '@apify/tsconfig' and sets 'module' and 'target' to 'ES2022' or above to enable features like top-level await.

```json
{
    "extends": "@apify/tsconfig",
    "compilerOptions": {
        "module": "ES2022",
        "target": "ES2022",
        "outDir": "dist",
        "lib": ["DOM"]
    },
    "include": ["./src/**/*"]
}
```

--------------------------------

### Complete Example: Save Data and Use OpenAI Assistant

Source: https://docs.apify.com/platform/integrations/openai-assistants

This comprehensive snippet combines the initialization, assistant creation, and vector store setup steps into a single block, providing a partial, runnable example for integrating Apify data with an OpenAI Assistant.

```Python
from apify_client import ApifyClient
from openai import OpenAI

client = OpenAI(api_key="YOUR-OPENAI-API-KEY")
apify_client = ApifyClient("YOUR-APIFY-API-TOKEN")

my_assistant = client.beta.assistants.create(
    instructions="As a customer support agent at Apify, your role is to assist customers",
    name="Support assistant",
    tools=[{"type": "file_search"}],
    model="gpt-4o-mini"
)

# Create a vector store
vector_store = client.beta.vector_stores.create(name="Support assistant vector store")
```

--------------------------------

### Apify CheerioCrawler Main Entry Point (main.js)

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This `main.js` file sets up the core Apify CheerioCrawler. It initializes the request list and queue, integrates helper functions for source retrieval and request routing, and orchestrates the crawling process. This central file defines the overall flow of the actor.

```JavaScript
// main.js
const Apify = require('apify');
const tools = require('./tools');
const {
    utils: { log },
} = Apify;

Apify.main(async () => {
    log.info('Starting actor.');
    const requestList = await Apify.openRequestList(
        'categories',
        await tools.getSources(),
    );
    const requestQueue = await Apify.openRequestQueue();
    const router = tools.createRouter({ requestQueue });

    log.debug('Setting up crawler.');
    const crawler = new Apify.CheerioCrawler({
        requestList,
        requestQueue,
        handlePageFunction: async (context) => {
            const { request } = context;
            log.info(`Processing ${request.url}`);
            await router(request.userData.label, context);
        },
    });

    log.info('Starting the crawl.');
    await crawler.run();
    log.info('Actor finished.');
});
```

--------------------------------

### Example .actor/actor.json Configuration File

Source: https://docs.apify.com/cli/docs/installation

This JSON snippet provides a concrete example of the `.actor/actor.json` file. It demonstrates how to define an Actor's name, version, build tag, environment variables, and paths to Dockerfile, README, and input/storage schemas, associating a local project with an Apify Actor.

```JSON
{
  "actorSpecification": 1,
  "name": "name-of-my-scraper",
  "version": "0.0",
  "buildTag": "latest",
  "environmentVariables": {
    "MYSQL_USER": "my_username",
    "MYSQL_PASSWORD": "@mySecretPassword"
  },
  "dockerfile": "./Dockerfile",
  "readme": "./ACTOR.md",
  "input": "./input_schema.json",
  "storages": {
    "dataset": "./dataset_schema.json"
  }
}
```

--------------------------------

### Apify API Getting Started Endpoint

Source: https://docs.apify.com/api/v2/request-queue-delete

This entry point provides general information and initial steps for interacting with the Apify API. It serves as a foundational reference for new API users.

```APIDOC
GET /api/v2/getting-started - Getting started with Apify API
```

--------------------------------

### Quickstart: Configure and Use Apify Proxy with SDKs

Source: https://docs.apify.com/proxy

This section provides quickstart examples for integrating Apify Proxy into your scraping jobs using both JavaScript and Python SDKs. It demonstrates how to initialize the Actor, create a proxy configuration, and make requests through the Apify Proxy to ensure anonymous access and prevent IP-based blocking.

```JavaScript
import { Actor } from 'apify';
import { PuppeteerCrawler } from 'crawlee';

await Actor.init();

const proxyConfiguration = await Actor.createProxyConfiguration();

const crawler = new PuppeteerCrawler({
    proxyConfiguration,
    async requestHandler({ page }) {
        console.log(await page.content());
    },
});

await crawler.run(['https://proxy.apify.com/?format=json']);

await Actor.exit();
```

```Python
import requests, asyncio
from apify import Actor

async def main():
    async with Actor:
        proxy_configuration = await Actor.create_proxy_configuration()
        proxy_url = await proxy_configuration.new_url()

        proxies = {
            'http': proxy_url,
            'https': proxy_url,
        }

        response = requests.get('https://api.apify.com/v2/browser-info', proxies=proxies)
        print(response.text)

if __name__ == '__main__':
    asyncio.run(main())
```

--------------------------------

### Install Apify Python SDK

Source: https://docs.apify.com/platform/integrations/milvus

Installs the necessary Apify Python SDK using pip, enabling programmatic interaction with Apify actors and datasets.

```Python
pip install apify-client
```

--------------------------------

### Install Apify CLI Globally

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Installs the Apify Command Line Interface tool globally on your system. The Apify CLI simplifies creating, running, and managing Apify projects, including deployment to the Apify platform.

```bash
npm install -g apify-cli
```

--------------------------------

### Initialize Apify Client with API Token (Python)

Source: https://docs.apify.com/api/client/python/docs/overview/setting-up

Demonstrates how to initialize the Apify client using an API token. This snippet provides examples for both asynchronous (ApifyClientAsync) and synchronous (ApifyClient) client instantiation, showing the basic setup required to interact with the Apify API.

```Python
from apify_client import ApifyClientAsync

TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    # Client initialization with the API token.
    apify_client = ApifyClientAsync(TOKEN)

```

```Python
from apify_client import ApifyClient

TOKEN = 'MY-APIFY-TOKEN'

def main() -> None:
    # Client initialization with the API token.
    apify_client = ApifyClient(TOKEN)

```

--------------------------------

### Complete Example: Run Actor and Fetch Dataset

Source: https://docs.apify.com/academy/getting-started/apify-client

This comprehensive example demonstrates the full workflow: initializing the Apify client, calling an Actor with specific input, retrieving the default dataset ID from the run information, and finally listing and logging all items from that dataset. This code provides a complete script for automating Actor execution and data extraction.

```Node.js
// client.js
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'YOUR_TOKEN',
});

const run = await client.actor('YOUR_USERNAME/adding-actor').call({
    num1: 4,
    num2: 2,
});

const dataset = client.dataset(run.defaultDatasetId);

const { items } = await dataset.listItems();

console.log(items);
```

```Python
# client.py
from apify_client import ApifyClient

client = ApifyClient(token='YOUR_TOKEN')

actor = client.actor('YOUR_USERNAME/adding-actor').call(run_input={
    'num1': 4,
    'num2': 2
})

dataset = client.dataset(run['defaultDatasetId'])

items = dataset.list_items().items

print(items)
```

--------------------------------

### Install Apify SDK and Playwright

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This command installs the Apify SDK and Playwright packages into your Node.js project. Playwright is not bundled with the SDK and needs to be installed separately to enable browser automation.

```Shell
npm install apify playwright
```

--------------------------------

### Configure TypeScript for Crawlee Project

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Example `tsconfig.json` configuration for a Crawlee project, extending `@apify/tsconfig`. It sets `module` and `target` to `ES2022` for top-level await support and specifies output directory and included files.

```JSON
{
    "extends": "@apify/tsconfig",
    "compilerOptions": {
        "module": "ES2022",
        "target": "ES2022",
        "outDir": "dist",
        "lib": ["DOM"]
    },
    "include": ["./src/**/*"]
}
```

--------------------------------

### Run Apify Actor with Actor.main Wrapper

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Shows how to use `Actor.main()` as a convenience wrapper for `Actor.init()` and `Actor.exit()`. This method handles the setup, teardown, and error wrapping for the main actor logic, simplifying the execution flow.

```JavaScript
import { Actor } from 'apify';

await Actor.main(
    async () => {
        // your code
    },
    { statusMessage: 'Crawling finished!' },
);
```

--------------------------------

### Install Apify CLI Globally

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This command installs the Apify command-line interface (CLI) tool globally on your system. The CLI simplifies project creation, local execution, and deployment to the Apify platform.

```Shell
npm -g install apify-cli
```

--------------------------------

### Apify API: Getting Started

Source: https://docs.apify.com/api/v2/actor-run-delete

This section provides the entry point for understanding the Apify API v2.

```APIDOC
GET /api/v2/getting-started - Getting started with Apify API v2
```

--------------------------------

### Complete Apify CheerioCrawler for Web Scraping and Data Saving

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

A comprehensive example of an Apify CheerioCrawler setup. It includes initializing request lists, managing request queues, handling both category and detail pages, and saving extracted data using `Apify.pushData()`.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue();

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50,
        requestList,
        requestQueue,
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            // This is our new scraping logic.
            if (request.userData.detailPage) {
                const urlArr = request.url.split('/').slice(-2);

                const results = {
                    url: request.url,
                    uniqueIdentifier: urlArr.join('/'),
                    owner: urlArr[0],
                    title: $('header h1').text(),
                    description: $('header span.actor-description').text(),
                    modifiedDate: new Date(
                        Number($('ul.ActorHeader-stats time').attr('datetime')),
                    ),
                    runCount: Number(
                        $('ul.ActorHeader-stats > li:nth-of-type(3)')
                            .text()
                            .match(/[\d,]+/)[0]
                            .replace(',', ''),
                    ),
                };
                await Apify.pushData(results);
            }

            // Only enqueue new links from the category pages.
            if (!request.userData.detailPage) {
                await Apify.utils.enqueueLinks({
                    $,
                    requestQueue,
                    selector: 'div.item > a',
                    baseUrl: request.loadedUrl,
                    transformRequestFunction: (req) => {
                        req.userData.detailPage = true;
                        return req;
                    },
                });
            }
        },
    });

    await crawler.run();
});
```

--------------------------------

### Basic Apify CheerioCrawler for Category Pages

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript code demonstrates a basic Apify CheerioCrawler setup. It uses a RequestList to visit predefined category URLs on apify.com, then extracts and logs the text content of 'item' elements (actor cards) found on each page. It serves as a sanity check for environment setup and basic scraping logic.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT'
    ];

    const requestList = await Apify.openRequestList('categories', sources);

    const crawler = new Apify.CheerioCrawler({
        requestList,
        handlePageFunction: async ({ $, request }) => {
            // Select all the actor cards.
            $('.item').each((i, el) => {
                const text = $(el).text();
                console.log(`ITEM: ${text}\n`);
            });
        }
    });

    await crawler.run();
});
```

--------------------------------

### Create New Apify Actor Project from Scratch

Source: https://docs.apify.com/cli/docs/installation

Demonstrates how to quickly set up a new Apify Actor project using the `apify create` command. This command interactively prompts the user to select a boilerplate template and generates a new directory containing the Actor's project files.

```bash
apify create my-hello-world
```

--------------------------------

### Install Specific Crawlee Package (Cheerio)

Source: https://docs.apify.com/sdk/js/reference/changelog

Installs only the `@crawlee/cheerio` package from the 'next' distribution tag. This is useful when only Cheerio support is needed and you want to minimize dependencies.

```bash
npm install @crawlee/cheerio@next
```

--------------------------------

### Standard Dockerfile for Node.js JavaScript Apify Actor

Source: https://docs.apify.com/sdk/js/docs/guides/docker-images

This comprehensive Dockerfile provides a standard setup for an Apify actor using Node.js and JavaScript. It optimizes build times by copying package.json first for dependency installation, then adds the rest of the source code, and defines the npm start command for execution.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent
```

--------------------------------

### Install Crawlee with Playwright Dependency

Source: https://docs.apify.com/sdk/js/reference/changelog

Installs the Crawlee meta-package along with Playwright, allowing users to control the Playwright version explicitly. Alternatively, `@crawlee/playwright` can be installed directly with Playwright.

```bash
npm install crawlee@next playwright
# or npm install @crawlee/playwright@next playwright
```

--------------------------------

### Simplify Apify Actor Execution with Actor.main (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This example shows how to use `Actor.main()` as a syntactic sugar for `Actor.init()` and `Actor.exit()`. It wraps the user's asynchronous function in a try/catch block, handling initialization and teardown automatically, simplifying the main execution flow of an Apify actor.

```JavaScript
import { Actor } from 'apify';

await Actor.main(
    async () => {
        // your code
    },
    { statusMessage: 'Crawling finished!' }
);
```

--------------------------------

### Set Up Node.js Project and Install Crawlee Dependencies

Source: https://docs.apify.com/academy/node-js/dealing-with-dynamic-pages

This shell command initializes a new Node.js project with default settings and installs the `crawlee` package, which includes `cheerio` as a dependency. It's a crucial first step to prepare the development environment for running web scraping scripts.

```shell
# this command will initialize your project
# and install the "crawlee" and "cheerio" packages
npm init -y && npm i crawlee
```

--------------------------------

### Run Python Verification Script

Source: https://docs.apify.com/academy/scraping-basics-python/downloading-html

Execute the `main.py` script from the command line to verify the Python environment and HTTPX installation. A successful run will print 'OK', indicating that the setup is ready for further development.

```bash
$ python main.py
OK
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

This command installs the Apify SDK version 1 along with the Puppeteer browser automation library. Puppeteer was bundled with previous SDK versions, but now needs to be explicitly installed for v1.

```bash
npm install apify puppeteer
```

--------------------------------

### Verify HTTPX Installation in Python

Source: https://docs.apify.com/academy/scraping-basics-python/downloading-html

This Python script serves as a basic test to confirm that the HTTPX library has been successfully installed and is accessible within your Python environment. Running it should output 'OK' if the setup is correct.

```python
import httpx

print("OK")
```

--------------------------------

### Provide Input to Apify Actor (Python Async and Sync)

Source: https://docs.apify.com/api/client/python/docs/overview/getting-started

This snippet illustrates how to pass custom input data to an Apify Actor when initiating a run. It provides examples for both the asynchronous (`ApifyClientAsync`) and synchronous (`ApifyClient`) Python clients, demonstrating how to define a `run_input` dictionary and pass it to the `actor_client.call` method.

```Python
from apify_client import ApifyClientAsync

TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    apify_client = ApifyClientAsync(TOKEN)
    actor_client = apify_client.actor('username/actor-name')

    # Define the input for the Actor.
    run_input = {
        'some': 'input',
    }

    # Start an Actor and waits for it to finish.
    call_result = await actor_client.call(run_input=run_input)
```

```Python
from apify_client import ApifyClient

TOKEN = 'MY-APIFY-TOKEN'

def main() -> None:
    apify_client = ApifyClient(TOKEN)
    actor_client = apify_client.actor('username/actor-name')

    # Define the input for the Actor.
    run_input = {
        'some': 'input',
    }

    # Start an Actor and waits for it to finish.
    call_result = actor_client.call(run_input=run_input)
```

--------------------------------

### Apify API v2 - Getting Started

Source: https://docs.apify.com/api/v2/request-queue-request-delete

Provides an overview and initial steps for interacting with the Apify API v2.

```APIDOC
Getting started
GET /api/v2/getting-started
```

--------------------------------

### Verify Apify Client Python Package Installation

Source: https://docs.apify.com/api/client/python/docs/overview/setting-up

Confirms that the `apify-client` package has been successfully installed by importing it within a Python interpreter and printing its version. This step ensures the client is correctly set up and ready for development.

```Python
python -c 'import apify_client; print(apify_client.__version__)'
```

--------------------------------

### Install Crawlee with Playwright Dependency

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Installs Crawlee (or `@crawlee/playwright`) along with the `playwright` dependency. Users must explicitly install browser automation libraries like Playwright or Puppeteer to control their versions.

```Shell
npm install crawlee@next playwright
# or npm install @crawlee/playwright@next playwright
```

--------------------------------

### Updating request timeout from `timeoutSecs` to `timeout.request`

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This example shows the migration of request timeout settings. The `timeoutSecs` option, which used seconds, is replaced by `timeout.request` in `gotScraping`, which now expects timeout values in milliseconds.

```JavaScript
// Before:
await Apify.utils.requestAsBrowser({
    …,
    timeoutSecs: 30,
});
```

```JavaScript
// After:
await gotScraping({
    …,
    timeout: {
        request: 30 * 1000,
    },
});
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v1

Command to install the Apify SDK version 1 along with the Puppeteer browser automation library. This installation method provides compatibility with previous SDK versions.

```Shell
npm install apify puppeteer


```

--------------------------------

### Install Specific Crawlee Package (Cheerio)

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

Installs only the @crawlee/cheerio package from the 'next' distribution tag. This is suitable for projects that specifically require Cheerio support without the overhead of other browser-related dependencies.

```bash
npm install @crawlee/cheerio@next
```

--------------------------------

### Apify.main() Function Reference

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

The Apify.main() function simplifies running Apify SDK code by handling initialization and graceful exit. It ensures that your crawler logic executes within the correct Apify environment.

```APIDOC
Apify.main(async () => { /* Your crawler logic here */ })

Parameters:
  - callback: Function - An asynchronous function containing the main logic of your Apify application.
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/3.3/upgrading/upgrading-to-v1

This command installs Apify SDK v1 along with the Puppeteer package. It's the recommended way to set up the SDK for web scraping operations using Puppeteer, similar to previous versions.

```bash
npm install apify puppeteer

```

--------------------------------

### Dockerfile: Set Container Entrypoint Command

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

Specifies the command to be executed when the Docker container starts. It runs the `npm start` script, which typically initiates the main application logic.

```Dockerfile
CMD npm start --silent
```

--------------------------------

### Configuring Scraper Start URL and User Data

Source: https://docs.apify.com/tutorials/apify-scrapers/getting-started

This snippet demonstrates how to define the initial URL for a web scraping task and attach custom JSON data, such a label, to it. This setup helps the scraper identify its starting point and provides context for subsequent processing.

```URL
https://apify.com/store
```

```JSON
{
  "label": "START"
}
```

--------------------------------

### Quick Start: Call Actor and List Dataset Items

Source: https://docs.apify.com/api/client/js/docs/next

A practical example showcasing how to programmatically interact with Apify Actors and their datasets. It covers initiating an Actor run, waiting for its completion, and then retrieving the results from its associated dataset.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish
const { defaultDatasetId } = await client.actor('username/actor-name').call();

// Lists items from the Actor's dataset
const { items } = await client.dataset(defaultDatasetId).listItems();
```

--------------------------------

### Basic Browser Setup and Page Navigation

Source: https://docs.apify.com/academy/puppeteer-playwright/reading-intercepting-requests

This code demonstrates the fundamental steps to launch a browser, open a new page, navigate to a specific URL, and then close the browser. Examples are provided for both Playwright and Puppeteer, serving as a starting point for web scraping and automation tasks, particularly for request interception.

```JavaScript
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// Our code will go here

await page.goto('https://soundcloud.com/tiesto/following');

await page.waitForTimeout(10000);
await browser.close();
```

```JavaScript
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();

// Our code will go here

await page.goto('https://soundcloud.com/tiesto/following');

await page.waitForTimeout(10000);
await browser.close();
```

--------------------------------

### Getting Started with Apify API v2

Source: https://docs.apify.com/api/v2/webhooks-webhook-dispatches

This section provides the entry point for interacting with the Apify API v2, outlining the base URL and general API access information.

```APIDOC
GET /api/v2/getting-started - Getting started with Apify API v2
```

--------------------------------

### Enqueue Links with Glob Patterns in PlaywrightCrawler

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This example shows how to use the context-aware `enqueueLinks` helper within a `PlaywrightCrawler`'s `requestHandler`. It demonstrates specifying URL patterns using `globs` to filter which links are enqueued, highlighting that `regexps` and `pseudoUrls` are also supported.

```JavaScript
const crawler = new PlaywrightCrawler({
    async requestHandler({ enqueueLinks }) {
        await enqueueLinks({
            globs: ['https://apify.com/*/*'],
            // we can also use `regexps` and `pseudoUrls` keys here
        });
    }
});
```

--------------------------------

### Create New Apify Actor from Scratch

Source: https://docs.apify.com/cli/docs/next/installation

Initializes a new Apify Actor project from a template, creating a directory with boilerplate code and configuration files. The user will be prompted to select a template.

```bash
apify create my-hello-world
```

--------------------------------

### Basic CheerioCrawler Setup for Single Page Scraping

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This JavaScript snippet illustrates a fundamental implementation of `Apify.CheerioCrawler`. It initializes a `RequestQueue` with a starting URL, defines a `handlePageFunction` to process the page using Cheerio's `$` function, and then runs the crawler to extract and log the page's title.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();

        console.log(`The title of "${request.url}" is: ${title}.`);
    };

    // Set up the crawler, passing a single options object as an argument.
    const crawler = new Apify.CheerioCrawler({
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Getting Started with Apify API v2

Source: https://docs.apify.com/api/v2/actors-webhook-collection

This section introduces the Apify API v2, providing foundational information for interacting with the API.

```APIDOC
GET /api/v2/getting-started: Introduction to Apify API v2
```

--------------------------------

### Julia Apify Actor Dockerfile Example

Source: https://docs.apify.com/academy/deploying-your-code/docker-file

A basic Dockerfile for a Julia-based Apify Actor. It sets up the working directory, copies all application files, runs an `install.jl` script for setup, and specifies the command to execute the main Julia script.

```Dockerfile
FROM julia:1.7.1-alpine

WORKDIR /app
COPY . .

RUN julia install.jl

CMD ["julia", "main.jl"]
```

--------------------------------

### Install Apify SDK and Playwright for Node.js

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Installs the Apify SDK and the Playwright browser automation library into a Node.js project. Playwright is not bundled with the SDK to allow flexibility in choosing browser automation tools.

```Shell
npm install apify playwright
```

--------------------------------

### Apify Actor Helper Functions (tools.js)

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

The `tools.js` file encapsulates reusable helper functions for the Apify actor. It provides `getSources` to dynamically fetch initial URLs from actor input and `createRouter` to manage request handling based on labels, promoting modularity and cleaner code.

```JavaScript
// tools.js
const Apify = require('apify');
const routes = require('./routes');
const {
    utils: { log },
} = Apify;

exports.getSources = async () => {
    log.debug('Getting sources.');
    const input = await Apify.getInput();
    return input.map((category) => ({
        url: `https://apify.com/store?category=${category}`,
        userData: {
            label: 'CATEGORY',
        },
    }));
};

exports.createRouter = (globalContext) => {
    return async function (routeName, requestContext) {
        const route = routes[routeName];
        if (!route) throw new Error(`No route for name: ${routeName}`);
        log.debug(`Invoking route: ${routeName}`);
        return route(requestContext, globalContext);
    };
};
```

--------------------------------

### Configure package.json for Apify Actor Local Run

Source: https://docs.apify.com/cli/docs/0.20/installation

Shows how to set the `start` script in `package.json` to define the entry point for running an Apify Actor locally, typically pointing to the main JavaScript file.

```JSON
{
    ...
    "scripts": {
        "start": "node your_main_file.js"
    },
    ...
}
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/3.3/upgrading/upgrading-to-v1

This command installs Apify SDK v1 along with the Playwright package. It's the recommended way to set up the SDK for web scraping operations using Playwright, offering an alternative to Puppeteer.

```bash
npm install apify playwright

```

--------------------------------

### Apify.waitForRunToFinish() Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Documents the removal of Apify.waitForRunToFinish() and advises using ApifyClient.waitForFinish() as its replacement.

```APIDOC
Apify.waitForRunToFinish():
  - Status: Removed.
  - Replacement: Use ApifyClient.waitForFinish() instead.
```

--------------------------------

### Apify.pushData() API Reference

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Details the `Apify.pushData()` helper function, its purpose, and how it interacts with the default `Dataset` for storing scraped data. It clarifies the automatic handling of the default Dataset.

```APIDOC
Apify.pushData():
  Description: Helper function to save data to the default Dataset.
  Behavior: Each call creates a new row in the Dataset, using property names as column titles.
  Dataset:
    Type: Storage designed for virtually unlimited data, similar to a table.
    Default Instance: Each actor run has one default Dataset, no explicit initialization needed.
    Custom Datasets: Named datasets can also be created.
```

--------------------------------

### Install HTTPX Python Library

Source: https://docs.apify.com/sdk/python/docs/concepts/proxy-management

This command installs the `httpx` asynchronous HTTP client library for Python. It is a prerequisite for using `httpx` in your projects and running the provided code examples that demonstrate proxy integration.

```Shell
pip install httpx
```

--------------------------------

### Dockerfile for Node.js Apify Actor (Simple Build)

Source: https://docs.apify.com/sdk/js/docs/3.3/guides/docker-images

This Dockerfile provides a standard setup for a Node.js Apify actor. It optimizes for Docker layer caching by copying package files and installing dependencies before copying the full application code, finally defining the 'npm start' command to run the actor.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent
```

--------------------------------

### Initialize Project and Install Core Dependencies

Source: https://docs.apify.com/academy/api-scraping/general-api-scraping/handling-pagination

This command initializes a new Node.js project and installs `puppeteer` for browser automation and `got-scraping` for making HTTP requests, essential tools for the scraping tasks.

```shell
npm init -y && npm i puppeteer got-scraping
```

--------------------------------

### Standard Dockerfile for Node.js Apify Actor (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/docker-images

This Dockerfile provides a standard setup for a Node.js Apify actor written in JavaScript. It optimizes build times by leveraging Docker layer caching for package.json and dependencies, then copies the application source code. The image installs production dependencies and runs the actor using npm start.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm start --silent
```

--------------------------------

### Define Project Input JSON

Source: https://docs.apify.com/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up

This JSON file specifies the input data for the scraper. In this case, it provides a 'keyword' that the crawler will use for its search queries.

```json
{
  "keyword": "iphone"
}
```

--------------------------------

### Start a Simple HTTP Server in an Apify Actor

Source: https://docs.apify.com/sdk/python/docs/concepts/running-webserver

This Python example demonstrates how to initialize and run a basic HTTP server within an Apify Actor. The server listens for GET requests and responds with the current count of processed items, showcasing how to expose custom HTTP endpoints from an Actor. It utilizes Python's built-in `http.server` module and the `apify` SDK.

```Python
import asyncio
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from apify import Actor

processed_items = 0
http_server = None

# Just a simple handler that will print the number of processed items so far
```

--------------------------------

### Importing Apify Library in JavaScript

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet demonstrates the fundamental step of importing the Apify library into a JavaScript project. Using `require('apify')` makes all Apify SDK functionalities available for use in your script.

```javascript
const Apify = require('apify');
```

--------------------------------

### API Reference: Getting Started with Apify API

Source: https://docs.apify.com/api/v2/users-me-limits-get

Provides the entry point for understanding and using the Apify API.

```APIDOC
Getting started: /api/v2/getting-started
```

--------------------------------

### Start Web Server in Apify Actor

Source: https://docs.apify.com/platform/actors/development/programming-interface/container-web-server

These code examples illustrate how to set up a basic web server within an Apify Actor using Express.js (JavaScript) or Flask (Python). Both examples initialize the Apify Actor, define a simple root route, and listen on the port provided by the Apify environment variables, making the server accessible from outside the Actor.

```JavaScript
// npm install express
import { Actor } from 'apify';
import express from 'express';

await Actor.init();

const app = express();
const port = process.env.ACTOR_WEB_SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Hello world from Express app!');
});

app.listen(port, () => console.log(`Web server is listening
    and can be accessed at
    ${process.env.ACTOR_WEB_SERVER_URL}!`));

// Let the Actor run for an hour
await new Promise((r) => setTimeout(r, 60 * 60 * 1000));

await Actor.exit();
```

```Python
# pip install flask
import asyncio
import os
from apify import Actor
from apify_shared.consts import ActorEnvVars
from flask import Flask

async def main():
    async with Actor:
        # Create a Flask app
        app = Flask(__name__)

        # Define a route
        @app.route('/')
        def hello_world():
            return 'Hello world from Flask app!'

        # Log the public URL
        url = os.environ.get(ActorEnvVars.WEB_SERVER_URL)
        Actor.log.info(f'Web server is listening and can be accessed at {url}')

        # Start the web server
        port = os.environ.get(ActorEnvVars.WEB_SERVER_PORT)
        app.run(host='0.0.0.0', port=port)
```

--------------------------------

### Apify.main() Function API Documentation

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Documentation for the `Apify.main()` function, which serves as the entry point for Apify actors. It simplifies actor development by handling boilerplate code like error management and graceful shutdown, executing the provided asynchronous handler function.

```APIDOC
Apify.main(handler: Function): Promise<void>
  handler: An asynchronous function containing the main logic of the Apify actor. This function is awaited.
  Returns: A Promise that resolves when the handler function completes.
```

--------------------------------

### Using scoped logger in Crawlee request handlers

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This example shows how to use the scoped `log` instance provided within the `requestHandler` context of a Crawlee crawler. This `log` instance automatically prefixes messages with the crawler name, making it ideal for in-handler logging.

```JavaScript
const crawler = new CheerioCrawler({
    async requestHandler({ log, request }) {
        log.info(`Opened ${request.loadedUrl}`);
    },
});
```

--------------------------------

### Install Apify Client for Python via Pip

Source: https://docs.apify.com/api/client/python/docs/overview/setting-up

Installs the `apify-client` package using the Pip package manager. This command fetches the latest stable version from PyPI and adds it to your Python environment, making it available for use.

```Bash
pip install apify-client
```

--------------------------------

### Illustrate Absolute and Relative URL Formats

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Provides clear, concise examples to differentiate between absolute and relative URL paths, which is crucial for understanding how web links are structured and resolved.

```Text
absolute, such as:
https://apify.com/john-doe/my-actor
```

```Text
or relative:
./john-doe/my-actor
```

--------------------------------

### Run Apify Actor Locally for Development

Source: https://docs.apify.com/cli/docs/installation

Illustrates how to execute an Apify Actor on your local machine. After navigating into the Actor's project directory, the `apify run` command starts the Actor, allowing for local development and testing.

```bash
cd my-hello-world
apify run
```

--------------------------------

### Project Initialization and Puppeteer Installation

Source: https://docs.apify.com/academy/api-scraping/general-api-scraping/handling-pagination

Shell command to set up a new project directory and install Puppeteer, a Node.js library for browser automation. This command is a prerequisite for the mini-project demonstrating pagination.

```Shell
# initialize the project and install the puppeteer
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This command installs the Apify SDK version 1 along with the Playwright browser automation library. This option is for projects that prefer or require Playwright for browser automation, offering an alternative to Puppeteer.

```bash
npm install apify playwright
```

--------------------------------

### Install Puppeteer Library

Source: https://docs.apify.com/academy/puppeteer-playwright

Command to install the Puppeteer library using npm, the Node.js package manager. This is a prerequisite for running Puppeteer-based web scraping or automation scripts.

```bash
npm install puppeteer
```

--------------------------------

### Install Crawlee with Browser Dependencies

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

Demonstrates how to install Crawlee alongside specific browser automation libraries like Playwright. This approach allows users to explicitly control the version of the browser dependency used in their project.

```bash
npm install crawlee@next playwright
```

```bash
npm install @crawlee/playwright@next playwright
```

--------------------------------

### Initialize Web Scraper with Node.js and Cheerio

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/scraping-the-data

Sets up a basic web scraping environment using `gotScraping` for HTTP requests and `cheerio` for HTML parsing. It fetches the HTML content of a product detail page from a predefined URL.

```javascript
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const productUrl = 'https://warehouse-theme-metal.myshopify.com/products/denon-ah-c720-in-ear-headphones';
const response = await gotScraping(productUrl);
const html = response.body;

const $ = cheerio.load(html);

// Attribute extraction code will go here.
```

--------------------------------

### Get Public URL for Apify Key-Value Store Item

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

This JavaScript example demonstrates how to retrieve a public URL for an item stored in an Apify Key-Value Store. It initializes a store, sets a value, and then uses the `getPublicUrl()` method with the item's key to generate a shareable link to the stored data.

```JavaScript
import { KeyValueStore } from 'apify';

const store = await KeyValueStore.open();
await store.setValue('your-file', { foo: 'bar' });
const url = store.getPublicUrl('your-file');
// https://api.apify.com/v2/key-value-stores/<your-store-id>/records/your-file
```

--------------------------------

### Initialize and Run Apify Actor with `init`/`exit` or `main`

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

These examples demonstrate two equivalent ways to initialize and run an Apify Actor. The first uses explicit `Actor.init()` and `Actor.exit()` calls, while the second leverages the `Actor.main()` helper, which abstracts the initialization and teardown process, providing a cleaner entry point for Actor logic.

```JavaScript
import { Actor } from 'apify';

await Actor.init();
// your code
await Actor.exit('Crawling finished!');
```

```JavaScript
import { Actor } from 'apify';

await Actor.main(
    async () => {
        // your code
    },
    { statusMessage: 'Crawling finished!' },
);
```

--------------------------------

### Add Initial Request to Apify RequestQueue

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This code shows how to use Apify.main() to initialize a request queue and add a starting URL. It sets up the initial request for the crawler to begin its operation.

```JavaScript
const Apify = require('apify');

// This is how you use the Apify.main() function.
Apify.main(async () => {
    // First we create the request queue instance.
    const requestQueue = await Apify.openRequestQueue();
    // And then we add a request to it.
    await requestQueue.addRequest({ url: 'https://apify.com' });
});
```

--------------------------------

### Create Multi-stage Dockerfile for Crawlee/Apify

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Presents a multi-stage Dockerfile for building Crawlee/Apify projects. This method separates development dependencies from the final production image, resulting in smaller and more efficient Docker containers.

```dockerfile
# using multistage build, as we need dev deps to build the TS source code
FROM apify/actor-node:16 AS builder

# copy all files, install all dependencies (including dev deps) and build the project
COPY . ./
RUN npm install --include=dev \
    && npm run build

# create final image
FROM apify/actor-node:16
# copy only necessary files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/README.md ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/apify.json ./apify.json
COPY --from=builder /usr/src/app/INPUT_SCHEMA.json ./INPUT_SCHEMA.json

# install only prod deps
RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional \
    && echo "Installed NPM packages:" \
    && (npm list --only=prod --no-optional --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# run compiled code
CMD npm run start:prod
```

--------------------------------

### Perform Recursive Web Crawl with Apify PlaywrightCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This JavaScript example demonstrates how to use Apify's PlaywrightCrawler to perform a recursive crawl. It initializes a request queue, adds a starting URL, extracts the page title, and enqueues new links based on a pseudo-URL pattern for further crawling.

```JavaScript
const Apify = require('apify');

// Apify.main is a helper function, you don't need to use it.
Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    // Choose the first URL to open.
    await requestQueue.addRequest({ url: 'https://www.iana.org/' });

    const crawler = new Apify.PlaywrightCrawler({
        requestQueue,
        handlePageFunction: async ({ request, page }) => {
            // Extract HTML title of the page.
            const title = await page.title();
            console.log(`Title of ${request.url}: ${title}`);

            // Add URLs that match the provided pattern.
            await Apify.utils.enqueueLinks({
                page,
                requestQueue,
                pseudoUrls: ['https://www.iana.org/[.*]'],
            });
        },
    });

    await crawler.run();
});
```

--------------------------------

### Use Apify Client Convenience Functions for Actor Management

Source: https://docs.apify.com/api/client/js/docs/next

Shows examples of using the ApifyClient's convenience functions for managing Actors. It demonstrates how to use `call()` to start an Actor and wait for its full completion, and `start()` with `waitForFinish` to initiate an Actor run and wait for a specified duration.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish.
const finishedActorRun = await client.actor('username/actor-name').call();

// Starts an Actor and waits maximum 60s for the finish
const { status } = await client.actor('username/actor-name').start({
    waitForFinish: 60, // 1 minute
});
```

--------------------------------

### Example Category Page for DevTools Inspection

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This URL points to an Apify store category page used as an example for demonstrating browser DevTools inspection techniques. It specifically highlights how to identify and understand CSS selectors like '.item' by analyzing the page's HTML structure.

```URL
https://apify.com/store?category=TRAVEL
```

--------------------------------

### Initialize Apify RequestList with URLs

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet demonstrates how to initialize an Apify `RequestList` using `Apify.openRequestList()`. The first argument is a name for persistence, and the second is an array of source URLs. This is ideal for scraping a pre-existing list of URLs.

```JavaScript
const sources = [
    'https://apify.com/store?category=TRAVEL',
    'https://apify.com/store?category=ECOMMERCE',
    'https://apify.com/store?category=ENTERTAINMENT',
];

const requestList = await Apify.openRequestList('categories', sources);
```

--------------------------------

### Execute Node.js Test File

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/project-setup

This command runs the 'main.js' file using Node.js. It's used to verify the project setup and library imports by executing the test code within 'main.js' and checking for the expected console output.

```Shell
node main.js
```

--------------------------------

### Install Apify CLI with Node Version Manager (NVM)

Source: https://docs.apify.com/cli/docs/next/installation

Installs Apify CLI into a specific user-level Node.js version managed by NVM, avoiding root privileges. This example uses Node.js version 18.

```bash
nvm install 18
nvm use 18
npm -g install apify-cli
```

--------------------------------

### Example .actor/actor.json Configuration File

Source: https://docs.apify.com/cli/docs/0.20/installation

This JSON file links a local development project to an Actor on the Apify Platform. It defines Actor properties such as name, version, build tag, environment variables, and paths to related files like Dockerfile, README, input schema, and dataset schema.

```JSON
{
  "actorSpecification": 1,
  "name": "name-of-my-scraper",
  "version": "0.0",
  "buildTag": "latest",
  "environmentVariables": {
    "MYSQL_USER": "my_username",
    "MYSQL_PASSWORD": "@mySecretPassword"
  },
  "dockerfile": "./Dockerfile",
  "readme": "./ACTOR.md",
  "input": "./input_schema.json",
  "storages": {
    "dataset": "./dataset_schema.json"
  }
}
```

--------------------------------

### REST API Request Examples

Source: https://docs.apify.com/academy/api-scraping

Examples of typical REST API requests, demonstrating GET methods for fetching user and comment data with parameters, and a POST method for creating orders.

```APIDOC
GET https://api.example.com/users/123
GET https://api.example.com/comments/abc123?limit=100
POST https://api.example.com/orders
```

--------------------------------

### Using Scoped Logging in Crawlee Request Handlers

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This example demonstrates how to use the scoped 'log' instance provided within the request handler context in Crawlee. This scoped logger automatically prefixes messages with the crawler's name, making it ideal for logging specific to a crawler's operations.

```JavaScript
const crawler = new CheerioCrawler({
    async requestHandler({ log, request }) {
        log.info(`Opened ${request.loadedUrl}`);
    },
});
```

--------------------------------

### Pass Input Directly to Apify Actor Call Function (JavaScript)

Source: https://docs.apify.com/api/client/js/docs/2.10/examples

This example demonstrates the fastest way to get results from an Apify Actor by passing input directly to its 'call' function. The 'runData' variable provides a reference to the running Actor. It shows how to start an Actor to scrape Instagram posts based on a hashtag.

```JavaScript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const actorClient = client.actor('apify/instagram-hashtag-scraper');

const input = { hashtags: ['rainbow'], resultsLimit: 20 };

// Run the Actor and wait for it to finish up to 60 seconds.
// Input is not persisted for next runs.
const runData = await actorClient.call(input, { waitSecs: 60 });

console.log('Run data:');
console.log(runData);
```

--------------------------------

### Create New Apify Project with CLI

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This command uses the Apify CLI to create a new project boilerplate. It prompts the user to select a template, such as 'Hello world', and sets up the necessary project files in a new directory.

```Shell
apify create my-hello-world
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This command installs the Apify SDK v1 along with the Playwright browser automation library. SDK v1 supports Playwright as an alternative to Puppeteer, offering more flexibility.

```Shell
npm install apify playwright
```

--------------------------------

### Install Playwright Library

Source: https://docs.apify.com/academy/puppeteer-playwright

Command to install the Playwright library using npm, the Node.js package manager. This is a prerequisite for running Playwright-based web scraping or automation scripts.

```bash
npm install playwright
```

--------------------------------

### Install Apify CLI and Verify Installation

Source: https://docs.apify.com/cli/docs/installation

Provides multiple methods for installing the Apify CLI. Users can install via Homebrew on macOS/Linux or globally via NPM on all platforms. It also includes steps for checking Node.js and NPM versions, and verifying the Apify CLI installation.

```bash
brew install apify-cli
```

```bash
node --version
npm --version
```

```bash
npm -g install apify-cli
```

```bash
nvm install 18
nvm use 18
npm -g install apify-cli
```

```bash
apify --version
```

--------------------------------

### Initialize Apify RequestList with Start URLs

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This snippet demonstrates how to create and initialize an `Apify.RequestList` instance. It takes a name for persistence and an array of source URLs. `RequestList` is ideal for managing a pre-defined, immutable list of URLs for crawling.

```JavaScript
const sources = [
    'https://apify.com/store?category=TRAVEL',
    'https://apify.com/store?category=ECOMMERCE',
    'https://apify.com/store?category=ENTERTAINMENT',
];

const requestList = await Apify.openRequestList('categories', sources);
```

--------------------------------

### gotoFunction and gotoTimeoutSecs Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Documents the removal of gotoFunction and gotoTimeoutSecs.

```APIDOC
gotoFunction:
  - Status: Removed.

gotoTimeoutSecs:
  - Status: Removed.
```

--------------------------------

### Write a 'Hello World' JavaScript Program

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/computer-preparation

Create a `hello.js` file and add this simple JavaScript code to print 'Hello World' to the console. This serves as a basic test for your Node.js environment setup.

```JavaScript
console.log('Hello World');
```

--------------------------------

### Apify Actor Node.js package.json Configuration

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

This `package.json` file defines the project metadata, dependencies (including 'apify'), and scripts for an Apify Actor. The 'start' script is configured to execute `src/main.js`.

```JSON
{
    "name": "getting-started-node",
    "version": "0.0.1",
    "type": "module",
    "description": "This is an example of an Apify Actor.",
    "dependencies": {
        "apify": "^3.0.0"
    },
    "devDependencies": {},
    "scripts": {
        "start": "node src/main.js",
        "test": "echo \"Error: oops, the Actor has no tests yet, sad!\" && exit 1"
    },
    "author": "It's not you; it's me",
    "license": "ISC"
}
```

--------------------------------

### Composing multiple preLaunchHooks for modular browser configuration

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This snippet demonstrates the flexibility of `preLaunchHooks` by showing how multiple pre-defined functions can be combined into a single array. This allows for modular and reusable browser setup logic, such as injecting fingerprints or handling headful modes.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint,
];
```

--------------------------------

### Actor.main/init Storage Purging Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Describes the new default behavior of Actor.main/init to purge storage and how to opt out of this behavior.

```APIDOC
Actor.main/init:
  - Default behavior: Purges the storage by default.
  - Opt-out: Set 'purge: false' in the options of init/main methods.
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

This command installs the Apify SDK version 1 along with the Playwright browser automation library. SDK v1 supports Playwright as an alternative to Puppeteer, offering more flexibility.

```bash
npm install apify playwright
```

--------------------------------

### Import Apify Client

Source: https://docs.apify.com/academy/getting-started/apify-client

Code examples demonstrating how to import the ApifyClient class into your JavaScript (Node.js) or Python application after installation, preparing it for API interactions.

```JavaScript
// client.js
import { ApifyClient } from 'apify-client';
```

```Python
# client.py
from apify_client import ApifyClient
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

Installs the Apify SDK version 1 along with the Puppeteer browser automation library. This command is essential for projects that continue to rely on Puppeteer for web scraping and automation, ensuring compatibility with the SDK's updated architecture. It reflects the change where browser dependencies are no longer bundled.

```Shell
npm install apify puppeteer
```

--------------------------------

### Legacy launchPuppeteerOptions Configuration

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This example shows the old `launchPuppeteerOptions` configuration, which ambiguously merged Apify-specific options with Puppeteer's native launch options, often causing confusion.

```javascript
const launchPuppeteerOptions = {
    useChrome: true, // Apify option
    headless: false, // Puppeteer option
};
```

--------------------------------

### Example Apify Actor Configuration File (.actor/actor.json)

Source: https://docs.apify.com/cli/docs/next/installation

This JSON file associates a local development project with an Actor on the Apify Platform, containing metadata like name, version, build tag, environment variables, and paths to related files. It's crucial for defining how the Actor behaves and is built in the cloud.

```JSON
{
  "actorSpecification": 1,
  "name": "name-of-my-scraper",
  "version": "0.0",
  "buildTag": "latest",
  "environmentVariables": {
    "MYSQL_USER": "my_username",
    "MYSQL_PASSWORD": "@mySecretPassword"
  },
  "dockerfile": "./Dockerfile",
  "readme": "./ACTOR.md",
  "input": "./input_schema.json",
  "storages": {
    "dataset": "./dataset_schema.json"
  }
}
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v1

Command to install the Apify SDK version 1 along with the Playwright browser automation library. This allows users to leverage Playwright for browser automation within their Apify projects.

```Shell
npm install apify playwright


```

--------------------------------

### ProxyConfiguration.newUrlFunction Async Support

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Describes the new asynchronous support for ProxyConfiguration.newUrlFunction and the resulting promise returns for related methods.

```APIDOC
ProxyConfiguration.newUrlFunction:
  - New capability: Can now be async.

ProxyConfiguration.newUrl():
  - New return type: Now returns a Promise.

ProxyConfiguration.newProxyInfo():
  - New return type: Now returns a Promise.
```

--------------------------------

### Example HTTP GET Request to Download Dataset Items

Source: https://docs.apify.com/api/v2/actor-task-runs-last-get

This example demonstrates how to download data from a dataset associated with the last succeeded actor task run in XML format. It shows an HTTP GET request URL with placeholders for the actor task ID and API token, along with specific query parameters for format and status.

```HTTP
https://api.apify.com/v2/actor-tasks/{actorTaskId}/runs/last/dataset/items?token={yourApiToken}&format=xml&status=SUCCEEDED
```

--------------------------------

### Apify API Endpoint Reference

Source: https://docs.apify.com/api/v2/getting-started

This section provides a comprehensive reference of the Apify API endpoints, categorized by functionality such as Datasets, Key-Value Stores, Request Queues, Webhooks, Schedules, Store, Logs, and Users. Each category includes an introduction and a list of available operations like getting, creating, updating, and deleting resources.

```APIDOC
Datasets:
  Introduction: /api/v2/storage-datasets
  Endpoints:
    Get list of datasets: /api/v2/datasets-get
    Create dataset: /api/v2/datasets-post
    Get dataset: /api/v2/dataset-get
    Update dataset: /api/v2/dataset-put
    Delete dataset: /api/v2/dataset-delete
    Get items: /api/v2/dataset-items-get
    Store items: /api/v2/dataset-items-post
    Get dataset statistics: /api/v2/dataset-statistics-get
Key-value stores:
  Introduction: /api/v2/storage-key-value-stores
  Endpoints:
    Get list of key-value stores: /api/v2/key-value-stores-get
    Create key-value store: /api/v2/key-value-stores-post
    Get store: /api/v2/key-value-store-get
    Update store: /api/v2/key-value-store-put
    Delete store: /api/v2/key-value-store-delete
    Get list of keys: /api/v2/key-value-store-keys-get
    Get record: /api/v2/key-value-store-record-get
    Check if a record exists: /api/v2/key-value-store-record-head
    Store record: /api/v2/key-value-store-record-put
    Delete record: /api/v2/key-value-store-record-delete
Request queues:
  Introduction: /api/v2/storage-request-queues
  Endpoints:
    Get list of request queues: /api/v2/request-queues-get
    Create request queue: /api/v2/request-queues-post
    Get request queue: /api/v2/request-queue-get
    Update request queue: /api/v2/request-queue-put
    Delete request queue: /api/v2/request-queue-delete
    Add requests: /api/v2/request-queue-requests-batch-post
    Delete requests: /api/v2/request-queue-requests-batch-delete
Requests (under Request queues):
  Introduction: /api/v2/storage-request-queues-requests
  Endpoints:
    List requests: /api/v2/request-queue-requests-get
    Add request: /api/v2/request-queue-requests-post
    Get request: /api/v2/request-queue-request-get
    Update request: /api/v2/request-queue-request-put
    Delete request: /api/v2/request-queue-request-delete
Requests locks (under Request queues):
  Introduction: /api/v2/storage-request-queues-requests-locks
  Endpoints:
    Unlock requests: /api/v2/request-queue-requests-unlock-post
    Get head: /api/v2/request-queue-head-get
    Get head and lock: /api/v2/request-queue-head-lock-post
    Prolong request lock: /api/v2/request-queue-request-lock-put
    Delete request lock: /api/v2/request-queue-request-lock-delete
Webhooks:
  Introduction: /api/v2/webhooks-webhooks
  Endpoints:
    Get list of webhooks: /api/v2/webhooks-get
    Create webhook: /api/v2/webhooks-post
    Get webhook: /api/v2/webhook-get
    Update webhook: /api/v2/webhook-put
    Delete webhook: /api/v2/webhook-delete
    Test webhook: /api/v2/webhook-test-post
    Get collection: /api/v2/webhook-dispatches-get
Webhook dispatches (under Webhooks):
  Introduction: /api/v2/webhooks-webhook-dispatches
  Endpoints:
    Get collection: /api/v2/webhook-dispatches-get
    Get webhook dispatch: /api/v2/webhook-dispatch-get
Schedules:
  Introduction: /api/v2/schedules
  Endpoints:
    Get list of schedules: /api/v2/schedules-get
    Create schedule: /api/v2/schedules-post
    Get schedule: /api/v2/schedule-get
    Update schedule: /api/v2/schedule-put
    Delete schedule: /api/v2/schedule-delete
    Get schedule log: /api/v2/schedule-log-get
Store:
  Introduction: /api/v2/store
  Endpoints:
    Get list of Actors in store: /api/v2/store-get
Logs:
  Introduction: /api/v2/logs
  Endpoints:
    Get log: /api/v2/log-get
Users:
  Introduction: /api/v2/users
  Endpoints:
    Get public user data: /api/v2/user-get
    Get private user data: /api/v2/users-me-get
    Get monthly usage: /api/v2/users-me-usage-monthly-get
    Get limits: /api/v2/users-me-limits-get
    Update limits: /api/v2/users-me-limits-put
```

--------------------------------

### Dockerfile: Install Node.js Dependencies

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

Executes npm commands to install project dependencies, excluding development and optional packages. It also includes steps to verify Node.js and npm versions and clean up the npm cache.

```Dockerfile
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version \
    && rm -r ~/.npm
```

--------------------------------

### Multi-Stage Dockerfile for Crawlee Application

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

A multi-stage Dockerfile for building and deploying a Crawlee application. It uses a builder stage to install dev dependencies and build TypeScript source, then creates a final image with only production dependencies to reduce image size.

```Dockerfile
# using multistage build, as we need dev deps to build the TS source code
FROM apify/actor-node:16 AS builder

# copy all files, install all dependencies (including dev deps) and build the project
COPY . ./
RUN npm install --include=dev \
    && npm run build

# create final image
FROM apify/actor-node:16
# copy only necessary files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/README.md ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/apify.json ./apify.json
COPY --from=builder /usr/src/app/INPUT_SCHEMA.json ./INPUT_SCHEMA.json

# install only prod deps
RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional \
    && echo "Installed NPM packages:" \
    && (npm list --only=prod --no-optional --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# run compiled code
CMD npm run start:prod
```

--------------------------------

### Configure Apify Task Start URL

Source: https://docs.apify.com/academy/apify-scrapers/getting-started

This snippet defines the initial URL from which the Apify scraper will begin its operation. It specifies the entry point for the web scraping process, in this case, the Apify Store page. This URL serves as the first page to be visited and processed by the scraper.

```URL
https://apify.com/store
```

--------------------------------

### Saving Data with Apify.pushData()

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Demonstrates the basic usage of `Apify.pushData()` to save scraped results to the default dataset. This line replaces a `console.log` call to persist the data.

```javascript
await Apify.pushData(results);
```

--------------------------------

### Execute a Node.js 'Hello World' Script

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/computer-preparation

Run the `hello.js` file using the Node.js runtime from your terminal. This command executes the JavaScript code and should display 'Hello World' as output, confirming your setup.

```Shell
node hello.js
```

--------------------------------

### Example Usage of listenerCount

Source: https://docs.apify.com/sdk/js/reference/class/LoggerText

Demonstrates how to use `listenerCount` to get the number of active listeners for a specific event on an `EventEmitter` instance. This example shows two listeners being registered and then counted.

```JavaScript
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

--------------------------------

### Get Started with Apify API v2

Source: https://docs.apify.com/api/v2/act-version-delete

This section provides the introductory endpoint for the Apify API v2, serving as a general entry point for API interactions.

```APIDOC
GET /api/v2/getting-started: Get started with Apify API v2
```

--------------------------------

### Verify Python Installation

Source: https://docs.apify.com/api/client/python/docs/overview/setting-up

Checks if Python is installed on your system and displays its version. This command is crucial to confirm that your environment meets the `apify-client`'s Python 3.10+ prerequisite.

```Bash
python --version
```

--------------------------------

### Get StreamedLog instance (Apify ActorRunClientAsync)

Source: https://docs.apify.com/api/client/python/reference/class/RunClientAsync

Get `StreamedLog` instance that can be used to redirect logs.
`StreamedLog` can be explicitly started and stopped or used as a context manager.

```APIDOC
async get_streamed_log(to_logger: logging.Logger | None = None, *, from_start: bool = True) -> StreamedLogAsync
  to_logger: logging.Logger | None = None - `Logger` used for logging the redirected messages. If not provided, a new logger is created
  from_start: bool = True - If `True`, all logs from the start of the actor run will be redirected. If `False`, only newly arrived logs will be redirected. This can be useful for redirecting only a small portion of relevant logs for long-running actors in stand-by.
```

--------------------------------

### Initialize an Existing Project as an Apify Actor

Source: https://docs.apify.com/cli/docs/0.20/installation

Sets up a local Apify Actor development environment in an existing directory by creating necessary configuration files (e.g., `.actor/actor.json`) and the `apify_storage` directory.

```Shell
cd ./my/awesome/project
apify init
```

--------------------------------

### Install TypeScript as Development Dependency

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/type-script-actor

Command to install the TypeScript compiler locally within your project as a development dependency. This approach avoids polluting global environments and ensures project-specific TypeScript versions.

```Bash
npm install --dev typescript
```

--------------------------------

### StorageClient Interface and Purge Helper Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Details the addition of an optional purge method to the StorageClient interface and the removal of the purgeLocalStorage helper.

```APIDOC
StorageClient:
  - Interface change: Now has an optional 'purge' method.

purgeLocalStorage:
  - Status: Removed.
  - Notes: Purging functionality moved directly to the storage class.
```

--------------------------------

### API: Get Keys from Apify Key-Value Store Collection

Source: https://docs.apify.com/platform/actors/development/actor-definition/key-value-store-schema

This API example demonstrates how to retrieve a list of keys from a specific collection within an Apify key-value store using the 'collection' query parameter. It includes the HTTP GET request and an example JSON response showing the structure of the returned data.

```APIDOC
GET https://api.apify.com/v2/key-value-stores/{storeId}/keys?collection=documents

{
  "data": {
    "items": [
      {
        "key": "document-1",
        "size": 254
      },
      {
        "key": "document-2",
        "size": 368
      }
    ],
    "count": 2,
    "limit": 1000,
    "exclusiveStartKey": null,
    "isTruncated": false
  }
}
```

--------------------------------

### Define CheerioCrawler Main Script

Source: https://docs.apify.com/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up

This JavaScript code defines the main script for a CheerioCrawler project. It initializes the crawler with a request handler, retrieves a keyword from input, and starts the crawl by making an initial request to Amazon with the keyword.

```javascript
// main.js
import { CheerioCrawler, KeyValueStore, log } from 'crawlee';
import { router } from './routes.js';

// Grab our keyword from the input
const { keyword } = await KeyValueStore.getInput();

const crawler = new CheerioCrawler({
    requestHandler: router,

    // If you have access to Apify Proxy, you can use residential proxies and
    // high retry count which helps with blocking
    // If you don't, your local IP address will likely be fine for a few requests if you scrape slowly.
    // proxyConfiguration: await Actor.createProxyConfiguration({ groups: ['RESIDENTIAL'] }),
    // maxRequestRetries: 10,
});

log.info('Starting the crawl.');
await crawler.run([
    {
    // Turn the keyword into a link we can make a request with
    url: `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,
    label: 'START',
    userData: {
        keyword,
    },
}
]);
log.info('Crawl finished.');
```

--------------------------------

### Cheerio vs. Plain JavaScript for HTML Parsing

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This snippet demonstrates how Cheerio's `$` function simplifies HTML element selection and data extraction compared to native browser JavaScript methods. It shows examples for getting a title's text content and an array of all 'href' links on a page.

```JavaScript
// Return the text content of the <title> element.
document.querySelector('title').textContent; // plain JS
$('title').text(); // Cheerio

// Return an array of all 'href' links on the page.
Array.from(document.querySelectorAll('[href]')).map((el) => el.href); // plain JS
$('[href]')
    .map((i, el) => $(el).attr('href'))
    .get(); // Cheerio
```

--------------------------------

### New `launchContext` for `PuppeteerCrawler`

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example shows the recommended `launchContext` object for `Apify.PuppeteerCrawler`. It explicitly separates Apify-specific options (`useChrome`) from Puppeteer's native `launchOptions`, improving clarity and consistency.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    launchContext: {
        useChrome: true, // Apify option
        launchOptions: {
            headless: false, // Puppeteer option
        },
    },
});
```

--------------------------------

### Pass input directly to an Apify Actor call

Source: https://docs.apify.com/api/client/js/docs/2.9/examples

The fastest way to get results from an Actor is to pass input directly to the 'call' function. Input can be passed to the 'call' function, and the reference of the running Actor (or wait for finish) is available in the 'runData' variable. This example starts an Actor that scrapes 20 posts from the Instagram website based on a hashtag.

```JavaScript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const actorClient = client.actor('apify/instagram-hashtag-scraper');

const input = { hashtags: ['rainbow'], resultsLimit: 20 };

// Run the Actor and wait for it to finish up to 60 seconds.
// Input is not persisted for next runs.
const runData = await actorClient.call(input, { waitSecs: 60 });

console.log('Run data:');
console.log(runData);
```

--------------------------------

### Start Langflow UI locally with uv

Source: https://docs.apify.com/platform/integrations/langflow

After successful installation, this command initiates the Langflow platform. It makes the Langflow user interface accessible in your web browser at `http://127.0.0.1:7860`.

```bash
uv run langflow run
```

--------------------------------

### Go Apify Actor Dockerfile Example

Source: https://docs.apify.com/academy/deploying-your-code/docker-file

A straightforward Dockerfile for a Go-based Apify Actor. It sets the working directory, copies all source files, downloads Go modules, builds the executable, and defines the command to run the compiled application.

```Dockerfile
FROM golang:1.17.1-alpine

WORKDIR /app
COPY . .

RUN go mod download

RUN go build -o /example-actor
CMD ["/example-actor"]
```

--------------------------------

### Install Node.js Type Declarations

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/type-script-actor

This command installs the official type declarations for Node.js. These types enable comprehensive type-checking for Node.js features used in your project, improving code quality and developer experience.

```Shell
npm install --dev @types/node
```

--------------------------------

### Apify.utils.enqueueLinks API Parameters

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Detailed explanation of key parameters for Apify.utils.enqueueLinks(): selector, pseudoUrls, and transformRequestFunction for modifying Request instances and userData.

```APIDOC
Apify.utils.enqueueLinks(options: object): Promise<void>
  options:
    $: CheerioStatic - The Cheerio object ($) from the current page.
    requestQueue: RequestQueue - The RequestQueue to which links will be enqueued.
    selector?: string - A CSS selector to find specific links. Defaults to 'a'.
    pseudoUrls?: string[] - An array of pseudo URLs to match against found links. If omitted, all links matching the selector are enqueued.
    baseUrl: string - The base URL for resolving relative links.
    transformRequestFunction?: (request: Request) => Request - A function to modify each Request object before it's enqueued.
      request: Request - The Request object to be transformed.
        request.userData: object - A plain object to store custom data associated with the Request.
```

--------------------------------

### Initialize ApifyClient and define API keys

Source: https://docs.apify.com/platform/integrations/milvus

Imports the ApifyClient and sets up API tokens for Apify and OpenAI, along with Milvus connection details. This prepares the client for subsequent API calls to Apify actors and Milvus.

```Python
from apify_client import ApifyClient

APIFY_API_TOKEN = "YOUR-APIFY-TOKEN"
OPENAI_API_KEY = "YOUR-OPENAI-API-KEY"

MILVUS_COLLECTION_NAME = "YOUR-MILVUS-COLLECTION-NAME"
MILVUS_URI = "YOUR-MILVUS-URI"
MILVUS_TOKEN = "YOUR-MILVUS-TOKEN"
client = ApifyClient(APIFY_API_TOKEN)
```

--------------------------------

### Install TypeScript as Development Dependency

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/type-script-actor

This command installs the TypeScript compiler as a development dependency in your project. It ensures that `tsc` is available for compiling your TypeScript code without polluting the global environment.

```Shell
npm install --dev typescript
```

--------------------------------

### Initialize ApifyClient and Define API Keys

Source: https://docs.apify.com/platform/integrations/qdrant

This Python code imports the ApifyClient and sets up necessary API tokens and Qdrant connection details. It initializes the ApifyClient for subsequent API calls.

```Python
from apify_client import ApifyClient

APIFY_API_TOKEN = "YOUR-APIFY-TOKEN"
OPENAI_API_KEY = "YOUR-OPENAI-API-KEY"

QDRANT_URL = "YOUR-QDRANT-URL"
QDRANT_API_KEY = "YOUR-QDRANT-API-KEY"
QDRANT_COLLECTION_NAME = "YOUR-QDRANT-COLLECTION-NAME"

client = ApifyClient(APIFY_API_TOKEN)
```

--------------------------------

### Apify.call() and Apify.callTask() API Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Details the changes to Apify.call() and Apify.callTask(), which are now shortcuts to ApifyClient methods, incorporating environment variables for tokens.

```APIDOC
Apify.call():
  - Old behavior: Direct API call.
  - New behavior: Shortcut for ApifyClient.actor(actorId).call(input, options).
  - Notes: Automatically considers token from environment variables.

Apify.callTask():
  - Old behavior: Direct API call.
  - New behavior: Shortcut for ApifyClient.task(taskId).call(input, options).
  - Notes: Automatically considers token from environment variables.
```

--------------------------------

### Initialize and Run Apify Actor

Source: https://docs.apify.com/sdk/js/reference/3.2/changelog

Demonstrates two equivalent ways to initialize and run an Apify Actor: using explicit Actor.init() and Actor.exit(), or the simplified Actor.main() helper. Both methods handle setup, teardown, and process management.

```javascript
import { Actor } from 'apify';

await Actor.init();
// your code
await Actor.exit('Crawling finished!');
```

```javascript
import { Actor } from 'apify';

await Actor.main(
    async () => {
        // your code
    },
    { statusMessage: 'Crawling finished!' }
);
```

--------------------------------

### Create a New Apify Actor Project

Source: https://docs.apify.com/cli/docs/0.20/installation

Initializes a new Apify Actor project from scratch. The command prompts for a template and creates a new directory with boilerplate code.

```Shell
apify create my-hello-world
```

--------------------------------

### Verify Apify CLI Installation

Source: https://docs.apify.com/cli/docs/next/installation

Confirms that Apify CLI has been successfully installed by printing its version and environment details.

```bash
apify --version
```

--------------------------------

### Basic Dockerfile for Apify Node.js Actor

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/docker-images

This Dockerfile demonstrates a basic setup for an Apify Node.js actor, focusing on efficient dependency installation and copying source code. It uses a single-stage build process to prepare the application for execution.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Install TypeScript as a development dependency

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/type-script-actor

Install the TypeScript compiler (`tsc`) as a development dependency in your project. This avoids polluting the production environment or global system with TypeScript, making it a project-specific tool.

```bash
npm install --dev typescript
```

--------------------------------

### HTTP GET Request for List of Actors

Source: https://docs.apify.com/api/v2/acts-get

A basic HTTP GET request example, likely used to retrieve a list of actors from an API endpoint. This snippet shows the HTTP method.

```HTTP
GET
```

--------------------------------

### Complete Dockerfile for Apify Node.js Actor

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

This Dockerfile outlines the entire build process for an Apify Actor, leveraging a Node.js base image. It includes steps for copying package definitions, installing dependencies, copying application source, and defining the container's startup command, optimized for Docker's build cache.

```Dockerfile
FROM apify/actor-node:20

COPY package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version \
    && rm -r ~/.npm

COPY . ./

CMD npm start --silent
```

--------------------------------

### Install Apify Client Package

Source: https://docs.apify.com/academy/getting-started/apify-client

Instructions for installing the Apify client library using npm for Node.js projects and pip for Python projects. This package enables interaction with the Apify API.

```JavaScript
npm install apify-client
```

```Python
pip install apify-client
```

--------------------------------

### Verify Apify Account API Endpoint

Source: https://docs.apify.com/api/v2/getting-started

This GET endpoint allows you to check your API credentials and retrieve account details. A successful request will return a 200 OK status code. This is useful for confirming your setup.

```APIDOC
GET https://api.apify.com/v2/users/me
```

--------------------------------

### Composing Multiple `preLaunchHooks` for Browser Customization

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

Demonstrates how to define and apply multiple `preLaunchHooks` as an array. This allows for modular and reusable browser customization logic, such as conditionally launching Chrome or injecting fingerprints, before the browser starts.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint
];
```

--------------------------------

### Crawl Website with Relative Links using Apify CheerioCrawler in JavaScript

Source: https://docs.apify.com/sdk/js/docs/1.3/examples/crawl-relative-links

This JavaScript example demonstrates a complete Apify crawler setup to handle relative links. It initializes a `RequestQueue`, adds a starting URL, and defines a `handlePageFunction` that processes each page. The key to handling relative links is setting `baseUrl: request.loadedUrl` within `Apify.utils.enqueueLinks` to ensure all discovered links are properly resolved against the current page's URL.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    // Create a RequestQueue
    const requestQueue = await Apify.openRequestQueue();
    // Define the starting URL
    await requestQueue.addRequest({ url: 'https://apify.com/' });
    // Function called for each URL
    const handlePageFunction = async ({ request, $ }) => {
        console.log(request.url);
        // Add all links from page to RequestQueue
        await Apify.utils.enqueueLinks({
            $,
            requestQueue,
            baseUrl: request.loadedUrl, // <-------------- important to set the base url here
        });
    };
    // Create a CheerioCrawler
    const crawler = new Apify.CheerioCrawler({
        requestQueue,
        handlePageFunction,
        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
    });
    // Run the crawler
    await crawler.run();
});

```

--------------------------------

### Example: Getting Event Names from EventEmitter

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Logger

A JavaScript code example demonstrating how to use `EventEmitter.eventNames` to retrieve a list of all event names for which listeners are registered on an `EventEmitter` instance.

```JavaScript
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

--------------------------------

### Request Function Options Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Informs about the removal of prepareRequestFunction and postResponseFunction options, advising the use of navigation hooks.

```APIDOC
prepareRequestFunction:
  - Status: Removed.
  - Replacement: Use navigation hooks instead.

postResponseFunction:
  - Status: Removed.
  - Replacement: Use navigation hooks instead.
```

--------------------------------

### Example Project: Summing Numbers Function

Source: https://docs.apify.com/academy/deploying-your-code

This code snippet presents a basic function that sums an arbitrary number of inputs. It serves as the foundational example project used throughout the course to demonstrate the process of converting existing code into an Apify Actor, with implementations provided for both JavaScript and Python.

```JavaScript
// index.js
const addAllNumbers = (...nums) => nums.reduce((total, curr) => total + curr, 0);

console.log(addAllNumbers(1, 2, 3, 4)); // -> 10
```

```Python
# index.py
def add_all_numbers (nums):
    total = 0

    for num in nums:
        total += num

    return total

print(add_all_numbers([1, 2, 3, 4])) # -> 10
```

--------------------------------

### Multiple Pre-selected Start URLs for Apify Store Categories

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This block lists several distinct URLs, each pointing to a different category within the Apify Store (e.g., 'TRAVEL', 'ECOMMERCE', 'ENTERTAINMENT'). These URLs are manually collected and used as multiple start points for a CheerioCrawler when dynamic extraction of category links is not feasible due to JavaScript dependencies on the target page.

```URL
https://apify.com/store?category=TRAVEL
https://apify.com/store?category=ECOMMERCE
https://apify.com/store?category=ENTERTAINMENT
```

--------------------------------

### Get StatusMessageWatcher instance (Apify ActorRunClientAsync)

Source: https://docs.apify.com/api/client/python/reference/class/RunClientAsync

Get `StatusMessageWatcher` instance that can be used to redirect status and status messages to logs.
`StatusMessageWatcher` can be explicitly started and stopped or used as a context manager.

```APIDOC
async get_status_message_watcher(to_logger: logging.Logger | None = None, check_period: timedelta = timedelta(seconds=1)) -> StatusMessageWatcherAsync
  to_logger: logging.Logger | None = None - `Logger` used for logging the status and status messages. If not provided, a new logger is created.
  check_period: timedelta = timedelta(seconds=1) - The period with which the status message will be polled.
```

--------------------------------

### Apify SDK Crawler Classes Overview

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Introduces the three main crawler classes in the Apify SDK: BasicCrawler, CheerioCrawler, and PuppeteerCrawler. Explains their common operational idea of visiting web pages, performing actions, saving results, and continuing to the next page, emphasizing the need to define 'where to go' and 'what to do'.

```APIDOC
BasicCrawler:
  Purpose: General-purpose crawler for basic web page processing.
CheerioCrawler:
  Purpose: Optimized for fast HTML parsing using Cheerio.
PuppeteerCrawler:
  Purpose: Uses Puppeteer for full browser automation, handling JavaScript-rendered pages.

Common Crawler Idea:
  1. Determine "Where should I go?" (URLs to visit)
  2. Determine "What should I do there?" (Actions on the page)
```

--------------------------------

### Initialize Apify SDK in JavaScript

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This snippet demonstrates how to import the Apify library into a JavaScript project. It makes all Apify SDK features available for use in your application.

```JavaScript
const Apify = require('apify');
```

--------------------------------

### Complete Basic Web Scraper with Apify CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This comprehensive example combines all components to create a functional web crawler using Apify.CheerioCrawler. It initializes Apify, sets up a request queue, defines a page handling function, and runs the crawler to extract webpage titles.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();

        console.log(`The title of "${request.url}" is: ${title}.`);
    };

    // Set up the crawler, passing a single options object as an argument.
    const crawler = new Apify.CheerioCrawler({
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Accessing Launch Context Information via BrowserController

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example demonstrates how to access launch-time information, such as proxy details (`proxyInfo`) and session data (`session`), through the `browserController.launchContext` object. This provides insights into how the browser was launched.

```JavaScript
const handlePageFunction = async ({ browserController }) => {
    // Information about the proxy used by the browser
    browserController.launchContext.proxyInfo;

    // Session used by the browser
    browserController.launchContext.session;
};
```

--------------------------------

### Install Crawlee meta-package

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

Demonstrates how to install the main `crawlee` meta-package, which re-exports most `@crawlee/*` packages and includes all core crawler classes. This is suitable when not concerned about pulling in additional code.

```Bash
npm install crawlee
```

--------------------------------

### AutoscaledPool Configuration Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Details the changes to AutoscaledPool options, including renames and moves of configuration properties.

```APIDOC
AutoscaledPool:
  - cpuSnapshotIntervalSecs:
      - Status: Replaced.
      - Replacement: systemInfoIntervalMillis (top-level configuration).
  - memorySnapshotIntervalSecs:
      - Status: Replaced.
      - Replacement: systemInfoIntervalMillis (top-level configuration).
  - maxUsedCpuRatio:
      - Status: Moved.
      - New location: Top-level configuration.
```

--------------------------------

### Example: Getting and Setting Max Listeners

Source: https://docs.apify.com/sdk/js/reference/class/LoggerText

Demonstrates how to use `getMaxListeners` to retrieve the current maximum listener limit and `setMaxListeners` to modify it for both `EventEmitter` and `EventTarget` instances. The example shows the default limit and how it changes after modification.

```JavaScript
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

--------------------------------

### Creating a Basic Apify Proxy Configuration

Source: https://docs.apify.com/sdk/js/docs/next/guides/apify-platform

This example shows the basic usage of `Actor.createProxyConfiguration()` to initialize an Apify Proxy setup. It retrieves a new proxy URL, which can then be used for network requests in a crawler. This method is preferred over direct `ProxyConfiguration` instantiation for Apify Proxy.

```JavaScript
import { Actor } from 'apify';

const proxyConfiguration = await Actor.createProxyConfiguration();
const proxyUrl = await proxyConfiguration.newUrl();
```

--------------------------------

### injectUnderscore Utility Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Notes the removal of the injectUnderscore utility from puppeteer utils.

```APIDOC
injectUnderscore:
  - Status: Removed.
  - Context: From puppeteer utils.
```

--------------------------------

### Integrating Apify's enqueueLinks() Helper Function (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This JavaScript example refactors the previous crawler to utilize Apify's built-in `enqueueLinks()` utility. It significantly simplifies the process of extracting and enqueuing links by automating filtering with pseudo-URLs, reducing boilerplate code and improving efficiency.

```JavaScript
const Apify = require('apify');
const {
    utils: { enqueueLinks },
} = Apify;

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);

        // Enqueue links
        const enqueued = await enqueueLinks({
            $,
            requestQueue,
            pseudoUrls: ['http[s?]://apify.com[.*]'],
            baseUrl: request.loadedUrl,
        });
        console.log(`Enqueued ${enqueued.length} URLs.`);
    };

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 20,
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Example: Getting Listeners Array for Event

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Logger

A JavaScript code example demonstrating how to use `EventEmitter.listeners` to retrieve an array of listener functions currently registered for a specific event on an `EventEmitter`.

```JavaScript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v3

Installs the main `crawlee` meta-package, which re-exports most `@crawlee/*` packages and contains all crawler classes, simplifying installation for general use.

```bash
npm install crawlee
```

--------------------------------

### EnqueueLinks Strategies

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This section outlines the available enqueuing strategies for the `enqueueLinks` helper. These strategies define how URLs are matched and filtered when enqueuing links from a page.

```APIDOC
EnqueueStrategy.All ('all'): Matches any URLs found
EnqueueStrategy.SameHostname ('same-hostname'): Matches any URLs that have the same subdomain as the base URL (default)
EnqueueStrategy.SameDomain ('same-domain'): Matches any URLs that have the same domain name. For example, https://wow.an.example.com and https://example.com will both be matched for a base url of https://example.com.
```

--------------------------------

### Example PlaywrightLaunchContext Configuration

Source: https://docs.apify.com/sdk/js/docs/2.3/typedefs/playwright-launch-context

Demonstrates how to configure `PlaywrightLaunchContext` with both Apify-specific helpers like `useChrome` and `proxyUrl`, and native Playwright `launchOptions` such as `headless` and `args`.

```JavaScript
// launch a headless Chrome (not Chromium)
const launchContext = {
    // Apify helpers
    useChrome: true,
    proxyUrl: 'http://user:password@some.proxy.com'
    // Native Playwright options
    launchOptions: {
        headless: true,
        args: ['--some-flag']
    }
}
```

--------------------------------

### Configure Apify CheerioCrawler with RequestList and RequestQueue

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet shows how to instantiate an `Apify.CheerioCrawler` and integrate both `RequestList` and `RequestQueue`. The crawler automatically enqueues requests from the `RequestList` into the `RequestQueue` before execution, simplifying the crawling process for initial and dynamically discovered URLs.

```JavaScript
const crawler = new Apify.CheerioCrawler({
    requestList,
    requestQueue,
    handlePageFunction,
});
```

--------------------------------

### APIFY_MEMORY_MBYTES Environment Variable Change

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Explains that APIFY_MEMORY_MBYTES is no longer used and should be replaced by CRAWLEE_AVAILABLE_MEMORY_RATIO.

```APIDOC
APIFY_MEMORY_MBYTES:
  - Status: No longer taken into account.
  - Replacement: Use CRAWLEE_AVAILABLE_MEMORY_RATIO instead.
```

--------------------------------

### Accessing Browser Launch Context Information via BrowserController

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This example shows how to access important launch context information, such as proxy details and session data, directly from the `browserController` instance, which was previously difficult to obtain.

```javascript
const handlePageFunction = async ({ browserController }) => {
    // Information about the proxy used by the browser
    browserController.launchContext.proxyInfo;

    // Session used by the browser
    browserController.launchContext.session;
};
```

--------------------------------

### Example: Online store categories base URL

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This URL serves as an example of a base path for categories in a typical online store. It's used to illustrate how URL patterns can be identified and leveraged for targeted scraping using pseudo-URLs.

```Text
https://www.online-store.com/categories
```

--------------------------------

### Verify Node.js and npm Installation

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/computer-preparation

Run these commands in your terminal to check the installed versions of Node.js and npm. Ensure Node.js is version 16 or higher for compatibility with subsequent lessons.

```Shell
node -v
npm -v
```

--------------------------------

### Migrating from PuppeteerPool.retire to BrowserPool.retireBrowserByPage

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example illustrates the change in how to retire a browser. The old method involved `puppeteerPool.retire(page.browser())`, which has been replaced by the more direct `browserPool.retireBrowserByPage(page)`.

```JavaScript
// OLD
await puppeteerPool.retire(page.browser());

// NEW
browserPool.retireBrowserByPage(page);
```

--------------------------------

### Apify SDK Actor Class Static Helpers API Reference

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Detailed API reference for the static helper methods available on the `Actor` class in the Apify SDK. This includes shortcuts for `ApifyClient` operations, platform execution utilities, storage management functions, event handling methods, and other general utilities.

```APIDOC
Actor (static class):
  Methods:
    // ApifyClient shortcuts
    addWebhook(): Promise<void>
    call(actorId: string, input?: object, options?: object): Promise<object>
    callTask(taskId: string, input?: object, options?: object): Promise<object>
    metamorph(actorId: string, input?: object, options?: object): Promise<void>

    // Platform helpers
    init(): Promise<void>
      Description: Initializes the actor, sets storage implementation for Crawlee, subscribes to websocket events.
    exit(statusMessage?: string): Promise<void>
      Description: Handles tear down, calls process.exit(). Fires 'exit' event.
    fail(): Promise<void>
    main(userFunction: Function, options?: object): Promise<void>
      Description: Syntax sugar for init() and exit(), wraps userFunction in try/catch.
      Parameters:
        userFunction: Function - The main logic to execute.
        options: object - Optional settings, e.g., { statusMessage: string }.
    isAtHome(): boolean
    createProxyConfiguration(options?: object): ProxyConfiguration

    // Storage support
    getInput(): Promise<object>
    getValue(key: string): Promise<any>
    openDataset(name?: string, options?: object): Promise<Dataset>
    openKeyValueStore(name?: string, options?: object): Promise<KeyValueStore>
    openRequestQueue(name?: string, options?: object): Promise<RequestQueue>
    pushData(data: object): Promise<void>
    setValue(key: string, value: any, options?: object): Promise<void>

    // Events support
    on(eventName: string, listener: Function): void
    off(eventName: string, listener: Function): void
    eventManager: EventManager (getter)
      Description: Accesses the EventManager instance.

    // Other utilities
    getEnv(): object
    newClient(options?: object): ApifyClient
    reboot(): Promise<void>

  Events:
    exit: Fired when Actor.exit() is called, allowing graceful shutdown.
```

--------------------------------

### Example JSON Input for Apify Actor API

Source: https://docs.apify.com/platform/actors/running/input

This JSON object demonstrates how to pass input parameters when running an Apify Actor via its API. It includes common configurations such as maximum requests per crawl, proxy settings, and the starting URL for the Actor, providing a clear example of a typical Actor input structure.

```json
{
    "maxRequestsPerCrawl": 10,
    "proxy": {
        "useApifyProxy": true
    },
    "startUrl": "https://apify.com"
}
```

--------------------------------

### QueueOperationInfo.request Property Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Informs about the removal of the request property from QueueOperationInfo.

```APIDOC
QueueOperationInfo.request:
  - Status: No longer available.
```

--------------------------------

### Install Node.js type declarations

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/type-script-actor

Install type declarations for Node.js as a development dependency. This enables comprehensive type-checking for Node.js features used in your project, significantly enhancing code quality and reducing potential runtime errors.

```bash
npm install --dev @types/node
```

--------------------------------

### Accessing `crawlingContext` within `preLaunchHook`

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example demonstrates how a `preLaunchHook` can access the `crawlingContext` associated with the request that triggered the browser launch, enabling dynamic configuration based on request data.

```JavaScript
const preLaunchHooks = [
    async function maybeLaunchChrome(pageId, launchContext) {
        const { request } = crawler.crawlingContexts.get(pageId);
        if (request.userData.useHeadful === true) {
            launchContext.launchOptions.headless = false;
        }
    },
];
```

--------------------------------

### Install Node.js Type Declarations for Development

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/type-script-actor

Command to install type declarations for Node.js, which provides type-checking and auto-completion for Node.js APIs used within your TypeScript project. This enhances development experience and helps catch errors early.

```Bash
npm install --dev @types/node
```

--------------------------------

### Run Apify Project with Purge

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Executes the Apify project. The -p flag (or --purge) clears persistent storages before starting the actor, which is useful for fresh runs and preventing old state from interfering. INPUT.json and named storages are preserved.

```bash
apify run -p
```

--------------------------------

### Log In to Apify Platform via CLI

Source: https://docs.apify.com/platform/actors/development/quick-start/web-ide

Command to authenticate your local Apify CLI with your Apify platform account. This step is a prerequisite for pulling Actors or performing other authenticated operations.

```bash
apify login
```

--------------------------------

### JavaScript: Actor.start Usage Example

Source: https://docs.apify.com/sdk/js/reference/3.1/class/Actor

Provides an example of how to use `Actor.start` to initiate an Actor run on the Apify platform, specifying the actor ID and an optional input object.

```JavaScript
const run = await Actor.start('apify/hello-world', { myInput: 123 });
```

--------------------------------

### Create Basic Apify Proxy Configuration in JavaScript

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

This code demonstrates the basic setup for using Apify Proxy within an Apify Actor. It shows how to create a proxy configuration object and then retrieve a new proxy URL from it, suitable for general proxy usage.

```javascript
import { Actor } from 'apify';

const proxyConfiguration = await Actor.createProxyConfiguration();
const proxyUrl = await proxyConfiguration.newUrl();
```

--------------------------------

### Apify.main(userFunc) Function Documentation and Examples

Source: https://docs.apify.com/sdk/js/docs/api/apify

The `Apify.main()` function runs the main user function for an actor, handling platform events, environment variable setup, error logging, and process termination. It is optional and primarily useful when running code on the Apify platform. Examples demonstrate synchronous, promise-based asynchronous, and async/await usage.

```APIDOC
Apify.main(userFunc: UserFunc)
  userFunc: User function to be executed. If it returns a promise, the promise will be awaited. The user function is called with no arguments.
```

```JavaScript
Apify.main(() => {
    // My synchronous function that returns immediately
    console.log('Hello world from actor!');
});
```

```JavaScript
const { requestAsBrowser } = require('some-request-library');

Apify.main(() => {
    // My asynchronous function that returns a promise
    return request('http://www.example.com').then((html) => {
        console.log(html);
    });
});
```

```JavaScript
const request = require('some-request-library');

Apify.main(async () => {
    // My asynchronous function
    const html = await request('http://www.example.com');
    console.log(html);
});
```

--------------------------------

### Add Initial Requests and Run CheerioCrawler

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/pro-scraping

This snippet builds upon the basic CheerioCrawler setup by showing how to add initial URLs to the crawler's queue using addRequests. It then demonstrates how to start the crawling process by calling crawler.run(), which will process the added URLs.

```JavaScript
import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
    requestHandler: async ({ $, request }) => {
        console.log('URL:', request.url);
        console.log('Title:', $('h1').text().trim());
    }
});

// Add the Sales category of Warehouse store to the queue of URLs.
await crawler.addRequests([
    'https://warehouse-theme-metal.myshopify.com/collections/sales'
]);

await crawler.run();
```

--------------------------------

### Python: Start and Wait for Apify Actor Runs (Async and Sync)

Source: https://docs.apify.com/api/client/python/docs/concepts/convenience-methods

These Python snippets demonstrate how to use both asynchronous (`ApifyClientAsync`) and synchronous (`ApifyClient`) Apify clients to start an Actor and wait for its completion. They show examples of using `actor_client.call()` to wait for an Actor to finish and `actor_client.start()` with a `wait_for_finish` parameter for timed waits.

```Python
from apify_client import ApifyClientAsync

TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    apify_client = ApifyClientAsync(TOKEN)
    actor_client = apify_client.actor('username/actor-name')

    # Start an Actor and waits for it to finish
    finished_actor_run = await actor_client.call()

    # Starts an Actor and waits maximum 60s (1 minute) for the finish
    actor_run = await actor_client.start(wait_for_finish=60)

```

```Python
from apify_client import ApifyClient

TOKEN = 'MY-APIFY-TOKEN'

def main() -> None:
    apify_client = ApifyClient(TOKEN)
    actor_client = apify_client.actor('username/actor-name')

    # Start an Actor and waits for it to finish
    finished_actor_run = actor_client.call()

    # Starts an Actor and waits maximum 60s (1 minute) for the finish
    actor_run = actor_client.start(wait_for_finish=60)

```

--------------------------------

### Implementing Custom Logic with `preLaunchHooks`

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v1

Demonstrates how to replace `launchPuppeteerFunction` with a `preLaunchHook` within `browserPoolOptions` to modify `launchContext` before browser launch, offering a more consistent and flexible approach.

```JavaScript
const maybeLaunchChrome = (pageId, launchContext) => {
    if (someVariable === 'chrome') {
        launchContext.useChrome = true;
    }
};

const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        preLaunchHooks: [maybeLaunchChrome],
    },
    // ...
});
```

--------------------------------

### Initialize and Run Crawlee Web Scraper

Source: https://docs.apify.com/academy/web-scraping-for-beginners/challenge/modularity

This JavaScript file serves as the main entry point for the Crawlee application. It initializes `CheerioCrawler`, configures it with the defined router, retrieves a keyword from `KeyValueStore`, adds an initial request to start the crawl, and manages the logging of the crawl process.

```javascript
import { CheerioCrawler, log, KeyValueStore } from 'crawlee';
import { router } from './routes.js';
import { BASE_URL } from './constants.js';

const { keyword = 'iphone' } = (await KeyValueStore.getInput()) ?? {};

const crawler = new CheerioCrawler({
    requestHandler: router,
});

await crawler.addRequests([
    {
        // Use BASE_URL here instead
        url: `${BASE_URL}/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,
        label: 'START',
        userData: {
            keyword,
        },
    },
]);

log.info('Starting the crawl.');
await crawler.run();
log.info('Crawl finished.');
```

--------------------------------

### Install Apify Client with Package Managers

Source: https://docs.apify.com/api/client/js/docs/next

Instructions for installing the `apify-client` library using popular JavaScript package managers. Choose the command relevant to your preferred package manager.

```NPM
npm i apify-client
```

```Yarn
yarn add apify-client
```

```PNPM
pnpm add apify-client
```

```Bun
bun add apify-client
```

--------------------------------

### Initialize and Exit Apify Actor Explicitly

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Demonstrates the explicit usage of `Actor.init()` and `Actor.exit()` for setting up and tearing down an Apify Actor process. These methods are asynchronous and should be awaited to ensure proper initialization and graceful shutdown.

```JavaScript
import { Actor } from 'apify';

await Actor.init();
// your code
await Actor.exit('Crawling finished!');
```

--------------------------------

### Create CheerioCrawler Router

Source: https://docs.apify.com/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up

This JavaScript file defines the router for the CheerioCrawler, responsible for handling requests. It creates a CheerioRouter instance and adds a default handler to log when a route is reached.

```javascript
// routes.js
import { createCheerioRouter } from 'crawlee';

export const router = createCheerioRouter();

router.addDefaultHandler(({ log }) => {
    log.info('Route reached.');
});
```

--------------------------------

### Example Dockerfile for Apify Node.js Actors

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/docker-images

This Dockerfile illustrates how to build an Apify actor using a base Node.js image. It demonstrates best practices for optimizing Docker image size and build speed by selectively copying package files before installing dependencies.

```Dockerfile
# First, specify the base Docker image. You can read more about
# the available images at https://sdk.apify.com/docs/guides/docker-images
# You can also use any other image from Docker Hub.
# The 16 represents the version of Node.js you want to use.
FROM apify/actor-node:16

# Second, copy just package.json and package-lock.json since it should be
# the only file that affects "npm install" in the next step, to speed up the build
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
```

--------------------------------

### Request Queue Compatibility Fix Removal

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Notes the removal of the compatibility fix for old/broken request queues with null Request properties.

```APIDOC
Request Queue Compatibility Fix:
  - Status: Removed.
  - Context: Fix for old/broken request queues with null Request properties.
```

--------------------------------

### Manual Apify Actor Initialization and Exit

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

This code shows the explicit way to manage an Apify Actor's lifecycle using `Actor.init()` and `Actor.exit()`. These methods handle setup (like storage configuration) and teardown processes, and should always be awaited. This pattern is equivalent to using `Actor.main` but provides more granular control.

```JavaScript
import { Actor } from 'apify';

await Actor.init();
// your code
await Actor.exit('Crawling finished!');
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

Installs Apify SDK v1 with the Playwright browser automation library. This configuration enables support for Firefox, Webkit, and Chromium browsers, offering an alternative to Puppeteer for web automation and scraping.

```javascript
npm install apify playwright
```

--------------------------------

### Migrating from PuppeteerPool.retire to BrowserPool.retireBrowserByPage()

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This example demonstrates the updated method for retiring a browser. The previous `puppeteerPool.retire(page.browser())` is now replaced by `browserPool.retireBrowserByPage(page)` for better integration with `BrowserPool`.

```javascript
// OLD
await puppeteerPool.retire(page.browser());

// NEW
browserPool.retireBrowserByPage(page);
```

--------------------------------

### Apify Actor Main File (main.js)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This file establishes the core structure of the Apify crawler. It initializes the request list and queue, sets up the CheerioCrawler, and defines the handlePageFunction to process requests by routing them through helper functions imported from 'tools.js'.

```javascript
// main.js
const Apify = require('apify');
const tools = require('./tools');
const {
    utils: { log },
} = Apify;

Apify.main(async () => {
    log.info('Starting actor.');
    const requestList = await Apify.openRequestList(
        'categories',
        await tools.getSources(),
    );
    const requestQueue = await Apify.openRequestQueue();
    const router = tools.createRouter({ requestQueue });

    log.debug('Setting up crawler.');
    const crawler = new Apify.CheerioCrawler({
        requestList,
        requestQueue,
        handlePageFunction: async (context) => {
            const { request } = context;
            log.info(`Processing ${request.url}`);
            await router(request.userData.label, context);
        },
    });

    log.info('Starting the crawl.');
    await crawler.run();
    log.info('Actor finished.');
});
```

--------------------------------

### Request Property Type Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Highlights the type changes for Request.handledAt, Request.inProgress, and Request.reclaimed properties.

```APIDOC
Request.handledAt:
  - Old type: Unknown.
  - New type: String date in ISO format.

Request.inProgress:
  - Old type: Plain Old JavaScript Object (POJO).
  - New type: Set.

Request.reclaimed:
  - Old type: Plain Old JavaScript Object (POJO).
  - New type: Set.
```

--------------------------------

### Call Apify Actor and Retrieve Dataset Results (Synchronous Python)

Source: https://docs.apify.com/api/client/python/docs/overview/getting-started

This snippet demonstrates the full workflow of calling an Apify Actor synchronously, waiting for its completion, and then fetching the processed data from its default dataset. It includes error handling for failed Actor runs and prints the retrieved items.

```Python
TOKEN = 'MY-APIFY-TOKEN'

def main() -> None:
    apify_client = ApifyClient(TOKEN)

    # Start an Actor and wait for it to finish.
    actor_client = apify_client.actor('john-doe/my-cool-actor')
    call_result = actor_client.call()

    if call_result is None:
        print('Actor run failed.')
        return

    # Fetch results from the Actor run's default dataset.
    dataset_client = apify_client.dataset(call_result['defaultDatasetId'])
    list_items_result = dataset_client.list_items()
    print(f'Dataset: {list_items_result}')
```

--------------------------------

### Get Apify Actor Run Dataset Information with PHP

Source: https://docs.apify.com/academy/php/use-apify-from-php

This PHP example shows how to retrieve overall information about an Apify Actor run's default dataset. It makes a GET request to the `actor-runs/<RUN_ID>/dataset` endpoint, providing statistics about the dataset, such as the number of items, but not the actual data.

```PHP
// Replace <RUN_ID> with the run ID you from earlier
$response = $client->get('actor-runs/<RUN_ID>/dataset');
$parsedResponse = \json_decode($response->getBody(), true);
$data = $parsedResponse['data'];

echo \json_encode($data, JSON_PRETTY_PRINT);
```

--------------------------------

### Example: Configure PuppeteerLaunchContext with Apify and Native Options

Source: https://docs.apify.com/sdk/js/docs/2.3/typedefs/puppeteer-launch-context

This JavaScript example demonstrates how to configure the `PuppeteerLaunchContext` object. It shows how to combine Apify-specific helpers like `useChrome` and `proxyUrl` with native Puppeteer `launchOptions` such as `headless` and `args` to customize browser launch behavior.

```JavaScript
// launch a headless Chrome (not Chromium)
const launchContext = {
    // Apify helpers
    useChrome: true,
    proxyUrl: 'http://user:password@some.proxy.com',
    // Native Puppeteer options
    launchOptions: {
        headless: true,
        args: ['--some-flag']
    }
}
```

--------------------------------

### Build Apify Actor with Single-Stage Dockerfile

Source: https://docs.apify.com/sdk/js/docs/next/guides/docker-images

This Dockerfile demonstrates a basic single-stage build process for an Apify actor. It copies package files, installs NPM dependencies, copies source code, and defines the command to start the application.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Navigate into Apify Project Directory

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Changes the current working directory to the newly created Apify project folder. This is a prerequisite for running project-specific commands.

```bash
cd my-new-project
```

--------------------------------

### Install TypeScript development dependency

Source: https://docs.apify.com/sdk/js/docs/next/guides/type-script-actor

Installs the TypeScript compiler (`typescript`) as a development dependency using npm, ensuring it's available for project builds without polluting global environments.

```bash
npm install --dev typescript
```

--------------------------------

### Complete Apify CheerioCrawler for Data Extraction and Saving

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Provides the full JavaScript code for an Apify CheerioCrawler that scrapes data from multiple categories, processes detail pages, enqueues new links, and saves extracted data using `Apify.pushData()`. It showcases a complete web scraping workflow.

```javascript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue();

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50,
        requestList,
        requestQueue,
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            // This is our new scraping logic.
            if (request.userData.detailPage) {
                const urlArr = request.url.split('/').slice(-2);

                const results = {
                    url: request.url,
                    uniqueIdentifier: urlArr.join('/'),
                    owner: urlArr[0],
                    title: $('header h1').text(),
                    description: $('header span.actor-description').text(),
                    modifiedDate: new Date(
                        Number($('ul.ActorHeader-stats time').attr('datetime')),
                    ),
                    runCount: Number(
                        $('ul.ActorHeader-stats > li:nth-of-type(3)')
                            .text()
                            .match(/[\d,]+/)[0]
                            .replace(',', ''),
                    ),
                };
                await Apify.pushData(results);
            }

            // Only enqueue new links from the category pages.
            if (!request.userData.detailPage) {
                await Apify.utils.enqueueLinks({
                    $,
                    requestQueue,
                    selector: 'div.item > a',
                    baseUrl: request.loadedUrl,
                    transformRequestFunction: (req) => {
                        req.userData.detailPage = true;
                        return req;
                    },
                });
            }
        },
    });

    await crawler.run();
});
```

--------------------------------

### Composing multiple `preLaunchHooks` for modularity

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This snippet shows how an array of `preLaunchHooks` can be defined, allowing for modular and reusable browser configuration behaviors to be applied sequentially during launch.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint,
];
```

--------------------------------

### Verify Apify CLI Installation and Version

Source: https://docs.apify.com/cli/docs/0.20/installation

Confirms that Apify CLI was installed correctly by displaying its version and system information.

```Shell
apify --version
```

--------------------------------

### Install Apify CLI using NPM

Source: https://docs.apify.com/platform/actors/development/quick-start/locally

Install the Apify Command Line Interface (CLI) globally using NPM for other platforms (e.g., Windows).

```bash
npm -g install apify-cli
```

--------------------------------

### Apify.metamorph() API Change

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Explains the update to Apify.metamorph(), now a shortcut to ApifyClient.task(taskId).metamorph(), utilizing ACTOR_RUN_ID from environment variables.

```APIDOC
Apify.metamorph():
  - Old behavior: Direct API call.
  - New behavior: Shortcut for ApifyClient.task(taskId).metamorph(input, options).
  - Notes: Automatically considers ACTOR_RUN_ID from environment variables.
```

--------------------------------

### Full Apify CheerioCrawler Implementation for Actor Scraping

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This complete JavaScript example demonstrates how to set up and run an Apify CheerioCrawler to scrape data from multiple categories and detail pages. It defines a `handlePageFunction` that conditionally extracts actor details from detail pages and enqueues new links from category pages, showcasing a full scraping workflow.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue();

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50,
        requestList,
        requestQueue,
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            // This is our new scraping logic.
            if (request.userData.detailPage) {
                const urlArr = request.url.split('/').slice(-2);

                const results = {
                    url: request.url,
                    uniqueIdentifier: urlArr.join('/'),
                    owner: urlArr[0],
                    title: $('header h1').text(),
                    description: $('header span.actor-description').text(),
                    modifiedDate: new Date(
                        Number($('ul.ActorHeader-stats time').attr('datetime')),
                    ),
                    runCount: Number(
                        $('ul.ActorHeader-stats > li:nth-of-type(3)')
                            .text()
                            .match(/[\d,]+/)[0]
                            .replace(',', ''),
                    ),
                };
                console.log('RESULTS', results);
            }

            // Only enqueue new links from the category pages.
            if (!request.userData.detailPage) {
                await Apify.utils.enqueueLinks({
                    $,
                    requestQueue,
                    selector: 'div.item > a',
                    baseUrl: request.loadedUrl,
                    transformRequestFunction: (req) => {
                        req.userData.detailPage = true;
                        return req;
                    }
                });
            }
        }
    });

    await crawler.run();
});
```

--------------------------------

### API: Get Keys from Apify Key-Value Store by Prefix

Source: https://docs.apify.com/platform/actors/development/actor-definition/key-value-store-schema

This API example shows how to filter and retrieve keys from an Apify key-value store based on a specified prefix using the 'prefix' query parameter. It provides the HTTP GET request for this operation.

```APIDOC
GET https://api.apify.com/v2/key-value-stores/{storeId}/keys?prefix=document-
```

--------------------------------

### Get detailed help for a specific Apify CLI command

Source: https://docs.apify.com/cli/docs/0.20/vars

Execute this command to retrieve in-depth documentation, including parameters, options, and examples, for a particular Apify CLI command. Replace 'COMMAND' with the actual name of the command you need assistance with.

```Shell
apify help COMMAND
```

--------------------------------

### Apify CLI: Create Actor Project

Source: https://docs.apify.com/cli/docs/reference

Creates a new Actor project from a specified template in a new directory. Users can choose a template or be prompted for one, with options to skip dependency installation.

```APIDOC
USAGE
  $ apify create [ACTORNAME] [-t <value>] [--skip-dependency-install] [--omit-optional-deps]

ARGUMENTS
  ACTORNAME  Name of the Actor and its directory

FLAGS
  -t, --template=<value>         Template for the Actor. If not provided, the command will prompt for it.
                                 Visit
                                 https://raw.githubusercontent.com/apify/actor-templates/master/templates/manifest.json
                                 to find available template names.
      --omit-optional-deps       Skip installing optional dependencies.
      --skip-dependency-install  Skip installing Actor dependencies.

DESCRIPTION
  Creates an Actor project from a template in a new directory.
```

--------------------------------

### Initializing Apify Actor Project with CLI

Source: https://docs.apify.com/academy/deploying-your-code/deploying

Explains how to generate the necessary `.actor/actor.json` configuration file at the root of an Actor project using the `apify init .` command. This is a prerequisite for using `apify push` if the file doesn't already exist.

```CLI
apify init .
```

--------------------------------

### Puppeteer Scraper: Example Clickable Elements Selector

Source: https://docs.apify.com/academy/node-js/when-to-use-puppeteer-scraper

This string provides an example of a CSS selector for the 'Clickable elements selector' option in Puppeteer Scraper. It targets anchor tags with an onclick attribute that starts with 'getPage', useful for JavaScript-driven navigation.

```CSS Selector
'a[onclick ^= getPage]';
```

--------------------------------

### PuppeteerCrawler with preLaunchHook for browser customization

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This example illustrates the new recommended approach using a `preLaunchHook` within `browserPoolOptions` to achieve similar browser customization. The `maybeLaunchChrome` hook modifies `launchContext` to enable Chrome, providing a more consistent API across different browser types.

```JavaScript
const maybeLaunchChrome = (pageId, launchContext) => {
    if (someVariable === 'chrome') {
        launchContext.useChrome = true;
    }
};

const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        preLaunchHooks: [maybeLaunchChrome],
    },
    // ...
});
```

--------------------------------

### Crawlee: Full Crawler Example with Custom Logging and Data Management (Python)

Source: https://docs.apify.com/academy/scraping-basics-python/framework

This comprehensive Python example showcases a complete Crawlee BeautifulSoupCrawler setup, integrating custom logging, data saving, and data exporting functionalities. It demonstrates how to use `context.log.info()` and `crawler.log.info()` for better visibility, push data to the dataset, and finally export all collected data to JSON and CSV files. It also includes a helper function for parsing product variants.

```Python
import asyncio
from decimal import Decimal
from crawlee.crawlers import BeautifulSoupCrawler, BeautifulSoupCrawlingContext

async def main():
    crawler = BeautifulSoupCrawler()

    @crawler.router.default_handler
    async def handle_listing(context: BeautifulSoupCrawlingContext):
        context.log.info("Looking for product detail pages")
        await context.enqueue_links(selector=".product-list a.product-item__title", label="DETAIL")

    @crawler.router.handler("DETAIL")
    async def handle_detail(context: BeautifulSoupCrawlingContext):
        context.log.info(f"Product detail page: {context.request.url}")
        price_text = (
            context.soup
            .select_one(".product-form__info-content .price")
            .contents[-1]
            .strip()
            .replace("$", "")
            .replace(",", "")
        )
        item = {
            "url": context.request.url,
            "title": context.soup.select_one(".product-meta__title").text.strip(),
            "vendor": context.soup.select_one(".product-meta__vendor").text.strip(),
            "price": Decimal(price_text),
            "variant_name": None,
        }
        if variants := context.soup.select(".product-form__option.no-js option"):
            for variant in variants:
                context.log.info("Saving a product variant")
                await context.push_data(item | parse_variant(variant))
        else:
            context.log.info("Saving a product")
            await context.push_data(item)

    await crawler.run(["https://warehouse-theme-metal.myshopify.com/collections/sales"])

    crawler.log.info("Exporting data")
    await crawler.export_data_json(path='dataset.json', ensure_ascii=False, indent=2)
    await crawler.export_data_csv(path='dataset.csv')

def parse_variant(variant):
    text = variant.text.strip()
    name, price_text = text.split(" - ")
    price = Decimal(
        price_text
        .replace("$", "")
        .replace(",", "")
    )
    return {"variant_name": name, "price": price}

if __name__ == '__main__':
    asyncio.run(main())
```

--------------------------------

### Start an Apify Actor and get run details (Python)

Source: https://docs.apify.com/sdk/python/docs/concepts/interacting-with-other-actors

The `Actor.start` method initiates another Actor on the Apify platform and immediately returns the details of the started run. This asynchronous function allows you to launch a specified Actor with custom input data, providing immediate access to the `actor_run` object for further monitoring or logging.

```Python
from apify import Actor

async def main() -> None:
    async with Actor:
        # Start your own Actor named 'my-fancy-actor'.
        actor_run = await Actor.start(
            actor_id='~my-fancy-actor',
            run_input={'foo': 'bar'},
        )

        # Log the Actor run ID.
        Actor.log.info(f'Actor run ID: {actor_run.id}')
```

--------------------------------

### Log in to Apify Platform using Apify CLI

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

This snippet demonstrates how to install the Apify CLI globally and then log into your Apify account using your API token. Once logged in, the CLI automatically provides credentials for scrapers, enabling access to Apify platform features.

```Shell
npm install -g apify-cli
apify login -t YOUR_API_TOKEN
```

--------------------------------

### Integrate ASINTracker in Crawlee Routes

Source: https://docs.apify.com/academy/expert-scraping-with-apify/solutions/handling-migrations

This `routes.js` file, using `@crawlee/cheerio`, demonstrates how to integrate the `ASINTracker` utility. It defines handlers for different crawling stages (START, PRODUCT, OFFERS) to extract product information, track ASINs using `tracker.incrementASIN`, and push collected data to a dataset. It shows how to use the `ASINTracker` to update offer counts for products found during the crawl.

```javascript
// routes.js
import { createCheerioRouter } from '@crawlee/cheerio';
import { BASE_URL, OFFERS_URL, labels } from './constants';
import tracker from './asinTracker';
import { dataset } from './main.js';

export const router = createCheerioRouter();

router.addHandler(labels.START, async ({ $, crawler, request }) => {
    const { keyword } = request.userData;

    const products = $('div > div[data-asin]:not([data-asin=""])');

    for (const product of products) {
        const element = $(product);
        const titleElement = $(element.find('.a-text-normal[href]'));

        const url = `${BASE_URL}${titleElement.attr('href')}`;

        // For each product, add it to the ASIN tracker
        // and initialize its collected offers count to 0
        tracker.incrementASIN(element.attr('data-asin'));

        await crawler.addRequest([{
            url,
            label: labels.PRODUCT,
            userData: {
                data: {
                    title: titleElement.first().text().trim(),
                    asin: element.attr('data-asin'),
                    itemUrl: url,
                    keyword,
                },
            },
        }]);
    }
});

router.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {
    const { data } = request.userData;

    const element = $('div#productDescription');

    await crawler.addRequests([{
        url: OFFERS_URL(data.asin),
        label: labels.OFFERS,
        userData: {
            data: {
                ...data,
                description: element.text().trim(),
            },
        },
    }]);
});

router.addHandler(labels.OFFERS, async ({ $, request }) => {
    const { data } = request.userData;

    const { asin } = data;

    for (const offer of $('#aod-offer')) {
        // For each offer, add 1 to the ASIN's
        // offer count
        tracker.incrementASIN(asin);

        const element = $(offer);

        await dataset.pushData({
            ...data,
            sellerName: element.find('div[id*="soldBy"] a[aria-label]').text().trim(),
            offer: element.find('.a-price .a-offscreen').text().trim()
        });
    }
});
```

--------------------------------

### Local Input File Path for Apify Actors

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This path indicates where the 'INPUT.json' file should be placed when running an Apify actor locally. This file serves as the actor's input, which can then be retrieved using `Apify.getInput()`.

```text
{PROJECT_FOLDER}/apify_storage/key_value_stores/default/INPUT.json
```

--------------------------------

### Terminate Running Apify Actor

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Instructs how to stop a locally running Apify actor process from the terminal by sending an interrupt signal.

```Shell
CTRL+C
```

--------------------------------

### Node.js Project Initialization and Dependency Installation

Source: https://docs.apify.com/academy/api-scraping/graphql-scraping/custom-queries

This bash command initializes a new Node.js project using `npm init -y` and then installs the required packages: `graphql-tag` for GraphQL operations, `puppeteer` for browser automation, and `got-scraping` for HTTP requests. These dependencies are essential for setting up the GraphQL scraper project.

```bash
npm init -y && npm install graphql-tag puppeteer got-scraping
```

--------------------------------

### Install Apify SDK for Python using pip

Source: https://docs.apify.com/sdk/python/docs/overview/introduction

This command installs the Apify SDK for Python using the pip package manager. It is intended for independent installation when not using the Apify CLI, which installs the SDK automatically.

```bash
pip install apify
```

--------------------------------

### Initialize Apify Actor in Existing Directory

Source: https://docs.apify.com/cli/docs/next/installation

Sets up the local Apify Actor development environment within an existing project directory. This command creates the `.actor/actor.json` file and `apify_storage` directory.

```bash
cd ./my/awesome/project
apify init
```

--------------------------------

### Verify Pip Package Manager Installation

Source: https://docs.apify.com/api/client/python/docs/overview/setting-up

Checks if Pip, the Python package manager, is installed and displays its version. Pip is essential for installing the `apify-client` package from PyPI.

```Bash
pip --version
```

--------------------------------

### Get Detailed Help for Specific Apify CLI Command

Source: https://docs.apify.com/cli/docs/vars

This command provides detailed information, usage examples, and available options for a specific Apify CLI command, aiding in precise command execution.

```Shell
apify help COMMAND
```

--------------------------------

### TypeScript Configuration for Crawlee Projects

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

An example tsconfig.json file for Crawlee projects, extending @apify/tsconfig. It configures the TypeScript compiler to use ES2022 for module and target, specifies the output directory, and includes source files.

```json
{
    "extends": "@apify/tsconfig",
    "compilerOptions": {
        "module": "ES2022",
        "target": "ES2022",
        "outDir": "dist",
        "lib": ["DOM"]
    },
    "include": ["./src/**/*"]
}
```

--------------------------------

### JavaScript: Access Browser Launch Context Information via BrowserController

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This example shows how to access launch context details, such as proxy information and session data, directly from the `browserController` object. This provides a unified way to retrieve browser configuration details, which was previously more challenging.

```JavaScript
const handlePageFunction = async ({ browserController }) => {
    // Information about the proxy used by the browser
    browserController.launchContext.proxyInfo;

    // Session used by the browser
    browserController.launchContext.session;
};
```

--------------------------------

### Install Apify Client Library

Source: https://docs.apify.com/api/client/js/docs/2

These commands demonstrate how to install the `apify-client` library using various popular JavaScript package managers. Choose the command that corresponds to your preferred package manager (NPM, Yarn, PNPM, or Bun).

```NPM
npm i apify-client
```

```Yarn
yarn add apify-client
```

```PNPM
pnpm add apify-client
```

```Bun
bun add apify-client
```

--------------------------------

### Assembling Complete Actor Data Object

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet extends the previous data extraction by incorporating information derived directly from the request URL, such as unique identifier and owner. It combines these with the scraped header details into a comprehensive 'results' object, which is then logged to the console for verification.

```JavaScript
const urlArr = request.url.split('/').slice(-2);

const results = {
    url: request.url,
    uniqueIdentifier: urlArr.join('/'),
    owner: urlArr[0],
    title: $('header h1').text(),
    description: $('header span.actor-description').text(),
    modifiedDate: new Date(
        Number($('ul.ActorHeader-stats time').attr('datetime')),
    ),
    runCount: Number(
        $('ul.ActorHeader-stats > li:nth-of-type(3)')
            .text()
            .match(/[\d,]+/)[0]
            .replace(',', ''),
    ),
};

console.log('RESULTS: ', results);
```

--------------------------------

### Dynamically Constructing Request List from Input Categories

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript code demonstrates how to load categories from the actor's input and dynamically construct a list of requests. It maps each category to a URL and assigns custom `userData` with a 'label' for easier decision-making in the `handlePageFunction`.

```JavaScript
// ...
const input = await Apify.getInput();

const sources = input.map((category) => ({
    url: `https://apify.com/store?category=${category}`,
    userData: {
        label: 'CATEGORY',
    },
}));

const requestList = await Apify.openRequestList('categories', sources);
// ...
```

--------------------------------

### Configure TypeScript for Crawlee Project

Source: https://docs.apify.com/sdk/js/reference/changelog

Example `tsconfig.json` extending `@apify/tsconfig` for full TypeScript support in Crawlee projects. It sets module and target to ES2022, defines the output directory, and specifies included source files.

```json
{
    "extends": "@apify/tsconfig",
    "compilerOptions": {
        "module": "ES2022",
        "target": "ES2022",
        "outDir": "dist",
        "lib": ["DOM"]
    },
    "include": ["./src/**/*"]
}
```

--------------------------------

### Example PlaywrightLaunchContext Configuration

Source: https://docs.apify.com/sdk/js/docs/1.3/typedefs/playwright-launch-context

Demonstrates how to configure `PlaywrightLaunchContext` with Apify-specific helpers like `useChrome` and `proxyUrl`, combined with native Playwright `launchOptions` for headless mode and custom arguments.

```javascript
// launch a headless Chrome (not Chromium)
const launchContext = {
    // Apify helpers
    useChrome: true,
    proxyUrl: 'http://user:password@some.proxy.com'
    // Native Playwright options
    launchOptions: {
        headless: true,
        args: ['--some-flag'],
    }
}
```

--------------------------------

### Retrieve Actor Input using Apify.getInput() (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Demonstrates how to retrieve the actor's input from the default KeyValueStore using `Apify.getInput()`. This input is typically provided via the Apify Platform console or an `INPUT.json` file when running locally.

```JavaScript
const input = await Apify.getInput();
```

--------------------------------

### Full actor.json Configuration Example

Source: https://docs.apify.com/platform/actors/development/actor-definition/actor-json

This example demonstrates a comprehensive `.actor/actor.json` file, specifying actor details such as name, version, build tag, memory limits, environment variables, and paths to related files like Dockerfile, README, input schema, dataset schema, and web server OpenAPI schema. It provides a complete configuration for an Apify Actor, linking local development to the Apify platform.

```JSON
{
    "actorSpecification": 1,
    "name": "name-of-my-scraper",
    "version": "0.0",
    "buildTag": "latest",
    "minMemoryMbytes": 256,
    "maxMemoryMbytes": 4096,
    "environmentVariables": {
        "MYSQL_USER": "my_username",
        "MYSQL_PASSWORD": "@mySecretPassword"
    },
    "usesStandbyMode": false,
    "dockerfile": "./Dockerfile",
    "readme": "./ACTOR.md",
    "input": "./input_schema.json",
    "storages": {
        "dataset": "./dataset_schema.json"
    },
    "webServerSchema": "./web_server_openapi.json"
}
```

--------------------------------

### Pseudo-URL for Category Matching

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This pseudo-URL demonstrates how to match category pages in an online store. It uses a bracketed regular expression `[(\w|-)+]` to capture dynamic category names, allowing it to match URLs like `/categories/computers` while excluding the base `/categories` URL.

```APIDOC
https://www.online-store.com/categories/[(\\w|-)+]
```

--------------------------------

### Execute LangChain Integration Python Script

Source: https://docs.apify.com/platform/integrations/langchain

This command runs the 'langchain_integration.py' script, which contains the full example code for integrating Apify with LangChain. Ensure Python is installed and all necessary dependencies are met before executing this command.

```bash
python langchain_integration.py
```

--------------------------------

### Example: Get handled request count using getInfo

Source: https://docs.apify.com/sdk/js/api/apify/class/RequestQueue

Demonstrates how to retrieve the handled request count by destructuring the object returned from the RequestQueue.getInfo method.

```JavaScript
const { handledRequestCount } = await queue.getInfo();
```

--------------------------------

### Dockerfile: Copy Node.js Package Configuration

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

Copies `package.json` and `package-lock.json` files into the Docker image. This early copy optimizes build times by allowing Docker to cache dependency installation.

```Dockerfile
COPY package*.json ./
```

--------------------------------

### Dockerfile: Copy Application Source Files

Source: https://docs.apify.com/platform/actors/development/actor-definition/source-code

Copies the remaining application source code into the Docker image. This step is performed after dependency installation to leverage Docker's layer caching.

```Dockerfile
COPY . ./
```

--------------------------------

### Local Apify Actor Input File Path Example

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Specifies the conventional file path for the `INPUT.json` file when running an Apify actor locally. This file serves as the actor's input in a local development environment.

```Text
{PROJECT_FOLDER}/apify_storage/key_value_stores/default/INPUT.json
```

--------------------------------

### Apify SDK Actor Class Static Helpers Reference (APIDOC)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This API documentation outlines the static helper methods available on the `Actor` class within the Apify SDK. It categorizes methods by their functionality, including `ApifyClient` shortcuts, platform helpers, storage support, event handling, and other utilities.

```APIDOC
Actor Class Static Helpers:
  ApifyClient shortcuts:
    addWebhook()
    call()
    callTask()
    metamorph()
  Helpers for running on Apify platform:
    init()
    exit()
    fail()
    main()
    isAtHome()
    createProxyConfiguration()
  Storage support:
    getInput()
    getValue()
    openDataset()
    openKeyValueStore()
    openRequestQueue()
    pushData()
    setValue()
  Events support:
    on()
    off()
  Other utilities:
    getEnv()
    newClient()
    reboot()
```

--------------------------------

### Install Apify SDK v1 with Playwright

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

Installs the Apify SDK version 1, specifically configured to use the Playwright browser automation library. This command enables support for multiple browsers including Chromium, Firefox, and WebKit, offering a modern and flexible alternative to Puppeteer. It's crucial for projects aiming to leverage Playwright's capabilities within the Apify ecosystem.

```Shell
npm install apify playwright
```

--------------------------------

### HTTP GET Request: Download Dataset from Last Succeeded Actor Run

Source: https://docs.apify.com/api/v2/act-runs-last-get

This example demonstrates how to perform an HTTP GET request to download data from a dataset associated with the last successfully completed Actor run. The request specifies the desired output format as XML and includes the authentication token.

```HTTP
https://api.apify.com/v2/acts/{actorId}/runs/last/dataset/items?token={yourApiToken}&format=xml&status=SUCCEEDED
```

--------------------------------

### Start Express.js Web Server

Source: https://docs.apify.com/academy/running-a-web-server

Starts the Express.js web server, listening on the port specified by the `APIFY_CONTAINER_PORT` environment variable. It logs the URL where the application is accessible, indicating that the server is ready to receive requests.

```JavaScript
// Start the web server!
app.listen(APIFY_CONTAINER_PORT, () => {
    console.log(`Application is listening at URL ${APIFY_CONTAINER_URL}.`);
});
```

--------------------------------

### JavaScript Examples for Apify.pushData

Source: https://docs.apify.com/sdk/js/docs/1.3/api/apify

Provides JavaScript code examples demonstrating the usage of `Apify.pushData`. It shows both the direct shortcut method and its equivalent explicit call using `Apify.openDataset()` and `dataset.pushData()`. Emphasizes the importance of using `await`.

```JavaScript
await Apify.pushData({ myValue: 123 });
```

```JavaScript
const dataset = await Apify.openDataset();
await dataset.pushData({ myValue: 123 });
```

--------------------------------

### Demonstrate New Crawling Context in Apify SDK v1

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example shows the unified `CrawlingContext` object introduced in Apify SDK v1. All handler functions now receive the same context object, simplifying state management and allowing consistent access to properties like `proxyInfo` across different function calls.

```javascript
const handlePageFunction = async (crawlingContext1) => {
    crawlingContext1.hasOwnProperty('proxyInfo'); // true
};

const handleFailedRequestFunction = async (crawlingContext2) => {
    crawlingContext2.hasOwnProperty('proxyInfo'); // true
};

// All contexts are the same object.
crawlingContext1 === crawlingContext2; // true
```

--------------------------------

### Verify Node.js Version

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This command checks the currently installed version of Node.js on your system. Node.js version 15.10 or higher is required for Apify SDK.

```bash
node -v
```

--------------------------------

### Example Scraped Product Data

Source: https://docs.apify.com/academy/node-js/dealing-with-dynamic-pages

This JSON object illustrates the structure of a single product entry scraped from the demo webstore. It includes fields for title, price, and image URL, demonstrating the typical output format after successful data extraction.

```JSON
{
  "title": "women's shoes",
  "price": "$40.00 USD",
  "image": "https://demo-webstore.apify.org/_next/image?url=https%3A%2F%2Fdummyjson.com%2Fimage%2Fi%2Fproducts%2F46%2F1.jpg&w=3840&q=85"
}
```

--------------------------------

### Basic Apify CheerioCrawler for Category Pages

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This code sets up a basic Apify CheerioCrawler to visit specified category URLs, extract text content from elements with the class 'item' (actor cards), and log them to the console. It demonstrates the use of RequestList and CheerioCrawler for initial setup and data extraction, serving as a sanity check for the scraping environment.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);

    const crawler = new Apify.CheerioCrawler({
        requestList,
        handlePageFunction: async ({ $, request }) => {
            // Select all the actor cards.
            $('.item').each((i, el) => {
                const text = $(el).text();
                console.log(`ITEM: ${text}\n`);
            });
        },
    });

    await crawler.run();
});
```

--------------------------------

### Single Category URL for Apify Store

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This URL represents a specific category page within the Apify Store, such as 'ENTERTAINMENT'. It serves as an example of a direct start URL for a web scraping task, illustrating how a single, pre-defined URL can be used to initiate crawling for a particular section of a website.

```URL
https://apify.com/store?category=ENTERTAINMENT
```

--------------------------------

### Migrate Apify Events to Actor.on/off

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Illustrates the change in event handling from the deprecated `Apify.events` to the new `Actor.on` and `Actor.off` shortcuts in Apify SDK v2. This aligns with Crawlee's `EventManager` for consistent event management.

```Diff
-Apify.events.on(...);
+Actor.on(...);
```

--------------------------------

### Basic link enqueuing with pseudoUrls using Apify.utils.enqueueLinks

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This snippet demonstrates the basic usage of Apify.utils.enqueueLinks() to enqueue links matching specified pseudo-URLs. It's suitable for broad link discovery within a given base URL.

```javascript
await enqueueLinks({
    $,
    requestQueue,
    pseudoUrls: ['http[s?]://apify.com[.*]'],
    baseUrl: request.loadedUrl,
});
```

--------------------------------

### Fingerprint Options Renaming and Changes

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Details the renaming of fingerprintsOptions to fingerprintOptions and the changes to its accepted properties, including the removal of proxy-specific caching options.

```APIDOC
fingerprintsOptions:
  - Status: Renamed.
  - New name: fingerprintOptions.

fingerprintOptions:
  - New accepted properties:
      - useFingerprintCache (replaces useFingerprintPerProxyCache)
      - fingerprintCacheSize (replaces fingerprintPerProxyCacheSize)
  - Removed properties:
      - useFingerprintPerProxyCache (no longer available)
      - fingerprintPerProxyCacheSize (no longer available)
  - Reason: Cached fingerprints are no longer connected to proxy URLs but to sessions.
```

--------------------------------

### APIDOC: Actor Client Method: start

Source: https://docs.apify.com/api/client/js/reference/2.9/class/ActorClient

Starts an actor and immediately returns the Run object. This method corresponds to the API endpoint: https://docs.apify.com/api/v2#/reference/actors/run-collection/run-actor.

Parameters:
- `input`: Optional input data for the actor run.
- `options`: Optional start configuration, defaulting to an empty object.

```APIDOC
start(input?: unknown, options: ActorStartOptions = {}): Promise<ActorRun>
```

--------------------------------

### Push Actor to Apify Cloud using CLI

Source: https://docs.apify.com/cli/docs/installation

This command uploads your local project to the Apify cloud and initiates an Actor build from it. The Actor must be built on the platform before it can be run.

```Shell
apify push
```

--------------------------------

### Initialize Apify Actor with Local Storage

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet demonstrates how to explicitly configure the Apify Actor to use `@apify/storage-local` instead of the default `@crawlee/memory-storage`. It requires `@apify/storage-local` v2.1.0+ and involves passing an instance of `ApifyStorageLocal` to the `Actor.init` options.

```JavaScript
import { Actor } from 'apify';
import { ApifyStorageLocal } from '@apify/storage-local';

const storage =
    new ApifyStorageLocal(/* options like `enableWalMode` belong here */);
await Actor.init({ storage });
```

--------------------------------

### Install specific Crawlee package for Cheerio

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

Shows how to install only the `@crawlee/cheerio` package. This approach is recommended if only specific functionality, like Cheerio support, is required, helping to reduce the overall bundle size.

```Bash
npm install @crawlee/cheerio
```

--------------------------------

### Example PuppeteerLaunchContext Configuration

Source: https://docs.apify.com/sdk/js/docs/1.3/typedefs/puppeteer-launch-context

Demonstrates how to configure `PuppeteerLaunchContext` to launch a headless Chrome instance, combining Apify-specific options like `useChrome` and `proxyUrl` with native Puppeteer `launchOptions`.

```javascript
// launch a headless Chrome (not Chromium)
const launchContext = {
    // Apify helpers
    useChrome: true,
    proxyUrl: 'http://user:password@some.proxy.com',
    // Native Puppeteer options
    launchOptions: {
        headless: true,
        args: ['--some-flag']
    }
}
```

--------------------------------

### Quick Start: Run Actor and List Dataset Items

Source: https://docs.apify.com/api/client/js/docs

Demonstrates a common workflow: starting an Apify Actor, waiting for its completion, and then retrieving items from its default dataset. This is typical for scraping and data processing tasks.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish
const { defaultDatasetId } = await client.actor('username/actor-name').call();

// Lists items from the Actor's dataset
const { items } = await client.dataset(defaultDatasetId).listItems();
```

--------------------------------

### Initialize Apify Configuration

Source: https://docs.apify.com/sdk/js/docs/1.3/api/configuration

Creates a new `Configuration` instance with provided options. Environment variables will take precedence over the options supplied here.

```APIDOC
Configuration:
  new Configuration(options: Record<string, (number|string|boolean)>)
    options: Record<string, (number|string|boolean)> - Options for the configuration instance.
```

--------------------------------

### Migrating requestAsBrowser Options to gotScraping

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet demonstrates how to migrate various options previously used with `Apify.utils.requestAsBrowser` to their new equivalents when using `gotScraping` directly, including `payload` to `body`/`json`, `ignoreSslErrors` to `https.rejectUnauthorized`, and `header-generator` options to `headerGeneratorOptions`.

```JavaScript
// Before:
await Apify.utils.requestAsBrowser({ …, payload: 'Hello, world!' });
await Apify.utils.requestAsBrowser({ …, payload: Buffer.from('c0ffe', 'hex') });
await Apify.utils.requestAsBrowser({ …, json: { hello: 'world' } });

// After:
await gotScraping({ …, body: 'Hello, world!' });
await gotScraping({ …, body: Buffer.from('c0ffe', 'hex') });
await gotScraping({ …, json: { hello: 'world' } });

// Before:
await Apify.utils.requestAsBrowser({ …, ignoreSslErrors: false });

// After:
await gotScraping({ …, https: { rejectUnauthorized: true } });

// Before:
await Apify.utils.requestAsBrowser({
    …,
    useMobileVersion: true,
    languageCode: 'en',
    countryCode: 'US',
});

// After:
await gotScraping({
    …,
    headerGeneratorOptions: {
        devices: ['mobile'], // or ['desktop']
        locales: ['en-US'],
    },
});
```

--------------------------------

### JavaScript Destructuring for Apify.utils.enqueueLinks

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet illustrates how to destructure the `enqueueLinks` function directly from `Apify.utils`. This approach simplifies code by allowing direct calls to `enqueueLinks()` without needing to prefix it with `Apify.utils`.

```JavaScript
const Apify = require('apify');
const {
    utils: { enqueueLinks },
} = Apify;

// Now you can use enqueueLinks like this:
await enqueueLinks({
    /* options */
});
```

--------------------------------

### Programmatically Run Apify Actor with Client Libraries

Source: https://docs.apify.com/platform/actors/running

Illustrates how to programmatically start an Apify Actor from an application using the official client libraries. The examples show how to initialize the client, call an Actor, wait for its completion, and then fetch the scraped results from its default dataset. This method is recommended for integrating Actor runs into custom applications.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'MY-API-TOKEN',
});

// Start the Google Maps Scraper Actor and wait for it to finish.
const actorRun = await client.actor('compass/crawler-google-places').call({
    queries: 'apify',
});
// Fetch scraped results from the Actor's dataset.
const { items } = await client.dataset(actorRun.defaultDatasetId).listItems();
console.dir(items);
```

```Python
from apify_client import ApifyClient

apify_client = ApifyClient('MY-API-TOKEN')

# Start the Google Maps Scraper Actor and wait for it to finish.
actor_run = apify_client.actor('compass/crawler-google-places').call(
    run_input={ 'queries': 'apify' }
)

# Fetch scraped results from the Actor's dataset.
dataset_items = apify_client.dataset(actor_run['defaultDatasetId']).list_items().items
print(dataset_items)
```

--------------------------------

### Accessing Launch Context Information via BrowserController

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This example demonstrates how to access important launch context information, such as proxy details (proxyInfo) and session data, directly from the browserController within a handlePageFunction. This simplifies retrieving browser-specific configuration.

```JavaScript
const handlePageFunction = async ({ browserController }) => {
    // Information about the proxy used by the browser
    browserController.launchContext.proxyInfo;

    // Session used by the browser
    browserController.launchContext.session;
};
```

--------------------------------

### Dynamically Constructing RequestList Sources from Actor Input (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Illustrates how to load the actor's input (an array of categories) and use it to dynamically construct an array of sources for an `Apify.RequestList`. Each source includes a dynamically generated URL and custom `userData` for later processing.

```JavaScript
// ...
const input = await Apify.getInput();

const sources = input.map((category) => ({
    url: `https://apify.com/store?category=${category}`,
    userData: {
        label: 'CATEGORY',
    },
}));

const requestList = await Apify.openRequestList('categories', sources);
// ...
```

--------------------------------

### JavaScript: Modern PuppeteerCrawler launchContext Configuration

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This example shows the new `launchContext` object for `PuppeteerCrawler` configuration. It provides a clearer separation between Apify-specific options and Puppeteer's `launchOptions` by nesting the latter, reducing confusion and improving configuration clarity.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    launchContext: {
        useChrome: true, // Apify option
        launchOptions: {
            headless: false, // Puppeteer option
        },
    },
});
```

--------------------------------

### Basic Web Page Fetching with Apify SDK's BasicCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/examples/basic-crawler

This JavaScript code illustrates how to set up and run a simple web crawler using the Apify SDK. It defines a list of starting URLs, then uses BasicCrawler to iterate through them. For each URL, it fetches the page content using Apify.utils.requestAsBrowser and pushes the URL and the fetched HTML body into the Apify default dataset for storage.

```JavaScript
const Apify = require('apify');

// Apify.main() function wraps the crawler logic (it is optional).
Apify.main(async () => {
    // Create and initialize an instance of the RequestList class that contains
    // a list of URLs to crawl. Here we use just a few hard-coded URLs.
    const requestList = await Apify.openRequestList('start-urls', [
        { url: 'http://www.google.com/' },
        { url: 'http://www.example.com/' },
        { url: 'http://www.bing.com/' },
        { url: 'http://www.wikipedia.com/' }
    ]);

    // Create a BasicCrawler - the simplest crawler that enables
    // users to implement the crawling logic themselves.
    const crawler = new Apify.BasicCrawler({
        // Let the crawler fetch URLs from our list.
        requestList,

        // This function will be called for each URL to crawl.
        handleRequestFunction: async ({ request }) => {
            console.log(`Processing ${request.url}...`);

            // Fetch the page HTML via Apify utils requestAsBrowser
            const { body } = await Apify.utils.requestAsBrowser(request);

            // Store the HTML and URL to the default dataset.
            await Apify.pushData({
                url: request.url,
                html: body
            });
        }
    });

    // Run the crawler and wait for it to finish.
    await crawler.run();

    console.log('Crawler finished.');
});
```

--------------------------------

### Get ProxyInfo and use it in a CheerioCrawler

Source: https://docs.apify.com/sdk/js/reference/next/interface/ProxyInfo

This example demonstrates how to create a ProxyConfiguration, obtain a ProxyInfo object from it, and then access its properties like `url` and `sessionId` within a `CheerioCrawler`'s request handler.

```JavaScript
const proxyConfiguration = await Actor.createProxyConfiguration({
  groups: ['GROUP1', 'GROUP2'] // List of Apify Proxy groups
  countryCode: 'US',
});

// Getting proxyInfo object by calling class method directly
const proxyInfo = proxyConfiguration.newProxyInfo();

// In crawler
const crawler = new CheerioCrawler({
  // ...
  proxyConfiguration,
  requestHandler({ proxyInfo }) {
      // Getting used proxy URL
      const proxyUrl = proxyInfo.url;

      // Getting ID of used Session
      const sessionIdentifier = proxyInfo.sessionId;
  }
})
```

--------------------------------

### Example JSON Input for Apify Actor Categories

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

An example of a JSON array representing categories to be used as input for an Apify actor. This input allows the actor to dynamically scrape different categories without modifying its source code.

```JSON
["TRAVEL", "ECOMMERCE", "ENTERTAINMENT"]
```

--------------------------------

### Crawl Website Links using PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/3.3/examples/crawl-all-links

This JavaScript example shows how to crawl all links on a website using Apify's `PuppeteerCrawler`. It sets up the crawler, defines an asynchronous request handler to log URLs and enqueue new links, and executes the crawler from a starting URL. It also includes a `maxRequestsPerCrawl` limit for testing, which should be removed for full crawls. This example requires the `apify/actor-node-puppeteer-chrome` Docker image on the Apify Platform.

```JavaScript
import { Actor } from 'apify';
import { PuppeteerCrawler } from 'crawlee';

await Actor.init();

const crawler = new PuppeteerCrawler({
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
});

// Run the crawler
await crawler.run(['https://apify.com/']);

await Actor.exit();
```

--------------------------------

### Use ApifyClient Convenience Functions for Actor Runs

Source: https://docs.apify.com/api/client/js/docs/2

This example demonstrates the use of `call()` and `start()` with `waitForFinish` for managing Apify Actor runs. It shows how to initiate an Actor and either wait for its complete finish or wait for a specified maximum duration.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish.
const finishedActorRun = await client.actor('username/actor-name').call();

// Starts an Actor and waits maximum 60s for the finish
const { status } = await client.actor('username/actor-name').start({
    waitForFinish: 60, // 1 minute
});
```

--------------------------------

### Implement BasicCrawler for Web Scraping with Apify

Source: https://docs.apify.com/sdk/js/docs/3.3/examples/basic-crawler

This JavaScript code demonstrates a basic web scraping setup using Apify's `Actor` and `crawlee`'s `BasicCrawler`. It fetches HTML content from specified URLs using `gotScraping` and stores the URL and raw HTML into the default Apify dataset. The example illustrates the fundamental steps of initializing an actor, defining a request handler, and executing the crawler.

```JavaScript
import { Actor } from 'apify';
import { BasicCrawler } from 'crawlee';
import { gotScraping } from 'got-scraping';

await Actor.init();

// Create a dataset where we will store the results.
// Create a BasicCrawler - the simplest crawler that enables
// users to implement the crawling logic themselves.
const crawler = new BasicCrawler({
    // This function will be called for each URL to crawl.
    async requestHandler({ request }) {
        const { url } = request;
        console.log(`Processing ${url}...`);

        // Fetch the page HTML via Apify utils gotScraping
        const { body } = await gotScraping({ url });

        // Store the HTML and URL to the default dataset.
        await Actor.pushData({
            url: request.url,
            html: body,
        });
    },
});

// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.
await crawler.run([
    { url: 'http://www.google.com/' },
    { url: 'http://www.example.com/' },
    { url: 'http://www.bing.com/' },
    { url: 'http://www.wikipedia.com/' }
]);

console.log('Crawler finished.');

await Actor.exit();
```

--------------------------------

### Run Apify Actor Locally Using CLI

Source: https://docs.apify.com/sdk/js/docs/3.3/guides/apify-platform

These commands illustrate how to navigate into an Apify actor's project directory and execute it locally. The `apify run` command starts the actor, enabling local testing and development without deploying to the Apify platform. This requires the Apify CLI to be installed and the current directory to be an actor project.

```Shell
cd my-hello-world
apify run
```

--------------------------------

### Programmatically Run Apify Actor and Fetch Results

Source: https://docs.apify.com/actors/running

Illustrates how to programmatically start an Apify Actor using the official client libraries for JavaScript and Python. The examples show how to initialize the client with an API token, call a specific Actor, wait for its completion, and then retrieve the scraped data from its default dataset. This method abstracts the underlying API calls.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'MY-API-TOKEN',
});

// Start the Google Maps Scraper Actor and wait for it to finish.
const actorRun = await client.actor('compass/crawler-google-places').call({
    queries: 'apify',
});
// Fetch scraped results from the Actor's dataset.
const { items } = await client.dataset(actorRun.defaultDatasetId).listItems();
console.dir(items);
```

```Python
from apify_client import ApifyClient

apify_client = ApifyClient('MY-API-TOKEN')

# Start the Google Maps Scraper Actor and wait for it to finish.
actor_run = apify_client.actor('compass/crawler-google-places').call(
    run_input={ 'queries': 'apify' }
)

# Fetch scraped results from the Actor's dataset.
dataset_items = apify_client.dataset(actor_run['defaultDatasetId']).list_items().items
print(dataset_items)
```

--------------------------------

### Log in to Apify Platform using CLI

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Initiates the login process to the Apify platform via the CLI, allowing for deployment and management of actors.

```Shell
apify login
```

--------------------------------

### Migrating `header-generator` options to `gotScraping`

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This snippet demonstrates how to migrate header generation options from the deprecated `Apify.utils.requestAsBrowser` to `gotScraping`. Old options like `useMobileVersion`, `languageCode`, and `countryCode` are replaced by `headerGeneratorOptions` with `devices` and `locales`.

```JavaScript
// Before:
await Apify.utils.requestAsBrowser({
    …,
    useMobileVersion: true,
    languageCode: 'en',
    countryCode: 'US',
});
```

```JavaScript
// After:
await gotScraping({
    …,
    headerGeneratorOptions: {
        devices: ['mobile'], // or ['desktop']
        locales: ['en-US'],
    },
});
```

--------------------------------

### Apify.getInput() Function API Reference

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This API reference describes the `Apify.getInput()` function, which is used to retrieve the actor's input. It returns a Promise that resolves with the input data, typically parsed from JSON.

```APIDOC
Apify.getInput(): Promise<any>
  Purpose: To retrieve the actor's configuration or data input from the default KeyValueStore.
```

--------------------------------

### Example: Get Event Listeners for EventEmitter and EventTarget

Source: https://docs.apify.com/sdk/js/reference/next/class/Logger

Illustrates how to use `getEventListeners` from `node:events` to retrieve registered listeners for both `EventEmitter` and `EventTarget` instances, showing the output format for each.

```JavaScript
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

--------------------------------

### Deploy Apify Project to Platform via CLI

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This command uploads your local Apify project code to the Apify platform. Once uploaded, the code is built in the cloud, making it ready to be run as an Actor on the Apify platform.

```Shell
apify push
```

--------------------------------

### Verify Node.js and NPM Installation

Source: https://docs.apify.com/cli/docs/0.20/installation

Checks the installed versions of Node.js and NPM, which are prerequisites for installing Apify CLI via NPM.

```Shell
node --version
npm --version
```

--------------------------------

### Install Apify CLI with NVM for User-Level Control

Source: https://docs.apify.com/cli/docs/0.20/installation

Demonstrates how to install Apify CLI using Node Version Manager (NVM) to avoid root privileges, by first installing Node.js 18 and then the CLI.

```Shell
nvm install 18
nvm use 18
npm -g install apify-cli
```

--------------------------------

### Initialize OpenAI and Apify clients with imports and instructions

Source: https://docs.apify.com/platform/integrations/openai-assistants

This Python snippet shows the necessary imports for interacting with OpenAI and Apify APIs, along with the initialization of their respective client objects using API keys. It also defines a constant for assistant instructions, guiding its behavior and capabilities.

```python
import json

from apify_client import ApifyClient
from openai import OpenAI, Stream
from openai.types.beta.threads.run_submit_tool_outputs_params import ToolOutput

client = OpenAI(api_key="YOUR-OPENAI-API-KEY")
apify_client = ApifyClient("YOUR-APIFY-API-TOKEN")

INSTRUCTIONS = """
You are a smart and helpful assistant. Maintain an expert, friendly, and informative tone in your responses.
Your task is to answer questions based on information from the internet.
Always call call_rag_web_browser function to retrieve the latest and most relevant online results.
Never provide answers based solely on your own knowledge.
For each answer, always include relevant sources whenever possible.
"""
```

--------------------------------

### API Documentation: Actor Builds Introduction

Source: https://docs.apify.com/api/v2/user-get

Introduces the API for managing the build process of Actors. This section covers operations related to initiating, monitoring, and retrieving Actor builds.

```APIDOC
API Section: /api/v2/actors-actor-builds
```

--------------------------------

### Basic `enqueueLinks` usage with Cheerio and RequestQueue

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Illustrates the fundamental usage of `enqueueLinks` by passing the Cheerio `$` object (for parsing HTML and finding links) and a `requestQueue` instance (to add the found links). This minimal configuration enqueues all standard `<a>` tag links from the current page to the specified queue, streamlining link discovery and queueing.

```JavaScript
// Assuming previous existence of the '$' and 'requestQueue' variables.
await enqueueLinks({ $, requestQueue });
```

--------------------------------

### Install TypeScript compiler

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/type-script-actor

Command to install the TypeScript compiler as a development dependency in a project. This ensures `tsc` is available for building without polluting global environments.

```Shell
npm install --dev typescript
```

--------------------------------

### Example: Specific online store category URL

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This URL demonstrates a more specific path for a particular category (e.g., 'computers') within an online store. It highlights the hierarchical structure often found in website URLs, which is useful for defining pseudo-URL patterns.

```Text
https://www.online-store.com/categories/computers
```

--------------------------------

### Renamed Crawling Context Interfaces

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This section details the renaming of crawling context interfaces to follow a consistent convention and improve meaningfulness. The new interface names are provided alongside their previous counterparts.

```APIDOC
CheerioHandlePageInputs -> CheerioCrawlingContext
PlaywrightHandlePageFunction -> PlaywrightCrawlingContext
PuppeteerHandlePageFunction -> PuppeteerCrawlingContext
```

--------------------------------

### Start Apify Actor Remotely (apify actors start)

Source: https://docs.apify.com/cli/docs/reference

This command starts an Apify Actor remotely and immediately returns the run details without waiting for completion. It supports specifying the Actor ID, build tag, memory allocation, timeout, and input data. Input can be provided directly or from a file.

```APIDOC
USAGE
  $ apify actors start [ACTORID] [--json] [-b <value>] [-t <value>] [-m <value>] [-i <value> | --input-file
    <value>]

ARGUMENTS
  ACTORID  Name or ID of the Actor to run (e.g. "my-actor", "apify/hello-world" or "E2jjCZBezvAZnX8Rb"). If not
           provided, the command runs the remote Actor specified in the '.actor/actor.json' file.

FLAGS
  -b, --build=<value>       Tag or number of the build to run (e.g. "latest" or "1.2.34").
  -i, --input=<value>       Optional JSON input to be given to the Actor.
  -m, --memory=<value>      Amount of memory allocated for the Actor run, in megabytes.
  -t, --timeout=<value>     Timeout for the Actor run in seconds. Zero value means there is no timeout.
      --input-file=<value>  Optional path to a file with JSON input to be given to the Actor. The file must be a valid
                            JSON file. You can also specify `-` to read from standard input.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Starts Actor remotely and returns run details immediately.
  Uses authenticated account and local key-value store for input.
```

--------------------------------

### CheerioCrawler Class API Documentation

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Documentation for the `CheerioCrawler` class, Apify's fastest crawling solution for HTML pages. It leverages the Cheerio library (a server-side jQuery implementation) for efficient DOM manipulation and data extraction. It's ideal for scraping static HTML content.

```APIDOC
CheerioCrawler:
  Constructor(options: object)
    options:
      requestQueue: RequestQueue - The queue of requests to process.
      handlePageFunction: Function - An async function that processes each page. Receives an object with 'request' and '$' (Cheerio object).
      Other options: (e.g., 'maxRequestsPerCrawl', 'handleFailedRequestFunction', 'maxRequestRetries', 'proxyConfiguration', 'persistCookies').
  run(): Promise<void>
    Starts the crawling process. Resolves when all requests are processed from the queue.
```

--------------------------------

### Complete LangChain Apify Integration Example Script

Source: https://docs.apify.com/platform/integrations/langchain

This comprehensive Python script combines all previous steps: importing libraries, setting API keys, calling the Apify web crawler, creating a vector index, and querying it. It provides a fully runnable example for integrating Apify data with LangChain to build a simple RAG system.

```python
import os

from langchain.indexes import VectorstoreIndexCreator
from langchain_apify import ApifyWrapper
from langchain_core.documents import Document
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import ChatOpenAI
from langchain_openai.embeddings import OpenAIEmbeddings

os.environ["OPENAI_API_KEY"] = "Your OpenAI API key"
os.environ["APIFY_API_TOKEN"] = "Your Apify API token"

apify = ApifyWrapper()
llm = ChatOpenAI(model="gpt-4o-mini")

print("Call website content crawler ...")
loader = apify.call_actor(
    actor_id="apify/website-content-crawler",
    run_input={"startUrls": [{"url": "https://python.langchain.com/docs/get_started/introduction"}], "maxCrawlPages": 10, "crawlerType": "cheerio"},
    dataset_mapping_function=lambda item: Document(page_content=item["text"] or "", metadata={"source": item["url"]}),
)
print("Compute embeddings...")
index = VectorstoreIndexCreator(
    vectorstore_cls=InMemoryVectorStore,
    embedding=OpenAIEmbeddings()
).from_loaders([loader])
query = "What is LangChain?"
result = index.query_with_sources(query, llm=llm)

print("answer:", result["answer"])
print("source:", result["sources"])
```

--------------------------------

### API Reference: Actor Builds - Actor-specific Operations

Source: https://docs.apify.com/api/v2/users-me-limits-get

Endpoints for initiating and managing builds of a specific Apify Actor, including getting build lists, starting builds, and retrieving build details or logs.

```APIDOC
Actor builds - Introduction:
  - Get list of builds: /api/v2/act-builds-get
  - Build Actor: /api/v2/act-builds-post
  - Get default build: /api/v2/act-build-default-get
  - Get OpenAPI definition: /api/v2/act-openapi-json-get
  - Get build: /api/v2/act-build-get
  - Abort build: /api/v2/act-build-abort-post
```

--------------------------------

### Install Crawlee meta-package

Source: https://docs.apify.com/sdk/js/docs/3.3/upgrading/upgrading-to-v3

Installs the main Crawlee meta-package, which re-exports most `@crawlee/*` packages and contains all crawler classes, simplifying dependency management.

```Shell
npm install crawlee
```

--------------------------------

### Interface: ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/2.9/interface/BuildMeta

Defines options for starting an actor within the Apify Client for JavaScript.

```APIDOC
interface ActorStartOptions
```

--------------------------------

### Apify Actor Helper Functions (tools.js)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This file contains reusable utility functions for the Apify actor. It includes 'getSources()' to dynamically retrieve initial URLs from the actor's input and 'createRouter()' to generate a routing function that dispatches requests to appropriate handlers based on their labels, promoting cleaner main logic.

```javascript
// tools.js
const Apify = require('apify');
const routes = require('./routes');
const {
    utils: { log },
} = Apify;

exports.getSources = async () => {
    log.debug('Getting sources.');
    const input = await Apify.getInput();
    return input.map((category) => ({
        url: `https://apify.com/store?category=${category}`,
        userData: {
            label: 'CATEGORY',
        },
    }));
};

exports.createRouter = (globalContext) => {
    return async function (routeName, requestContext) {
        const route = routes[routeName];
        if (!route) throw new Error(`No route for name: ${routeName}`);
        log.debug(`Invoking route: ${routeName}`);
        return route(requestContext, globalContext);
    };
};
```

--------------------------------

### Apify Task Client API Reference

Source: https://docs.apify.com/api/client/js/reference/2.7/class/TaskClient

Detailed API documentation for the Apify Task Client, including properties and methods for managing tasks such as starting, deleting, getting, and updating task runs and inputs.

```APIDOC
Apify Task Client:
  Properties (Inherited from ResourceClient):
    id?: string
    params?: Record<string, unknown>
    resourcePath: string
    safeId?: string
    url: string

  Methods:
    call(
      input?: Dictionary,
      options: TaskCallOptions = {}
    ): Promise<ActorRun>
      Description: Starts a task and waits for it to finish before returning the Run object. It waits indefinitely, unless the `waitSecs` option is provided.
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection/run-task

    delete(): Promise<void>
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/task-object/delete-task

    get(): Promise<undefined | Task>
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/task-object/get-task

    getInput(): Promise<undefined | Dictionary | Dictionary[]>
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/task-input-object/get-task-input

    lastRun(
      options: TaskLastRunOptions = {}
    ): RunClient
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/last-run-object-and-its-storages

    runs(): RunCollectionClient
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection

    start(
      input?: Dictionary,
      options: TaskStartOptions = {}
    ): Promise<ActorRun>
      Description: Starts a task and immediately returns the Run object.
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection/run-task

    update(
      newFields: Partial<Pick<Task, "name" | "description" | "title" | "options" | "input">>
    ): Promise<Task>
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/task-object/update-task

    updateInput(
      newFields: Dictionary | Dictionary[]
    ): Promise<Dictionary | Dictionary[]>
      Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/task-input-object/update-task-input
```

--------------------------------

### Apify handlePageFunction with custom enqueueLinks

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Illustrates a handlePageFunction that uses Apify.utils.enqueueLinks() with a specific CSS selector ('div.item > a') and transformRequestFunction to add userData to enqueued requests, enabling differentiation between category and detail pages.

```javascript
const handlePageFunction = async ({ $, request }) => {
    console.log(`Processing ${request.url}`);

    // Only enqueue new links from the category pages.
    if (!request.userData.detailPage) {
        await Apify.utils.enqueueLinks({
            $,
            requestQueue,
            selector: 'div.item > a',
            baseUrl: request.loadedUrl,
            transformRequestFunction: (req) => {
                req.userData.detailPage = true;
                return req;
            },
        });
    }
};
```

--------------------------------

### Example Apify Scrapy Actor Project Files

Source: https://docs.apify.com/sdk/python/docs/guides/scrapy

This section provides code examples for the core files of an Apify Scrapy Actor, demonstrating how to set up the main entry point (__main__.py), define the actor's main coroutine for spider execution (main.py), and configure Scrapy project settings (settings.py).

```Python
from __future__ import annotations

from scrapy.utils.reactor import install_reactor

# Install Twisted's asyncio reactor before importing any other Twisted or
# Scrapy components.
install_reactor('twisted.internet.asyncioreactor.AsyncioSelectorReactor')

import os

from apify.scrapy import initialize_logging, run_scrapy_actor

# Import your main Actor coroutine here.
from .main import main

# Ensure the location to the Scrapy settings module is defined.
os.environ['SCRAPY_SETTINGS_MODULE'] = 'src.settings'

if __name__ == '__main__':
    initialize_logging()
    run_scrapy_actor(main())
```

```Python
from __future__ import annotations

from scrapy.crawler import CrawlerRunner
from scrapy.utils.defer import deferred_to_future

from apify import Actor
from apify.scrapy import apply_apify_settings

# Import your Scrapy spider here.
from .spiders import TitleSpider as Spider

async def main() -> None:
    """Apify Actor main coroutine for executing the Scrapy spider."""
    async with Actor:
        # Retrieve and process Actor input.
        actor_input = await Actor.get_input() or {}
        start_urls = [url['url'] for url in actor_input.get('startUrls', [])]
        allowed_domains = actor_input.get('allowedDomains')
        proxy_config = actor_input.get('proxyConfiguration')

        # Apply Apify settings, which will override the Scrapy project settings.
        settings = apply_apify_settings(proxy_config=proxy_config)

        # Create CrawlerRunner and execute the Scrapy spider.
        crawler_runner = CrawlerRunner(settings)
        crawl_deferred = crawler_runner.crawl(
            Spider,
            start_urls=start_urls,
            allowed_domains=allowed_domains,
        )
        await deferred_to_future(crawl_deferred)
```

```Python
BOT_NAME = 'titlebot'
DEPTH_LIMIT = 1
LOG_LEVEL = 'INFO'
NEWSPIDER_MODULE = 'src.spiders'
ROBOTSTXT_OBEY = True
SPIDER_MODULES = ['src.spiders']
TELNETCONSOLE_ENABLED = False
```

--------------------------------

### Initialize Apify Actor and Retrieve Input

Source: https://docs.apify.com/academy/expert-scraping-with-apify/solutions/using-api-and-client

This JavaScript snippet demonstrates the initial setup for an Apify Actor. It imports the 'Actor' class from the 'apify' library and 'axios', initializes the Actor, retrieves input parameters, and defines a placeholder constant for a task ID. This boilerplate prepares the environment for subsequent Actor logic.

```JavaScript
import { Actor } from 'apify';
import axios from 'axios';

await Actor.init();

const { useClient, memory, fields, maxItems } = await Actor.getInput();

const TASK = 'YOUR_USERNAME~demo-actor-task';

// our future code will go here

await Actor.exit();
```

--------------------------------

### JavaScript: Modern PuppeteerCrawler Navigation Hooks (pre/post)

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This example demonstrates the new `preNavigationHooks` and `postNavigationHooks` for `PuppeteerCrawler`. This approach simplifies extending navigation behavior by allowing users to define an array of asynchronous functions that execute before and after navigation, improving modularity and readability.

```JavaScript
const preNavigationHooks = [async ({ page }) => makePageStealthy(page)];

const postNavigationHooks = [
    async ({ page }) =>
        page.evaluate(() => {
            window.foo = 'bar';
        }),
];

const crawler = new Apify.PuppeteerCrawler({
    preNavigationHooks,
    postNavigationHooks,
    // ...
});
```

--------------------------------

### Apify.utils.enqueueLinks Function Parameters

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Detailed documentation for key parameters of the `Apify.utils.enqueueLinks()` function, including how to use `selector` for precise link filtering, the optional nature of `pseudoUrls`, and the utility of `transformRequestFunction` for modifying `Request` objects and setting `userData`.

```APIDOC
Apify.utils.enqueueLinks(options: object)
  options:
    $: CheerioStatic | JQueryStatic | undefined
      Description: The Cheerio or JQuery object to use for selecting elements.
    requestQueue: RequestQueue
      Description: The RequestQueue to which new requests will be added.
    selector: string | undefined
      Description: A CSS selector to find specific <a> elements. If omitted, defaults to 'a'.
      Example: 'div.item > a'
    pseudoUrls: string[] | undefined
      Description: An array of pseudo-URLs to match against found links. If omitted, all links matching the selector are enqueued.
    baseUrl: string | undefined
      Description: The base URL used to resolve relative links.
    transformRequestFunction: (request: Request) => Request | Promise<Request> | null | Promise<null> | undefined
      Description: A function that allows modification of each Request object before it is enqueued.
      Parameters:
        req: Request
          Description: The Request object to be transformed.
      Returns: Request | Promise<Request> | null | Promise<null> | undefined
        Description: The modified Request object, or null/undefined to skip enqueuing.
      Usage: Used to set custom data (e.g., req.userData.detailPage = true) or modify other request properties.
```

--------------------------------

### Asynchronous Apify Client: Initialize and Run Actor

Source: https://docs.apify.com/api/client/python/docs/overview/introduction

This example demonstrates how to initialize the `ApifyClientAsync` with an API token, call an Apify Actor, and then retrieve data from the Actor's default dataset. It showcases basic asynchronous interaction with the Apify platform, including error handling for actor runs.

```Python
from apify_client import ApifyClientAsync

# You can find your API token at https://console.apify.com/settings/integrations.
TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    apify_client = ApifyClientAsync(TOKEN)

    # Start an Actor and wait for it to finish.
    actor_client = apify_client.actor('john-doe/my-cool-actor')
    call_result = await actor_client.call()

    if call_result is None:
        print('Actor run failed.')
        return

    # Fetch results from the Actor run's default dataset.
    dataset_client = apify_client.dataset(call_result['defaultDatasetId'])
    list_items_result = await dataset_client.list_items()
    print(f'Dataset: {list_items_result}')
```

--------------------------------

### Interface: ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/2.8/interface/ScheduleCollectionListOptions

Options for starting an Actor using the Apify JavaScript client API.

```APIDOC
interface ActorStartOptions
```

--------------------------------

### Install Crawlee npm Package

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/pro-scraping

This command installs the Crawlee library into your Node.js project using npm, making it available for use in your scraping applications.

```Shell
npm install crawlee
```

--------------------------------

### Install Crawlee with BeautifulSoup

Source: https://docs.apify.com/academy/scraping-basics-python/framework

This command installs the Crawlee Python package, including the 'beautifulsoup' extra, which provides HTML parsing capabilities. The installation may take some time due to numerous dependencies.

```Shell
$ pip install crawlee[beautifulsoup]
...
Successfully installed Jinja2-0.0.0 ... ... ... crawlee-0.0.0 ... ... ...
```

--------------------------------

### Apify.utils.enqueueLinks() API Reference

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Documentation for the `enqueueLinks()` helper function within the Apify SDK. This function automates the process of extracting and enqueuing links from a web page, supporting filtering via pseudo-URLs and allowing custom `userData` to be attached to new `Request` objects.

```APIDOC
Apify.utils.enqueueLinks(options: object): Promise<Request[]>

options:
  $: CheerioStatic - Required. The Cheerio object ($) from the handlePageFunction, used for parsing HTML.
  requestQueue: RequestQueue - Required. The RequestQueue instance to which new requests will be added.
  pseudoUrls: (string | PseudoUrl)[] - Optional. An array of pseudo-URLs or strings to filter and match links.
  baseUrl: string - Optional. The base URL used to resolve relative links found on the page.
  userData: object - Optional. An object to be merged into the 'userData' property of each enqueued Request.
```

--------------------------------

### Log In to Apify Account via CLI

Source: https://docs.apify.com/cli/docs/installation

Details the process of authenticating with your Apify account through the CLI. The `apify login` command prompts for your Apify API token, which is then securely stored locally in the `~/.apify` directory for future interactions with the Apify cloud.

```bash
apify login
```

--------------------------------

### Initialize and Exit Apify Actor with Actor.init and Actor.exit (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet demonstrates the explicit initialization and graceful exit of an Apify Actor using `Actor.init()` and `Actor.exit()`. These methods are asynchronous and should be awaited, providing fine-grained control over the actor's lifecycle.

```JavaScript
import { Actor } from 'apify';

await Actor.init();
// your code
await Actor.exit('Crawling finished!');
```

--------------------------------

### Composing Multiple `preLaunchHooks`

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v1

Shows how multiple `preLaunchHooks` can be combined into an array to apply various pre-defined behaviors during browser construction, enhancing modularity.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint,
];
```

--------------------------------

### Apify CLI: Initialize Actor Project

Source: https://docs.apify.com/cli/docs/reference

Sets up an Actor project in the current directory by creating 'actor.json' and 'storage' files. It can automatically wrap Scrapy projects and offers an option for automatic 'yes' to prompts.

```APIDOC
USAGE
  $ apify init [ACTORNAME] [-y]

ARGUMENTS
  ACTORNAME  Name of the Actor. If not provided, you will be prompted for it.

FLAGS
  -y, --yes  Automatic yes to prompts; assume "yes" as answer to all prompts. Note that in some cases, the command may
             still ask for confirmation.

DESCRIPTION
  Sets up an Actor project in your current directory by creating actor.json and storage files.
  If the directory contains a Scrapy project in Python, the command automatically creates wrappers so that you can run
  your scrapers without changes.
  Creates the '.actor/actor.json' file and the 'storage' directory in the current directory, but does not touch any
  other existing files or directories.

  WARNING: Overwrites existing 'storage' directory.
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/3.2/changelog

Installs the main `crawlee` meta-package from the 'next' distribution tag, providing access to most Crawlee functionalities by re-exporting other `@crawlee/*` packages.

```bash
npm install crawlee@next
```

--------------------------------

### JavaScript Client Interface: ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/next/interface/WebhookDispatch

Defines options for starting an Actor using the Apify JavaScript client.

```APIDOC
interface ActorStartOptions
```

--------------------------------

### Session Cookie Method Renames

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Documents the renaming of session cookie methods for broader applicability. The methods `session.getPuppeteerCookies()` and `session.setPuppeteerCookies()` have been renamed to `session.getCookies()` and `session.setCookies()` respectively. Their usage remains the same.

```APIDOC
Class: Session
  Methods:
    - getCookies(): Array<Cookie>
      Description: Retrieves cookies for the current session.
      Previous Name: getPuppeteerCookies()
    - setCookies(cookies: Array<Cookie>): void
      Description: Sets cookies for the current session.
      Previous Name: setPuppeteerCookies()
```

--------------------------------

### JavaScript: Migrate from PuppeteerPool.retire to BrowserPool.retireBrowserByPage

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This example demonstrates the change in how browsers are retired. The old `puppeteerPool.retire(page.browser())` is replaced by `browserPool.retireBrowserByPage(page)`, providing a more consistent API for browser retirement across different browser types.

```JavaScript
// OLD
await puppeteerPool.retire(page.browser());

// NEW
browserPool.retireBrowserByPage(page);
```

--------------------------------

### Recreating launch customization with preLaunchHook in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This example illustrates how to achieve the same browser launch customization as the deprecated `launchPuppeteerFunction` by utilizing the new `preLaunchHooks` array within `browserPoolOptions`. This approach offers better consistency across different browser types.

```JavaScript
const maybeLaunchChrome = (pageId, launchContext) => {
    if (someVariable === 'chrome') {
        launchContext.useChrome = true;
    }
};

const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        preLaunchHooks: [maybeLaunchChrome],
    },
    // ...
});
```

--------------------------------

### Initialize a new Apify project using CLI

Source: https://docs.apify.com/sdk/js

This command uses the Apify CLI to scaffold a new Apify project, typically a crawler, with a default structure. It's the recommended way to start developing Actors for the Apify platform.

```Shell
npx apify-cli create my-crawler
```

--------------------------------

### Setup for API Pagination and Item Collection

Source: https://docs.apify.com/academy/api-scraping/general-api-scraping/handling-pagination

This JavaScript snippet outlines the initial structure for a function that will handle API pagination. It imports necessary modules (`gotScraping`, `scrapeClientId`) and initializes variables for the API's starting URL and an array to store scraped items.

```javascript
// index.js
// we will need gotScraping to make HTTP requests
import { gotScraping } from 'got-scraping';
import { scrapeClientId } from './scrapeClientId';

const scrape100Items = async () => {
    // the initial request URL
    const nextHref = 'https://api-v2.soundcloud.com/users/141707/tracks?limit=20&offset=0';

    // create an array for all of our scraped items to live
    const items = [];

    // scrape the client ID with the script from the
    // previous lesson
    const clientId = await scrapeClientId();

    // More code will go here
};
```

--------------------------------

### Configure PuppeteerCrawler with BrowserPool Lifecycle Hooks

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

Illustrates how to integrate BrowserPool lifecycle hooks, such as 'preLaunchHooks', into a PuppeteerCrawler. This example shows how to dynamically set browser launch options, like headless mode, based on request data from the 'crawlingContext'.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        retireBrowserAfterPageCount: 10,
        preLaunchHooks: [
            async (pageId, launchContext) => {
                const { request } = crawler.crawlingContexts.get(pageId);
                if (request.userData.useHeadful === true) {
                    launchContext.launchOptions.headless = false;
                }
            }
        ]
    }
});
```

--------------------------------

### JavaScript Example: Retrieving EventEmitter Listeners

Source: https://docs.apify.com/sdk/js/reference/3.2/class/Logger

Shows how to get an array of listener functions registered for a specific event on an `EventEmitter` instance using `listeners()`, and prints the result.

```javascript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### Install Crawlee Meta-Package for Comprehensive Functionality

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v3

This command installs the `crawlee` meta-package, which includes and re-exports most of the individual `@crawlee/*` packages, providing a convenient way to access all crawler classes.

```bash
npm install crawlee
```

--------------------------------

### Configuration Class Instance Methods

Source: https://docs.apify.com/sdk/js/reference/next/class/Configuration

Documents the instance methods of the Configuration class, including those for getting and setting configuration values, and managing event and storage clients.

```APIDOC
get(key: T, defaultValue?: U): U (Overrides CoreConfiguration.get, @inheritDoc)
  key: T
  defaultValue: U (optional)

getEventManager(): EventManager (Inherited from CoreConfiguration.getEventManager)

set(key: keyof ConfigurationOptions, value?: any): void (Overrides CoreConfiguration.set, @inheritDoc)
  key: keyof ConfigurationOptions
  value: any (optional)

useEventManager(events: EventManager): void (Inherited from CoreConfiguration.useEventManager)
  events: EventManager

useStorageClient(client: StorageClient): void (Inherited from CoreConfiguration.useStorageClient)
  client: StorageClient
```

--------------------------------

### Run Apify Actor with Direct Input using JavaScript Client

Source: https://docs.apify.com/api/client/js/docs/2.11/examples

Demonstrates how to quickly execute an Apify Actor by passing input directly to the `call` function. This method is suitable for single runs where input persistence is not required. The example shows initializing the client, defining input, and waiting for the actor's completion.

```JavaScript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const actorClient = client.actor('apify/instagram-hashtag-scraper');

const input = { hashtags: ['rainbow'], resultsLimit: 20 };

// Run the Actor and wait for it to finish up to 60 seconds.
// Input is not persisted for next runs.
const runData = await actorClient.call(input, { waitSecs: 60 });

console.log('Run data:');
console.log(runData);
```

--------------------------------

### Example Output of Apify Init for Scrapy Project

Source: https://docs.apify.com/cli/docs/0.20/integrating-scrapy

Illustrative console output showing the interactive prompts and successful completion message when running `apify init` to wrap a Scrapy project. This example demonstrates how the CLI identifies the Scrapy project and prompts for necessary configuration details like BOT_NAME and spider module paths.

```Shell
Info: The current directory looks like a Scrapy project. Using automatic project wrapping.
? Enter the Scrapy BOT_NAME (see settings.py): books_scraper
? What folder are the Scrapy spider modules stored in? (see SPIDER_MODULES in settings.py): books_scraper.spiders
? Pick the Scrapy spider you want to wrap: BookSpider (/home/path/to/actor-scrapy-books-example/books_scraper/spiders/book.py)
Info: Downloading the latest Scrapy wrapper template...
Info: Wrapping the Scrapy project...
Success: The Scrapy project has been wrapped successfully.
```

--------------------------------

### Install Node.js type declarations

Source: https://docs.apify.com/sdk/js/docs/next/guides/type-script-actor

Installs official type declarations for Node.js (`@types/node`) as a development dependency via npm, enabling comprehensive type-checking for Node.js APIs within TypeScript projects.

```bash
npm install --dev @types/node
```

--------------------------------

### Initiate Apify Scrapy project wrapping

Source: https://docs.apify.com/cli/docs/integrating-scrapy

This command starts the Apify CLI's interactive process to convert an existing Scrapy project into an Apify Actor. The CLI will guide you through a series of questions to configure the wrapping.

```Shell
apify init
```

--------------------------------

### Renamed Crawler Options and Parameters

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This section lists the renamed options for crawlers, providing both the old and new parameter names. While old names are still supported for backward compatibility, the new names are recommended for clarity and type safety.

```APIDOC
handleRequestFunction -> requestHandler
handlePageFunction -> requestHandler
handleRequestTimeoutSecs -> requestHandlerTimeoutSecs
handlePageTimeoutSecs -> requestHandlerTimeoutSecs
requestTimeoutSecs -> navigationTimeoutSecs
handleFailedRequestFunction -> failedRequestHandler
```

--------------------------------

### Crawling All Links with CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/3.2/examples/crawl-relative-links

This JavaScript example demonstrates how to use `CheerioCrawler` to crawl a website and enqueue all found links using the 'all' strategy. It initializes an Actor, sets up a `CheerioCrawler` with a request handler to log URLs and enqueue links, and then runs the crawler from a starting URL. Note the `maxRequestsPerCrawl` limitation for demonstration purposes.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        await enqueueLinks({
            // Setting the strategy to 'all' will enqueue all links found
            strategy: 'all',
        });
    },
});

// Run the crawler
await crawler.run(['https://apify.com/']);

await Actor.exit();
```

--------------------------------

### Basic Dockerfile for Apify Node.js Actor

Source: https://docs.apify.com/sdk/js/docs/3.3/guides/docker-images

This Dockerfile sets up a basic Apify Node.js actor. It copies package files, installs dependencies, copies source code, and defines the start command. It's optimized for quick rebuilds by leveraging Docker layer caching and skipping development/optional dependencies.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Initial Browser Setup for Web Scraping

Source: https://docs.apify.com/academy/puppeteer-playwright/executing-scripts/collecting-data

This snippet demonstrates the basic setup for launching a browser, opening a new page, and navigating to a URL using either Playwright or Puppeteer. It includes a placeholder for further code and a timeout before closing the browser, serving as a foundation for web scraping tasks.

```JavaScript
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

await page.goto('https://demo-webstore.apify.org/search/on-sale');

// code will go here

await page.waitForTimeout(10000);

await browser.close();
```

```JavaScript
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();

await page.goto('https://demo-webstore.apify.org/search/on-sale');

// code will go here

await page.waitForTimeout(10000);

await browser.close();
```

--------------------------------

### Get Event Listeners Array

Source: https://docs.apify.com/sdk/js/reference/next/class/LoggerText

Demonstrates `emitter.listeners()`, which returns a copy of the array of listener functions registered for a specified `eventName`. The example shows how to inspect the listeners for a 'connection' event.

```APIDOC
listeners(eventName): Function[]
Inherited from Logger.listeners
Returns a copy of the array of listeners for the event named `eventName`.
@since v0.1.26
Parameters:
  eventName: string | symbol
Returns: Function[]
```

```JavaScript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### API: Get Handled Request Count

Source: https://docs.apify.com/sdk/js/reference/3.1/class/RequestQueue

Returns the total number of requests that have been marked as handled in the queue. This function is a convenient shortcut for accessing the `handledRequestCount` property from the queue's information. A JavaScript example demonstrates its usage.

```APIDOC
handledCount(): Promise<number>
  Returns: Promise<number>
```

```JavaScript
const { handledRequestCount } = await queue.getInfo();
```

--------------------------------

### Manage Key-Value Store Data in JavaScript

Source: https://docs.apify.com/sdk/js/docs/2.3/api/key-value-store

This example demonstrates how to interact with Apify key-value stores in JavaScript. It covers retrieving actor input, getting and setting values in the default store, opening a named store, writing and reading records, and finally dropping a store.

```JavaScript
// Get actor input from the default key-value store.
const input = await Apify.getInput();
// Get some value from the default key-value store.
const otherValue = await Apify.getValue('my-key');

// Write actor output to the default key-value store.
await Apify.setValue('OUTPUT', { myResult: 123 });

// Open a named key-value store
const store = await Apify.openKeyValueStore('some-name');

// Write a record. JavaScript object is automatically converted to JSON,
// strings and binary buffers are stored as they are
await store.setValue('some-key', { foo: 'bar' });

// Read a record. Note that JSON is automatically parsed to a JavaScript object,
// text data returned as a string and other data is returned as binary buffer
const value = await store.getValue('some-key');

// Drop (delete) the store
await store.drop();
```

--------------------------------

### Install HTTPX Library for Python

Source: https://docs.apify.com/academy/scraping-basics-python/downloading-html

This command installs the HTTPX library into your Python virtual environment. HTTPX is a robust HTTP client for Python, essential for making web requests and downloading HTML content.

```bash
$ pip install httpx
...
Successfully installed ... httpx-0.0.0
```

--------------------------------

### Log in to Apify with CLI

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/apify-platform

This snippet provides the steps to install the Apify CLI, authenticate with your API token, and execute a project locally. Using the CLI ensures your credentials are automatically managed for local scraper runs.

```bash
npm install -g apify-cli
```

```bash
apify login -t YOUR_API_TOKEN
```

```bash
apify run -p
```

--------------------------------

### Use Resource Client for a Specific Dataset

Source: https://docs.apify.com/api/client/js/docs/2.6/usage_concepts

This example shows how to get a resource client for a specific dataset. It then demonstrates using the `pushItems` method to append new data items to the end of the specified dataset.

```JavaScript
// Resource clients accept an ID of the resource.
const datasetClient = apifyClient.dataset('john-doe/my-dataset');
// Appends items to the end of john-doe/my-dataset.
await datasetClient.pushItems([{ foo: 1 }, { bar: 2 }]);
```

--------------------------------

### Install Apify CLI on MacOS/Linux

Source: https://docs.apify.com/platform/actors/development/quick-start/locally

Install the Apify Command Line Interface (CLI) using the Homebrew package manager on MacOS or Linux systems.

```bash
brew install apify-cli
```

--------------------------------

### Call Apify Website Content Crawler Actor

Source: https://docs.apify.com/platform/integrations/milvus

Initiates a call to the Apify Website Content Crawler Actor to scrape content from specified URLs. This example crawls the Milvus documentation and Zilliz website, extracting text content.

```Python
actor_call = client.actor("apify/website-content-crawler").call(
    run_input={"maxCrawlPages": 10, "startUrls": [{"url": "https://milvus.io/"}, {"url": "https://zilliz.com/"}]}
)
```

--------------------------------

### Migrating Request Timeout Configuration in Crawlee

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet demonstrates the change in how request timeouts are configured. The 'timeoutSecs' option has been replaced by 'timeout.request', and the unit has changed from seconds to milliseconds, requiring multiplication by 1000.

```JavaScript
// Before:
await Apify.utils.requestAsBrowser({
    …,
    timeoutSecs: 30,
});

// After:
await gotScraping({
    …,
    timeout: {
        request: 30 * 1000,
    },
});
```

--------------------------------

### Define Root Route for Web Interface

Source: https://docs.apify.com/academy/running-a-web-server

Sets up the GET route for the root path ('/'), which renders an HTML page. This page includes a form to submit new URLs and displays thumbnails of previously processed URLs, linking to their stored screenshots.

```JavaScript
app.get('/', (req, res) => {
    let listItems = '';

    // For each of the processed
    processedUrls.forEach((url, index) => {
        const imageUrl = `https://api.apify.com/v2/key-value-stores/${APIFY_DEFAULT_KEY_VALUE_STORE_ID}/records/${index}.jpg`;

        // Display the screenshots below the form
        listItems += `<li>
    <a href="${imageUrl}" target="_blank">
        <img src="${imageUrl}" width="300px" />
        <br />
        ${url}
    </a>
</li>`;
    });

    const pageHtml = `<html>
    <head><title>Example</title></head>
    <body>
        <form method="POST" action="/add-url">
            URL: <input type="text" name="url" placeholder="http://example.com" />
            <input type="submit" value="Add" />
            <hr />
            <ul>${listItems}</ul>
        </form>
    </body>
</html>`;

    res.send(pageHtml);
});
```

--------------------------------

### Using Pre and Post Navigation Hooks in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This snippet illustrates the new approach for handling navigation logic using `preNavigationHooks` and `postNavigationHooks` in `Apify.PuppeteerCrawler`. This method simplifies the process by separating pre-navigation setup (e.g., stealthy page) and post-navigation actions (e.g., page evaluation).

```JavaScript
const preNavigationHooks = [async ({ page }) => makePageStealthy(page)];

const postNavigationHooks = [
    async ({ page }) =>
        page.evaluate(() => {
            window.foo = 'bar';
        }),
];

const crawler = new Apify.PuppeteerCrawler({
    preNavigationHooks,
    postNavigationHooks,
    // ...
});
```

--------------------------------

### JavaScript Example: Apify.pushData Equivalent with Dataset.pushData

Source: https://docs.apify.com/sdk/js/docs/2.3/api/apify

Shows the underlying implementation of Apify.pushData by demonstrating how to achieve the same result using Apify.openDataset() and dataset.pushData(). This clarifies the shortcut's functionality.

```JavaScript
const dataset = await Apify.openDataset();
await dataset.pushData({ myValue: 123 });
```

--------------------------------

### Complex Pseudo-URL for Item Matching

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This advanced pseudo-URL demonstrates matching item detail pages with more flexibility. It accounts for optional 's' in 'http', optional 'www' subdomain, various top-level domains (.com, .net, .org), and uses `[\\d+]` to match numeric item IDs, making it robust against common URL variations.

```APIDOC
http[s?]://[(www)?\\.]online-store.[com|net|org]/items/[\\d+]
```

--------------------------------

### Configure Custom Browser Launchers with Apify (Puppeteer, Playwright)

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

This example demonstrates how to use the `launcher` option with `Apify.launchPuppeteer` and `Apify.launchPlaywright` to provide custom browser modules. It shows how `puppeteer` can be passed directly for Puppeteer, and `playwright.chromium` for Playwright, normalizing the previous `puppeteerModule` behavior.

```javascript
const puppeteer = require('puppeteer');
const playwright = require('playwright');

await Apify.launchPuppeteer();
// Is the same as:
await Apify.launchPuppeteer({
    launcher: puppeteer,
});

await Apify.launchPlaywright();
// Is the same as:
await Apify.launchPlaywright({
    launcher: playwright.chromium,
});
```

--------------------------------

### Initialize New Apify Project with Python Template

Source: https://docs.apify.com/academy/scraping-basics-python/platform

Creates a new Apify project directory, 'warehouse-watchdog', using the 'python-crawlee-beautifulsoup' template. This command sets up the project structure, including a virtual environment, and provides instructions for running and deploying the actor.

```Shell
apify create warehouse-watchdog --template=python-crawlee-beautifulsoup

Info: Python version 0.0.0 detected.
Info: Creating a virtual environment in ...
...
Success: Actor 'warehouse-watchdog' was created. To run it, run "cd warehouse-watchdog" and "apify run".
Info: To run your code in the cloud, run "apify push" and deploy your code to Apify Console.
Info: To install additional Python packages, you need to activate the virtual environment in the ".venv" folder in the actor directory.
```

--------------------------------

### Install Langflow using uv pip

Source: https://docs.apify.com/platform/integrations/langflow

This command installs the Langflow platform using `uv`, a fast Python package and project manager. It's the first step for setting up Langflow locally.

```bash
uv pip install langflow
```

--------------------------------

### Define Default Docker Command for Apify Actors

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/docker-images

This example illustrates the typical CMD instruction used by Apify's base Docker images. It configures the container to execute npm start, which in turn runs the Node.js application as defined in the scripts.start section of the package.json file, launching the actor.

```Dockerfile
CMD npm start
```

--------------------------------

### Initialize Apify Actorization for Scrapy Project

Source: https://docs.apify.com/cli/docs/0.20/integrating-scrapy

Execute the Apify CLI initialization command within the Scrapy project root. This command starts an interactive process that guides you through converting your Scrapy project into an Apify Actor, setting up the necessary configuration files.

```Shell
apify init
```

--------------------------------

### Install Apify Client for JavaScript

Source: https://docs.apify.com/apify-client-js

This command installs the Apify client library for JavaScript using npm, the Node.js package manager. It's the first step to integrate the Apify API client into your project, allowing you to interact with the Apify platform.

```bash
npm install apify-client
```

--------------------------------

### Push Local Actor Project to Apify Cloud

Source: https://docs.apify.com/cli/docs/next/installation

This command uploads the current local project directory to the Apify cloud. It initiates the build process for the Actor on the Apify platform, making it ready for execution.

```Bash
apify push
```

--------------------------------

### Navigate to Sales Page: Fetch HTML Content

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/scraping-the-data

Constructs the specific URL for the sales category page by appending the path to the base website URL. It then uses `gotScraping` to asynchronously fetch the HTML content of this page, which serves as the starting point for link extraction.

```JavaScript
const storeUrl = `${WEBSITE_URL}/collections/sales`;

const response = await gotScraping(storeUrl);
const html = response.body;
```

--------------------------------

### Example Product Page URLs

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/filtering-links

These are example URLs for product detail pages, illustrating the common pattern they follow on the `warehouse-theme-metal.myshopify.com` domain. They serve as a basis for understanding the structure and deriving a regular expression for pattern matching.

```Text
https://warehouse-theme-metal.myshopify.com/products/denon-ah-c720-in-ear-headphones
https://warehouse-theme-metal.myshopify.com/products/sony-sacs9-10-inch-active-subwoofer
https://warehouse-theme-metal.myshopify.com/products/sony-ps-hx500-hi-res-usb-turntable
```

--------------------------------

### Create New Apify Project Boilerplate using CLI

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Uses the Apify CLI to create a new project directory with a boilerplate template, such as 'Hello world', for a Node.js web crawling project.

```Shell
apify create my-hello-world
```

--------------------------------

### Initialize Scraper: Imports and Website URL

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/scraping-the-data

Imports necessary libraries, `got-scraping` for making HTTP requests and `cheerio` for parsing HTML. It also defines the base URL of the target website, which is essential for constructing full URLs later in the scraping process.

```JavaScript
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const WEBSITE_URL = 'https://warehouse-theme-metal.myshopify.com';
```

--------------------------------

### Apify Actor Request Routes (routes.js)

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This file defines specific handler functions for different request labels or 'routes'. It includes the 'CATEGORY' route to enqueue new links from category pages and the 'DETAIL' route to scrape and push data from individual detail pages, demonstrating how to process distinct types of web content.

```javascript
// routes.js
const Apify = require('apify');
const {
    utils: { log },
} = Apify;

exports.CATEGORY = async ({ $, request }, { requestQueue }) => {
    return Apify.utils.enqueueLinks({
        $,
        requestQueue,
        selector: 'div.item > a',
        baseUrl: request.loadedUrl,
        transformRequestFunction: (req) => {
            req.userData.label = 'DETAIL';
            return req;
        },
    });
};

exports.DETAIL = async ({ $, request }) => {
    const urlArr = request.url.split('/').slice(-2);

    log.debug('Scraping results.');
    const results = {
        url: request.url,
        uniqueIdentifier: urlArr.join('/'),
        owner: urlArr[0],
        title: $('header h1').text(),
        description: $('header span.actor-description').text(),
        modifiedDate: new Date(
            Number($('ul.ActorHeader-stats time').attr('datetime')),
        ),
        runCount: Number(
            $('ul.ActorHeader-stats > li:nth-of-type(3)')
                .text()
                .match(/[\d,]+/)[0]
                .replace(',', ''),
        ),
    };

    log.debug('Pushing data to dataset.');
    await Apify.pushData(results);
};
```

--------------------------------

### Example: Get and Set Max Listeners for EventEmitter and EventTarget

Source: https://docs.apify.com/sdk/js/reference/next/class/Logger

Demonstrates how to retrieve and modify the maximum number of listeners for both `EventEmitter` and `EventTarget` instances using `getMaxListeners` and `setMaxListeners` from `node:events`.

```JavaScript
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

--------------------------------

### Retrieve Actor Input using Apify.getInput()

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet demonstrates how to asynchronously retrieve the actor's input. On the Apify Platform, this input is automatically saved to the default KeyValueStore under the key 'INPUT'. When running locally, it expects an 'INPUT.json' file in the default key-value store directory.

```JavaScript
const input = await Apify.getInput();
```

--------------------------------

### Initialize Apify Actor

Source: https://docs.apify.com/platform/actors/development/programming-interface/basic-commands

Demonstrates various methods to initialize an Apify Actor in both JavaScript and Python. Initialization prepares the Actor for events, configures settings, and manages local storage states, ensuring proper setup and termination.

```JavaScript
import { Actor } from 'apify';

await Actor.init();
console.log('Actor starting...');
// ...
await Actor.exit();
```

```JavaScript
import { Actor } from 'apify';

Actor.main(async () => {
    console.log('Actor starting...');
    // ...
});
```

```Python
from apify import Actor

async def main():
    async with Actor:
        Actor.log.info('Actor starting...')
        # ...
```

--------------------------------

### Get Registered Event Names in Node.js EventEmitter

Source: https://docs.apify.com/sdk/js/reference/class/LoggerText

Illustrates how to use the `eventNames` method to retrieve a list of all event names for which listeners have been registered on an `EventEmitter` instance. It includes examples with both string and Symbol event names.

```APIDOC
eventNames(): (string | symbol)[]
Inherited from Logger.eventNames
Description: Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbol's.
Returns: (string | symbol)[]
```

```JavaScript
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

--------------------------------

### Apify CheerioCrawler: Manual Link Extraction and Enqueuing

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript code demonstrates an Apify CheerioCrawler configured to manually extract and enqueue same-domain links. It uses Cheerio to parse HTML and Node.js's `URL` module to resolve absolute URLs, adding them one by one to the `requestQueue`.

```JavaScript
const { URL } = require('url');
const Apify = require('apify');

Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: 'https://apify.com' });

    const handlePageFunction = async ({ request, $ }) => {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);

        // Here starts the new part of handlePageFunction.
        const links = $('a[href]')
            .map((i, el) => $(el).attr('href'))
            .get();

        const ourDomain = 'https://apify.com';
        const absoluteUrls = links.map((link) => new URL(link, ourDomain));

        const sameDomainLinks = absoluteUrls.filter((url) =>
            url.href.startsWith(ourDomain),
        );

        console.log(`Enqueueing ${sameDomainLinks.length} URLs.`);
        for (const url of sameDomainLinks) {
            await requestQueue.addRequest({ url: url.href });
        }
    };

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 20,
        requestQueue,
        handlePageFunction,
    });

    await crawler.run();
});
```

--------------------------------

### Batch Request Handling with crawler.addRequests

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

The new `addRequests` method allows enqueuing multiple requests in batches, improving performance by resolving quickly after an initial batch while continuing in the background. This avoids API rate limits and enables faster crawling starts.

```JavaScript
// will resolve right after the initial batch of 1000 requests is added
const result = await crawler.addRequests([
    /* many requests, can be even millions */
]);

// if we want to wait for all the requests to be added, we can await the `waitForAllRequestsToBeAdded` promise
await result.waitForAllRequestsToBeAdded;
```

--------------------------------

### Install Crawlee with Playwright

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

Illustrates installing the `crawlee` meta-package alongside the `playwright` dependency. Playwright, like Puppeteer, needs to be installed explicitly by the user to allow control over its version.

```Bash
npm install crawlee playwright
```

--------------------------------

### Example: Get Event Listener Count with `listenerCount`

Source: https://docs.apify.com/sdk/js/reference/3.3/class/LoggerJson

Demonstrates how to use the `listenerCount` function from `node:events` to determine the number of active listeners for a specific event on an `EventEmitter` instance.

```JavaScript
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

--------------------------------

### Access Specific Apify Resources with JavaScript

Source: https://docs.apify.com/api/client/js/docs

This example shows how to use resource clients, which accept an ID or `username/resource-name` to target a specific resource. It demonstrates fetching an actor object and starting a run for that actor using its unique identifier.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Resource clients accept an ID of the resource.
const actorClient = client.actor('username/actor-name');
// Fetches the john-doe/my-actor object from the API.
const myActor = await actorClient.get();
// Starts the run of john-doe/my-actor and returns the Run object.
const myActorRun = await actorClient.start();
```

--------------------------------

### Example: Get Actor Input (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Actor

Demonstrates how to retrieve the Actor's input using the `Actor.getInput()` shortcut and its equivalent explicit `KeyValueStore` operations. It highlights that `getInput()` does not cache the value.

```JavaScript
const input = await Actor.getInput();
```

```JavaScript
const store = await Actor.openKeyValueStore();
await store.getValue('INPUT');
```

--------------------------------

### Create Apify Key-Value Store

Source: https://docs.apify.com/cli/docs/reference

Creates a new key-value store on your account.

```APIDOC
Command: apify key-value-stores create [KEYVALUESTORENAME]
Description: Creates a new key-value store on your account.
Arguments:
  KEYVALUESTORENAME (optional): Optional name for the key-value store
Global Flags:
  --json: Format output as json.
```

--------------------------------

### Legacy gotoFunction Configuration in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This example demonstrates the previous approach of using a custom gotoFunction in PuppeteerCrawler. It highlights the complexity involved in remembering default behaviors and ensuring proper pre/post-processing and return values when overriding the function.

```JavaScript
const gotoFunction = async ({ request, page }) => {
    // pre-processing
    await makePageStealthy(page);

    // Have to remember how to do this:
    const response = await gotoExtended(page, request, {
        /* have to remember the defaults */
    });

    // post-processing
    await page.evaluate(() => {
        window.foo = 'bar';
    });

    // Must not forget!
    return response;
};

const crawler = new Apify.PuppeteerCrawler({
    gotoFunction,
    // ...
});
```

--------------------------------

### Accessing crawlingContext in preLaunchHooks for request-specific logic

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This advanced example shows how `preLaunchHooks` can access the `crawlingContext` associated with the current request. By retrieving the request object, developers can apply dynamic launch options, such as setting headless mode based on `request.userData`.

```JavaScript
const preLaunchHooks = [
    async function maybeLaunchChrome(pageId, launchContext) {
        const { request } = crawler.crawlingContexts.get(pageId);
        if (request.userData.useHeadful === true) {
            launchContext.launchOptions.headless = false;
        }
    },
];
```

--------------------------------

### log: Get client for the Actor run's log

Source: https://docs.apify.com/api/client/python/reference/class/RunClient

Returns the client for the log of the Actor run. This client can be used to interact with the actor's log, for example, to retrieve log entries.

```APIDOC
log(): LogClient
Returns LogClient
```

--------------------------------

### Configuring BrowserPool with Lifecycle Hooks

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

`BrowserPool` introduces powerful lifecycle hooks that can be configured via `browserPoolOptions` when initializing a crawler. This example demonstrates setting `retireBrowserAfterPageCount` and using `preLaunchHooks` to conditionally launch browsers in headful mode based on request data.

```javascript
const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        retireBrowserAfterPageCount: 10,
        preLaunchHooks: [
            async (pageId, launchContext) => {
                const { request } = crawler.crawlingContexts.get(pageId);
                if (request.userData.useHeadful === true) {
                    launchContext.launchOptions.headless = false;
                }
            },
        ],
    },
});
```

--------------------------------

### Execute and Terminate Apify Crawler

Source: https://docs.apify.com/sdk/js/docs/examples/playwright-crawler

Initiates the configured PlaywrightCrawler with a starting URL and waits for its completion. After the crawling process finishes, it logs a confirmation message and ensures the Apify Actor exits gracefully, releasing resources.

```JavaScript
await crawler.run(['https://news.ycombinator.com/']);

console.log('Crawler finished.');

await Actor.exit();
```

--------------------------------

### Disable Dynamic Browser Fingerprints in PlaywrightCrawler

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

Illustrates how to disable the dynamic browser fingerprinting feature for a PlaywrightCrawler instance. This is achieved by setting the 'useFingerprints' option to 'false' within the 'browserPoolOptions' configuration.

```javascript
const crawler = new PlaywrightCrawler({
    browserPoolOptions: {
        useFingerprints: false,
    },
});
```

--------------------------------

### Node.js Apify Actor Dockerfile for Efficient Dependency Installation

Source: https://docs.apify.com/academy/deploying-your-code/docker-file

This Dockerfile sets up an Apify Actor environment for Node.js applications. It optimizes build times by first copying and installing `package.json` dependencies, then copying the remaining source code. This approach leverages Docker's layer caching for faster rebuilds on source file changes.

```Dockerfile
FROM apify/actor-node:16

# Second, copy just package.json and package-lock.json since they are the only files
# that affect npm install in the next step
COPY package*.json ./

# Install npm packages, skip optional and development dependencies to keep the
# image small. Avoid logging too much and print the dependency tree for debugging
RUN npm --quiet set progress=false \
 && npm install --only=prod --no-optional \
 && echo "Installed npm packages:" \
 && (npm list --all || true) \
 && echo "Node.js version:" \
 && node --version \
 && echo "npm version:" \
 && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after npm install, quick build will be really fast
# for simple source file changes.
COPY . /
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/3.1/changelog

Installs the main `crawlee` meta-package from the 'next' distribution tag. This package re-exports most of the `@crawlee/*` packages, providing access to all crawler classes and utilities.

```bash
npm install crawlee@next
```

--------------------------------

### Install Playwright for Crawlee Scraper

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/headless-browser

This command installs the Playwright library, a prerequisite for using Playwright-based scrapers with Crawlee. Playwright is not bundled with Crawlee due to its large size, as it includes browser binaries.

```bash
npm install playwright
```

--------------------------------

### Interface: ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/2.11/interface/KeyValueListItem

Represents the ActorStartOptions interface within the Apify Client for JavaScript. This interface defines the options for starting an Actor, including input and run configuration.

```APIDOC
interface ActorStartOptions
```

--------------------------------

### Composing Multiple `preLaunchHooks` for Browser Configuration

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v1

Shows how multiple `preLaunchHooks` can be composed into an array to apply various pre-defined behaviors, such as launching Chrome, setting headless mode, or injecting fingerprints, during browser launch.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint,
];
```

--------------------------------

### Example: Initialize and Exit Actor (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Actor

Provides a complete example demonstrating the usage of `Actor.init()` to prepare the Actor for the Apify platform, perform a web scraping operation using `gotScraping`, and then properly terminate the Actor with `Actor.exit()`.

```JavaScript
import { gotScraping } from 'got-scraping';

await Actor.init();

const html = await gotScraping('http://www.example.com');
console.log(html);

await Actor.exit();
```

--------------------------------

### Run Crawlee CheerioCrawler with Actor.init() and Actor.exit() on Apify

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

This JavaScript code illustrates running a CheerioCrawler on the Apify platform by explicitly calling `Actor.init()` and `Actor.exit()`. It sets up a CheerioCrawler to extract titles, enqueue links, and save data, similar to the `Actor.main()` example, but provides manual control over the Actor's lifecycle, ensuring proper initialization and graceful termination.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    async requestHandler({ request, $, enqueueLinks }) {
        const { url } = request;

        // Extract HTML title of the page.
        const title = $('title').text();
        console.log(`Title of ${url}: ${title}`);

        // Add URLs that match the provided pattern.
        await enqueueLinks({
            globs: ['https://www.iana.org/*'],
        });

        // Save extracted data to dataset.
        await Actor.pushData({ url, title });
    },
});

// Enqueue the initial request and run the crawler
await crawler.run(['https://www.iana.org/']);

await Actor.exit();
```

--------------------------------

### Complete Node.js Web Scraping Script using Got Scraping and Cheerio

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/node-continued

This comprehensive Node.js script outlines the process of web scraping. It utilizes `got-scraping` to fetch HTML content from a specified URL, `cheerio` to parse the HTML and select elements with the `product-item` class, and then iterates through these elements to extract and log their text content to the terminal. This script is intended to be run as `main.js`.

```JavaScript
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';

// Download HTML with Got Scraping
const response = await gotScraping(storeUrl);
const html = response.body;

// Parse HTML with Cheerio
const $ = cheerio.load(html);

// Find all products on the page
const products = $('.product-item');

// Loop through all the products
// and print their text to terminal
for (const product of products) {
    const productElement = $(product);
    const productText = productElement.text();

    console.log(productText);
}
```

--------------------------------

### Enable Automatic Browser Fingerprint Management in PlaywrightCrawler

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/avoid-blocking

This code snippet demonstrates how to enable automatic browser fingerprint generation for a PlaywrightCrawler instance in Apify SDK. By setting "useFingerprints: true" within "browserPoolOptions", the crawler will automatically generate and apply unique browser fingerprints for each request, helping to avoid detection and blocking. This feature requires zero configuration to get started.

```javascript
const crawler = new Apify.PlaywrightCrawler({
    browserPoolOptions: {
        useFingerprints: true,
    },
});
```

--------------------------------

### Install NodeJS type declarations

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/type-script-actor

Command to install type declarations for NodeJS. This enables type-checking for NodeJS features, improving development experience and code quality.

```Shell
npm install --dev @types/node
```

--------------------------------

### Install Required Node.js Packages

Source: https://docs.apify.com/platform/integrations/mastra

Installs the necessary npm packages for the project, including `@mastra/core`, `@mastra/mcp`, and `@ai-sdk/openai`. These packages provide the core functionalities for agent creation, MCP client interaction, and LLM integration.

```Shell
npm install @mastra/core @mastra/mcp @ai-sdk/openai
```

--------------------------------

### Get All Listeners for an Event in Node.js

Source: https://docs.apify.com/sdk/js/reference/class/LoggerText

Demonstrates how to use the `listeners` method to retrieve an array of all listener functions registered for a specific event name. The example shows its application with a Node.js HTTP server's 'connection' event.

```APIDOC
listeners(eventName): Function[]
Inherited from Logger.listeners
Description: Returns a copy of the array of listeners for the event named eventName.
Parameters:
  eventName: string | symbol
Returns: Function[]
```

```JavaScript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### Configuring PuppeteerCrawler with BrowserPool Lifecycle Hooks

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v1

Illustrates how to integrate `browserPoolOptions` into `Apify.PuppeteerCrawler` to define lifecycle hooks. This example shows a `preLaunchHook` that modifies browser launch options based on request data, enabling conditional headless mode.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        retireBrowserAfterPageCount: 10,
        preLaunchHooks: [
            async (pageId, launchContext) => {
                const { request } = crawler.crawlingContexts.get(pageId);
                if (request.userData.useHeadful === true) {
                    launchContext.launchOptions.headless = false;
                }
            }
        ]
    }
});
```

--------------------------------

### Install Apify Client Library

Source: https://docs.apify.com/api/client/js/docs

Install the `apify-client` library using various JavaScript package managers like NPM, Yarn, PNPM, or Bun.

```npm
npm i apify-client
```

```yarn
yarn add apify-client
```

```pnpm
pnpm add apify-client
```

```bun
bun add apify-client
```

--------------------------------

### Create New Apify Actor Project (CLI)

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/apify-platform

This command uses the Apify CLI to generate a new actor project boilerplate. It prompts the user to select a template, such as "Hello world", and creates a directory with the necessary project files.

```shell
apify create my-hello-world
```

--------------------------------

### Install Specific Crawlee Package for Cheerio Support

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v3

Use this command to install only the `@crawlee/cheerio` package when your project specifically requires Cheerio integration without other browser-specific dependencies.

```bash
npm install @crawlee/cheerio
```

--------------------------------

### Configure Custom Browser Launchers for Apify

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This example demonstrates how to explicitly provide custom Puppeteer or Playwright modules to Apify's browser launch functions using the `launcher` option. It shows both the default usage and how to pass a specific `puppeteer` module or `playwright.chromium` for `Apify.launchPuppeteer` and `Apify.launchPlaywright` respectively.

```JavaScript
const puppeteer = require('puppeteer');
const playwright = require('playwright');

await Apify.launchPuppeteer();
// Is the same as:
await Apify.launchPuppeteer({
    launcher: puppeteer,
});

await Apify.launchPlaywright();
// Is the same as:
await Apify.launchPlaywright({
    launcher: playwright.chromium,
});
```

--------------------------------

### Crawl all links with CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/next/examples/crawl-all-links

This snippet demonstrates how to use `CheerioCrawler` to recursively crawl all links found on pages. It initializes the crawler, defines a `requestHandler` to log URLs and enqueue new links, and then runs the crawler from a starting URL. A `maxRequestsPerCrawl` limit is included as an example, but should be removed for full crawling.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
});

// Run the crawler
await crawler.run(['https://apify.com/']);

await Actor.exit();
```

--------------------------------

### Push Apify Project to Platform using CLI

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Uploads the local Apify project code to the Apify platform for building and execution as an actor.

```Shell
apify push
```

--------------------------------

### Initialize Apify Actor Project via CLI

Source: https://docs.apify.com/cli/docs/next/reference

This command sets up an Apify Actor project in the current directory by creating essential files like `actor.json` and the `storage` directory. It can also automatically configure wrappers for existing Scrapy projects.

```APIDOC
DESCRIPTION
  Sets up an Actor project in your current directory by creating actor.json and storage files.
  If the directory contains a Scrapy project in Python, the command automatically creates wrappers so that you can run your scrapers without changes.
  Creates the '.actor/actor.json' file and the 'storage' directory in the current directory, but does not touch any other existing files or
  directories.

  WARNING: Overwrites existing 'storage' directory.

USAGE
  $ apify init [actorName] [-y]

ARGUMENTS
  actorName  Name of the Actor. If not provided, you will be prompted for it.

FLAGS
  -y, --yes  Automatic yes to prompts; assume "yes" as answer to all prompts. Note that in some cases, the command may still ask for
             confirmation.
```

--------------------------------

### Retrieve and Merge Apify Actor Datasets (JavaScript)

Source: https://docs.apify.com/api/client/js/docs/examples

This JavaScript code demonstrates how to use the Apify Client to access and manage data from Apify Actors. It shows how to list actor runs, retrieve associated datasets, and then merge items from multiple datasets into a single, new dataset for consolidated analysis. The example also highlights pagination for dataset items.

```JavaScript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const actorClient = client.actor('apify/instagram-hashtag-scraper');

const actorRuns = actorClient.runs();

// See pagination to understand how to get more datasets
const actorDatasets = await actorRuns.list({ limit: 20 });

console.log('Actor datasets:');
console.log(actorDatasets);

const mergingDataset = await client.datasets().getOrCreate('merge-dataset');

for (const datasetItem of actorDatasets.items) {
    // Dataset items can be handled here. Dataset items can be paginated
    const datasetItems = await client.dataset(datasetItem.defaultDatasetId).listItems({ limit: 1000 });

    // Items can be pushed to single dataset
    await client.dataset(mergingDataset.id).pushItems(datasetItems.items);

    // ...
}
```

--------------------------------

### Configuration Class Constructor

Source: https://docs.apify.com/sdk/js/reference/3.0/class/Configuration

Initializes a new `Configuration` instance. Options provided are overridden by environment variables if present.

```APIDOC
Configuration:
  constructor(options?: ConfigurationOptions)
    Inherits from CoreConfiguration.constructor
    Parameters:
      options: ConfigurationOptions (optional)
    Returns: Configuration
```

--------------------------------

### Manage Key-Value Store Data with Apify SDK in JavaScript

Source: https://docs.apify.com/sdk/js/docs/1.3/api/key-value-store

This example demonstrates common operations with Apify's key-value stores in JavaScript. It shows how to retrieve actor input, get and set values in the default store, open a named store, write various data types, read records, and drop an entire store.

```JavaScript
// Get actor input from the default key-value store.
const input = await Apify.getInput();
// Get some value from the default key-value store.
const otherValue = await Apify.getValue('my-key');

// Write actor output to the default key-value store.
await Apify.setValue('OUTPUT', { myResult: 123 });

// Open a named key-value store
const store = await Apify.openKeyValueStore('some-name');

// Write a record. JavaScript object is automatically converted to JSON,
// strings and binary buffers are stored as they are
await store.setValue('some-key', { foo: 'bar' });

// Read a record. Note that JSON is automatically parsed to a JavaScript object,
// text data returned as a string and other data is returned as binary buffer
const value = await store.getValue('some-key');

// Drop (delete) the store
await store.drop();
```

--------------------------------

### Using context.sendRequest with got-scraping in Crawlee

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

The `requestAsBrowser` method has been removed, encouraging direct use of `got-scraping`. For easier migration, `context.sendRequest()` is provided as a helper to process the context-bound `Request` object through `got-scraping`, allowing custom options like `responseType`.

```JavaScript
const crawler = new BasicCrawler({
    async requestHandler({ sendRequest, log }) {
        // we can use the options parameter to override gotScraping options
        const res = await sendRequest({ responseType: 'json' });
        log.info('received body', res.body);
    },
});
```

--------------------------------

### Enqueueing Links with CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet demonstrates the basic usage of enqueueLinks() within an Apify CheerioCrawler. It simplifies the process of finding and enqueueing all <a> tag links from a page to a RequestQueue, assuming the Cheerio $ object and a requestQueue instance are already available in the handlePageFunction context.

```JavaScript
// Assuming previous existence of the '$' and 'requestQueue' variables.
await enqueueLinks({ $, requestQueue });
```

--------------------------------

### Start Apify Actor Remotely

Source: https://docs.apify.com/cli/docs/next/reference

Starts an Actor remotely and immediately returns run details. It uses an authenticated account and the local key-value store for input. Options include actor ID, build tag, input data, memory, and timeout.

```APIDOC
DESCRIPTION
  Starts Actor remotely and returns run details immediately.
  Uses authenticated account and local key-value store for input.

USAGE
  $ apify start [actorId] [-b <value>] [-i <value> | --input-file <value>] [--json] [-m <value>] [-t <value>]

ARGUMENTS
  actorId  Name or ID of the Actor to run (e.g. "my-actor", "apify/hello-world" or "E2jjCZBezvAZnX8Rb"). If not provided, the command runs the
           remote Actor specified in the '.actor/actor.json' file.

FLAGS
  -b, --build=<value>       Tag or number of the build to run (e.g. "latest" or "1.2.34").
  -i, --input=<value>       Optional JSON input to be given to the Actor.
      --input-file=<value>  Optional path to a file with JSON input to be given to the Actor. The file must be a valid JSON file.
                            You can also specify `-` to read from standard input.
      --json                Format the command output as JSON
  -m, --memory=<value>      Amount of memory allocated for the Actor run, in megabytes.
  -t, --timeout=<value>     Timeout for the Actor run in seconds. Zero value means there is no timeout.
```

--------------------------------

### API Changes: `requestAsBrowser` Removal and `sendRequest` Option Renames

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Documents the deprecation and removal of the `requestAsBrowser` function, which is now replaced by `sendRequest()`. This snippet details the options that have been renamed for the new `sendRequest()` function, which previously applied to `requestAsBrowser`.

```APIDOC
API Changes for HTTP Request Handling:

Function `requestAsBrowser` has been removed.
Use `sendRequest()` instead.

Renamed options for `sendRequest()` (previously from `requestAsBrowser`):
  - `payload`: Renamed.
  - `ignoreSslErrors`: Renamed.
  - `header-generator` options: Renamed.
  - `timeoutSecs`: Renamed.
  - `throwOnHttpErrors`: Renamed.
  - `decodeBody`: Renamed.
  - `abortFunction`: Renamed.
```

--------------------------------

### Integrate RequestList and RequestQueue with Apify CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This code shows how to instantiate an `Apify.CheerioCrawler` and integrate both `requestList` and `requestQueue` into its configuration. The crawler automatically manages the interaction between the `RequestList` (for initial URLs) and the `RequestQueue` (for subsequent enqueues and processing).

```JavaScript
const crawler = new Apify.CheerioCrawler({
    requestList,
    requestQueue,
    handlePageFunction,
});
```

--------------------------------

### Dockerfile: Install NPM Dependencies and Copy Source

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/docker-images

This Dockerfile snippet shows how to install production-only NPM dependencies quietly, list installed packages and Node.js/NPM versions, and then copy the application source code. This sequence optimizes build times for subsequent changes.

```Dockerfile
RUN npm --quiet set progress=false \
 && npm install --only=prod --no-optional \
 && echo "Installed NPM packages:" \
 && (npm list || true) \
 && echo "Node.js version:" \
 && node --version \
 && echo "NPM version:" \
 && npm --version

COPY . ./
```

--------------------------------

### Install Apify SDK v1 with Puppeteer

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v1

Command to install the Apify SDK version 1 along with the Puppeteer browser automation library. This is the recommended installation for users who previously used older SDK versions.

```npm
npm install apify puppeteer
```

--------------------------------

### Disable Dynamic Browser Fingerprints in Crawlee

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

Demonstrates how to disable dynamic browser fingerprints by setting `useFingerprints` to `false` within the `browserPoolOptions` of a `PlaywrightCrawler` instance. This provides static fingerprinting behavior instead of dynamic generation.

```JavaScript
const crawler = new PlaywrightCrawler({
    browserPoolOptions: {
        useFingerprints: false,
    },
});
```

--------------------------------

### Initialize OpenAI and Apify API Clients

Source: https://docs.apify.com/platform/integrations/openai-assistants

This snippet demonstrates how to initialize the OpenAI and Apify API clients using your respective API keys. Replace the placeholder values with your actual keys to establish connections for making API calls.

```Python
client = OpenAI(api_key="YOUR OPENAI API KEY")
apify_client = ApifyClient("YOUR APIFY API TOKEN")
```

--------------------------------

### Apify SDK Event Management API Changes (APIDOC)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This API documentation details the evolution of event management in the Apify SDK. It explains the transition from `Apify.events` to `EventManager` (accessible via `Actor.eventManager` or `Actor.on`/`off`) and introduces the new `exit` event for graceful resource shutdown.

```APIDOC
Event Management:
  Old: Apify.events (EventEmitter instance)
  New:
    EventManager class (crawlee.dev/api/core/class/EventManager)
    Access via:
      Actor.eventManager getter
      Actor.on() shortcut
      Actor.off() shortcut
      Configuration.getEventManager()
  New Event:
    exit: Fired when Actor.exit() is called (also at end of Actor.main()). Allows graceful resource shutdown.
```

--------------------------------

### Install Crawlee Cheerio Package

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v3

Installs only the `@crawlee/cheerio` package, suitable for projects that specifically require Cheerio support without other browser dependencies.

```bash
npm install @crawlee/cheerio
```

--------------------------------

### API Change: `decodeBody` option renamed

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

The `decodeBody` option has been renamed to `decompress`. This option is responsible for decompressing the response body. It defaults to `true` and should generally not be changed unless specific behavior is required.

```APIDOC
Option: `decodeBody` -> `decompress`
Default: `true`
Purpose: Decompresses the response body.
```

--------------------------------

### APIDOC: Interface ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/next/interface/KeyValueClientListKeysOptions

Defines options for starting an Actor within the Apify Client for JavaScript API.

```APIDOC
interface ActorStartOptions {
  // Properties and methods of ActorStartOptions interface
}
```

--------------------------------

### TaskClient Class API Documentation

Source: https://docs.apify.com/api/client/js/reference/2.8/class/TaskClient

Documents the TaskClient class, which extends ResourceClient and provides methods for interacting with Apify tasks, including calling, deleting, getting, starting, and updating tasks, as well as managing their input and webhooks.

```APIDOC
TaskClient:
  Hierarchy:
    - ResourceClient
  Properties:
    apifyClient: ApifyClient (Inherited from ResourceClient)
    baseUrl: string (Inherited from ResourceClient)
    httpClient: HttpClient (Inherited from ResourceClient)
    id: (Inherited from ResourceClient)
    params: (Inherited from ResourceClient)
    resourcePath: (Inherited from ResourceClient)
    safeId: (Inherited from ResourceClient)
    url: (Inherited from ResourceClient)
  Methods:
    call: ()
    delete: ()
    get: ()
    getInput: ()
    lastRun: ()
    runs: ()
    start: ()
    update: ()
    updateInput: ()
    webhooks: ()
```

--------------------------------

### Apify CheerioCrawler with RequestQueue and EnqueueLinks

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript code demonstrates how to set up an Apify CheerioCrawler to crawl multiple category pages, manage requests using a RequestList and RequestQueue, and dynamically enqueue new links (actor detail pages) found on the category pages. It limits the crawl to a maximum number of requests and uses `handlePageFunction` to process pages and `enqueueLinks` for link discovery.

```JavaScript
const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://apify.com/store?category=TRAVEL',
        'https://apify.com/store?category=ECOMMERCE',
        'https://apify.com/store?category=ENTERTAINMENT',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue(); // <----------------

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50, // <----------------------------------------
        requestList,
        requestQueue, // <---------------------------------------------------
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            // Only enqueue new links from the category pages.
            if (!request.userData.detailPage) {
                await Apify.utils.enqueueLinks({
                    $,
                    requestQueue,
                    selector: 'div.item > a',
                    baseUrl: request.loadedUrl,
                    transformRequestFunction: (req) => {
                        req.userData.detailPage = true;
                        return req;
                    },
                });
            }
        },
    });

    await crawler.run();
});
```

--------------------------------

### Create Apify Actor from Python template using CLI

Source: https://docs.apify.com/sdk/python/docs/overview/running-actors-locally

This command utilizes the Apify CLI to initialize a new Apify Actor project. It creates a directory named 'my-first-actor', downloads the 'python-start' template, sets up a virtual environment, and installs all required dependencies for the Actor.

```bash
apify create my-first-actor --template python-start
```

--------------------------------

### Configuring BrowserPool Lifecycle Hooks in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example shows how to configure `browserPoolOptions` within `Apify.PuppeteerCrawler` to utilize lifecycle hooks. Specifically, it demonstrates a `preLaunchHooks` implementation that conditionally sets the browser to headful mode based on `request.userData`.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        retireBrowserAfterPageCount: 10,
        preLaunchHooks: [
            async (pageId, launchContext) => {
                const { request } = crawler.crawlingContexts.get(pageId);
                if (request.userData.useHeadful === true) {
                    launchContext.launchOptions.headless = false;
                }
            },
        ],
    },
});
```

--------------------------------

### Create New Apify Project with CLI (JavaScript)

Source: https://docs.apify.com/sdk

This command initializes a new Apify project using the `apify-cli` tool. It sets up the basic directory structure and necessary files for a new Actor, specifically tailored for JavaScript development. This is the first step to begin building an Apify Actor.

```Shell
npx apify-cli create my-crawler
```

--------------------------------

### RequestQueue.addRequest() Method API Documentation

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Documentation for the `addRequest()` method of the `RequestQueue` class. This method is used to add new requests to the queue for processing. It can accept either a `Request` instance or a plain object that will be automatically converted.

```APIDOC
requestQueue.addRequest(request: Request | object, options?: object): Promise<void>
  request: A Request instance or a plain object with at least a 'url' property.
  options: Optional settings for adding the request (e.g., 'forefront').
  Returns: A Promise that resolves when the request is successfully added to the queue.
```

--------------------------------

### Basic Dataset Usage Example

Source: https://docs.apify.com/sdk/python/reference/class/Dataset

This example demonstrates how to open a dataset, push new data records, retrieve filtered data, and export the dataset content to a file. It showcases the fundamental operations of the `Dataset` class for managing structured data.

```python
from crawlee.storages import Dataset

# Open a dataset
dataset = await Dataset.open(name='my_dataset')

# Add data
await dataset.push_data({'title': 'Example Product', 'price': 99.99})

# Retrieve filtered data
results = await dataset.get_data(limit=10, desc=True)

# Export data
await dataset.export_to('results.json', content_type='json')
```

--------------------------------

### Apify KeyValueStore Concept API Reference

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This API reference outlines the concept of Apify's KeyValueStore. It is a fundamental storage type for key-value pairs, conventionally used for actor input (under the 'INPUT' key) and typically storing 'application/json' content. `Apify.getInput()` interacts with this store.

```APIDOC
KeyValueStore:
  Type: Data storage
  Purpose: Stores arbitrary key-value data for Apify actors.
  Convention: The 'INPUT' key is used for actor input.
  Content-Type: Primarily 'application/json'.
```

--------------------------------

### Example: Get Key-Value Store Value (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Actor

Illustrates how to fetch a specific value from the default `KeyValueStore` using the `Actor.getValue()` shortcut, alongside its equivalent explicit `KeyValueStore` operations. It also mentions `Actor.setValue` for storing values.

```JavaScript
const value = await Actor.getValue('my-key');
```

```JavaScript
const store = await Actor.openKeyValueStore();
const value = await store.getValue('my-key');
```

--------------------------------

### Verify Apify CLI Version

Source: https://docs.apify.com/academy/scraping-basics-python/platform

Checks the installed version of the Apify Command Line Interface to confirm successful installation and readiness for use.

```Shell
$ apify --version
apify-cli/0.0.0 system-arch00 node-v0.0.0
```

--------------------------------

### Configure and Use ProxyConfiguration with CheerioCrawler

Source: https://docs.apify.com/sdk/js/reference/3.3/class/ProxyConfiguration

This example demonstrates how to create a ProxyConfiguration instance with specific Apify Proxy groups and country code, and then integrate it into a CheerioCrawler. It also shows how to access the proxyInfo within the request handler to get the URL of the proxy used.

```JavaScript
const proxyConfiguration = await Actor.createProxyConfiguration({
  groups: ['GROUP1', 'GROUP2'] // List of Apify Proxy groups
  countryCode: 'US',
});

const crawler = new CheerioCrawler({
  // ...
  proxyConfiguration,
  requestHandler({ proxyInfo }) {
     const usedProxyUrl = proxyInfo.url; // Getting the proxy URL
  }
})
```

--------------------------------

### Pay-per-event Pricing Model Details

Source: https://docs.apify.com/academy/actor-marketing-playbook/store-basics/how-actor-monetization-works

Outlines the pay-per-event monetization model for Apify Actors, specifying the profit calculation formula and providing examples of how various programmatic events are priced. This model charges users based on specific events triggered by the Actor's code.

```APIDOC
Pricing Model: Pay-per-event
  Description: Users are charged based on specific events triggered programmatically by the Actor's code.
  Revenue Share: 80% of revenue minus platform usage costs.
  Profit Calculation:
    formula: profit = (0.8 * revenue) - platform usage costs
  Event Cost Examples:
    Actor start per 1 GB of memory: $0.005
    Pages scraped: $0.002
    Page opened with residential proxy: $0.002 (on top of Pages scraped)
    Page opened with a browser: $0.002 (on top of Pages scraped)
```

--------------------------------

### PreLaunchHook accessing crawlingContext for request data

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This advanced example shows how a `preLaunchHook` can access the `crawlingContext` associated with the current request. By retrieving `request.userData`, the hook can dynamically adjust browser launch options, such as setting `headless` mode based on specific request data.

```JavaScript
const preLaunchHooks = [
    async function maybeLaunchChrome(pageId, launchContext) {
        const { request } = crawler.crawlingContexts.get(pageId);
        if (request.userData.useHeadful === true) {
            launchContext.launchOptions.headless = false;
        }
    },
];
```

--------------------------------

### JavaScript: Configure Custom Browser Modules for Apify Launchers

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This JavaScript example illustrates how to explicitly configure custom browser modules (Puppeteer and Playwright) when using `Apify.launchPuppeteer` and `Apify.launchPlaywright`. It demonstrates the use of the `launcher` option, which replaced `puppeteerModule`, to specify the desired browser library for launching.

```JavaScript
const puppeteer = require('puppeteer');
const playwright = require('playwright');

await Apify.launchPuppeteer();
// Is the same as:
await Apify.launchPuppeteer({
    launcher: puppeteer,
});

await Apify.launchPlaywright();
// Is the same as:
await Apify.launchPlaywright({
    launcher: playwright.chromium,
});
```

--------------------------------

### Create and Run Apify Actor Locally using CLI

Source: https://docs.apify.com/sdk/js/docs/next/guides/apify-platform

These commands illustrate the process of generating a new Apify actor boilerplate and subsequently running it locally. The `apify create` command initializes a project, and `apify run` executes the actor within the created directory.

```Bash
apify create my-hello-world
```

```Bash
cd my-hello-world
apify run
```

--------------------------------

### Get Event Listeners for EventEmitter and EventTarget in Node.js

Source: https://docs.apify.com/sdk/js/reference/3.1/class/LoggerJson

Demonstrates how to use `getEventListeners` to retrieve a copy of the listener array for a given event name, applicable to both `EventEmitter` and `EventTarget` instances. It shows examples for both types.

```JavaScript
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

--------------------------------

### Automate Basic Web Interaction (Click, Type, Press Enter)

Source: https://docs.apify.com/academy/puppeteer-playwright/page/interacting-with-a-page

A complete script demonstrating a basic web automation flow: launching a browser, navigating to a URL, clicking an 'Accept all' button, typing text into a search box, and pressing Enter. Includes examples for both Playwright and Puppeteer, showcasing their respective setup and interaction methods.

```JavaScript
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });

const page = await browser.newPage();

await page.goto('https://www.google.com/');

// Click the "Accept all" button
await page.click('button:has-text("Accept all")');

// Type the query into the search box
await page.type('textarea[title]', 'hello world');

// Press enter
await page.keyboard.press('Enter');

await page.waitForTimeout(10000);
await browser.close();
```

```JavaScript
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: false });

const page = await browser.newPage();

await page.goto('https://www.google.com/');

// Click the "Accept all" button
await page.click('button + button');

// Type the query into the search box
await page.type('textarea[title]', 'hello world');

// Press enter
await page.keyboard.press('Enter');

await page.waitForTimeout(10000);
await browser.close();
```

--------------------------------

### Install Apify CLI via Homebrew

Source: https://docs.apify.com/cli/docs/0.20/installation

Installs the Apify CLI using the Homebrew package manager on macOS or Linux.

```Shell
brew install apify-cli
```

--------------------------------

### get_status_message_watcher: Get StatusMessageWatcher instance

Source: https://docs.apify.com/api/client/python/reference/class/RunClient

Obtains a `StatusMessageWatcher` instance for redirecting status and status messages to logs. This watcher can be explicitly started, stopped, or used as a context manager to monitor and log the actor's status.

```APIDOC
get_status_message_watcher(to_logger, check_period): StatusMessageWatcherSync
  optionalto_logger: logging.Logger | None = None
    Logger used for logging the status and status messages. If not provided, a new logger is created.
  optionalcheck_period: timedelta = timedelta(seconds=1)
    The period with which the status message will be polled.
Returns StatusMessageWatcherSync
```

--------------------------------

### Actor Configuration File (`actor.json`) Examples

Source: https://docs.apify.com/platform/actors/development/actor-config

Demonstrates both a comprehensive and a minimal configuration for the `.actor/actor.json` file, which defines an Actor's properties and links it to the Apify platform. This file specifies details such as name, version, memory limits, environment variables, and paths to related files like Dockerfile and input schemas.

```JSON
{
    "actorSpecification": 1, // always 1
    "name": "name-of-my-scraper",
    "version": "0.0",
    "buildTag": "latest",
    "minMemoryMbytes": 256,
    "maxMemoryMbytes": 4096,
    "environmentVariables": {
        "MYSQL_USER": "my_username",
        "MYSQL_PASSWORD": "@mySecretPassword"
    },
    "usesStandbyMode": false,
    "dockerfile": "./Dockerfile",
    "readme": "./ACTOR.md",
    "input": "./input_schema.json",
    "storages": {
        "dataset": "./dataset_schema.json"
    },
    "webServerSchema": "./web_server_openapi.json"
}
```

```JSON
{
    "actorSpecification": 1, // always 1
    "name": "name-of-my-scraper",
    "version": "0.0"
}
```

--------------------------------

### API Change: `throwOnHttpErrors` to `throwHttpErrors`

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This API documentation details the renaming of the 'throwOnHttpErrors' option to 'throwHttpErrors'. This option controls whether the request throws an error on unsuccessful HTTP status codes, such as 404. By default, it is set to 'false'.

```APIDOC
Option: `throwOnHttpErrors` (old) -> `throwHttpErrors` (new)
Purpose: Controls whether the request throws on unsuccessful HTTP status codes (e.g., 404).
Default: `false`.
```

--------------------------------

### Fetch HTML of a Web Page using got-scraping

Source: https://docs.apify.com/sdk/js/docs/next/examples/crawl-single-url

This snippet demonstrates how to use the `got-scraping` library to make an HTTP GET request to a specified URL and retrieve its HTML body. It logs the entire HTML content to the console. This requires the `got-scraping` npm package to be installed.

```JavaScript
import { gotScraping } from 'got-scraping';

// Get the HTML of a web page
const { body } = await gotScraping({ url: 'https://www.example.com' });
console.log(body);

```

--------------------------------

### Updated Apify.launchPuppeteer arguments for launchOptions

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/migration-to-v1

This snippet highlights the change in how launch options are passed to `Apify.launchPuppeteer`. The new structure nests specific browser launch options like `headless` under a `launchOptions` object, improving clarity and reducing confusion.

```JavaScript
// OLD
await Apify.launchPuppeteer({
    useChrome: true,
    headless: true,
});

// NEW
await Apify.launchPuppeteer({
    useChrome: true,
    launchOptions: {
        headless: true,
    },
});
```

--------------------------------

### Configure ProxyConfiguration with Apify Proxy Groups

Source: https://docs.apify.com/sdk/js/reference/next/class/ProxyConfiguration

This example demonstrates how to create a `ProxyConfiguration` instance using `Actor.createProxyConfiguration` with specific Apify Proxy groups and country code. It then shows how to integrate this configuration into a `CheerioCrawler` and access the `proxyInfo` within the request handler to get the URL of the used proxy.

```javascript
const proxyConfiguration = await Actor.createProxyConfiguration({
  groups: ['GROUP1', 'GROUP2'] // List of Apify Proxy groups
  countryCode: 'US'
});

const crawler = new CheerioCrawler({
  // ...
  proxyConfiguration,
  requestHandler({ proxyInfo }) {
     const usedProxyUrl = proxyInfo.url; // Getting the proxy URL
  }
})
```

--------------------------------

### Install Beautiful Soup 4 Library

Source: https://docs.apify.com/academy/scraping-basics-python/parsing-html

Instructions to install the Beautiful Soup 4 and its dependencies using pip, the Python package installer. This command prepares your environment for HTML parsing.

```Shell
$ pip install beautifulsoup4
```

--------------------------------

### Accept and log user input in Apify Actor (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/examples/accept-user-input

This JavaScript example demonstrates how to initialize an Apify Actor, retrieve user input using `Actor.getInput()`, and log it to the console. It requires the Apify SDK. User input can be provided by creating a `INPUT.json` file inside the 'default' key-value store at `{PROJECT_FOLDER}/storage/key_value_stores/default/INPUT.json`.

```JavaScript
import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();
console.log(input);

await Actor.exit();
```

--------------------------------

### Install Apify CLI via Homebrew

Source: https://docs.apify.com/cli/docs/next/installation

Installs the Apify Command Line Interface (CLI) on macOS or Linux systems using the Homebrew package manager.

```bash
brew install apify-cli
```

--------------------------------

### Manage Datasets with Collection Client (JavaScript)

Source: https://docs.apify.com/api/client/js/docs/2.7/usage_concepts

This example shows how to use the dataset collection client to get an existing dataset or create a new one if it doesn't exist, identified by its name. This is a common pattern for ensuring a dataset is available before operations.

```JavaScript
// Collection clients do not require a parameter.
const datasetCollectionClient = apifyClient.datasets();
// Gets (or creates, if it doesn't exist) a dataset with the name of my-dataset.
const myDataset = await datasetCollectionClient.getOrCreate('my-dataset');
```

--------------------------------

### API Change: `throwOnHttpErrors` option renamed

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

The `throwOnHttpErrors` option has been renamed to `throwHttpErrors`. This option controls whether the request throws an error on unsuccessful HTTP status codes, such as 404. By default, it is set to `false`.

```APIDOC
Option: `throwOnHttpErrors` -> `throwHttpErrors`
Default: `false`
Purpose: Throws on unsuccessful HTTP status codes (e.g., 404).
```

--------------------------------

### Apify Proxy Configuration API Usage

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

This section details the API for instantiating the `ProxyConfiguration` class, differentiating between using your own custom proxies and Apify Proxy. It specifies the constructor and factory method to use for each scenario, along with relevant options.

```APIDOC
ProxyConfiguration:
  - Constructor (for Own Proxies):
      Signature: new ProxyConfiguration(options: ProxyConfigurationOptions)
      Description: Used to create a ProxyConfiguration instance when using your own custom proxies.
      Parameters:
        options: ProxyConfigurationOptions
          - proxyUrls: string[] (Enables use of custom proxy URLs)
          - newUrlFunction: Function (Enables use of custom proxy URLs)
  - Factory Method (for Apify Proxy):
      Signature: Actor.createProxyConfiguration()
      Description: Used to create a ProxyConfiguration instance when planning to use Apify Proxy.
      Parameters: None explicitly mentioned, but implies internal configuration based on environment/defaults.
      Notes: All other options in ProxyConfigurationOptions are used to configure Apify Proxy.
```

--------------------------------

### Migrate Apify Event Handling to Actor.on (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet illustrates the change in event handling from the deprecated `Apify.events` to the new `Actor.on()` method. It highlights the updated syntax for subscribing to events within the Apify SDK, aligning with the `EventManager` class.

```JavaScript
-Apify.events.on(...);
+Actor.on(...);
```

--------------------------------

### Apify.utils Namespace and enqueueLinks() Function Overview

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

Introduces the `Apify.utils` namespace as a collection of helpful functions and constants within the Apify SDK. Specifically highlights `Apify.utils.enqueueLinks()` as a utility that simplifies and encapsulates the process of enqueuing new requests, providing a more efficient alternative to manual link extraction and filtering.

```APIDOC
Apify.utils:
  Description: A namespace containing various helpful functions and constants for Apify SDK.

  Functions:
    enqueueLinks():
      Description: Encapsulates the entire process of extracting links from a page, filtering them (e.g., by domain), and adding them to the RequestQueue. Simplifies common link enqueuing patterns.
      Usage: Provides a single function call to handle link discovery and enqueuing, reducing boilerplate code.
```

--------------------------------

### Programmatically Run Apify Actor and Fetch Results

Source: https://docs.apify.com/actor/quick-start

This snippet demonstrates how to programmatically start an Apify Actor and retrieve its results using the Apify client libraries. It covers initializing the client with an API token, calling an Actor, waiting for its completion, and fetching items from its default dataset. The call() function internally uses the Run Actor API endpoint.

```JavaScript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'MY-API-TOKEN',
});

// Start the Google Maps Scraper Actor and wait for it to finish.
const actorRun = await client.actor('compass/crawler-google-places').call({
    queries: 'apify',
});
// Fetch scraped results from the Actor's dataset.
const { items } = await client.dataset(actorRun.defaultDatasetId).listItems();
console.dir(items);
```

```Python
from apify_client import ApifyClient

apify_client = ApifyClient('MY-API-TOKEN')

# Start the Google Maps Scraper Actor and wait for it to finish.
actor_run = apify_client.actor('compass/crawler-google-places').call(
    run_input={ 'queries': 'apify' }
)

# Fetch scraped results from the Actor's dataset.
dataset_items = apify_client.dataset(actor_run['defaultDatasetId']).list_items().items
print(dataset_items)
```

--------------------------------

### Run CheerioCrawler with Actor.main() on Apify

Source: https://docs.apify.com/sdk/js/docs/next/guides/apify-platform

This snippet demonstrates how to run a `CheerioCrawler` on the Apify platform by wrapping the crawler logic within `Actor.main()`. This function handles the actor's initialization and exit automatically, simplifying the setup for web scraping tasks. The example shows request handling, link enqueuing, and saving extracted data to the dataset.

```javascript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.main(async () => {
    const crawler = new CheerioCrawler({
        async requestHandler({ request, $, enqueueLinks }) {
            const { url } = request;

            // Extract HTML title of the page.
            const title = $('title').text();
            console.log(`Title of ${url}: ${title}`);

            // Add URLs that match the provided pattern.
            await enqueueLinks({
                globs: ['https://www.iana.org/*'],
            });

            // Save extracted data to dataset.
            await Actor.pushData({ url, title });
        },
    });

    // Enqueue the initial request and run the crawler
    await crawler.run(['https://www.iana.org/']);
});
```

--------------------------------

### Deprecated Usage of gotoFunction in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This example demonstrates the deprecated `gotoFunction` in `Apify.PuppeteerCrawler`. It shows how users previously had to manually manage pre-processing, the `gotoExtended` call with its defaults, and post-processing within a single function, which could be complex.

```JavaScript
const gotoFunction = async ({ request, page }) => {
    // pre-processing
    await makePageStealthy(page);

    // Have to remember how to do this:
    const response = await gotoExtended(page, request, {
        /* have to remember the defaults */
    });

    // post-processing
    await page.evaluate(() => {
        window.foo = 'bar';
    });

    // Must not forget!
    return response;
};

const crawler = new Apify.PuppeteerCrawler({
    gotoFunction,
    // ...
});
```

--------------------------------

### Install Apify SDK for Node.js

Source: https://docs.apify.com/academy/deploying-your-code/inputs-outputs

Installs the Apify SDK package using npm, a prerequisite for developing Apify Actors in Node.js. This command should be run in your project's terminal.

```Shell
npm install apify
```

--------------------------------

### Crawl All Links with CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/3.3/examples/crawl-relative-links

Demonstrates using `CheerioCrawler` with `enqueueLinks()` and the 'all' strategy to process and enqueue all found links. It initializes an Apify Actor, configures the crawler with a `maxRequestsPerCrawl` limit for demonstration, logs the current request URL, and enqueues new links. The example starts crawling from 'https://apify.com/'.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        await enqueueLinks({
            // Setting the strategy to 'all' will enqueue all links found
            strategy: 'all',
        });
    },
});

// Run the crawler
await crawler.run(['https://apify.com/']);

await Actor.exit();
```

--------------------------------

### Retrieve All Listeners for an Event

Source: https://docs.apify.com/sdk/js/reference/next/class/Logger

Shows how to use the `listeners` method to get an array containing all listener functions currently registered for a specified event name on an EventEmitter instance. The example uses a server connection event.

```APIDOC
Method: listeners(eventName): Function[]
Inherited From: EventEmitter.listeners
Description: Returns a copy of the array of listeners for the event named `eventName`.
Parameters:
  eventName: string | symbol
Returns: Function[]
```

```JavaScript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### Node.js EventEmitter: Get Raw Listeners

Source: https://docs.apify.com/sdk/js/reference/class/LoggerText

Documents the rawListeners method of Node.js EventEmitter, which returns a copy of the array of listeners for a given event name, including wrappers. The example demonstrates how to access and invoke original listeners from the returned array.

```APIDOC
rawListeners(eventName): Function[]
Inherited from Logger.rawListeners
Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

Parameters:
  eventName: string | symbol

Returns: Function[]

@since: v9.4.0
```

```JavaScript
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

--------------------------------

### Apify SDK Actor Class Overview

Source: https://docs.apify.com/sdk/js/reference/changelog

Documentation for the `Actor` class in the Apify SDK, which centralizes various helper functions for interacting with the Apify platform. It provides shortcuts for `ApifyClient`, platform execution helpers, storage management, event handling, and other utilities.

```APIDOC
Actor Class:
  Description: Centralized class for Apify SDK helpers.
  Static Methods:
    ApifyClient Shortcuts:
      addWebhook(): Shortcut for ApifyClient.addWebhook()
      call(): Shortcut for ApifyClient.actor(actorId).call()
      callTask(): Shortcut for ApifyClient.task(taskId).call()
      metamorph(): Shortcut for ApifyClient.task(taskId).metamorph()
    Platform Helpers:
      init(): Initializes actor, sets storage, subscribes to events.
      exit(statusMessage?: string): Handles teardown, calls process.exit().
      fail(): Marks actor as failed.
      main(userFunction: Function, options?: object): Wrapper for init() and exit().
      isAtHome(): Checks if running on Apify platform.
      createProxyConfiguration(): Creates proxy configuration.
    Storage Support:
      getInput(): Gets actor input.
      getValue(key: string): Gets value from default Key-Value Store.
      openDataset(name?: string): Opens a Dataset.
      openKeyValueStore(name?: string): Opens a Key-Value Store.
      openRequestQueue(name?: string): Opens a Request Queue.
      pushData(data: object | object[]): Pushes data to default Dataset.
      setValue(key: string, value: any, options?: object): Sets value in default Key-Value Store.
    Events Support:
      on(eventName: string, listener: Function): Subscribes to events.
      off(eventName: string, listener: Function): Unsubscribes from events.
    Other Utilities:
      getEnv(): Gets environment variables.
      newClient(): Creates a new ApifyClient instance.
      reboot(): Reboots the actor.
```

--------------------------------

### Example Usage of getMaxListeners and setMaxListeners

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Logger

Shows how to get and set the maximum number of listeners for both EventEmitter and EventTarget instances using the static methods from 'node:events'. It demonstrates retrieving the default limit and then updating it.

```JavaScript
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

--------------------------------

### Apify SDK Request Management Classes

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

Details the core classes for managing web requests in Apify SDK crawlers: Request, RequestList, and RequestQueue. Explains how Request objects define individual URLs, RequestList manages static, pre-defined lists of URLs, and RequestQueue handles dynamic, runtime-updatable queues of URLs, both being essential for supplying pages to crawlers.

```APIDOC
Request:
  Purpose: Represents a single web page to open.
  Properties:
    url: string (required) - The web page URL.
    (may hold other information)

RequestList:
  Purpose: Represents a static, immutable list of Requests.
  Usage:
    - For pre-existing lists of URLs.
    - Processes requests one by one, retrying on errors.
    - Finishes when no more Requests are left.

RequestQueue:
  Purpose: Represents a dynamic queue of Requests.
  Usage:
    - Can be updated at runtime by adding more pages (enqueuing).
    - Allows building large queues dynamically by extracting URLs from processed pages.

Relationship:
  - All crawlers use Request instances.
  - At least one of RequestList or RequestQueue must be provided to crawlers.
  - Both can be used simultaneously.
```

--------------------------------

### Define AWS Bedrock Agent Instructions

Source: https://docs.apify.com/platform/integrations/aws_bedrock

Example instructions for an AWS Bedrock AI agent, guiding its behavior and tone, and emphasizing the use of RAG Web Browser for search results. These instructions help the agent understand its role and how to interact with users and external tools.

```Plain Text
You are a smart and helpful assistant.
Answer question based on the search results.
Use an expert, friendly, and informative tone
Always use RAG Web Browser if you need to retrieve the
latest search results and answer questions.
```

--------------------------------

### Run Apify Actor Asynchronously and Stream Logs

Source: https://docs.apify.com/api/client/python/docs/concepts/asyncio-support

This Python example demonstrates how to use `ApifyClientAsync` to start an Apify Actor, retrieve its run ID, and then asynchronously stream its logs in real-time. It showcases non-blocking I/O operations using `asyncio` for efficient API interaction.

```Python
import asyncio

from apify_client import ApifyClientAsync

TOKEN = 'MY-APIFY-TOKEN'

async def main() -> None:
    apify_client = ApifyClientAsync(TOKEN)
    actor_client = apify_client.actor('my-actor-id')

    # Start the Actor and get the run ID
    run_result = await actor_client.start()
    run_client = apify_client.run(run_result['id'])
    log_client = run_client.log()

    # Stream the logs
    async with log_client.stream() as async_log_stream:
        if async_log_stream:
            async for line in async_log_stream.aiter_lines():
                print(line)

if __name__ == '__main__':
    asyncio.run(main())
```

--------------------------------

### Apify.main Function Execution Examples

Source: https://docs.apify.com/sdk/js/docs/2.3/api/apify

Demonstrates how to use Apify.main with synchronous, promise-based asynchronous, and async/await asynchronous user functions.

```JavaScript
Apify.main(() => {
    // My synchronous function that returns immediately
    console.log('Hello world from actor!');
});
```

```JavaScript
const { requestAsBrowser } = require('some-request-library');

Apify.main(() => {
    // My asynchronous function that returns a promise
    return request('http://www.example.com').then((html) => {
        console.log(html);
    });
});
```

```JavaScript
const request = require('some-request-library');

Apify.main(async () => {
    // My asynchronous function
    const html = await request('http://www.example.com');
    console.log(html);
});
```

--------------------------------

### Apify Actor Request Routing Handlers (routes.js)

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This `routes.js` file defines specific handlers for different types of requests processed by the Apify actor. It includes the `CATEGORY` handler for enqueuing new links and the `DETAIL` handler for extracting and pushing data from individual item pages to the dataset. This separation improves maintainability of scraping logic.

```JavaScript
// routes.js
const Apify = require('apify');
const {
    utils: { log },
} = Apify;

exports.CATEGORY = async ({ $, request }, { requestQueue }) => {
    return Apify.utils.enqueueLinks({
        $,
        requestQueue,
        selector: 'div.item > a',
        baseUrl: request.loadedUrl,
        transformRequestFunction: (req) => {
            req.userData.label = 'DETAIL';
            return req;
        },
    });
};

exports.DETAIL = async ({ $, request }) => {
    const urlArr = request.url.split('/').slice(-2);

    log.debug('Scraping results.');
    const results = {
        url: request.url,
        uniqueIdentifier: urlArr.join('/'),
        owner: urlArr[0],
        title: $('header h1').text(),
        description: $('header span.actor-description').text(),
        modifiedDate: new Date(
            Number($('ul.ActorHeader-stats time').attr('datetime')),
        ),
        runCount: Number(
            $('ul.ActorHeader-stats > li:nth-of-type(3)')
                .text()
                .match(/[\d,]+/)[0]
                .replace(',', ''),
        ),
    };

    log.debug('Pushing data to dataset.');
    await Apify.pushData(results);
};
```

--------------------------------

### Apify Log Level Configuration and Usage Example

Source: https://docs.apify.com/sdk/js/docs/2.3/api/log

This JavaScript example demonstrates how to initialize and use the Apify `log` utility. It shows setting different log levels (INFO, DEBUG, ERROR), logging various message types, handling exceptions, and applying log prefixes for better message organization. It illustrates how messages are filtered based on the current log level.

```JavaScript
const Apify = require('apify');
const { log } = Apify.utils;

log.info('Information message', { someData: 123 }); // prints message
log.debug('Debug message', { debugData: 'hello' }); // doesn't print anything

log.setLevel(log.LEVELS.DEBUG);
log.debug('Debug message'); // prints message

log.setLevel(log.LEVELS.ERROR);
log.debug('Debug message'); // doesn't print anything
log.info('Info message'); // doesn't print anything

log.error('Error message', { errorDetails: 'This is bad!' }); // prints message
try {
    throw new Error('Not good!');
} catch (e) {
    log.exception(e, 'Exception occurred', {
        errorDetails: 'This is really bad!',
    }); // prints message
}

log.setOptions({ prefix: 'My actor' });
log.info('I am running!'); // prints "My actor: I am running"

const childLog = log.child({ prefix: 'Crawler' });
log.info('I am crawling!'); // prints "My actor:Crawler: I am crawling"
```

--------------------------------

### Install Node.js Type Declarations

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/type-script-actor

This command installs the `@types/node` package as a development dependency. These type declarations provide type-checking capabilities for Node.js features, enhancing development experience and catching potential errors early.

```shell
npm install --dev @types/node
```

--------------------------------

### API Change: `decodeBody` to `decompress`

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This API documentation describes the renaming of the 'decodeBody' option to 'decompress'. This option is responsible for decompressing the response body. Its default value is 'true', and it is generally advised not to change it unless you fully understand the implications.

```APIDOC
Option: `decodeBody` (old) -> `decompress` (new)
Purpose: Controls whether the response body is decompressed.
Default: `true`.
Note: Changing this default can break websites unless you know what you're doing!
```

--------------------------------

### Install Python Dependencies for Apify and OpenAI

Source: https://docs.apify.com/platform/integrations/openai-assistants

This snippet installs the necessary Python libraries, `apify-client` and `openai`, required to interact with the Apify API and OpenAI API respectively.

```Python
pip install apify-client openai
```

--------------------------------

### Example of a Matching Pseudo URL

Source: https://docs.apify.com/tutorials/apify-scrapers/getting-started

This URL demonstrates a valid match for the defined Pseudo URL pattern `https://apify.com/[.+]/[.+]/`, indicating how dynamic parts of the URL are successfully recognized.

```Text
https://apify.com/apify/web-scraper\n
```

--------------------------------

### Install Apify CLI Globally

Source: https://docs.apify.com/cli

This command uses npm to install the Apify command-line interface globally on your system. A global installation allows you to run `apify` commands from any directory in your terminal.

```bash
npm i -g apify-cli
```

--------------------------------

### Batch Request Handling with crawler.addRequests in JavaScript

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

The `addRequests` method allows enqueuing multiple requests in batches, improving performance by resolving quickly after an initial batch while continuing in the background. It helps avoid API rate limits and provides a `waitForAllRequestsToBeAdded` promise for full completion.

```JavaScript
// will resolve right after the initial batch of 1000 requests is added
const result = await crawler.addRequests([
    /* many requests, can be even millions */
]);

// if we want to wait for all the requests to be added, we can await the `waitForAllRequestsToBeAdded` promise
await result.waitForAllRequestsToBeAdded;
```

--------------------------------

### Recommended: Customizing Browser Launch with `preLaunchHooks`

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

Illustrates how to replace `launchPuppeteerFunction` with `preLaunchHooks` within `browserPoolOptions`. This new approach provides a more flexible and consistent way to modify the `launchContext` before browser instantiation, aligning with `browser-pool` lifecycle hooks.

```JavaScript
const maybeLaunchChrome = (pageId, launchContext) => {
    if (someVariable === 'chrome') {
        launchContext.useChrome = true;
    }
};

const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        preLaunchHooks: [maybeLaunchChrome]
    },
    // ...
});
```

--------------------------------

### Log in to Apify Platform using Apify CLI

Source: https://docs.apify.com/sdk/js/docs/3.2/guides/apify-platform

This command-line snippet demonstrates how to install the Apify CLI globally and then log in to your Apify account using your API token. Once logged in, the CLI automatically provides your credentials to your scrapers, enabling access to Apify platform features such as cloud storages and proxies.

```Bash
npm install -g apify-cli
apify login -t YOUR_API_TOKEN
```

--------------------------------

### Example Apify Proxy External Connection String

Source: https://docs.apify.com/platform/proxy/usage

Illustrates a concrete example of an Apify Proxy connection string for external access, demonstrating the use of a specific username, password, hostname, and port.

```HTTP
http://auto:{{APIFY_PROXY_PASSWORD}}@proxy.apify.com:8000
```

--------------------------------

### Manage Multiple Actor Inputs with Tasks using JavaScript Client

Source: https://docs.apify.com/api/client/js/docs/next/examples

This example illustrates how to handle multiple inputs for the same Apify Actor by creating and managing tasks. It shows how to programmatically create multiple tasks with different inputs, persist them on the Apify platform, and then run them in parallel using the JavaScript client.

```JavaScript
import { ApifyClient } from 'apify-client';

// Client initialization with the API token
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });

const animalsHashtags = ['zebra', 'lion', 'hippo'];

// Multiple input schemas for one Actor can be persisted in tasks.
// Tasks are saved in the Apify platform and can be run multiple times.
const socialsTasksPromises = animalsHashtags.map((hashtag) =>
    client.tasks().create({
        actId: 'apify/instagram-hashtag-scraper',
        name: `hashtags-${hashtag}`,
        input: { hashtags: [hashtag], resultsLimit: 20 },
        options: { memoryMbytes: 1024 }
    }),
);

// Create all tasks in parallel
const createdTasks = await Promise.all(socialsTasksPromises);

console.log('Created tasks:');
console.log(createdTasks);

// Run all tasks in parallel
await Promise.all(createdTasks.map((task) => client.task(task.id).call()));
```

--------------------------------

### Crawlee Renamed Options and Interfaces

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This section documents the renaming of various options and interfaces within Crawlee to improve clarity and consistency. It lists old parameter names and their new equivalents, as well as old and new crawling context interface names. While old names are still supported, new development should use the updated naming conventions.

```APIDOC
Crawler Options Renaming:
- handleRequestFunction -> requestHandler
- handlePageFunction -> requestHandler
- handleRequestTimeoutSecs -> requestHandlerTimeoutSecs
- handlePageTimeoutSecs -> requestHandlerTimeoutSecs
- requestTimeoutSecs -> navigationTimeoutSecs
- handleFailedRequestFunction -> failedRequestHandler

Crawling Context Interface Renaming:
- CheerioHandlePageInputs -> CheerioCrawlingContext
- PlaywrightHandlePageFunction -> PlaywrightCrawlingContext
- PuppeteerHandlePageFunction -> PuppeteerCrawlingContext
```

--------------------------------

### Crawl Website Links with CheerioCrawler and PseudoURLs

Source: https://docs.apify.com/sdk/js/docs/3.1/examples/crawl-some-links

This JavaScript example demonstrates how to initialize a CheerioCrawler to crawl a website. It limits the number of requests and uses `pseudoUrls` with a regular expression to filter and enqueue only specific links from the crawled pages into the RequestQueue. The crawler starts from a defined URL and exits upon completion.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

// Create a CheerioCrawler
const crawler = new CheerioCrawler({
    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)
    maxRequestsPerCrawl: 10,
    // Function called for each URL
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        // Add some links from page to the crawler's RequestQueue
        await enqueueLinks({
            pseudoUrls: ['http[s?]://apify.com/[.+]/[.+]'],
        });
    },
});

// Define the starting URL and run the crawler
await crawler.run(['https://apify.com/store']);

await Actor.exit();
```

--------------------------------

### Default package.json for Apify Node.js Actors

Source: https://docs.apify.com/platform/actors/development/actor-definition/dockerfile

This `package.json` defines the metadata and scripts for an Apify Node.js Actor. It specifies `main.js` as the entry point and includes `apify` and `crawlee` as dependencies. The `start` script executes `node main.js`.

```JSON
{
    "description": "Anonymous Actor on the Apify platform",
    "version": "0.0.1",
    "license": "UNLICENSED",
    "main": "main.js",
    "scripts": {
        "start": "node main.js"
    },
    "dependencies": {
        "apify": "^3.0.0",
        "crawlee": "^3.0.0"
    },
    "repository": {}
}
```

--------------------------------

### Actor.main JavaScript Examples

Source: https://docs.apify.com/sdk/js/reference/next/class/Actor

Provides various JavaScript examples demonstrating how to use the `Actor.main` method for both synchronous and asynchronous user functions, including promise-based and async/await patterns.

```JavaScript
await Actor.main(() => {
  // My synchronous function that returns immediately
  console.log('Hello world from Actor!');
});
```

```JavaScript
import { gotScraping } from 'got-scraping';

await Actor.main(() => {
  // My asynchronous function that returns a promise
  return gotScraping('http://www.example.com').then((html) => {
    console.log(html);
  });
});
```

```JavaScript
import { gotScraping } from 'got-scraping';

await Actor.main(async () => {
  // My asynchronous function
  const html = await gotScraping('http://www.example.com');
  console.log(html);
});
```

--------------------------------

### Run Apify Actor Locally using CLI

Source: https://docs.apify.com/academy/getting-started/creating-actors

These commands navigate into the newly created Actor project directory and then execute the 'apify run' command. This command starts the Actor locally, allowing developers to test and debug their code in their local environment.

```Bash
cd my-actor
apify run
```

--------------------------------

### Verify Node.js and NPM Installation

Source: https://docs.apify.com/cli/docs/next/installation

Checks the currently installed versions of Node.js and Node Package Manager (NPM) on your system. Node.js version 18 or higher is required for Apify CLI.

```bash
node --version
npm --version
```

--------------------------------

### Apify ProxyConfiguration API Documentation

Source: https://docs.apify.com/sdk/js/reference/next/class/ProxyConfiguration

This section provides detailed API documentation for the `initialize`, `newProxyInfo`, and `newUrl` methods of the Apify ProxyConfiguration. It covers their purpose, parameters, return types, and usage notes for managing proxy settings.

```APIDOC
initialize(): Promise<boolean>
  Description: Loads proxy password if token is provided and checks access to Apify Proxy and provided proxy groups if Apify Proxy configuration is used. Also checks if country has access to Apify Proxy groups if the country code is provided. You should use the createProxyConfiguration function to create a pre-initialized ProxyConfiguration instance instead of calling this manually.
  Returns: Promise<boolean>

newProxyInfo(sessionId: string | number, options: TieredProxyOptions): Promise<undefined | ProxyInfo>
  Description: Overrides CoreProxyConfiguration.newProxyInfo. This function creates a new ProxyInfo info object. It is used by CheerioCrawler and PuppeteerCrawler to generate proxy URLs and also to allow the user to inspect the currently used proxy via the requestHandler parameter proxyInfo. Use it if you want to work with a rich representation of a proxy URL. If you need the URL string only, use ProxyConfiguration.newUrl.
  Parameters:
    sessionId: string | number (optional)
      Description: Represents the identifier of user Session that can be managed by the SessionPool or you can use the Apify Proxy Session identifier. When the provided sessionId is a number, it's converted to a string. Property sessionId of ProxyInfo is always returned as a type string. All the HTTP requests going through the proxy with the same session identifier will use the same target proxy server (i.e. the same IP address). The identifier must not be longer than 50 characters and include only the following: `0-9`, `a-z`, `A-Z`, ".", "_", and "~".
    options: TieredProxyOptions (optional)
  Returns: Promise<undefined | ProxyInfo>
    Description: Represents information about used proxy and its configuration.

newUrl(sessionId: string | number, options: TieredProxyOptions): Promise<undefined | string>
  Description: Overrides CoreProxyConfiguration.newUrl. Returns a new proxy URL based on provided configuration options and the sessionId parameter.
  Parameters:
    sessionId: string | number (optional)
      Description: Represents the identifier of user Session that can be managed by the SessionPool or you can use the Apify Proxy Session identifier. When the provided sessionId is a number, it's converted to a string. All the HTTP requests going through the proxy with the same session identifier will use the same target proxy server (i.e. the same IP address). The identifier must not be longer than 50 characters and include only the following: `0-9`, `a-z`, `A-Z`, ".", "_", and "~".
    options: TieredProxyOptions (optional)
  Returns: Promise<undefined | string>
    Description: A string with a proxy URL, including authentication credentials and port number. For example, `http://bob:password123@proxy.example.com:8000`
```

--------------------------------

### Run CheerioCrawler with Actor.init() and Actor.exit() on Apify

Source: https://docs.apify.com/sdk/js/docs/next/guides/apify-platform

This snippet shows an alternative method to run a `CheerioCrawler` on the Apify platform by explicitly calling `Actor.init()` at the start and `Actor.exit()` at the end of the script. This approach provides granular control over the actor's lifecycle. The code performs similar crawling, link enqueuing, and data saving operations as the `Actor.main()` example.

```javascript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    async requestHandler({ request, $, enqueueLinks }) {
        const { url } = request;

        // Extract HTML title of the page.
        const title = $('title').text();
        console.log(`Title of ${url}: ${title}`);

        // Add URLs that match the provided pattern.
        await enqueueLinks({
            globs: ['https://www.iana.org/*'],
        });

        // Save extracted data to dataset.
        await Actor.pushData({ url, title });
    },
});

// Enqueue the initial request and run the crawler
await crawler.run(['https://www.iana.org/']);

await Actor.exit();
```

--------------------------------

### Python HTTP Server Integration with Apify Actor

Source: https://docs.apify.com/sdk/python/docs/concepts/running-webserver

This Python code defines a RequestHandler for basic GET requests, a run_server function to start the HTTP server in a separate thread, and a main async function that orchestrates the server's startup, simulates work, and handles its graceful shutdown within the Apify Actor's context. It demonstrates how to expose dynamic data via a simple web endpoint.

```python
class RequestHandler(BaseHTTPRequestHandler):
    def do_get(self) -> None:
        self.log_request()
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(f'Processed items: {processed_items}', encoding='utf-8'))

def run_server() -> None:
    # Start the HTTP server on the provided port,
    # and save a reference to the server.
    global http_server
    with ThreadingHTTPServer(
        ('', Actor.config.web_server_port), RequestHandler
    ) as server:
        Actor.log.info(f'Server running on {Actor.config.web_server_port}')
        http_server = server
        server.serve_forever()

async def main() -> None:
    global processed_items
    async with Actor:
        # Start the HTTP server in a separate thread.
        run_server_task = asyncio.get_running_loop().run_in_executor(None, run_server)

        # Simulate doing some work.
        for _ in range(100):
            await asyncio.sleep(1)
            processed_items += 1
            Actor.log.info(f'Processed items: {processed_items}')

        if http_server is None:
            raise RuntimeError('HTTP server not started')

        # Signal the HTTP server to shut down, and wait for it to finish.
        http_server.shutdown()
        await run_server_task
```

--------------------------------

### Defining a Page Handling Function for CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet defines `handlePageFunction`, a crucial component for `CheerioCrawler`. It demonstrates how to access the `request` object and the `$` (Cheerio) object, which is used to select and extract text content from HTML elements, such as the page title.

```javascript
// We'll define the function separately so it's more obvious.
const handlePageFunction = async ({ request, $ }) => {
    // This should look familiar if you ever worked with jQuery.
    // We're just getting the text content of the <title> HTML element.
    const title = $('title').text();

    console.log(`The title of "${request.url}" is: ${title}.`);
};
```

--------------------------------

### Apify SDK Actor Class Static Helpers Overview

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

This section provides an overview of the static helper methods available on the `Actor` class in the Apify SDK. These methods offer shortcuts for `ApifyClient` operations, platform-specific helpers, storage interactions, event management, and general utilities essential for building Apify Actors.

```APIDOC
Actor class static helpers:
  ApifyClient shortcuts:
    addWebhook()
    call()
    callTask()
    metamorph()
  Platform helpers:
    init()
    exit()
    fail()
    main()
    isAtHome()
    createProxyConfiguration()
  Storage support:
    getInput()
    getValue()
    openDataset()
    openKeyValueStore()
    openRequestQueue()
    pushData()
    setValue()
  Events support:
    on()
    off()
  Other utilities:
    getEnv()
    newClient()
    reboot()
```

--------------------------------

### Log in to Apify Cloud with CLI

Source: https://docs.apify.com/cli/docs/next/installation

This command allows users to authenticate with their Apify account from the command line. It prompts for an Apify API token, which is then stored locally for future interactions with the Apify cloud.

```Bash
apify login
```

--------------------------------

### Install Apify SDK and Crawlee with npm

Source: https://docs.apify.com/sdk/js/reference

This command installs the Apify SDK, the Crawlee module (which now provides crawling functionalities), and the Playwright browser automation library using npm. Node.js version 16 or later is required for compatibility. Users can choose to install Playwright, Puppeteer, or neither based on their specific needs.

```Shell
npm install apify crawlee playwright
```

--------------------------------

### Install TypeScript Compiler for Development

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/type-script-actor

This command installs the TypeScript compiler (`tsc`) as a development dependency in your project. It ensures that TypeScript is available for compilation without polluting the global environment or system's global repository.

```shell
npm install --dev typescript
```

--------------------------------

### Basic Apify Actor Example with HTTPX and BeautifulSoup (Python)

Source: https://docs.apify.com/sdk/python/docs/overview/introduction

This code snippet demonstrates a fundamental Apify Actor written in Python. It initializes an Actor, retrieves input data (specifically a URL), uses 'httpx' to perform an asynchronous HTTP GET request, parses the response content with 'BeautifulSoup' to extract the page title, and finally pushes the structured data to the Apify platform.

```Python
import httpx
from bs4 import BeautifulSoup

from apify import Actor

async def main() -> None:
    async with Actor:
        actor_input = await Actor.get_input()
        async with httpx.AsyncClient() as client:
            response = await client.get(actor_input['url'])
        soup = BeautifulSoup(response.content, 'html.parser')
        data = {
            'url': actor_input['url'],
            'title': soup.title.string if soup.title else None,
        }
        await Actor.push_data(data)
```

--------------------------------

### Crawlee Integration and Full TypeScript Support

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

Apify SDK v3.0.0 introduces integration with Crawlee and provides full TypeScript support, enhancing development experience and type safety.

```APIDOC
Feature: Crawlee Integration\nFeature: Full TypeScript Support\n  Impact: Improved type safety and development experience
```

--------------------------------

### Node.js EventEmitter: Get Raw Listeners

Source: https://docs.apify.com/sdk/js/reference/class/LoggerJson

Documents the `rawListeners` method, which returns a copy of the array of listeners for a given event name, including any wrappers. The example demonstrates how to use `rawListeners` to inspect event listeners, including those added with `once()`, and how to invoke the original listener or the wrapper.

```APIDOC
rawListeners(eventName): Function[]
Inherited from Logger.rawListeners
Description: Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).
Parameters:
  eventName: string | symbol
Returns: Function[]
Since: v9.4.0
```

```JavaScript
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

--------------------------------

### Document Apify ActorStartOptions Interface

Source: https://docs.apify.com/api/client/js/reference/next/interface/ActorStartOptions

This snippet documents the `ActorStartOptions` interface, which defines the configuration parameters for starting an Apify actor run. It includes details on optional properties like `build` (actor build tag), `contentType` (input content type), `maxItems` (maximum results), and `memory` (allocated memory).

```APIDOC
ActorStartOptions:
  build?: string
    Tag or number of the actor build to run (e.g. `beta` or `1.2.345`).
    If not provided, the run uses build tag or number from the default actor run configuration (typically `latest`).
  contentType?: string
    Content type for the `input`. If not specified,
    `input` is expected to be an object that will be stringified to JSON and content type set to
    `application/json; charset=utf-8`. If `options.contentType` is specified, then `input` must be a
    `String` or `Buffer`.
  maxItems?: number
    Specifies maximum number of items that the actor run should return.
    This is used by pay per result actors to limit the maximum number of results that will be charged to customer.
    Value can be accessed in actor run using `ACTOR_MAX_PAID_DATASET_ITEMS` environment variable.
  memory?: number
    Memory in megabytes which will be allocated for the new actor run.
    If not provided, the run uses memory of the default actor run configuration.
```

--------------------------------

### JavaScript: Execute Apify Task via API with Axios and Save Output

Source: https://docs.apify.com/academy/expert-scraping-with-apify/solutions/using-api-and-client

This complete example shows how to make a POST request to the Apify API endpoint using the `axios` library to execute a task. It constructs the full API URL with query parameters using `URLSearchParams` and saves the returned data to the key-value store. Remember to install `axios` if using this approach.

```JavaScript
const withAPI = async () => {
    const uri = `https://api.apify.com/v2/actor-tasks/${TASK}/run-sync-get-dataset-items?`;
    const url = new URL(uri);

    url.search = new URLSearchParams({
        memory,
        format: 'csv',
        limit: maxItems,
        fields: fields.join(','),
        token: process.env.APIFY_TOKEN,
    });

    const { data } = await axios.post(url.toString());

    return Actor.setValue('OUTPUT', data, { contentType: 'text/csv' });
};
```

--------------------------------

### Multi-stage Dockerfile Example for Node.js TypeScript Actor

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/docker-images

This Dockerfile demonstrates a multi-stage build process for an Apify actor written in Node.js with TypeScript. The first stage builds the TypeScript project, and the second stage copies only the compiled JavaScript files and installs production dependencies, resulting in a smaller final image.

```Dockerfile
# Specify the base Docker image. You can read more about
# the available images at https://crawlee.dev/docs/guides/docker-images
# You can also use any other image from Docker Hub.
FROM apify/actor-node:16 AS builder

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install all dependencies. Don't audit to speed up the installation.
RUN npm install --include=dev --audit=false

# Next, copy the source files using the user set
# in the base image.
COPY . ./

# Install all dependencies and build the project.
# Don't audit to speed up the installation.
RUN npm run build

# Create final image
FROM apify/actor-node:16

# Copy only built JS files from builder image
COPY --from=builder /usr/src/app/dist ./dist

# Copy just package.json and package-lock.json
# to speed up the build using Docker layer cache.
COPY package*.json ./

# Install NPM packages, skip optional and development dependencies to
# keep the image small. Avoid logging too much and print the dependency
# tree for debugging
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Next, copy the remaining files and directories with the source code.
# Since we do this after NPM install, quick build will be really fast
# for most source file changes.
COPY . ./

# Run the image.
CMD npm run start:prod --silent
```

--------------------------------

### Example Usage of getEventListeners

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Logger

Illustrates how to retrieve event listeners for both EventEmitter and EventTarget instances using the static 'getEventListeners' method from 'node:events'. It shows how to get the array of registered listener functions for a given event.

```JavaScript
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

--------------------------------

### Configuring BrowserPool Lifecycle Hooks in PuppeteerCrawler

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This example shows how to configure browserPoolOptions within a PuppeteerCrawler instance to utilize lifecycle hooks. It specifically demonstrates a preLaunchHook that modifies launch options based on request userData, allowing for conditional headless mode.

```JavaScript
const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        retireBrowserAfterPageCount: 10,
        preLaunchHooks: [
            async (pageId, launchContext) => {
                const { request } = crawler.crawlingContexts.get(pageId);
                if (request.userData.useHeadful === true) {
                    launchContext.launchOptions.headless = false;
                }
            },
        ],
    },
});
```

--------------------------------

### Install Python Dependencies from requirements.txt

Source: https://docs.apify.com/sdk/python/docs/overview/running-actors-locally

This command uses pip, Python's package installer, to install all dependencies listed in the `requirements.txt` file. It should be run after activating the virtual environment to ensure packages are installed correctly within the project's isolated environment.

```Shell
python -m pip install -r requirements.txt
```

--------------------------------

### Apify Client: Webhooks Method and Common Properties

Source: https://docs.apify.com/api/client/js/reference/2.8/class/ActorClient

Details the `webhooks()` method which returns a `WebhookCollectionClient`, and lists common properties and methods available across Apify client instances such as `apifyClient`, `baseUrl`, `build()`, `delete()`, `get()`, `start()`, and `update()`.

```APIDOC
WebhookCollectionClient:
  webhooks():
    Description: Returns a client for managing webhook collections.
    Returns: WebhookCollectionClient

Common Client Properties/Methods:
  Properties:
    apifyClient: Client instance
    baseUrl: Base URL for API requests
    httpClient: HTTP client instance
    id: Resource ID
    params: Request parameters
    resourcePath: Path to the resource
    safeId: Safe resource ID
    url: Full resource URL
  Methods:
    build(): Build a resource
    builds(): Get resource builds
    call(): Call a resource
    delete(): Delete a resource
    get(): Get resource details
    lastRun(): Get the last run of a resource
    runs(): Get resource runs
    start(): Start a resource
    update(): Update a resource
    version(): Get resource version
    versions(): Get resource versions
    webhooks(): Get webhooks associated with the resource
```

--------------------------------

### Install Apify SDK, Crawlee, and Playwright with npm

Source: https://docs.apify.com/sdk/js/reference/3

This command installs the Apify SDK, Crawlee, and Playwright packages using npm. Apify SDK provides core Actor functionalities, while Crawlee handles crawling. Playwright is installed as a browser automation tool, though it's not bundled with Crawlee by default, allowing flexibility in choosing browser drivers.

```Shell
npm install apify crawlee playwright
```

--------------------------------

### Web Scraping Code Templates Overview

Source: https://docs.apify.com/academy/actor-marketing-playbook/store-basics/how-to-build-actors

Compares Python and JavaScript web scraping code templates, highlighting supported libraries, purpose, pros, and cons for each, to guide users in selecting a flexible foundation for custom scraping solutions.

```APIDOC
Code Templates Comparison:
- Python:
  - Supported libraries: Requests, BeautifulSoup, Scrapy, Selenium, Playwright
  - Purpose: Creating scrapers, Automation, Testing tools
  - Pros: Simplifies setup, Supports major Python libraries
  - Cons: Requires more manual coding (than universal scrapers), May be restrictive for complex tasks
- JavaScript:
  - Supported libraries: Playwright, Selenium, Cheerio, Cypress, LangChain
  - Purpose: Creating scrapers, Automation, Testing tools
  - Pros: Eases development with pre-set configurations, Flexibility with JavaScript and TypeScript
  - Cons: Requires more manual coding (than universal scrapers), May be restrictive for tasks needing full control
```

--------------------------------

### Example JSON Input for Apify Actor API

Source: https://docs.apify.com/platform/actors/running/input-and-output

This JSON object represents the input parameters for an Apify Actor when run via the API. It specifies the maximum number of requests per crawl, proxy settings, and the starting URL for the Actor's operation. This input is equivalent to configuring the Actor through the Apify Console UI.

```JSON
{
    "maxRequestsPerCrawl": 10,
    "proxy": {
        "useApifyProxy": true
    },
    "startUrl": "https://apify.com"
}
```

--------------------------------

### Install Crawlee Meta-Package

Source: https://docs.apify.com/sdk/js/reference/next/changelog

Installs the main 'crawlee' meta-package from the 'next' distribution tag. This package re-exports most of the '@crawlee/*' packages, providing access to all core crawler classes and functionalities.

```bash
npm install crawlee@next
```

--------------------------------

### Apify SDK Smaller/Internal Breaking Changes Reference (APIDOC)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This API documentation lists various smaller and internal breaking changes introduced in the Apify SDK. It covers updates to `ApifyClient` shortcuts, storage purging behavior, `Request` object properties, environment variables, `AutoscaledPool` options, and `ProxyConfiguration` methods.

```APIDOC
Breaking Changes:
  Apify.call(): Shortcut for ApifyClient.actor(actorId).call(input, options) (considers env vars token)
  Apify.callTask(): Shortcut for ApifyClient.task(taskId).call(input, options) (considers env vars token)
  Apify.metamorph(): Shortcut for ApifyClient.task(taskId).metamorph(input, options) (considers ACTOR_RUN_ID env var)
  Apify.waitForRunToFinish(): Removed. Use ApifyClient.waitForFinish() instead.
  Actor.main/init: Purges storage by default (opt-out via { purge: false } in options).
  purgeLocalStorage helper: Removed. Purging moved to storage class directly.
    StorageClient interface: Now has optional 'purge' method.
  QueueOperationInfo.request: No longer available.
  Request.handledAt: Now string date in ISO format.
  Request.inProgress / Request.reclaimed: Now Set objects instead of POJOs.
  injectUnderscore from puppeteer utils: Removed.
  APIFY_MEMORY_MBYTES: No longer used. Use CRAWLEE_AVAILABLE_MEMORY_RATIO instead.
  AutoscaledPool options removed:
    cpuSnapshotIntervalSecs / memorySnapshotIntervalSecs: Replaced by top level systemInfoIntervalMillis configuration.
    maxUsedCpuRatio: Moved to top level configuration.
  ProxyConfiguration.newUrlFunction: Can be async.
    .newUrl() / .newProxyInfo(): Now return promises.
  prepareRequestFunction / postResponseFunction options: Removed. Use navigation hooks instead.
  gotoFunction / gotoTimeoutSecs: Removed.
  Compatibility fix for old/broken request queues with null Request props: Removed.
  fingerprintsOptions: Renamed to fingerprintOptions.
  fingerprintOptions: Now accept useFingerprintCache and fingerprintCacheSize (replaces useFingerprintPerProxyCache and fingerprintPerProxyCacheSize). Cached fingerprints no longer connected to proxy URLs but to sessions.
```

--------------------------------

### Define Apify Cheerio Crawler Input Schema

Source: https://docs.apify.com/actors/development/input-schema

Example of an Apify Actor input schema definition for a web crawler, specifying start URLs and a JavaScript page function. This schema is used to generate a user interface for input.

```JSON
{
    "title": "Cheerio Crawler input",
    "description": "To update crawler to another site, you need to change startUrls and pageFunction options!",
    "type": "object",
    "schemaVersion": 1,
    "properties": {
        "startUrls": {
            "title": "Start URLs",
            "type": "array",
            "description": "URLs to start with",
            "prefill": [
                { "url": "http://example.com" },
                { "url": "http://example.com/some-path" }
            ],
            "editor": "requestListSources"
        },
        "pageFunction": {
            "title": "Page function",
            "type": "string",
            "description": "Function executed for each request",
            "prefill": "async () => { return $('title').text(); }",
            "editor": "javascript"
        }
    },
    "required": ["startUrls", "pageFunction"]
}
```

--------------------------------

### Configuration Class Constructor

Source: https://docs.apify.com/sdk/js/reference/3.2/class/Configuration

Initializes a new Configuration instance. Options provided during instantiation are overridden by environment variables if both are present.

```APIDOC
Configuration:
  constructor(options?: ConfigurationOptions): Configuration
    Inherits from CoreConfiguration.constructor
    options: ConfigurationOptions (optional) - Options to configure the instance. Environment variables take precedence over these options.
```

--------------------------------

### Illustrate correct and incorrect autoscaledPool access in Apify SDK v1

Source: https://docs.apify.com/sdk/js/docs/3.3/upgrading/upgrading-to-v1

This example clarifies that `autoscaledPool` is no longer directly available on the `crawlingContext` object in Apify SDK v1. It must now be accessed via `crawlingContext.crawler.autoscaledPool`, demonstrating the correct usage pattern for this moved property.

```javascript
const handePageFunction = async (crawlingContext) => {
    crawlingContext.autoscaledPool; // does NOT exist anymore
    crawlingContext.crawler.autoscaledPool; // <= this is correct usage
};

```

--------------------------------

### Managing auto-saved crawler state with `useState`

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This snippet illustrates the use of the `useState()` method available on every crawler instance. It returns a state object that is automatically saved when a `persistState` event occurs, simplifying state management within crawlers.

```TypeScript
const crawler = new CheerioCrawler({
    async requestHandler({ crawler }) {
        const state = await crawler.useState({ foo: [] as number[] });
        // just change the value, no need to care about saving it
        state.foo.push(123);
    },
});
```

--------------------------------

### Initialize OpenAI and Apify API Clients

Source: https://docs.apify.com/platform/integrations/openai-assistants

This code initializes the OpenAI and Apify API clients using your respective API keys. Replace placeholders with your actual keys to establish connections for API calls.

```Python
from apify_client import ApifyClient
from openai import OpenAI

client = OpenAI(api_key="YOUR OPENAI API KEY")
apify_client = ApifyClient("YOUR APIFY API TOKEN")
```

--------------------------------

### Extracting Product Price by Removing 'From' Prefix (Python)

Source: https://docs.apify.com/academy/scraping-basics-python/extracting-data

This snippet demonstrates a basic approach to extracting a product's price from a text string. It assumes that if a price is a range, it starts with 'From ', which is then removed to get the numerical part of the price.

```Python
price_text = product.select_one(".price").contents[-1]
price = price_text.removeprefix("From ")
```

--------------------------------

### Install Crawlee Packages using npm

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v3

This snippet demonstrates how to install various Crawlee packages using npm. It covers installing the main 'crawlee' meta-package, specific packages like '@crawlee/cheerio', and required browser dependencies like 'playwright' for respective crawlers. Users should install only the packages relevant to their project to manage dependencies efficiently.

```Shell
npm install crawlee
```

```Shell
npm install @crawlee/cheerio
```

```Shell
npm install crawlee playwright
# or npm install @crawlee/playwright playwright
```

--------------------------------

### Start Apify Actor Run

Source: https://docs.apify.com/api/client/python/reference/class/ActorClient

Starts the Actor and immediately returns the Run object. This method allows extensive configuration for the run, including input data, content type, specific build, resource limits (max items, total charge, memory, timeout), and ad-hoc webhooks.

```APIDOC
start(*, run_input: Any = None, content_type: str | None = None, build: str | None = None, max_items: int | None = None, max_total_charge_usd: Decimal | None = None, memory_mbytes: int | None = None, timeout_secs: int | None = None, wait_for_finish: int | None = None, webhooks: list[dict] | None = None): dict
  Description: Start the Actor and immediately return the Run object.
  Parameters:
    run_input: Any = None (optional, keyword-only)
      Description: The input to pass to the Actor run.
    content_type: str | None = None (optional, keyword-only)
      Description: The content type of the input.
    build: str | None = None (optional, keyword-only)
      Description: Specifies the Actor build to run. It can be either a build tag or build number. By default, the run uses the build specified in the default run configuration for the Actor (typically latest).
    max_items: int | None = None (optional, keyword-only)
      Description: Maximum number of results that will be returned by this run. If the Actor is charged per result, you will not be charged for more results than the given limit.
    max_total_charge_usd: Decimal | None = None (optional, keyword-only)
      Description: A limit on the total charged amount for pay-per-event actors.
    memory_mbytes: int | None = None (optional, keyword-only)
      Description: Memory limit for the run, in megabytes. By default, the run uses a memory limit specified in the default run configuration for the Actor.
    timeout_secs: int | None = None (optional, keyword-only)
      Description: Optional timeout for the run, in seconds. By default, the run uses timeout specified in the default run configuration for the Actor.
    wait_for_finish: int | None = None (optional, keyword-only)
      Description: The maximum number of seconds the server waits for the run to finish. By default, it is 0, the maximum value is 60.
    webhooks: list[dict] | None = None (optional, keyword-only)
      Description: Optional ad-hoc webhooks (https://docs.apify.com/webhooks/ad-hoc-webhooks) associated with the Actor run which can be used to receive a notification, e.g. when the Actor finished or failed. If you already have a webhook set up for the Actor or task, you do not have to add it again here. Each webhook is represented by a dictionary containing these items:\n    - event_types: List of WebhookEventType values which trigger the webhook.\n    - request_url: URL to which to send the webhook HTTP request.\n    - payload_template: Optional template for the request payload.
  Returns: dict
```

--------------------------------

### Configure Apify Browser Launchers with Custom Modules

Source: https://docs.apify.com/sdk/js/docs/next/upgrading/upgrading-to-v1

This example illustrates how to explicitly provide custom `puppeteer` and `playwright` modules to `Apify.launchPuppeteer` and `Apify.launchPlaywright` respectively. It shows both the default invocation and how to use the `launcher` option to specify a custom browser module, enabling advanced customization of browser instances.

```JavaScript
const puppeteer = require('puppeteer');
const playwright = require('playwright');

await Apify.launchPuppeteer();
// Is the same as:
await Apify.launchPuppeteer({
    launcher: puppeteer,
});

await Apify.launchPlaywright();
// Is the same as:
await Apify.launchPlaywright({
    launcher: playwright.chromium,
});
```

--------------------------------

### Apify API Endpoint: Run Actor by ID

Source: https://docs.apify.com/academy/expert-scraping-with-apify/solutions/integrating-webhooks

Example API endpoint for triggering an Apify Actor run using its unique Actor ID and an API token. This URL is used to programmatically start an Actor execution, typically from a webhook or external application.

```string
https://api.apify.com/v2/acts/Yk1bieximsduYDydP/runs?token=YOUR_TOKEN_HERE
```

--------------------------------

### Start Actor run and wait for completion to retrieve output

Source: https://docs.apify.com/academy/php/use-apify-from-php

This snippet shows how to start an Apify Actor run and configure it to wait for the run to finish before returning a response. It uses the `waitForFinish` query parameter, which is useful for quick Actors where immediate results are desired. After the run completes, it directly downloads the output PDF.

```PHP
$response = $client->post('acts/mhamas~html-string-to-pdf/runs', [
    'json' => [
        'htmlString' => '<html><body><h1>Hi World</h1></body></html>'
    ],
    // Pass in how long we want to wait, in seconds
    'query' => [ 'waitForFinish' => 60 ]
]);
$parsedResponse = \json_decode($response->getBody(), true);
$data = $parsedResponse['data'];

echo \json_encode($data, JSON_PRETTY_PRINT);

$runId = $data['id'];
$response = $client->get(sprintf('actor-runs/%s/key-value-store/records/OUTPUT', $runId));
file_put_contents(__DIR__ . '/hi-world.pdf', $response->getBody());
```

--------------------------------

### Example: Online store item detail URL

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This URL represents a typical path for an individual item's detail page in an online store, identified by a unique ID. It showcases another common URL pattern that can be targeted or excluded using pseudo-URLs in web scraping.

```Text
https://www.online-store.com/items/613804
```

--------------------------------

### Install Apify CLI Globally via NPM

Source: https://docs.apify.com/cli/docs/next/installation

Installs or upgrades the Apify Command Line Interface (CLI) globally using Node Package Manager (NPM). This method is suitable for all platforms including Windows.

```bash
npm -g install apify-cli
```

--------------------------------

### Run Apify Project Locally using CLI

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/quick-start

Navigates into an Apify project directory and executes the project locally using the Apify CLI. Data will be stored in `./apify_storage`.

```Shell
cd my-hello-world
apify run
```

--------------------------------

### Initialize New Apify Python Actor Project

Source: https://docs.apify.com/sdk/python

This command-line interface (CLI) instruction initializes a new Apify Actor project specifically for Python. It sets up the necessary project structure and files, allowing developers to quickly start building their Actors.

```bash
apify create my-python-actor
```

--------------------------------

### Basic CheerioCrawler Usage Example

Source: https://docs.apify.com/sdk/js/docs/2.3/api/cheerio-crawler

This example shows how to initialize a `RequestList` with URLs and then create and run a `CheerioCrawler` instance. The `handlePageFunction` demonstrates how to use Cheerio's jQuery-like syntax (`$`) to select elements and extract data from the parsed HTML body of each page.

```JavaScript
// Prepare a list of URLs to crawl
const requestList = new Apify.RequestList({
    sources: [
        { url: 'http://www.example.com/page-1' },
        { url: 'http://www.example.com/page-2' },
    ],
});
await requestList.initialize();

// Crawl the URLs
const crawler = new Apify.CheerioCrawler({
    requestList,
    handlePageFunction: async ({ request, response, body, contentType, $ }) => {
        const data = [];

        // Do some data extraction from the page with Cheerio.
        $('.some-collection').each((index, el) => {
            data.push({
                title: $(el).find('.some-title').text(),
            });
        });
```

--------------------------------

### Install Apify Client for JavaScript

Source: https://docs.apify.com/api

This command installs the official Apify Client library for JavaScript using npm. This client enables seamless interaction with the Apify API from various JavaScript environments, including web browsers, Node.js, and TypeScript applications.

```JavaScript
npm install apify-client
```

--------------------------------

### Configure Apify Actor with Local Storage

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This snippet demonstrates how to explicitly configure an Apify Actor to use `@apify/storage-local` instead of the default `@crawlee/memory-storage`. It shows importing `Actor` and `ApifyStorageLocal`, instantiating the local storage, and passing it to `Actor.init` options. This is useful for maintaining persistent storage across runs.

```JavaScript
import { Actor } from 'apify';
import { ApifyStorageLocal } from '@apify/storage-local';

const storage =
    new ApifyStorageLocal(/* options like `enableWalMode` belong here */);
await Actor.init({ storage });
```

--------------------------------

### Log In to Apify Platform via CLI

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/quick-start

This command authenticates your Apify CLI with the Apify platform. It is a prerequisite for deploying your local code to the Apify cloud for execution.

```Shell
apify login
```

--------------------------------

### Start Apify Task API

Source: https://docs.apify.com/api/client/python/reference/class/TaskClient

Start the task and immediately return the Run object. This method allows specifying various runtime parameters like input, build, memory limits, and webhooks.

```APIDOC
start:
  signature: start(*, task_input, build, max_items, memory_mbytes, timeout_secs, wait_for_finish, webhooks) -> dict
  description: Start the task and immediately return the Run object.
  parameters:
    - name: task_input
      type: dict | None
      description: Task input dictionary.
    - name: build
      type: str | None
      description: Specifies the Actor build to run. It can be either a build tag or build number. By default, the run uses the build specified in the task settings (typically latest).
    - name: max_items
      type: int | None
      description: Maximum number of results that will be returned by this run. If the Actor is charged per result, you will not be charged for more results than the given limit.
    - name: memory_mbytes
      type: int | None
      description: Memory limit for the run, in megabytes. By default, the run uses a memory limit specified in the task settings.
    - name: timeout_secs
      type: int | None
      description: Optional timeout for the run, in seconds. By default, the run uses timeout specified in the task settings.
    - name: wait_for_finish
      type: int | None
      description: The maximum number of seconds the server waits for the run to finish. By default, it is 0, the maximum value is 60.
    - name: webhooks
      type: [list][dict] | None
      description: Optional ad-hoc webhooks associated with the Actor run which can be used to receive a notification, e.g. when the Actor finished or failed. If you already have a webhook set up for the Actor or task, you do not have to add it again here. Each webhook is represented by a dictionary containing these items: event_types (List of WebhookEventType values which trigger the webhook), request_url (URL to which to send the webhook HTTP request), payload_template (Optional template for the request payload).
  returns: dict
```

--------------------------------

### Apify Package and Class Overview

Source: https://docs.apify.com/sdk/js/docs/2.3/api/apify

Describes the `apify` package's functions and properties, focusing on the `Apify` class as an alternative to helper functions. The `Apify` class allows configuration via its constructor, with environment variables taking precedence. It also notes that `addWebhook`, `call`, `callTask`, and `newClient` functions require Apify platform authentication.

```APIDOC
Apify Package Overview:
  Purpose: Provides functions and properties for the Apify SDK for JavaScript.
  Key Functions (requiring authentication):
    - addWebhook
    - call
    - callTask
    - newClient
  Authentication: Required for platform features; refer to authentication guide.

Apify Class (Named Export):
  Usage: const { Apify } = require('apify');
  Purpose: Alternative to helper functions; methods on Apify instance use constructor configuration.
  Configuration:
    - Passed via constructor (e.g., new Apify({ token: '123' }))
    - Environment variables take precedence.
  API: Mostly same as helper functions.
```

--------------------------------

### Actor.start: Start an Actor Run on Apify Platform

Source: https://docs.apify.com/sdk/js/reference/next/class/Actor

Runs an Actor on the Apify platform using the current user account. Unlike Actor.call, this method just starts the run without waiting for its completion. It returns a Promise resolving to an ActorRun object containing details about the started run.

```APIDOC
start(actorId: string, input?: Dictionary, options?: CallOptions): Promise<ActorRun>
  Parameters:
    actorId: string
      Allowed formats are username/actor-name, userId/actor-name or Actor ID.
    input?: Dictionary
      Input for the Actor. If it is an object, it will be stringified to JSON and its content type set to application/json; charset=utf-8. Otherwise the options.contentType parameter must be provided.
    options?: CallOptions = {}
  Returns: Promise<ActorRun>
```

```JavaScript
const run = await Actor.start('apify/hello-world', { myInput: 123 });
```

--------------------------------

### Integrate SessionPool with CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/session-management

This example illustrates the setup and usage of SessionPool with Apify's CheerioCrawler. It covers enabling proxy configuration, activating the session pool, customizing session pool options, persisting cookies, and managing session status (retire, markBad) based on parsed HTML content within the handlePageFunction.

```JavaScript
const proxyConfiguration = await Apify.createProxyConfiguration();

const crawler = new Apify.CheerioCrawler({
    requestQueue,
    // To use the proxy IP session rotation logic, you must turn the proxy usage on.
    proxyConfiguration,
    // Activates the Session pool.
    useSessionPool: true,
    // Overrides default Session pool configuration.
    sessionPoolOptions: {
        maxPoolSize: 100,
    },
    // Set to true if you want the crawler to save cookies per session,
    // and set the cookie header to request automatically...
    persistCookiesPerSession: true,
    handlePageFunction: async ({ request, $, session }) => {
        const title = $('title');

        if (title === 'Blocked') {
            session.retire();
        } else if (
            title === 'Not sure if blocked, might also be a connection error'
        ) {
            session.markBad();
        } else {
            // session.markGood() - this step is done automatically in BasicCrawler.
        }
    },
});
```

--------------------------------

### Initialize and run AutoscaledPool with custom functions

Source: https://docs.apify.com/sdk/js/docs/1.3/api/autoscaled-pool

Demonstrates how to create an instance of `AutoscaledPool`, configure its `maxConcurrency` and define the required `runTaskFunction`, `isTaskReadyFunction`, and `isFinishedFunction` callbacks. Finally, it shows how to start the pool using `await pool.run()`.

```javascript
const pool = new Apify.AutoscaledPool({
    maxConcurrency: 50,
    runTaskFunction: async () => {
        // Run some resource-intensive asynchronous operation here.
    },
    isTaskReadyFunction: async () => {
        // Tell the pool whether more tasks are ready to be processed.
        // Return true or false
    },
    isFinishedFunction: async () => {
        // Tell the pool whether it should finish
        // or wait for more tasks to become available.
        // Return true or false
    }
});

await pool.run();
```

--------------------------------

### Install Apify SDK and Crawlee with npm

Source: https://docs.apify.com/sdk/js/reference/next

This command installs the Apify SDK, Crawlee, and Playwright modules into a Node.js project. Crawlee now provides the crawling functionalities previously included in Apify SDK, and Playwright is a popular browser automation library.

```shell
npm install apify crawlee playwright
```

--------------------------------

### Use Convenience Functions for Actor Runs

Source: https://docs.apify.com/api/client/js/docs

Shows how to use the client's convenience functions, `call()` and `start()` with `waitForFinish`, to manage Apify Actor runs. `call()` starts an Actor and waits for its completion, while `start()` with `waitForFinish` initiates an Actor run and waits for a specified duration, resolving to the run object if the limit is reached.

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'MY-APIFY-TOKEN' });

// Starts an Actor and waits for it to finish.
const finishedActorRun = await client.actor('username/actor-name').call();

// Starts an Actor and waits maximum 60s for the finish
const { status } = await client.actor('username/actor-name').start({
    waitForFinish: 60, // 1 minute
});
```

--------------------------------

### Get Public URL for Key-Value Store Item (JavaScript)

Source: https://docs.apify.com/sdk/js/docs/next/guides/apify-platform

Demonstrates how to retrieve a public URL for an item stored in an Apify Key-Value Store. The example shows importing `KeyValueStore`, opening a store, setting a sample value, and then using `getPublicUrl()` to obtain the shareable link.

```JavaScript
import { KeyValueStore } from 'apify';

const store = await KeyValueStore.open();
await store.setValue('your-file', { foo: 'bar' });
const url = store.getPublicUrl('your-file');
// https://api.apify.com/v2/key-value-stores/<your-store-id>/records/your-file
```

--------------------------------

### Create New Apify Project with CLI (Python)

Source: https://docs.apify.com/sdk

This command initializes a new Apify project using the `apify` CLI tool. It sets up the basic directory structure and necessary files for a new Actor, specifically tailored for Python development. This is the first step to begin building an Apify Actor.

```Shell
apify create my-python-actor
```

--------------------------------

### Initialize Puppeteer and Inject jQuery using Apify.utils

Source: https://docs.apify.com/sdk/js/docs/2.3/api/puppeteer

This JavaScript example demonstrates how to use the Apify SDK to launch a Puppeteer browser, navigate to a URL, and then inject the jQuery library into the page using `Apify.utils.puppeteer.injectJQuery`.

```JavaScript
const Apify = require('apify');
const { puppeteer } = Apify.utils;

// Open https://www.example.com in Puppeteer
const browser = await Apify.launchPuppeteer();
const page = await browser.newPage();
await page.goto('https://www.example.com');

// Inject jQuery into a page
await puppeteer.injectJQuery(page);
```

--------------------------------

### Python Apify Actor Dockerfile for Dependency Management

Source: https://docs.apify.com/academy/deploying-your-code/docker-file

This Dockerfile configures an Apify Actor for Python applications. It prioritizes build efficiency by copying `requirements.txt` and installing dependencies before copying the full source code. The `CMD` instruction specifies the entry point for the Actor, typically `main.py`.

```Dockerfile
# First, specify the base Docker image.
# You can also use any other image from Docker Hub.
FROM apify/actor-python:3.9

# Second, copy just requirements.txt into the Actor image,
# since it should be the only file that affects "pip install" in the next step,
# in order to speed up the build
COPY requirements.txt ./

# Install the packages specified in requirements.txt,
# Print the installed Python version, pip version
# and all installed packages with their versions for debugging
RUN echo "Python version:" \
 && python --version \
 && echo "Pip version:" \
 && pip --version \
 && echo "Installing dependencies from requirements.txt:" \
 && pip install -r requirements.txt \
 && echo "All installed Python packages:" \
 && pip freeze

# Next, copy the remaining files and directories with the source code.
# Since we do this after installing the dependencies, quick build will be really fast
# for most source file changes.
COPY . ./

# Specify how to launch the source code of your Actor.
# By default, the main.py file is run
CMD python3 main.py
```

--------------------------------

### Get Help for Specific Apify CLI Command

Source: https://docs.apify.com/cli/docs/next/vars

This command provides detailed information and usage instructions for a specific Apify CLI command. Replace `COMMAND` with the actual command name to get its documentation.

```Bash
apify help COMMAND
```

--------------------------------

### Install Apify CLI Globally

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/apify-platform

Installs the Apify Command Line Interface globally on your system. This allows you to use `apify` commands from any directory in your terminal, facilitating interaction with the Apify platform.

```Shell
npm install -g apify-cli
```

--------------------------------

### Create a new Apify Actor project

Source: https://docs.apify.com/platform/actors/development/quick-start/locally

Initialize a new Apify Actor project using the CLI. This command will prompt you to name your Actor, choose a programming language (JavaScript, TypeScript, or Python), and select a development template.

```bash
apify create
```

--------------------------------

### Reboot Apify Actor Run

Source: https://docs.apify.com/sdk/js/reference/3.2/class/Actor

Internally reboots the current Actor run. The system stops the current container and starts a new container with the same run ID. This can be used to get the Actor out of an irrecoverable error state and continue where it left off.

```APIDOC
reboot(options: RebootOptions): Promise<void>
  Internally reboots this Actor run. The system stops the current container and starts a new container with the same run id.
  This can be used to get the Actor out of irrecoverable error state and continue where it left off.

  Parameters:
    options: RebootOptions = {}

  Returns: Promise<void>
```

--------------------------------

### Install Crawlee with Playwright Dependency

Source: https://docs.apify.com/sdk/js/docs/3.1/upgrading/upgrading-to-v3

Installs Crawlee along with the `playwright` dependency. This is necessary because `playwright` (or `puppeteer`) must be explicitly installed by the user to control its version, even when using `@crawlee/playwright`.

```bash
npm install crawlee playwright
# or npm install @crawlee/playwright playwright
```

--------------------------------

### Use `context.sendRequest()` for `got-scraping` Integration

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

With the removal of `requestAsBrowser`, `context.sendRequest()` serves as a helper to process the context-bound `Request` object directly through `got-scraping`. This method allows overriding `gotScraping` options, providing flexibility for making HTTP requests that mimic real browser behavior.

```JavaScript
const crawler = new BasicCrawler({
    async requestHandler({ sendRequest, log }) {
        // we can use the options parameter to override gotScraping options
        const res = await sendRequest({ responseType: 'json' });
        log.info('received body', res.body);
    }
});
```

--------------------------------

### get_streamed_log: Get StreamedLog instance for redirecting logs

Source: https://docs.apify.com/api/client/python/reference/class/RunClient

Retrieves a `StreamedLog` instance that can be used to redirect actor logs. This instance supports explicit start/stop or context manager usage, allowing control over which logs are streamed (from start or newly arrived).

```APIDOC
get_streamed_log(to_logger, *, from_start): StreamedLogSync
  optionalto_logger: logging.Logger | None = None
    Logger used for logging the redirected messages. If not provided, a new logger is created
  optionalkeyword-onlyfrom_start: bool = True
    If True, all logs from the start of the actor run will be redirected. If False, only newly arrived logs will be redirected. This can be useful for redirecting only a small portion of relevant logs for long-running actors in stand-by.
Returns StreamedLogSync
```

--------------------------------

### Method: start (Actor Task)

Source: https://docs.apify.com/api/client/js/reference/class/TaskClient

Starts an actor task and immediately returns the `ActorRun` object without waiting for completion.

```APIDOC
start(input?: Dictionary, options: TaskStartOptions = {}): Promise<ActorRun>
  input: Optional input for the task.
  options: Configuration options for starting the task.
  Returns: A Promise that resolves immediately to an ActorRun object.
```

--------------------------------

### Cancelling gotScraping Requests Programmatically

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

This example shows how to cancel an ongoing `gotScraping` request based on custom conditions, replacing the less useful `abortFunction`. It uses the `promise.cancel()` method, which can be triggered within the 'request' event listener to abort the request before completion.

```JavaScript
const promise = gotScraping(…);

promise.on('request', request => {
    // Please note this is not a Got Request instance, but a ClientRequest one.
    // https://nodejs.org/api/http.html#class-httpclientrequest

    if (request.protocol !== 'https:') {
        // Unsecure request, abort.
        promise.cancel();

        // If you set `isStream` to `true`, please use `stream.destroy()` instead.
    }
});

const response = await promise;
```

--------------------------------

### APIDOC: Interface ActorExampleRunInput

Source: https://docs.apify.com/api/client/js/reference/next/interface/KeyValueClientListKeysOptions

Defines the structure for an example Actor run input within the Apify Client for JavaScript API.

```APIDOC
interface ActorExampleRunInput {
  // Properties and methods of ActorExampleRunInput interface
}
```

--------------------------------

### Interface: ActorStartOptions

Source: https://docs.apify.com/api/client/js/reference/2.11/interface/Actor

Defines the options for starting an Actor in the Apify Client for JavaScript.

```APIDOC
interface ActorStartOptions
```

--------------------------------

### Complete Web Scraper: Full Product Data Extraction

Source: https://docs.apify.com/academy/web-scraping-for-beginners/crawling/scraping-the-data

A self-contained, runnable JavaScript example that integrates all previous steps into a single script. It performs the entire scraping workflow: fetching product links from a sales page, then iterating to scrape detailed information from each product page, and finally logging the collected results and any errors to the console.

```JavaScript
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const WEBSITE_URL = 'https://warehouse-theme-metal.myshopify.com';
const storeUrl = `${WEBSITE_URL}/collections/sales`;

console.log('Fetching products on sale.');
const response = await gotScraping(storeUrl);
const html = response.body;

const $ = cheerio.load(html);
const productLinks = $('a.product-item__title');

const productUrls = [];
for (const link of productLinks) {
    const relativeUrl = $(link).attr('href');
    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);
    productUrls.push(absoluteUrl);
}

console.log(`Found ${productUrls.length} products.`);

const results = [];
const errors = [];

for (const url of productUrls) {
    try {
        console.log(`Fetching URL: ${url}`);
        const productResponse = await gotScraping(url);
        const $productPage = cheerio.load(productResponse.body);

        const title = $productPage('h1').text().trim();
        const vendor = $productPage('a.product-meta__vendor').text().trim();
        const price = $productPage('span.price').contents()[2].nodeValue;
        const reviewCount = parseInt($productPage('span.rating__caption').text(), 10);
        const description = $productPage('div[class*="description"] div.rte').text().trim();

        results.push({
            title,
            vendor,
            price,
            reviewCount,
            description
        });
    } catch (error) {
        errors.push({ url, msg: error.message });
    }
}

console.log('RESULTS:', results);
console.log('ERRORS:', errors);
```

--------------------------------

### Enqueue Links with Glob Patterns in PlaywrightCrawler

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

This example demonstrates how to use the context-aware `enqueueLinks` helper within a `PlaywrightCrawler` to enqueue URLs matching specific glob patterns. It highlights the simplified API where `requestQueue` and `page` arguments are automatically provided by the context.

```JavaScript
const crawler = new PlaywrightCrawler({
    async requestHandler({ enqueueLinks }) {
        await enqueueLinks({
            globs: ['https://apify.com/*/*'],
            // we can also use `regexps` and `pseudoUrls` keys here
        });
    }
});
```

--------------------------------

### Minimal actor.json Configuration Example

Source: https://docs.apify.com/platform/actors/development/actor-definition/actor-json

This example illustrates a basic `.actor/actor.json` file, containing only the essential actor specification version, name, and version number. It represents the minimum required configuration to define an Apify Actor, suitable for simple projects.

```JSON
{
    "actorSpecification": 1,
    "name": "name-of-my-scraper",
    "version": "0.0"
}
```

--------------------------------

### Manage Browser and Cookies with BrowserController

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v1

This example showcases the correct usage of 'BrowserController' for graceful browser shutdown and cross-browser cookie management. It contrasts incorrect direct browser/page methods with the unified 'browserController.close()' and 'browserController.setCookies()' for compatibility across Puppeteer and Playwright.

```JavaScript
const handlePageFunction = async ({ page, browserController }) => {
    // Wrong usage. Could backfire because it bypasses BrowserPool.
    await page.browser().close();

    // Correct usage. Allows graceful shutdown.
    await browserController.close();

    const cookies = [
        /* some cookie objects */
    ];
    // Wrong usage. Will only work in Puppeteer and not Playwright.
    await page.setCookies(...cookies);

    // Correct usage. Will work in both.
    await browserController.setCookies(page, cookies);
};
```

--------------------------------

### Navigate to the new Actor directory

Source: https://docs.apify.com/platform/actors/development/quick-start/locally

Change the current directory to the newly created Actor project folder after initialization by the Apify CLI.

```bash
cd your-actor-name
```

--------------------------------

### Complete Node.js Web Scraper for Product Data

Source: https://docs.apify.com/academy/web-scraping-for-beginners/data-extraction/node-continued

This comprehensive Node.js script demonstrates a full web scraping workflow. It uses `got-scraping` to download HTML from a specified URL, `cheerio` to parse the HTML, and then extracts product titles and prices. The extracted data is logged to the console.

```JavaScript
// main.js
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';

// Download HTML with Got Scraping
const response = await gotScraping(storeUrl);
const html = response.body;

// Parse HTML with Cheerio
const $ = cheerio.load(html);

// Find all products on the page
const products = $('.product-item');

const results = [];
for (const product of products) {
    const titleElement = $(product).find('a.product-item__title');
    const title = titleElement.text().trim();

    const priceElement = $(product).find('span.price');
    const price = priceElement.contents()[2].nodeValue.trim();

    results.push({ title, price });
}

console.log(results);
```

--------------------------------

### Verify NPM Version

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/getting-started

This command checks the currently installed version of npm (Node Package Manager). NPM is bundled with Node.js and is essential for managing project dependencies.

```bash
npm -v
```

--------------------------------

### Implement a Simple Webhook Listener with Express.js (JavaScript)

Source: https://docs.apify.com/api/client/js/docs/2.11/examples

This Node.js example demonstrates building a basic webhook listener using the Express framework and `body-parser`. It sets up a POST endpoint (`/apify-webhook`) to receive incoming webhook payloads, logs the request body, and then uses the Apify client to download items from the associated dataset. This provides a foundation for processing webhook data.

```JavaScript
import express from 'express';
import bodyParser from 'body-parser';
import { ApifyClient, DownloadItemsFormat } from 'apify-client';

// Initialize Apify client, express and define server port
const client = new ApifyClient({ token: 'MY_APIFY_TOKEN' });
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

app.post('apify-webhook', async (req, res) => {
    // Log the payload from the webhook
    console.log(req.body);

    const runDataset = await client.dataset(req.body.resource.defaultDatasetId);

    // e.g. Save dataset locally as JSON
    await runDataset.downloadItems(DownloadItemsFormat.JSON);

    // Respond to the webhook
    res.send('Webhook received');
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

--------------------------------

### Enqueue Links Example Usage

Source: https://docs.apify.com/sdk/js/docs/2.3/api/utils

This example demonstrates how to use `Apify.utils.enqueueLinks` to find product detail links on a page and enqueue them into a `RequestQueue`, applying pseudo-URL filtering for specific domains.

```JavaScript
await Apify.utils.enqueueLinks({
    page,
    requestQueue,
    selector: 'a.product-detail',
    pseudoUrls: [
        'https://www.example.com/handbags/[.*]',
        'https://www.example.com/purses/[.*]',
    ],
});
```

--------------------------------

### Multi-Stage Dockerfile for Crawlee Applications

Source: https://docs.apify.com/sdk/js/reference/3.3/changelog

A multi-stage Dockerfile designed for Crawlee applications to optimize image size. It separates the build process, including development dependencies, from the final runtime image, which only contains production dependencies.

```dockerfile
# using multistage build, as we need dev deps to build the TS source code
FROM apify/actor-node:16 AS builder

# copy all files, install all dependencies (including dev deps) and build the project
COPY . ./
RUN npm install --include=dev \
    && npm run build

# create final image
FROM apify/actor-node:16
# copy only necessary files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/README.md ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/apify.json ./apify.json
COPY --from=builder /usr/src/app/INPUT_SCHEMA.json ./INPUT_SCHEMA.json

# install only prod deps
RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional \
    && echo "Installed NPM packages:" \
    && (npm list --only=prod --no-optional --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# run compiled code
CMD npm run start:prod
```

--------------------------------

### Initialize ApifyClient

Source: https://docs.apify.com/api/client/js/reference/2.9/class/ApifyClient

Creates a new instance of the ApifyClient. It accepts an options object to configure the client, allowing customization of its behavior.

```APIDOC
new ApifyClient(options)
  options: ApifyClientOptions = {}
  Returns: ApifyClient
```

--------------------------------

### Cheerio vs. Plain JavaScript for DOM Selection

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet illustrates the syntax difference between Cheerio's `$` function and native browser JavaScript methods for common DOM manipulation tasks. It shows how to extract text content from a title element and collect all 'href' attributes from links, emphasizing Cheerio's role in Node.js environments where browser DOM APIs are unavailable.

```JavaScript
// Return the text content of the <title> element.
document.querySelector('title').textContent; // plain JS
$('title').text(); // Cheerio

// Return an array of all 'href' links on the page.
Array.from(document.querySelectorAll('[href]')).map((el) => el.href); // plain JS
$('[href]')
    .map((i, el) => $(el).attr('href'))
    .get(); // Cheerio
```

--------------------------------

### Crawl Website Links using CheerioCrawler

Source: https://docs.apify.com/sdk/js/docs/3.3/examples/crawl-all-links

This JavaScript example demonstrates how to crawl all links on a website using Apify's `CheerioCrawler`. It initializes the crawler, defines an asynchronous request handler to log URLs and enqueue new links found on the page, and then runs the crawler starting from a specified URL. A `maxRequestsPerCrawl` limit is included for demonstration purposes, which should be removed to crawl all links.

```JavaScript
import { Actor } from 'apify';
import { CheerioCrawler } from 'crawlee';

await Actor.init();

const crawler = new CheerioCrawler({
    async requestHandler({ request, enqueueLinks }) {
        console.log(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
});

// Run the crawler
await crawler.run(['https://apify.com/']);

await Actor.exit();
```

--------------------------------

### Migrate `requestAsBrowser` `payload` to `gotScraping` `body` or `json`

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

When migrating from `requestAsBrowser`, the `payload` option for sending request bodies is replaced. For general string or Buffer bodies, use the `body` option. For sending JSON data, use the `json` option, which automatically handles serialization.

```JavaScript
// Before:
await Apify.utils.requestAsBrowser({ …, payload: 'Hello, world!' });
await Apify.utils.requestAsBrowser({ …, payload: Buffer.from('c0ffe', 'hex') });
await Apify.utils.requestAsBrowser({ …, json: { hello: 'world' } });

// After:
await gotScraping({ …, body: 'Hello, world!' });
await gotScraping({ …, body: Buffer.from('c0ffe', 'hex') });
await gotScraping({ …, json: { hello: 'world' } });
```

--------------------------------

### Install Crawlee with Explicit Playwright Dependency

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v3

These commands demonstrate how to install Crawlee alongside Playwright. It's crucial to explicitly install `playwright` to maintain control over its version, even when using `@crawlee/playwright`.

```bash
npm install crawlee playwright
# or npm install @crawlee/playwright playwright
```

--------------------------------

### ApifyClient Constructor

Source: https://docs.apify.com/api/client/js/reference/2.10/class/ApifyClient

Initializes a new instance of the ApifyClient. It accepts an options object to configure the client, such as authentication tokens or base URLs.

```APIDOC
ApifyClient:
  constructor(options: ApifyClientOptions = {}): ApifyClient
    options: ApifyClientOptions - Configuration options for the client.
```

--------------------------------

### Manage Apify Actor Builds

Source: https://docs.apify.com/cli/docs/next/reference

Provides subcommands for managing Actor build processes and versioning on the Apify platform. This includes listing, removing, logging, getting info, and creating builds.

```APIDOC
DESCRIPTION
  Manages Actor build processes and versioning.

SUBCOMMANDS
  builds rm      Permanently removes an Actor build from the Apify platform.
  builds ls      Lists all builds of the Actor.
  builds log     Prints the log of a specific build.
  builds info    Prints information about a specific build.
  builds create  Creates a new build of the Actor.
```

--------------------------------

### Install Apify Client for JavaScript via npm

Source: https://docs.apify.com/api/client/js

This command installs the Apify client library for JavaScript applications using the Node Package Manager (npm). It's the first step to integrate the client into your project.

```Shell
npm install apify-client
```

--------------------------------

### Install Playwright for Local Apify Actor Development

Source: https://docs.apify.com/sdk/python/docs/guides/playwright

Instructions for setting up Playwright and its dependencies in your local development environment for Apify Actors. This is necessary when running Actors locally, as the Apify platform pre-installs these tools.

```Shell
source .venv/bin/activate
playwright install --with-deps
```

```Shell
.venv\Scripts\activate
playwright install --with-deps
```

--------------------------------

### Apify CLI: Create and Run Local Actor

Source: https://docs.apify.com/sdk/js/docs/3.1/guides/apify-platform

Provides commands to create a new Apify Actor boilerplate using the Apify CLI and then navigate into the project directory to run the Actor locally. This facilitates rapid development and testing of Actors before deployment.

```Shell
apify create my-hello-world
```

```Shell
cd my-hello-world
apify run
```

--------------------------------

### Retrieve Apify Datasets and Items via HTTP GET

Source: https://docs.apify.com/storage/dataset

Demonstrates various HTTP GET requests to retrieve information about Apify datasets and their items. This includes listing all datasets, getting specific dataset details, and fetching dataset items with optional formatting and field selection. Authentication is recommended via the Authorization header.

```HTTP
https://api.apify.com/v2/datasets
```

```HTTP
https://api.apify.com/v2/datasets/{DATASET_ID}
```

```HTTP
https://api.apify.com/v2/datasets/{DATASET_ID}/items
```

```HTTP
https://api.apify.com/v2/datasets/{DATASET_ID}/items?format=json&fields=hotel%2Ccafe
```

--------------------------------

### Initiate OpenAI Assistant Conversation Thread and Run

Source: https://docs.apify.com/platform/integrations/openai-assistants

This code block initiates a conversation with the created OpenAI Assistant. It first creates a new thread, then adds a user message to it, and finally starts a run using create_and_poll to process the message and get a response, handling the asynchronous nature of runs.

```Python
thread = client.beta.threads.create()
message = client.beta.threads.messages.create(
    thread_id=thread.id, role="user", content="What are the latest LLM news?"
)

run = client.beta.threads.runs.create_and_poll(thread_id=thread.id, assistant_id=my_assistant.id)
```

--------------------------------

### Configure Playwright for Proxy per Page with Incognito Pages

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This JavaScript snippet demonstrates how to configure `Apify.Playwright` to use a new proxy for each incognito page. By setting `useIncognitoPages: true` within `launchContext`, each new browser session will obtain a distinct proxy, aligning behavior with `CheerioCrawler`. Note that this feature currently incurs a performance overhead.

```JavaScript
new Apify.Playwright({
    launchContext: {
        useIncognitoPages: true,
    },
    // ...
});
```

--------------------------------

### ActorStartOptions Interface Definition

Source: https://docs.apify.com/api/client/js/reference/next/interface/ActorBuildOptions

Defines the options for starting an Apify Actor. This interface specifies parameters that can be passed to initiate the execution of an actor.

```APIDOC
interface ActorStartOptions { /* ... */ }
```

--------------------------------

### APIDOC: Method: start

Source: https://docs.apify.com/sdk/python/reference/class/Actor

Run an Actor on the Apify platform. Unlike `Actor.call`, this method just starts the run without waiting for finish.

```APIDOC
async start(actor_id, run_input, *, token, content_type, build, memory_mbytes, timeout, wait_for_finish, webhooks) -> ActorRun
  Parameters:
    actor_id: str
      The ID of the Actor to be run.
    run_input: Any = None (optional)
      The input to pass to the Actor run.
    token: str | None = None (optional, keyword-only)
      The Apify API token to use for this request (defaults to the `APIFY_TOKEN` environment variable).
    content_type: str | None = None (optional, keyword-only)
      The content type of the input.
    build: str | None = None (optional, keyword-only)
      Specifies the Actor build to run. It can be either a build tag or build number. By default,
      the run uses the build specified in the default run configuration for the Actor (typically latest).
    memory_mbytes: int | None = None (optional, keyword-only)
      Memory limit for the run, in megabytes. By default, the run uses a memory limit specified
      in the default run configuration for the Actor.
    timeout: (timedelta | None) | Literal[RemainingTime] = None (optional, keyword-only)
      Optional timeout for the run, in seconds. By default, the run uses timeout specified in
      the default run configuration for the Actor. Using `RemainingTime` will set timeout of the other Actor
      to the time remaining from this Actor timeout.
    wait_for_finish: int | None = None (optional, keyword-only)
      The maximum number of seconds the server waits for the run to finish. By default,
      it is 0, the maximum value is 300.
    webhooks: list[Webhook] | None = None (optional, keyword-only)
      Optional ad-hoc webhooks (https://docs.apify.com/webhooks/ad-hoc-webhooks) associated with
      the Actor run which can be used to receive a notification, e.g. when the Actor finished or failed.
      If you already have a webhook set up for the Actor or task, you do not have to add it again here.
  Returns: ActorRun
```

--------------------------------

### Cancelling Requests in Crawlee (Replacing `abortFunction`)

Source: https://docs.apify.com/sdk/js/reference/3.0/changelog

This snippet illustrates the new method for cancelling requests, replacing the less useful `abortFunction`. It demonstrates how to use `promise.cancel()` within a request event listener to abort a request based on custom conditions, such as an unsecure protocol.

```JavaScript
const promise = gotScraping(…);

promise.on('request', request => {
    // Please note this is not a Got Request instance, but a ClientRequest one.
    // https://nodejs.org/api/http.html#class-httpclientrequest

    if (request.protocol !== 'https:') {
        // Unsecure request, abort.
        promise.cancel();

        // If you set `isStream` to `true`, please use `stream.destroy()` instead.
    }
});

const response = await promise;
```

--------------------------------

### Composing multiple preLaunchHooks

Source: https://docs.apify.com/sdk/js/docs/2.3/guides/migration-to-v1

This snippet demonstrates the flexibility of `preLaunchHooks` by showing how multiple hook functions can be composed into an array. This allows for modular and reusable browser configuration logic, such as enabling Chrome, handling headful mode, or injecting fingerprints.

```JavaScript
const preLaunchHooks = [
    maybeLaunchChrome,
    useHeadfulIfNeeded,
    injectNewFingerprint,
];
```

--------------------------------

### Example: Push Data to Default Dataset

Source: https://docs.apify.com/sdk/js/reference/next/class/Actor

Illustrates the use of `Actor.pushData` as a convenient shortcut to store data to the default dataset, and shows its equivalence to explicitly opening the dataset and then pushing data. This example highlights the simplicity of the shortcut method.

```JavaScript
await Actor.pushData({ myValue: 123 });
```

```JavaScript
const dataset = await Actor.openDataset();
await dataset.pushData({ myValue: 123 });
```

--------------------------------

### Apify SDK KeyValueStore Class API Reference

Source: https://docs.apify.com/sdk/js/reference/3.0/class/KeyValueStore

Detailed API specification for the `KeyValueStore` class, outlining its structure, inherited properties, and core methods like `drop` and `forEachKey`, including parameter types, return values, and usage examples.

```APIDOC
Class: KeyValueStore
  Description: Manages key-value data storage, either in Apify cloud or locally.
  Hierarchy:
    - KeyValueStore
  Properties:
    - name: config
      type: Configuration
      access: external, readonly
      inheritedFrom: CoreKeyValueStore.config
    - name: id
      type: string
      access: external, readonly
      inheritedFrom: CoreKeyValueStore.id
    - name: name
      type: string?
      access: external, optional, readonly
      inheritedFrom: CoreKeyValueStore.name
  Methods:
    - name: drop
      description: Removes the key-value store either from the Apify cloud storage or from the local directory, depending on the mode of operation.
      returns: Promise<void>
      inheritedFrom: CoreKeyValueStore.drop
    - name: forEachKey
      description: Iterates over key-value store keys, yielding each in turn to an `iteratee` function. Each invocation of `iteratee` is called with three arguments: `(key, index, info)`, where `key` is the record key, `index` is a zero-based index of the key in the current iteration (regardless of `options.exclusiveStartKey`) and `info` is an object that contains a single property `size` indicating size of the record in bytes. If the `iteratee` function returns a Promise then it is awaited before the next call. If it throws an error, the iteration is aborted and the `forEachKey` function throws the error.
      parameters:
        - name: iteratee
          type: KeyConsumer
          description: A function that is called for every key in the key-value store.
        - name: options
          type: KeyValueStoreIteratorOptions
          description: All `forEachKey()` parameters.
      returns: Promise<void>
      inheritedFrom: CoreKeyValueStore.forEachKey
      example: const keyValueStore = await KeyValueStore.open();
        await keyValueStore.forEachKey(async (key, index, info) => {
          console.log(`Key at ${index}: ${key} has size ${info.size}`);
        });
```

--------------------------------

### Push Local Project to Apify Cloud

Source: https://docs.apify.com/cli/docs/0.20/installation

This command uploads the current local project to the Apify cloud. It initiates the build process for an Actor on the Apify Platform, which is required before the Actor can be executed.

```Shell
apify push
```

--------------------------------

### Cancelling `gotScraping` requests based on conditions

Source: https://docs.apify.com/sdk/js/docs/3.2/upgrading/upgrading-to-v3

This snippet demonstrates how to cancel an ongoing `gotScraping` request based on custom conditions, such as checking the request protocol. The `promise.cancel()` method is used to abort the request, while `stream.destroy()` should be used if `isStream` is set to `true`.

```JavaScript
const promise = gotScraping(…);

promise.on('request', request => {
    // Please note this is not a Got Request instance, but a ClientRequest one.
    // https://nodejs.org/api/http.html#class-httpclientrequest

    if (request.protocol !== 'https:') {
        // Unsecure request, abort.
        promise.cancel();

        // If you set `isStream` to `true`, please use `stream.destroy()` instead.
    }
});

const response = await promise;
```

--------------------------------

### Apify API v2 Resource Overview

Source: https://docs.apify.com/api/v2/users-me-get

This snippet provides a comprehensive overview of the Apify API v2, listing various resource categories like Datasets, Key-value stores, Request queues, Webhooks, Schedules, Store, Logs, and Users, along with their respective introduction endpoints and common operations such as getting lists, creating, updating, and deleting resources.

```APIDOC
Datasets - Introduction: /api/v2/storage-datasets
  - Get list of datasets: /api/v2/datasets-get
  - Create dataset: /api/v2/datasets-post
  - Get dataset: /api/v2/dataset-get
  - Update dataset: /api/v2/dataset-put
  - Delete dataset: /api/v2/dataset-delete
  - Get items: /api/v2/dataset-items-get
  - Store items: /api/v2/dataset-items-post
  - Get dataset statistics: /api/v2/dataset-statistics-get
Key-value stores - Introduction: /api/v2/storage-key-value-stores
  - Get list of key-value stores: /api/v2/key-value-stores-get
  - Create key-value store: /api/v2/key-value-stores-post
  - Get store: /api/v2/key-value-store-get
  - Update store: /api/v2/key-value-store-put
  - Delete store: /api/v2/key-value-store-delete
  - Get list of keys: /api/v2/key-value-store-keys-get
  - Get record: /api/v2/key-value-store-record-get
  - Check if a record exists: /api/v2/key-value-store-record-head
  - Store record: /api/v2/key-value-store-record-put
  - Delete record: /api/v2/key-value-store-record-delete
Request queues - Introduction: /api/v2/storage-request-queues
  - Get list of request queues: /api/v2/request-queues-get
  - Create request queue: /api/v2/request-queues-post
  - Get request queue: /api/v2/request-queue-get
  - Update request queue: /api/v2/request-queue-put
  - Delete request queue: /api/v2/request-queue-delete
  - Add requests: /api/v2/request-queue-requests-batch-post
  - Delete requests: /api/v2/request-queue-requests-batch-delete
Requests - Introduction: /api/v2/storage-request-queues-requests
  - List requests: /api/v2/request-queue-requests-get
  - Add request: /api/v2/request-queue-requests-post
  - Get request: /api/v2/request-queue-request-get
  - Update request: /api/v2/request-queue-request-put
  - Delete request: /api/v2/request-queue-request-delete
Requests locks - Introduction: /api/v2/storage-request-queues-requests-locks
  - Unlock requests: /api/v2/request-queue-requests-unlock-post
  - Get head: /api/v2/request-queue-head-get
  - Get head and lock: /api/v2/request-queue-head-lock-post
  - Prolong request lock: /api/v2/request-queue-request-lock-put
  - Delete request lock: /api/v2/request-queue-request-lock-delete
Webhooks - Introduction: /api/v2/webhooks-webhooks
  - Get list of webhooks: /api/v2/webhooks-get
  - Create webhook: /api/v2/webhooks-post
  - Get webhook: /api/v2/webhook-get
  - Update webhook: /api/v2/webhook-put
  - Delete webhook: /api/v2/webhook-delete
  - Test webhook: /api/v2/webhook-test-post
  - Get collection: /api/v2/webhook-dispatches-get
Webhook dispatches - Introduction: /api/v2/webhooks-webhook-dispatches
  - Get collection: /api/v2/webhook-dispatches-get
  - Get webhook dispatch: /api/v2/webhook-dispatch-get
Schedules - Introduction: /api/v2/schedules
  - Get list of schedules: /api/v2/schedules-get
  - Create schedule: /api/v2/schedules-post
  - Get schedule: /api/v2/schedule-get
  - Update schedule: /api/v2/schedule-put
  - Delete schedule: /api/v2/schedule-delete
  - Get schedule log: /api/v2/schedule-log-get
Store - Introduction: /api/v2/store
  - Get list of Actors in store: /api/v2/store-get
Logs - Introduction: /api/v2/logs
  - Get log: /api/v2/log-get
Users - Introduction: /api/v2/users
  - Get public user data: /api/v2/user-get
  - Get private user data: /api/v2/users-me-get
  - Get monthly usage: /api/v2/users-me-usage-monthly-get
  - Get limits: /api/v2/users-me-limits-get
  - Update limits: /api/v2/users-me-limits-put
```

--------------------------------

### Example Output of Scraped GitHub Repositories

Source: https://docs.apify.com/academy/puppeteer-playwright/common-use-cases/paginating-through-results

Demonstrates the structure of the data scraped from GitHub repositories, showing title, description, and link for each entry as it would appear in a console output.

```text
[
  {
    title: 'react-native',
    description: 'A framework for building native applications using React',
    link: 'https://github.com/facebook/react-native'
  },
  {
    title: 'fboss',
    description: 'Facebook Open Switching System Software for controlling network switches.',
    link: 'https://github.com/facebook/fboss'
  },
  ...
]
```

--------------------------------

### JavaScript: Complete Page Function Example with Data Extraction

Source: https://docs.apify.com/academy/apify-scrapers/getting-started

A comprehensive `pageFunction` example demonstrating conditional logic based on `request.userData.label`. It logs messages, uses `skipLinks()` for detail pages, extracts the URL and a unique identifier, and returns them as a result object.

```JavaScript
async function pageFunction(context) {
    const { request, log, skipLinks } = context;
    if (request.userData.label === 'START') {
        log.info('Store opened!');
        // Do some stuff later.
    }
    if (request.userData.label === 'DETAIL') {
        const { url } = request;
        log.info(`Scraping ${url}`);
        await skipLinks();

        // Do some scraping.
        const uniqueIdentifier = url
            .split('/')
            .slice(-2)
            .join('/');

        return {
            url,
            uniqueIdentifier
        };
    }
}
```

--------------------------------

### Apify SessionPool: Solo Usage Example

Source: https://docs.apify.com/sdk/js/docs/3.3/guides/session-management

Provides a complete example of initializing and using Apify's SessionPool independently. It illustrates how to open a session pool, obtain a session, and manage its lifecycle with methods like markBad(), retire(), and markGood() to control session health and availability.

```JavaScript
Actor.main(async () => {
    const sessionPoolOptions = {
        maxPoolSize: 100,
    };
    const sessionPool = await SessionPool.open(sessionPoolOptions);

    // Get session
    const session = sessionPool.getSession();

    // Increase the errorScore.
    session.markBad();

    // Throw away the session
    session.retire();

    // Lower the errorScore and marks the session good.
    session.markGood();
});
```

--------------------------------

### Example OpenAI Assistant Response

Source: https://docs.apify.com/platform/integrations/openai-assistants

This block shows a sample output from the OpenAI Assistant after processing a query about web scraping with Apify. It illustrates how the assistant might structure its answer based on the provided data.

```Text
Assistant response:
You can scrape a website using Apify by following these steps:
1. Visit the [Apify website](https://apify.com) and create an account.
2. Go to the [Apify Store](https://apify.com/store) and choose a web scraper.
3. Configure the web scraper with the URL of the website you want to scrape.
4. Run the web scraper and download the data.
```

--------------------------------

### Apify CLI: Display Help for Commands

Source: https://docs.apify.com/cli/docs/next/reference

This command prints out help information for a specified Apify CLI command or lists all available commands. It is useful for quickly understanding command usage and available options.

```APIDOC
DESCRIPTION
  Prints out help about a command, or all available commands.

USAGE
  $ apify help [commandString]

ARGUMENTS
  commandString  The command to get help for.

```

--------------------------------

### Python: Full Example of Request Queue Processing

Source: https://docs.apify.com/sdk/python/docs/concepts/storages

This example demonstrates the complete lifecycle of processing requests using Apify's `RequestQueue`. It shows how to initialize an Actor, add multiple requests to the queue (including a prioritized one), continuously fetch and process requests, and handle both successful completion and failures by reclaiming requests for retry.

```Python
import asyncio
import random

from apify import Actor, Request

FAILURE_RATE = 0.3

async def main() -> None:
    async with Actor:
        # Open the queue
        queue = await Actor.open_request_queue()

        # Add some requests to the queue
        for i in range(1, 10):
            await queue.add_request(Request.from_url(f'http://example.com/{i}'))

        # Add a request to the start of the queue, for priority processing
        await queue.add_request(Request.from_url('http://example.com/0'), forefront=True)

        # If you try to add an existing request again, it will not do anything
        add_request_info = await queue.add_request(
            Request.from_url('http://different-example.com/5')
        )
        Actor.log.info(f'Add request info: {add_request_info}')

        processed_request = await queue.get_request(add_request_info.id)
        Actor.log.info(f'Processed request: {processed_request}')

        # Finally, process the queue until all requests are handled
        while not await queue.is_finished():
            # Fetch the next unhandled request in the queue
            request = await queue.fetch_next_request()
            # This can happen due to the eventual consistency of the underlying request
            # queue storage, best solution is just to sleep a bit.
            if request is None:
                await asyncio.sleep(1)
                continue

            Actor.log.info(f'Processing request {request.unique_key}...')
            Actor.log.info(f'Scraping URL {request.url}...')

            # Do some fake work, which fails 30% of the time
            await asyncio.sleep(1)
            if random.random() > FAILURE_RATE:
                # If processing the request was successful, mark it as handled
                Actor.log.info('Request successful.')
                await queue.mark_request_as_handled(request)
            else:
                # If processing the request was unsuccessful, reclaim it so it can be
                # processed again.
                Actor.log.warning('Request failed, will retry!')
                await queue.reclaim_request(request)

```

--------------------------------

### Actor.main JavaScript Usage Examples

Source: https://docs.apify.com/sdk/js/reference/3.3/class/Actor

Provides various JavaScript code examples demonstrating how to use the `Actor.main` function. Examples include synchronous execution, asynchronous execution using promises with `.then()`, and modern asynchronous execution using `async/await` for cleaner code.

```JavaScript
await Actor.main(() => {
  // My synchronous function that returns immediately
  console.log('Hello world from Actor!');
});
```

```JavaScript
import { gotScraping } from 'got-scraping';

await Actor.main(() => {
  // My asynchronous function that returns a promise
  return gotScraping('http://www.example.com').then((html) => {
    console.log(html);
  });
});
```

```JavaScript
import { gotScraping } from 'got-scraping';

await Actor.main(async () => {
  // My asynchronous function
  const html = await gotScraping('http://www.example.com');
  console.log(html);
});
```

--------------------------------

### Configuration Class Constructor

Source: https://docs.apify.com/sdk/js/reference/class/Configuration

Initializes a new `Configuration` instance. Options provided during instantiation will be overridden by environment variables if they are set.

```APIDOC
new Configuration(options?: ConfigurationOptions): Configuration

Inherited from CoreConfiguration.constructor

Parameters:
  - options: ConfigurationOptions (optional)

Returns: Configuration
```

--------------------------------

### Dockerfile snippet for Node.js dependency installation

Source: https://docs.apify.com/sdk/js/docs/guides/docker-images

This Dockerfile snippet demonstrates how to copy `package.json` files, install Node.js dependencies, and then copy the application source code. It includes commands to skip development and optional dependencies to keep the image size small and prints Node.js and NPM versions for debugging.

```Dockerfile
COPY --chown=myuser package*.json ./

RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && (npm list --omit=dev --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

COPY --chown=myuser . ./

CMD npm start --silent
```

--------------------------------

### Install Apify CLI using NPM

Source: https://docs.apify.com/cli/docs/next/integrating-scrapy

This command installs the Apify command-line interface globally using npm, the Node.js package manager. It's an alternative installation method to Homebrew.

```Shell
npm i -g apify-cli
```

--------------------------------

### Example Amazon Product Data Extraction

Source: https://docs.apify.com/platform/integrations/make/amazon

This JSON array shows an example of data extracted for Amazon products, including details like title, ASIN, brand, reviews, image, description, price, and URL.

```JSON
[
    {
    "title": "Logitech M185 Wireless Mouse, 2.4GHz with USB Mini Receiver, 12-Month Battery Life, 1000 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Swift Grey",
    "asin": "B004YAVF8I",
    "brand": "Logitech",
    "stars": 4.5,
    "reviewsCount": 37418,
    "thumbnailImage": "https://m.media-amazon.com/images/I/5181UFuvoBL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "breadCrumbs": "Electronics›Computers & Accessories›Computer Accessories & Peripherals›Keyboards, Mice & Accessories›Mice",
    "description": "Logitech Wireless Mouse M185. A simple, reliable mouse with plug-and-play wireless, a 1-year battery life and 3-year limited hardware warranty.(Battery life may vary based on user and computing conditions.) System Requirements: Windows Vista Windows 7 Windows 8 Windows 10|Mac OS X 10.5 or later|Chrome OS|Linux kernel 2.6+|USB port",
    "price": {
    "value": 13.97,
    "currency": "$"
    },
    "url": "https://www.amazon.com/dp/B004YAVF8I"
    },
    {
    "title": "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome - Graphite",
    "asin": "B09HM94VDS",
    "brand": "Logitech",
    "stars": 4.5,
    "reviewsCount": 9333,
    "thumbnailImage": "https://m.media-amazon.com/images/I/41+eEANAv3L._AC_SY300_SX300_.jpg",
    "breadCrumbs": "Electronics›Computers & Accessories›Computer Accessories & Peripherals›Keyboards, Mice & Accessories›Mice",
    "description": "Logitech MX Master 3S Performance Wireless Mouse Introducing Logitech MX Master 3S – an iconic mouse remastered. Now with Quiet Clicks(2) and 8K DPI any-surface tracking for more feel and performance than ever before. Product details: Weight: 4.97 oz (141 g) Dimensions: 2 x 3.3 x 4.9 in (51 x 84.3 x 124.9 mm) Compatible with Windows, macOS, Linux, Chrome OS, iPadOS, Android operating systems (8) Rechargeable Li-Po (500 mAh) battery Sensor technology: Darkfield high precision Buttons: 7 buttons (Left/Right-click, Back/Forward, App-Switch, Wheel mode-shift, Middle click), Scroll Wheel, Thumbwheel, Gesture button Wireless operating distance: 33 ft (10 m) (9)Footnotes: (1) 4 mm minimum glass thickness (2) Compared to MX Master 3, MX Master 3S has 90% less Sound Power Level left and right click, measured at 1m (3) Compared to regular Logitech mouse without an electromagnetic scroll wheel (4) Compared to Logitech Master 2S mouse with Logitech Options installed and Smooth scrolling enabled (5) Requires Logi Options+ software, available for Windows and macOS (6) Not compatible with Logitech Unifying technology (7) Battery life may vary based on user and computing conditions. (8) Device basic functions will be supported without software for operating systems other than Windows and macOS (9) Wireless range may vary depending on operating environment and computer setup",
    "price": {
    "value": 89.99,
    "currency": "$"
    },
    "url": "https://www.amazon.com/dp/B09HM94VDS"
    },
    {
    "title": "Apple Magic Mouse - White Multi-Touch Surface ",
    "asin": "B0DL72PK1P",
    "brand": "Apple",
    "stars": 4.6,
    "reviewsCount": 18594,
    "thumbnailImage": "",
    "breadCrumbs": "",
    "description": null,
    "price": {
    "value": 78.99,
    "currency": "$"
    },
    "url": "https://www.amazon.com/dp/B0DL72PK1P"
    }
]
```

--------------------------------

### Open and Initialize an Apify RequestList

Source: https://docs.apify.com/sdk/js/docs/api/apify

This example demonstrates how to use `Apify.openRequestList` to create and initialize a `RequestList` instance with a predefined set of source URLs. The `RequestList` is named 'my-name' to enable state persistence across restarts.

```JavaScript
const sources = [
    'https://www.example.com',
    'https://www.google.com',
    'https://www.bing.com',
];

const requestList = await Apify.openRequestList('my-name', sources);

```

--------------------------------

### Interface: ActorExampleRunInput

Source: https://docs.apify.com/api/client/js/reference/2.8/interface/ScheduleCollectionListOptions

Specifies the structure for example input when running an Actor via the Apify JavaScript client API.

```APIDOC
interface ActorExampleRunInput
```

--------------------------------

### Install specific Crawlee package for Cheerio

Source: https://docs.apify.com/sdk/js/docs/3.3/upgrading/upgrading-to-v3

Installs only the `@crawlee/cheerio` package for applications that specifically require Cheerio support, reducing the overall dependency footprint by avoiding unnecessary packages.

```Shell
npm install @crawlee/cheerio
```

--------------------------------

### Get Listener Count for EventEmitter Events

Source: https://docs.apify.com/sdk/js/reference/3.1/class/Logger

Documents the `listenerCount` static method of Node.js `EventEmitter`, which returns the number of listeners for a specific event on an emitter. This method is inherited from `EventEmitter.listenerCount` and was deprecated in v3.2.0 in favor of `listenerCount`. Includes a JavaScript usage example.

```APIDOC
listenerCount(emitter: EventEmitter, eventName: string | symbol): number
Inherited from EventEmitter.listenerCount
Description: A class method that returns the number of listeners for the given eventName registered on the given emitter.
@since: v0.9.12
@deprecated: Since v3.2.0 - Use listenerCount instead.
Parameters:
  emitter: EventEmitter - The emitter to query
  eventName: string | symbol - The event name
Returns: number
```

```JavaScript
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

--------------------------------

### Start Apify Actor Immediately

Source: https://docs.apify.com/api/client/js/reference/2.10/class/ActorClient

Starts an actor and immediately returns the Run object without waiting for its completion.

```APIDOC
start(input?: unknown, options: ActorStartOptions = {}): Promise<ActorRun>
  Description: Starts an actor and immediately returns the Run object.
  Parameters:
    input?: unknown
    options: ActorStartOptions = {}
  Returns: Promise<ActorRun>
  API Reference: https://docs.apify.com/api/v2#/reference/actors/run-collection/run-actor
```

--------------------------------

### Get Listener Count for EventEmitter Event (Node.js)

Source: https://docs.apify.com/sdk/js/reference/3.1/class/LoggerJson

This example demonstrates how to use the `listenerCount` function from the `node:events` module to determine the number of active listeners for a specific event on an `EventEmitter` instance. It's useful for debugging or managing event subscriptions.

```javascript
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

--------------------------------

### Create a new Apify Actor project using CLI (Shell)

Source: https://docs.apify.com/sdk/js/docs/guides/apify-platform

Shows how to use the Apify CLI to scaffold a new actor project with a boilerplate template. This command initializes a directory with necessary project files.

```Shell
apify create my-hello-world
```

--------------------------------

### Configure Apify Actor to Use Local Storage

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

This example demonstrates how to explicitly configure an Apify actor to use `@apify/storage-local` instead of the default in-memory storage. It imports `ApifyStorageLocal` and passes an instance to `Actor.init` via the `storage` option. Ensure `@apify/storage-local` v2.1.0+ is installed for compatibility with Crawlee.

```typescript
import { Actor } from 'apify';
import { ApifyStorageLocal } from '@apify/storage-local';

const storage =
    new ApifyStorageLocal(/* options like `enableWalMode` belong here */);
await Actor.init({ storage });

```

--------------------------------

### Start Apify Task API

Source: https://docs.apify.com/api/client/python/reference/class/TaskClientAsync

Starts an Apify task and immediately returns the Run object. This method allows specifying various runtime parameters like input, build, resource limits, and webhooks for the task execution.

```APIDOC
async start(*, task_input, build, max_items, memory_mbytes, timeout_secs, wait_for_finish, webhooks): dict
  Description: Start the task and immediately return the Run object.
  Reference: https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection/run-task
  Parameters:
    task_input: dict | None = None
      Description: Task input dictionary.
    build: str | None = None
      Description: Specifies the Actor build to run. It can be either a build tag or build number. By default, the run uses the build specified in the task settings (typically latest).
    max_items: int | None = None
      Description: Maximum number of results that will be returned by this run. If the Actor is charged per result, you will not be charged for more results than the given limit.
    memory_mbytes: int | None = None
      Description: Memory limit for the run, in megabytes. By default, the run uses a memory limit specified in the task settings.
    timeout_secs: int | None = None
      Description: Optional timeout for the run, in seconds. By default, the run uses timeout specified in the task settings.
    wait_for_finish: int | None = None
      Description: The maximum number of seconds the server waits for the run to finish. By default, it is 0, the maximum value is 60.
    webhooks: [list][dict] | None = None
      Description: Optional ad-hoc webhooks (https://docs.apify.com/webhooks/ad-hoc-webhooks) associated with the Actor run which can be used to receive a notification, e.g. when the Actor finished or failed. If you already have a webhook set up for the Actor or task, you do not have to add it again here. Each webhook is represented by a dictionary containing these items:
        event_types: List of WebhookEventType values which trigger the webhook.
        request_url: URL to which to send the webhook HTTP request.
        payload_template: Optional template for the request payload.
  Returns: dict
```

--------------------------------

### APIDOC: Task Client Method: start

Source: https://docs.apify.com/api/client/js/reference/2.8/class/TaskClient

Starts a task and immediately returns the Run object. Refer to the Apify API documentation for more details: https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection/run-task

```APIDOC
start(input?: Dictionary, options: TaskStartOptions = {}): Promise<ActorRun>
  input: Optional input for the task.
  options: Optional configuration options for starting the task.
```

--------------------------------

### Initialize ApifyStorageClient

Source: https://docs.apify.com/sdk/python/reference/class/ApifyStorageClient

Initializes a new instance of the ApifyStorageClient. It requires a Configuration object to set up the client's behavior and connection details.

```APIDOC
__init__(\, configuration): None
  configuration: Configuration
Returns None
```

--------------------------------

### Install Python Dependencies for OpenAI and Apify

Source: https://docs.apify.com/platform/integrations/openai-assistants

This snippet shows how to install the necessary Python packages, apify-client and openai, using pip. These libraries are essential for interacting with the Apify API and OpenAI services.

```Python
pip install apify-client openai
```

--------------------------------

### Initialize ApifyClient with API Token

Source: https://docs.apify.com/academy/getting-started/apify-client

Before interacting with the Apify API, create an instance of the ApifyClient class. Provide your API token obtained from the Apify Console for authentication. It is recommended to use environment variables for sensitive tokens rather than hardcoding them.

```Node.js
const client = new ApifyClient({
    token: 'YOUR_TOKEN',
});
```

```Python
client = ApifyClient(token='YOUR_TOKEN')
```

--------------------------------

### Configure TypeScript Compiler Options (tsconfig.json)

Source: https://docs.apify.com/sdk/js/docs/3.0/guides/type-script-actor

Defines the TypeScript compiler's behavior, including target ECMAScript version, module system, strictness rules, included libraries, and output directories. This configuration guides 'tsc' in how to process your source files.

```JSON
{
    "compilerOptions": {
        "target": "es2019",
        "module": "commonjs",
        "moduleResolution": "node",
        "strict": true,
        "noImplicitAny": false,
        "strictNullChecks": false,
        "lib": [
            "DOM",
            "DOM.Iterable",
            "ES2015",
            "ES2016",
            "ES2018",
            "ES2019.Object",
            "ES2018.AsyncIterable",
            "ES2020.String",
            "ES2019.Array"
        ],
        "rootDir": "src/",
        "outDir": "build/"
    },
    "include": ["src/"]
}
```

--------------------------------

### Run an Apify Actor Locally

Source: https://docs.apify.com/cli/docs/0.20/installation

Executes the Apify Actor on the local machine, allowing for development and testing of its logic before deployment.

```Shell
cd my-hello-world
apify run
```

--------------------------------

### Apify API v2 Endpoint Reference

Source: https://docs.apify.com/api/v2/getting-started

A comprehensive, hierarchical list of all available Apify API v2 endpoints, categorized by resource type (Actors, Actor versions, builds, runs, tasks) and their respective operations (GET, POST, PUT, DELETE). This snippet outlines the structure of the Apify API.

```APIDOC
Apify API v2 Endpoints:
  Getting started: /api/v2/getting-started
  Actors:
    Introduction: /api/v2/actors
    Get list of Actors: /api/v2/acts-get
    Create Actor: /api/v2/acts-post
    Get Actor: /api/v2/act-get
    Update Actor: /api/v2/act-put
    Delete Actor: /api/v2/act-delete
    Actor versions:
      Introduction: /api/v2/actors-actor-versions
      Get list of versions: /api/v2/act-versions-get
      Create version: /api/v2/act-versions-post
      Get version: /api/v2/act-version-get
      Update version: /api/v2/act-version-put
      Delete version: /api/v2/act-version-delete
      Get list of environment variables: /api/v2/act-version-env-vars-get
      Create environment variable: /api/v2/act-version-env-vars-post
      Get environment variable: /api/v2/act-version-env-var-get
      Update environment variable: /api/v2/act-version-env-var-put
      Delete environment variable: /api/v2/act-version-env-var-delete
    Actor builds:
      Introduction: /api/v2/actors-actor-builds
      Get list of builds: /api/v2/act-builds-get
      Build Actor: /api/v2/act-builds-post
      Get default build: /api/v2/act-build-default-get
      Get OpenAPI definition: /api/v2/act-openapi-json-get
      Get build: /api/v2/act-build-get
      Abort build: /api/v2/act-build-abort-post
    Actor runs:
      Introduction: /api/v2/actors-actor-runs
      Get list of runs: /api/v2/act-runs-get
      Run Actor: /api/v2/act-runs-post
      Run Actor synchronously with input and return output: /api/v2/act-run-sync-post
      Without input: /api/v2/act-run-sync-get
      Run Actor synchronously with input and get dataset items: /api/v2/act-run-sync-get-dataset-items-post
      Run Actor synchronously without input and get dataset items: /api/v2/act-run-sync-get-dataset-items-get
      Resurrect run: /api/v2/act-run-resurrect-post
      Get last run: /api/v2/act-runs-last-get
      Get run: /api/v2/act-run-get
      Abort run: /api/v2/act-run-abort-post
      Metamorph run: /api/v2/act-run-metamorph-post
    Webhook collection:
      Introduction: /api/v2/actors-webhook-collection
      Get list of webhooks: /api/v2/act-webhooks-get
  Actor builds (User-level):
    Introduction: /api/v2/actor-builds
    Get user builds list: /api/v2/actor-builds-get
    Get build: /api/v2/actor-build-get
    Delete build: /api/v2/actor-build-delete
    Abort build: /api/v2/actor-build-abort-post
    Get log: /api/v2/actor-build-log-get
    Get OpenAPI definition: /api/v2/actor-build-openapi-json-get
  Actor runs (User-level):
    Introduction: /api/v2/actor-runs
    Get user runs list: /api/v2/actor-runs-get
    Get run: /api/v2/actor-run-get
    Update status message: /api/v2/actor-run-put
    Delete run: /api/v2/actor-run-delete
    Abort run: /api/v2/actor-run-abort-post
    Metamorph run: /api/v2/actor-run-metamorph-post
    Reboot run: /api/v2/actor-run-reboot-post
    Resurrect run: /api/v2/post-resurrect-run
    Charge events in run: /api/v2/post-charge-run
  Actor tasks:
    Introduction: /api/v2/actor-tasks
    Get list of tasks: /api/v2/actor-tasks-get
    Create task: /api/v2/actor-tasks-post
    Get task: /api/v2/actor-task-get
    Update task: /api/v2/actor-task-put
    Delete task: /api/v2/actor-task-delete
    Get task input: /api/v2/actor-task-input-get
    Update task input: /api/v2/actor-task-input-put
    Get list of webhooks: /api/v2/actor-task-webhooks-get
    Get list of task runs: /api/v2/actor-task-runs-get
    Run task: /api/v2/actor-task-runs-post
    Run task synchronously (GET): /api/v2/actor-task-run-sync-get
    Run task synchronously (POST): /api/v2/actor-task-run-sync-post
    Run task synchronously and get dataset items (GET): /api/v2/actor-task-run-sync-get-dataset-items-get
    Run task synchronously and get dataset items (POST): /api/v2/actor-task-run-sync-get-dataset-items-post
    Get last run: /api/v2/actor-task-runs-last-get
  Storage: (No sub-items provided)

```

--------------------------------

### Implementing custom launch logic with `preLaunchHooks`

Source: https://docs.apify.com/sdk/js/docs/3.0/upgrading/upgrading-to-v1

This code demonstrates how to use a `preLaunchHook` within `browserPoolOptions` to achieve custom browser launch logic, replacing the deprecated `launchPuppeteerFunction`. This approach is consistent across Puppeteer and Playwright.

```JavaScript
const maybeLaunchChrome = (pageId, launchContext) => {
    if (someVariable === 'chrome') {
        launchContext.useChrome = true;
    };
};

const crawler = new Apify.PuppeteerCrawler({
    browserPoolOptions: {
        preLaunchHooks: [maybeLaunchChrome],
    },
    // ...
});
```

--------------------------------

### Install Apify Python SDK

Source: https://docs.apify.com/platform/integrations/pinecone

This command installs the Apify Python client library, which is necessary to interact with Apify actors and services programmatically.

```Python
pip install apify-client
```

--------------------------------

### Pull Apify Actor Source Code Locally

Source: https://docs.apify.com/platform/actors/development/quick-start/web-ide

Commands to download an Apify Actor's source code to your local machine using the Apify CLI. You can specify the Actor by its unique name or ID, and optionally pull a specific version.

```bash
apify pull your-actor-name
```

```bash
apify pull your-actor-name --version [version_number]
```

--------------------------------

### Initialize new Apify Actor project

Source: https://docs.apify.com/cli/docs/0.20/reference

Initializes a new Actor project in an existing directory. It can automatically create wrappers for Scrapy projects and sets up essential Apify files and directories.

```APIDOC
USAGE
  $ apify init [ACTORNAME] [-y]

ARGUMENTS
  ACTORNAME  Name of the Actor. If not provided, you will be prompted for it.

FLAGS
  -y, --yes  Automatic yes to prompts; assume "yes" as answer to all prompts. Note that in some cases, the command may
             still ask for confirmation.

DESCRIPTION
  Initializes a new Actor project in an existing directory.
  If the directory contains a Scrapy project in Python, the command automatically creates wrappers so that you can run
  your scrapers without changes.

  The command creates the ".actor/actor.json" file and the "storage" directory in the current directory, but does not
  touch any other existing files or directories.

  WARNING: The directory at "storage" will be overwritten if it already exists.
```

--------------------------------

### Example output of Apify CLI Scrapy wrapping process

Source: https://docs.apify.com/cli/docs/integrating-scrapy

This snippet displays a sample interaction and output from the apify init command when wrapping a Scrapy project. It illustrates the prompts for project details and the successful completion message, confirming the actorization.

```Shell
Info: The current directory looks like a Scrapy project. Using automatic project wrapping.
? Enter the Scrapy BOT_NAME (see settings.py): books_scraper
? What folder are the Scrapy spider modules stored in? (see SPIDER_MODULES in settings.py): books_scraper.spiders
? Pick the Scrapy spider you want to wrap: BookSpider (/home/path/to/actor-scrapy-books-example/books_scraper/spiders/book.py)
Info: Downloading the latest Scrapy wrapper template...
Info: Wrapping the Scrapy project...
Success: The Scrapy project has been wrapped successfully.
```

--------------------------------

### Extracting `href` attributes from `<a>` elements using Cheerio

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This code snippet uses the Cheerio library to select all `<a>` elements that possess an `href` attribute. It then extracts the value of the `href` attribute from each selected element and compiles them into an array of strings. This is a fundamental step for gathering potential links from a web page for further processing.

```JavaScript
const links = $('a[href]')
    .map((i, el) => $(el).attr('href'))
    .get();
```

--------------------------------

### KeyValueStore.open Method API Documentation

Source: https://docs.apify.com/sdk/js/reference/next/class/KeyValueStore

Documents the static `open` method for creating or opening a key-value store instance. This method overrides the `CoreKeyValueStore.open` method and returns a Promise resolving to a `KeyValueStore` instance.

```APIDOC
open(storeIdOrName, options): Promise<KeyValueStore>
Overrides CoreKeyValueStore.open

Parameters:
  storeIdOrName: null | string
  options: StorageManagerOptions = {}

Returns: Promise<KeyValueStore>
```

--------------------------------

### Extracting Actor Title and Description with Cheerio

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This snippet expands on the title extraction by also capturing the actor's description. It targets a <span> tag with the class 'actor-description' nested within the <header> element, providing a more specific selector to retrieve the correct description from the page.

```JavaScript
return {
    title: $('header h1').text(),
    description: $('header span.actor-description').text(),
};
```

--------------------------------

### JavaScript handlePageFunction Input Object Structure

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This code snippet illustrates the structure of the object passed as a single argument to the handlePageFunction. This object always contains at least the 'request' property, representing the currently crawled Request instance, and the 'autoscaledPool' property, which is an instance of the AutoscaledPool class.

```JavaScript
// The object received as a single argument by the handlePageFunction
{
    request: Request,
    autoscaledPool: AutoscaledPool
}
```

--------------------------------

### Multi-stage Dockerfile for Apify Actors

Source: https://docs.apify.com/sdk/js/docs/upgrading/upgrading-to-v3

This Dockerfile demonstrates a multi-stage build process for Apify actors. The first stage (`builder`) installs all dependencies (including dev dependencies) and builds the TypeScript source. The second stage creates a lean production image by copying only necessary files and installing only production dependencies, reducing the final image size.

```dockerfile
# using multistage build, as we need dev deps to build the TS source code
FROM apify/actor-node:16 AS builder

# copy all files, install all dependencies (including dev deps) and build the project
COPY . ./
RUN npm install --include=dev \
    && npm run build

# create final image
FROM apify/actor-node:16
# copy only necessary files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/README.md ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/apify.json ./apify.json
COPY --from=builder /usr/src/app/INPUT_SCHEMA.json ./INPUT_SCHEMA.json

# install only prod deps
RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional \
    && echo "Installed NPM packages:" \
    && (npm list --only=prod --no-optional --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# run compiled code
CMD npm run start:prod

```

--------------------------------

### Get Input Without Apify SDK (Python)

Source: https://docs.apify.com/academy/deploying-your-code/inputs-outputs

Python example demonstrating how to retrieve input for an Apify Actor without using the SDK. It includes logic to check if the actor is running on the Apify platform or locally, then reads input from the key-value store via the Apify Client or a local file. The snippet also contains a function to sum numbers and process the retrieved input.

```Python
from apify_client import ApifyClient
from os import environ
import json

client = ApifyClient(token='YOUR_TOKEN')

# If being run on the platform, the "APIFY_IS_AT_HOME" environment variable
# will be "1". Otherwise, it will be undefined/None
def is_on_apify ():
            return 'APIFY_IS_AT_HOME' in environ

# Get the input
def get_input ():
            if not is_on_apify():
                with open('./apify_storage/key_value_stores/default/INPUT.json') as actor_input:
                    return json.load(actor_input)

    kv_store = client.key_value_store(environ.get('APIFY_DEFAULT_KEY_VALUE_STORE_ID'))
    return kv_store.get_record('INPUT')['value']

def add_all_numbers (nums):
    total = 0

    for num in nums:
        total += num

    return total

actor_input = get_input()['numbers']

solution = add_all_numbers(actor_input)

print(solution)
```

--------------------------------

### Extracting Actor Header Details with Cheerio

Source: https://docs.apify.com/sdk/js/docs/1.3/guides/getting-started

This JavaScript snippet demonstrates how to parse specific data points from an Apify actor's header using Cheerio. It extracts the title, description, modified date, and a complex 'run count' by combining text extraction, attribute parsing, and regular expressions to handle numerical formatting.

```JavaScript
return {
    title: $('header h1').text(),
    description: $('header span.actor-description').text(),
    modifiedDate: new Date(
        Number($('ul.ActorHeader-stats time').attr('datetime')),
    ),
    runCount: Number(
        $('ul.ActorHeader-stats > li:nth-of-type(3)')
            .text()
            .match(/[\d,]+/)[0]
            .replace(',', ''),
    ),
};
```

--------------------------------

### Get Listeners for an Event (JavaScript)

Source: https://docs.apify.com/sdk/js/reference/3.3/class/LoggerText

The `listeners` method returns a copy of the array of functions currently registered as listeners for the specified `eventName`. This allows inspection of the active event handlers. The example demonstrates retrieving and inspecting the listeners for a 'connection' event on a server.

```APIDOC
listeners<K>(eventName): Function[]
Inherited from Logger.listeners
Returns a copy of the array of listeners for the event named `eventName`.
Type parameters:
  K
Parameters:
  eventName: string | symbol
Returns Function[]
```

```JavaScript
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

--------------------------------

### Basic CheerioCrawler Example for Web Scraping

Source: https://docs.apify.com/sdk/js/docs/1.3/api/cheerio-crawler

This example illustrates the fundamental usage of `CheerioCrawler`. It shows how to prepare a `RequestList` with URLs, initialize a `CheerioCrawler` instance, and define a `handlePageFunction` to process the downloaded HTML. Inside `handlePageFunction`, it demonstrates using Cheerio's jQuery-like syntax to select elements and extract data, which is then saved to a dataset.

```JavaScript
// Prepare a list of URLs to crawl
const requestList = new Apify.RequestList({
    sources: [
        { url: 'http://www.example.com/page-1' },
        { url: 'http://www.example.com/page-2' }
    ]
});
await requestList.initialize();

// Crawl the URLs
const crawler = new Apify.CheerioCrawler({
    requestList,
    handlePageFunction: async ({ request, response, body, contentType, $ }) => {
        const data = [];

        // Do some data extraction from the page with Cheerio.
        $('.some-collection').each((index, el) => {
            data.push({
                title: $(el).find('.some-title').text()
            });
        });

        // Save the data to dataset.
```