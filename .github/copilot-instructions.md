<!-- Copilot/AI agent instructions for this repository -->
# Repository overview

This repository contains two related Playwright test areas:

- `Playwright_Automation/` — a small Playwright project with `playwright.config.js` and tests under `tests/` (example: `tests/Excercise.spec.js`).
- `JS/playwright/` — another Playwright test set with its own config and example tests under `tests/`.

Both projects use `@playwright/test` and ship a minimal `package.json` (no npm scripts). Tests are pure Playwright tests that navigate to external sites (e.g., `playwright.dev`, `automationexercise.com`).

## Quick commands (what works locally)

- Install deps: `npm install` in the project folder containing `package.json` you want to work on (e.g., `Playwright_Automation` or `JS`).
- Install Playwright browsers: `npx playwright install`
- Run tests: `npx playwright test` (runs tests defined in `testDir` from `playwright.config.js`).
- Show HTML report: `npx playwright show-report` after a run.

Note: There are no npm `scripts` defined in the provided `package.json` files, so use `npx` or add scripts before running.

## Key files to inspect

- `Playwright_Automation/playwright.config.js` — primary test runner configuration (testDir: `./tests`, `reporter: 'html'`, `trace: 'on-first-retry'`).
- `JS/playwright.config.js` — similar configuration used by the other test suite.
- `Playwright_Automation/tests/Excercise.spec.js` and `JS/playwright/tests/*.spec.js` — concrete test examples and the project's style for assertions and page interactions.
- `Playwright_Automation/package.json` and `JS/package.json` — dependencies (`playwright`, `@playwright/test`) and module type (`type: "module"` in `JS/package.json`).

## Project-specific conventions and patterns

- Tests live in `./tests` and rely on Playwright fixtures: `test`, `expect`, and the `page` fixture.
- Config uses `fullyParallel: true` and `reporter: 'html'` — do not change reporter without checking CI expectations.
- `trace: 'on-first-retry'` is enabled; keep this when adding flaky-test handling.
- Some test files include `test.only` (e.g., `Excercise.spec.js` and `UIBasics.spec.js`). Remove or avoid committing `test.only` when targeting CI. The config sets `forbidOnly: !!process.env.CI` to fail CI if `test.only` is present.

## What an AI coding agent should do first

1. Open `Playwright_Automation/playwright.config.js` and `JS/playwright.config.js` to understand `testDir`, `reporter`, and `use` settings.
2. Inspect `tests/` to learn naming/selector patterns (they use `getByRole`, `toHaveTitle`, and `toBeVisible`). Use similar selectors when creating tests.
3. When adding automation code, prefer Playwright idioms (fixtures, `page`, `expect`) over custom wrappers — the codebase currently has no custom test framework.

## CI and safety notes

- CI is implied via `forbidOnly: !!process.env.CI` and `retries`/`workers` changing based on `process.env.CI` — respect those env var checks.
- Tests hit external sites; if you add mocks or local servers, update `playwright.config.js` `webServer` block or document new steps.

## Examples and micro-guidelines (be specific)

- Example test pattern to follow:

```js
import { test, expect } from '@playwright/test';

test('page title contains text', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

- Avoid introducing top-level side effects in test files. Keep navigation and assertions inside `test()` blocks.

## If you change package or CI behavior

- If you add npm scripts, update the root README or add a small developer README in the project folder describing `npm run test` and any extra env vars needed (e.g., `CI=true`).

---
If any part of this is unclear or you want additional rules (commit message style, branch naming, PR expectations, or example TODOs for refactors), tell me which area to expand and I'll iterate.
