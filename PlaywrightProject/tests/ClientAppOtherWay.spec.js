const {test,expect}=require('@playwright/test'); //these are fixtures = test, expect

test.only("Use playwright locators getByText,Role,Placeholder",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const userName=page.getByPlaceholder("email@example.com");
    const password=page.getByPlaceholder("enter your passsword");
    const loginBtn=page.getByRole("button",{name:'Login'});
    const allTitles=page.locator(".card-body b");
    const products = page.locator(".card-body");
    const productName="ZARA COAT 3";
    const cartBtn=page.locator("[routerlink*='cart']");
    const cartProductNames = page.locator(".cart li h3");
    await userName.fill("m.aamer436b@gmail.com");
    await password.fill("Rahulshetty@1234");
    await loginBtn.click()
    await allTitles.first().waitFor(); // this is new approach and preferrable

    //used variable productName instead of hard coding
    await products.filter({hasText:productName}).getByRole("button",{name:'Add to Cart'}).click(); 

    await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click(); //listitem since Cart button is present in li tag

    await expect(page.getByText(productName)).toBeVisible();
    //await expect(page.getByRole("listitem").getByRole("heading",{name:'ZARA COAT 3'})).toBeVisible();

    await page.getByRole("button",{name:'Checkout'}).click();
    const textFields=page.locator(".input");
    await textFields.first().waitFor();
    await textFields.nth(3).fill("123");
    await textFields.nth(4).fill("AAMER");
    await page.getByPlaceholder("Select Country").pressSequentially("Ind",{delay:500});
    await page.getByRole("button",{name:'India'}).nth(1).click();

    //note here case insensitive also worked fine for 2 steps below
    await page.getByText("PLACE ORDeR").click(); //NOTE here visible button text is used , not the html text which is "Place Holder "
    await expect(page.getByText("THANKYOU FOR THE ORDeR.")).toBeVisible();

    //await page.pause();
});
