const {test,expect}=require('@playwright/test') //these are fixtures = test, expect
//const {expect}=require('../playwright.config')

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

test.only("page playwright test",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=page.locator('#username');
    const password=page.locator("[id='password']");
    const signInbtn = page.locator("[name='signin']");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill("rahul");
    await password.fill("Learning@830$3mK2");
    await signInbtn.click();
    const errorMessage=await page.locator('[style*="block"]').textContent();
    console.log("Error value "+errorMessage);
    await expect(page.locator('[style*="block"]')).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInbtn.click();
    await expect(page.locator('.card-body a')).toHaveCount(4);
    console.log("text of first element "+await page.locator('.card-body a').first().textContent());
    console.log("text of first element "+await page.locator('.card-body a').nth(0).textContent());



});


