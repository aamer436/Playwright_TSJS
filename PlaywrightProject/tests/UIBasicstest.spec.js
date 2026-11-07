const {test}=require('@playwright/test')

test("browser context playwright test",async ({browser})=>
{
    //newContext will spin new browser instance without cookies.
    //If need cookies,proxy, pass it in newContext
    const context=await browser.newContext();
    //(await context).newPage();
    const page=await context.newPage();
    await page.goto("https://www.google.com");

    // In above code, context created without any properties , proxy, cookies. 
    // we can just skip the context create and directly create a page

});

test("page playwright test",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/practice");


});


