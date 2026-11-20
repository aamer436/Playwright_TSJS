const {test,expect}=require('@playwright/test'); //these are fixtures = test, expect

test.only("Browser Context-Validating Error login",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const userName=page.locator('#userEmail');
    const password=page.locator("[id='userPassword']");
    const loginBtn=page.locator("[value='Login']");
    const allTitles=page.locator(".card-body b");
    const products = page.locator(".card-body");
    const productName="ZARA COAT 3";
    const cartBtn=page.locator("[routerlink*='cart']");
    const cartProductNames = page.locator(".cart li h3");
    await userName.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await loginBtn.click()
    //await page.waitForLoadState('networkidle'); //this way can handle wait before calling allTextContents
    // but this approach fails in many cases. There is another alternative to this.
    // element.waitFor() or elements.first().waitFor() - simple call first, last, nth
    await allTitles.first().waitFor(); // this is new approach and preferrable
    console.log("all titles "+await allTitles.allTextContents());
    for(let i=0;i<await products.count();++i){
        if(await products.nth(i).locator("b").textContent() === productName){
            //await products.nth(i).locator("text=Add to Cart").click(); //identify element using text
            await products.nth(i).locator("button").nth(1).click(); //identify using further locator chaining
            console.log("clicked success")
            break;
        }
    }
    await cartBtn.click();
    //first way
    await cartProductNames.first().waitFor();
    for(let i=0;i<await cartProductNames.count();++i){
        if(await cartProductNames.textContent()===productName){
            console.log("added to cart successfully")
            break;
        }
    }

    //another way which is good
    await page.locator("h3:has-text('ZARA COAT 3')").waitFor();
    const visible=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(visible).toBeTruthy();
    //await page.pause();

    const checkoutBtn=page.locator("button:has-text('Checkout')");
    await checkoutBtn.click();
    const textFields=page.locator(".input");
    await textFields.first().waitFor();
    await textFields.nth(3).fill("123");
    await textFields.nth(4).fill("AAMER");
    const countryField=page.locator("[placeholder='Select Country']");
    await countryField.pressSequentially("ind",{ delay: 150 }); //delay of 150ms for each key entered
    const countryList=page.locator("section button[class*='ng-star-inserted']");
    await countryList.first().waitFor();
    console.log("country list length "+await countryList.count())
    for(let i=0;i<await countryList.count();++i){
        //console.log("current country value "+await countryList.nth(i).textContent());
        if(await countryList.nth(i).textContent() === " India"){
            await countryList.nth(i).click();
            break;
        }
    }
    const placeOrder=page.locator(".action__submit");
    await placeOrder.click();
    const orderId=page.locator("label.ng-star-inserted");
    console.log("Order id is "+await orderId.textContent())
    const successMsg = page.locator(".hero-primary");
    const successValue=await successMsg.textContent();
    expect(successMsg).toHaveText(" Thankyou for the order. ");
    expect(successValue).toContain(" Thankyou for the order. ");
    const myOrders = page.locator("[routerlink*='myorders']");
    await myOrders.first().click();
    const ordersList = page.locator("tbody th");
    await ordersList.first().waitFor();
    console.log("orderid "+await ordersList.first().textContent());
    await page.pause();
});

test("Flipkart search suggestions",async ({page})=>
{
    await page.goto("https://www.flipkart.com/");
    const closeBtn = page.locator("text=✕");
    const searchbar = page.locator("input[title*='Search for Products']");
    const suggestions = page.locator(".Swx5kP");
    await closeBtn.click();
    await searchbar.first().waitFor();
    await searchbar.first().pressSequentially("mobile",{delay: 500});
    await suggestions.first().waitFor();
    await suggestions.nth(3).locator("a div").nth(2).click();
    await page.pause();
});
