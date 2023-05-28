import {After, Before, BeforeAll, ITestCaseHookParameter, setDefaultTimeout} from '@cucumber/cucumber'
import {TestStepResultStatus} from '@cucumber/messages'
import {Buffer} from 'node:buffer'

// tslint:disable:no-console

setDefaultTimeout(1800000)

// tslint:disable:only-arrow-functions

Before({tags: '@ignore'}, async function () {
  return 'skipped'
})

Before({tags: '@debug'}, async function () {
  this.debug = true
})

Before({tags: '@manual'}, async function () {
  return 'skipped'
})

/**
 * Before each scenario hook
 */
Before({tags: '@social'}, async function (scenario: ITestCaseHookParameter) {
  this.context = {
    ...this.context,
    scenario: {
      id: scenario.pickle.id,
      name: scenario.pickle.name
    }
  }
})

After({tags: '@social'}, async function (scenario: ITestCaseHookParameter) {
  if (scenario.result.status === TestStepResultStatus.FAILED) {
    try {
      const data18 = await this.page.screenshot()
      const image18 = Buffer.from(data18)
      await this.attach(image18, 'image/png')
    } catch (e) {
      console.error(e.message)
    }
  }
  try {
    await this.page.close()
  } catch (error: unknown) {
    console.warn(`Failed to shutdown Playwright browser. Error as ${JSON.stringify(error)}`)
  }
})

BeforeAll(async function () {
  return 'skipped'
})
