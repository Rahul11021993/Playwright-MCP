# Playwright POM Example

This workspace contains a small Playwright test suite demonstrating a Page Object Model (POM).

Files added:
- `pages/base.page.ts` — common helpers and navigation.
- `pages/home.page.ts` — home page POM (search).
- `pages/searchResults.page.ts` — search results POM (product checks).
- `tests/search.spec.ts` — positive test for "Faded Short Sleeve T-shirts".
- `tests/search-negative.spec.ts` — negative test for a nonsense search.

Run tests (PowerShell):

```powershell
npx playwright test tests/search.spec.ts -c playwright.config.ts -u
npx playwright test tests/search-negative.spec.ts -c playwright.config.ts -u

# or run all tests
npx playwright test -c playwright.config.ts -u
```

Show HTML report:

```powershell
npx playwright show-report
```

Notes:
- The POM classes live in `pages/`.
- Selectors are simple and can be centralized if you expand the suite.
