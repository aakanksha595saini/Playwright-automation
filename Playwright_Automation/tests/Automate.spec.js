//@ts-check semantic checks in JS
import {test, expect} from "@playwright/test";
import { count } from "node:console";
import { chromium  } from "playwright";
test('Automate first',
  async() =>
{
 
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation/)
  let i =0
  let items =""
  let productname = "Stylish Dress"
  const women_dress =  page.locator('.productinfo.text-center')
   
    // await page.getByRole('button',{name:'Test Cases'}).click();
    await page.locator("a[href='/products']").click()
    await page.locator("//a[@href='#Women']").click()
    const options_ =await page.locator("//div[@id='Women']//ul//li").allTextContents()
    for (const i of await page.locator("//div[@id='Women']//ul//li").allTextContents())
    {
        await page.waitForLoadState('load')
        await page.getByRole('listitem').getByText('Dress').click()
    }
    // await page.waitForLoadState('networkidle') 
    await page.locator('.product-image-wrapper p').last().waitFor();
    const products = await page.locator('.product-image-wrapper p').allTextContents()
    //Dynamic way to add product
    const count =await women_dress.count()
    for (let i=0;i<count;++i)
    {
      if(await women_dress.nth(i).locator('p').textContent()===productname){
        // console.log( women_dress.nth(i).locator('p').allInnerTexts())
        await women_dress.nth(i).locator('.add-to-cart').click()
        break

      }
    }
//second way to add product
    // for (const i of products )
    //   {
    //     // console.log("Found prducts ",i)
    //     if (i =='Sleeveless Dress')
    //       {
    //       // console.log(await page.locator('.product-image-wrapper').filter({hasText: 'Sleeveless Dress'}).first().allInnerTexts())
    //       await page.locator('.product-image-wrapper').filter({hasText:'Sleeveless Dress'}).getByText('Add to cart').first().click()
    //     }
       
    //   }
    await page.locator('.modal-footer button').click()
    page.on('dialog',dialog =>dialog.dismiss())
    await page.locator('div ul a').filter({hasText: 'Cart'}).click()
      // await page.getByText('Continue to cart').click()
    await page.locator('a',{hasText:'Proceed To Checkout'}).click()
page.pause();
});