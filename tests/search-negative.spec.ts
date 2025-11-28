import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchResultsPage } from '../pages/searchResults.page';

test('search for nonsense and verify product is not present', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.goto();
  await home.search('asdkfjlasdkfj');

  const found = await results.hasProduct('Faded Short Sleeve T-shirts');
  expect(found).toBeFalsy();
});
