import puppeteer from 'puppeteer';

jest.setTimeout(60000);

describe('card validate', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('should validate', async () => {
    await page.goto(baseUrl);
    const input = await page.$('#app__input');
    await input.type('2720990778715364');
    const button = await page.$('#app__btn');
    await button.click();
    await page.waitForSelector('.alert-success');
  });
});
