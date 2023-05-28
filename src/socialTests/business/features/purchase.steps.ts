import {Given, Then, When} from '@cucumber/cucumber'
import {PageUrls} from '../types/types.urls'

Given('customer:{int} is logged and on the catalogue screen', async function (customerId: number) {
  await this.createBrowserSession(PageUrls.PURCHASE)
})

When('customer:{int} selects {string} to purchase', async function (customerId: number, itemName: string) {
  return 'pending'
})

When('clicks the purchase button', async function () {
})

Then('the users is shown the purchase message {string}', async function (purchaseMessage: string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
