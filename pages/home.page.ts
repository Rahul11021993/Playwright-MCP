import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly searchInput = 'input[name="search_query"]';
  readonly searchButton = 'button[name="submit_search"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('http://www.automationpractice.pl/index.php');
  }

  async search(term: string) {
    await this.fill(this.searchInput, term);
    await this.click(this.searchButton);
    await this.page.waitForLoadState('networkidle');
  }
}
