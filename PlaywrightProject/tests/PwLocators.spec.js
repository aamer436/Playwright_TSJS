const {test,expect}=require('@playwright/test'); 

test("playwright special locators", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //get by label very suitable for checkboxes, radio button, dropdown
    await page.getByLabel("Check me out if you Love IceCreams!").check(); //check preferred over click
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male"); //selectOption works on select tag only
    await page.getByPlaceholder("Password").fill("abc1244");
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    //default expect wait for 5sec , we can provide step level wait as below.
    //if need for all tests , update in playwright config file
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10_000});
    await page.getByRole("link",{name:'Shop'}).click();
    //await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add '}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click(); // button name can be skipped if there is one btton
    await page.pause();

}
);

test("playwright test,action,expect specific timeout", async({page})=>
{   test.timeout(60000); // applies to test
    page.setDefaultTimeout(10000); //applies to each action
    const slowExpect = expect.configure({timeout:9000}); // applies on expect
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //get by label very suitable for checkboxes, radio button, dropdown
    await page.getByLabel("Check me out if you Love IceCreams!").check(); //check preferred over click
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male",{timeout:5000}); //selectOption works on select tag only
    await page.getByPlaceholder("Password").fill("abc1244"); // getByLabel not used as it not preferred for text
    await page.getByRole("button",{name:'Submit'}).click({timeout:8000}); //timeout applies to this action ONLY
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    //default expect wait for 5sec , we can provide step level wait as below.
    //if need for all tests , update in playwright config file
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link",{name:'Shop'}).click();
    await slowExpect(page.locator("my-4").first()).toHaveText("Shop");

    //await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add '}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click(); // button name can be skipped if there is one btton
    await page.pause();

}
);