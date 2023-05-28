import {Given, Then, When} from '@cucumber/cucumber'
import {PageUrls} from '../types/types.urls'
import {catalogueNameIdMap} from '../util/mappers'
import {expect} from '@playwright/test'
import {setAPIMockResponse, setAPIMockResponseFromPath} from '../util/util.api'
import {join} from 'path'
import {CatalogueBuilder} from '../util/CatalogueBuilder'

Given('customer:{int} is logged and on the catalogue screen', async function (customerId: number) {
  await this.createBrowserSession(PageUrls.PURCHASE)
})
Given('available catalogue items are from the school holidays collection', async function () {
  await setAPIMockResponseFromPath(this.page, '**/catalogue/items', join(__dirname, 'purchase.data.summerCollection.json'))
  await this.page.getByTestId('catalogue_refresh').click()
})

Given('available catalogue items are from the school holidays collection using builder pattern', async function () {
  await setAPIMockResponse(this.page, '**/catalogue/items', CatalogueBuilder.make()
    .addItem('4', 'iPhone 20', 1200, 'NZD', 'Great for being connected... and anti-social', 10)
    .addItem('5', 'Dell XPS 7300', 3500, 'NZD', 'Participate in society', 5)
    .addItem('6', 'External drive 1TB', 150, 'NZD', 'Store your stuff', 15)
    .build())
  await this.page.getByTestId('catalogue_refresh').click()
})

When('customer:{int} purchases {string}', async function (customerId: number, itemName: string) {
  await this.page.getByTestId(`catalogueItem_purchase_${catalogueNameIdMap[itemName.trim()]}`).click()
})

When('no catalogue items are available due to a server outage', async function () {
  await setAPIMockResponse(this.page, '**/catalogue/items', CatalogueBuilder.make()
    .hasServer500Error()
    .build(), 500)
  await this.page.getByTestId('catalogue_refresh').click()
});


Then('the users is shown the purchase message {string}', async function (purchaseMessage: string) {
  const actualMessage = this.page.getByText(purchaseMessage.trim())
  await expect(actualMessage).toContainText(purchaseMessage.trim())
})

Then('the user is presented with the outage error {string}', async function (outageError: string) {
  const errorElement = this.page.getByTestId('catalogueItems_outageError')
  await expect(errorElement).toHaveText(outageError.trim())
});
