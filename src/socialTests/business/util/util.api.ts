import fs from "fs";
import { Page } from "playwright";

/**
 * Intercept and return your own response for a given API call from a file located at a given path
 *
 * @param playwrightPageObject main playwright page object created when browser created
 * @param mockResponseFilePath path to response data file
 * @param apiPath API Regex path to filter for to identify which API call to intercept
 */
const setAPIMockResponseFromPath = async (
  playwrightPageObject: Page,
  apiPath: string,
  mockResponseFilePath: string
) => {
  const responseDataRaw: any = await fs.readFileSync(mockResponseFilePath);
  const responseData: string = String(responseDataRaw).toString();
  await playwrightPageObject.route(apiPath, (route: any) =>
    route.fulfill({
      status: 200,
      body: responseData,
    })
  );
};

/**
 * Intercept and return your own response for a given API call from a file located at a given path
 *
 * @param playwrightPageObject main playwright page object created when browser created
 * @param mockResponse Javascript object of response
 * @param apiPath API Regex path to filter for to identify which API call to intercept
 */
const setAPIMockResponse = async (
  playwrightPageObject: Page,
  apiPath: string,
  mockResponse: any
) => {
  await playwrightPageObject.route(apiPath, (route: any) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify(mockResponse),
    })
  );
};

export { setAPIMockResponseFromPath, setAPIMockResponse };
