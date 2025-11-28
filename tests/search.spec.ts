import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchResultsPage } from '../pages/searchResults.page';

test('search for T-shirts and verify product appears', async ({ page }) => {
	const home = new HomePage(page);
	const results = new SearchResultsPage(page);

	await home.goto();
	await home.search('T-shirts');

	const found = await results.hasProduct('Faded Short Sleeve T-shirts');
	expect(found).toBeTruthy();
});
