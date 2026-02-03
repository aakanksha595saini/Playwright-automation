//@ts-check semantic checks in JS

import {test, expect} from "@playwright/test";
// import { chromium, devices } from "playwright"; 

test('Automate first',async({page}) =>
{
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle('/Automation/');
    await page.getByRole('button',{name:'Test Cases'}).click();
    page.pause();
    

})