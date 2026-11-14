const {test,expect}=require('@playwright/test'); //these are fixtures = test, expect
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

test("page playwright test",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=page.locator('#username');
    const password=page.locator("[id='password']");
    const signInbtn = page.locator("[name='signin']");
    const cardTitles = page.locator('.card-body a');
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill("rahul");
    await password.fill("Learning@830$3mK2");
    await signInbtn.click();
    const errorMessage=await page.locator('[style*="block"]').textContent();
    console.log("Error value "+errorMessage);
    await expect(page.locator('[style*="block"]')).toContainText("Incorrect");
    //await userName.fill("");
    await userName.clear();
    await userName.fill("rahulshettyacademy");
    await signInbtn.click();
    //await expect(page.locator('.card-body a')).toHaveCount(4);
    console.log("text of first element "+await cardTitles.first().textContent());
    //console.log("text of first element "+await cardTitles.nth(0).textContent());
    //console.log("text of first element "+await cardTitles.last().textContent());
    //console.log("text of first element "+await cardTitles.nth(2).textContent());
    console.log("all titles "+await cardTitles.allTextContents());
    // *** textContent() waits for element to be visible and attached to dom as per playwright document
    // allTextContents() does not wait for the same.. Hence no value returned .
});


test("UI controls",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=page.locator('#username');
    const password=page.locator("[id='password']");
    const signInbtn = page.locator("[name='signin']");
    const dropdown=page.locator("select.form-control");
    const role=page.locator(".radiotextsty").last();
    const okay=page.locator("#okayBtn");
    const terms = page.locator("#terms");
    const documentLink = page.locator("[href*='documents-request]");
    await expect(documentLink).toHaveAttribute("class","blinkingText"); //verify attribute value
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    //select dropdown
    await dropdown.selectOption("consult");
    //radio button
    await role.click();
    await okay.click();
    console("role checked "+await role.isChecked()); //ischecked returns true or false
    await expect(role).toBeChecked(); // to be checked is an assertion
    await terms.click();
    await expect(terms).toBeChecked();
    await terms.uncheck();
    expect(await terms.isChecked()).toBeFalsy(); //this is calling await inside expect
    await page.pause();
    await signInbtn.click();

});


test.only("child window handle",async({browser})=>
{   
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    //await documentLink.click(); //new page is opened
    //const page2=context.waitForEvent('page'); //listen for any new page to open

    //Promise concept - every line in js with an action requires await as js is asynchronous.
    //Here the use case is waitForEvent need to listen to documentLink.click() meaning both should execute at same time.
    //we go with promise concept here  - each line once executed returns one of 3 states - pending, rejected, fulfilled
    //using Promise.all([,,]); we pass all such states as array.
    //promise.all waits for all actions to return fulfilled state. It keeps looping till all return fulfilled

    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ])
    const txt=await newPage.locator(".red").textContent();
    console.log("text value "+txt);
    const arrayTxt = txt.split("@");
    const domain = arrayTxt[1].split(" ")[0];
    await page.locator("#username").fill(domain);
    //await page.pause();
    console.log("username typed "+await page.locator("#username").textContent());



});