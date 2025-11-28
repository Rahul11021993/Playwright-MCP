import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SearchResultsPage extends BasePage {
  readonly productNamesSelector = '.product_list .product-name';

  constructor(page: Page) {
    super(page);
  }

  async getProductNames(): Promise<string[]> {
    // Wait for either results or a no-result message
    await this.page.waitForLoadState('networkidle');
    const elems = await this.page.$$(this.productNamesSelector);
    const names: string[] = [];
    for (const el of elems) {
      const txt = (await el.textContent())?.trim() ?? '';
      names.push(txt);
    }
    return names;
  }

  async hasProduct(name: string): Promise<boolean> {
    const names = await this.getProductNames();
    const normalized = name.toLowerCase();
    return names.some(n => n.toLowerCase().includes(normalized) || n.toLowerCase() === normalized);
  }
}
