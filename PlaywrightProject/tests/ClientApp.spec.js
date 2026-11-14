const {test,expect}=require('@playwright/test') //these are fixtures = test, expect

test("Browser Context-Validating Error login",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const userName=page.locator('#userEmail');
    const password=page.locator("[id='userPassword']");
    const loginBtn=page.locator("[value='Login']");
    const allTitles=page.locator(".card-body b");

    await userName.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await loginBtn.click()
    await page.waitForLoadState('networkidle'); //this way can handle wait before calling allTextContents
    // but this approach fails in many cases. There is another alternative to this.
    // element.waitFor() or elements.first().waitFor() - simple call first, last, nth
    console.log("all titles "+allTitles.allTextContents());
    allTitles.waitFor(); // this is new approach and preferrable
    allTitles.first().waitFor();

});