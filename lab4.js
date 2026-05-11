const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: 1280,
        height: 1400
    });

    // 進入首頁
    await page.goto('https://pptr.dev/', {
        waitUntil: 'domcontentloaded'
    });

    // 點搜尋按鈕
    await page.click('button.DocSearch-Button');

    // 模擬輸入
    await page.keyboard.type('what the dog doing');

    // 直接前往 Coverage 頁面
    await page.goto('https://pptr.dev/api/puppeteer.coverage', {
        waitUntil: 'domcontentloaded'
    });

    // 取得 title
    const title = await page.title();

    console.log('Page Title:', title);

    await browser.close();

})();