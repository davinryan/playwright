import playwright from 'playwright'
import {IWorldOptions, setWorldConstructor} from '@cucumber/cucumber'
import {ICreateAttachment, ICreateLog} from '@cucumber/cucumber/lib/runtime/attachment_manager'
import {PageUrls} from '../types/types.urls'

class CustomWorld {
  page?: playwright.Page
  log?: ICreateLog
  attach?: ICreateAttachment

  constructor(options: IWorldOptions) {
    this.attach = options.attach
    this.log = options.log
  }

  private async createBrowserSessionOnly() {
    // 1. Create browser session if one doesn't exist
    if (this.page === undefined) {

      const browser = await playwright.chromium.launch({
        headless: false,
        devtools: true
      })
      const context: playwright.BrowserContext = await browser.newContext()
      this.page = await context.newPage()
    }
  }

  /**
   * Navigate to a location. Navigation does not occur if you are already at target location.
   *
   * @param target URL target or destination to navigate to
   */
  async navigateTo(target: string | PageUrls) {
    const url = PageUrls[target] ?? target
    const currentLocation = await this.page.url().trim()
    if (currentLocation !== url) {
      await this.page.goto(url)
    }
  }

  /**
   * Create browser session and navigate to a location. Navigation does not occur if you are already at target location.
   *
   * @param target URL target or destination to navigate to
   */
  async createBrowserSession(target: string | PageUrls) {
    // 1. Create browser session if one doesn't exist
    await this.createBrowserSessionOnly()

    // 2. Navigate to destination if we are not already there
    await this.navigateTo(target)
  }
}

setWorldConstructor(CustomWorld)
