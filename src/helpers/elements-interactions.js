async function waitUntilElementFound(page, elementSelector, hasToBeVisible = false) {
  await page.waitForSelector(elementSelector, { visible: hasToBeVisible });
}

async function fillInput(page, inputSelector, inputValue) {
  await page.type(inputSelector, inputValue);
}

async function clickButton(page, buttonSelector) {
  const button = await page.$(buttonSelector);
  await button.click();
}

export { waitUntilElementFound, fillInput, clickButton };
