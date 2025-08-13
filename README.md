# email-element-tests
Testing the HTML Email Element

```
sayrer@robertstudio310 sayrer % git clone https://github.com/sayrer/email-element-tests
Cloning into 'email-element-tests'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (4/4), 4.78 KiB | 4.78 MiB/s, done.
sayrer@robertstudio310 sayrer % cd email-element-tests 
sayrer@robertstudio310 email-element-tests % ls
LICENSE		README.md
sayrer@robertstudio310 email-element-tests % pnpm create playwright


.../198a483e003-13a4c                    | Progress: resolved 1, reused 0, downl.../198a483e003-13a4c                    |   +1 +
.../198a483e003-13a4c                    | Progress: resolved 1, reused 0, downl.../198a483e003-13a4c                    | Progress: resolved 1, reused 0, downl.../198a483e003-13a4c                    | Progress: resolved 1, reused 0, downloaded 1, added 1, done
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) · true

Initializing pnpm project (pnpm init)…
Wrote to /Users/sayrer/github/sayrer/email-element-tests/package.json

{
  "name": "email-element-tests",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.14.0"
}
Installing Playwright Test (pnpm add --save-dev @playwright/test)…
Packages: +4
++++
Progress: resolved 4, reused 0, downloaded 4, added 4, done

devDependencies:
+ @playwright/test 1.54.2

Done in 1.8s using pnpm v10.14.0
Installing Types (pnpm add --save-dev @types/node)…
Packages: +2
++
Progress: resolved 6, reused 4, downloaded 2, added 2, done

devDependencies:
+ @types/node 24.2.1

Done in 710ms using pnpm v10.14.0
Writing playwright.config.ts.
Writing .github/workflows/playwright.yml.
Writing tests/example.spec.ts.
Writing tests-examples/demo-todo-app.spec.ts.
Writing package.json.
Downloading browsers (pnpm exec playwright install)…
Downloading Chromium 139.0.7258.5 (playwright build v1181) from https://cdn.playwright.dev/dbazure/download/playwright/builds/chromium/1181/chromium-mac-arm64.zip
128.4 MiB [====================] 100% 0.0s
Chromium 139.0.7258.5 (playwright build v1181) downloaded to /Users/sayrer/Library/Caches/ms-playwright/chromium-1181
Downloading Chromium Headless Shell 139.0.7258.5 (playwright build v1181) from https://cdn.playwright.dev/dbazure/download/playwright/builds/chromium/1181/chromium-headless-shell-mac-arm64.zip
81.7 MiB [====================] 100% 0.0s
Chromium Headless Shell 139.0.7258.5 (playwright build v1181) downloaded to /Users/sayrer/Library/Caches/ms-playwright/chromium_headless_shell-1181
Downloading Firefox 140.0.2 (playwright build v1489) from https://cdn.playwright.dev/dbazure/download/playwright/builds/firefox/1489/firefox-mac-arm64.zip
86.4 MiB [====================] 100% 0.0s
Firefox 140.0.2 (playwright build v1489) downloaded to /Users/sayrer/Library/Caches/ms-playwright/firefox-1489
Downloading Webkit 26.0 (playwright build v2191) from https://cdn.playwright.dev/dbazure/download/playwright/builds/webkit/2191/webkit-mac-15-arm64.zip
70 MiB [====================] 100% 0.0s
Webkit 26.0 (playwright build v2191) downloaded to /Users/sayrer/Library/Caches/ms-playwright/webkit-2191
Downloading FFMPEG playwright build v1011 from https://cdn.playwright.dev/dbazure/download/playwright/builds/ffmpeg/1011/ffmpeg-mac-arm64.zip
1 MiB [====================] 100% 0.0s
FFMPEG playwright build v1011 downloaded to /Users/sayrer/Library/Caches/ms-playwright/ffmpeg-1011
✔ Success! Created a Playwright Test project at /Users/sayrer/github/sayrer/email-element-tests

Inside that directory, you can run several commands:

  pnpm exec playwright test
    Runs the end-to-end tests.

  pnpm exec playwright test --ui
    Starts the interactive UI mode.

  pnpm exec playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  pnpm exec playwright test example
    Runs the tests in a specific file.

  pnpm exec playwright test --debug
    Runs the tests in debug mode.

  pnpm exec playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    pnpm exec playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```
