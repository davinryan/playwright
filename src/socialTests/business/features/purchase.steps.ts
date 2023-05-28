import {Given, Then, When} from '@cucumber/cucumber'
import {PageUrls} from '../types/types.urls'
import {catalogueNameIdMap} from '../util/mappers'
import {expect} from '@playwright/test'

Given('customer:{int} is logged and on the catalogue screen', async function (customerId: number) {
  await this.createBrowserSession(PageUrls.PURCHASE)
})

When('customer:{int} purchases {string}', async function (customerId: number, itemName: string) {
  await this.page.getByTestId(`catalogueItem_purchase_${catalogueNameIdMap[itemName.trim()]}`).click()
  await this.page.pause();
})

Then('the users is shown the purchase message {string}', async function (purchaseMessage: string) {
  const actualMessage = this.page.getByText(purchaseMessage.trim())
  await expect(actualMessage).toContainText(purchaseMessage.trim())
})
