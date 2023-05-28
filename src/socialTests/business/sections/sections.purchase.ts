import {Page} from 'playwright'
import {PageUrls} from '../types/types.urls'

class PurchaseSection {
  private page: Page

  static make(page: Page) {
    return new PurchaseSection(page)
  }

  private constructor(page: Page) {
    this.page = page
  }

  /**
   * Default navigate to
   */
  public async navigateTo() {
    // Navigate to section
    const currentLocation = this.page.url().trim()
    if (currentLocation !== PageUrls.PURCHASE) {
      await this.page.goto(PageUrls.PURCHASE)
    }
    return this
  }
}

export {PurchaseSection}
