const {Given,When,Then} = require('@cucumber/cucumber')

Given('Access the App Alert Dialouge box directly', async () => {
  // Write code here that turns the phrase above into concrete actions
  await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

  await driver.pause(5000);

  await expect ($('//android.widget.TextView[@text="App/Alert Dialogs"]')).toExist();

  return console.log("Access the App/Alert Dialouge box directly ran successfully");
})

When('Click repeat alarm button', async() => {
    await $('//android.widget.Button[@content-desc="Repeat alarm"]').click();
})

Then('Verify repeat alarm popup is coming', async() => {
    await expect ($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).toExist();
})

When('click on okcancel dialogue with message', async() => {
    await $('//android.widget.Button[@content-desc="OK Cancel dialog with a long message"]').click();
})

Then('verify the alert box', async() => {
    await $('//android.widget.Button[@resource-id="android:id/button2"]').click();
})

Given('Access the App Activity page', async() => {
    await $('~App').click();
    await $('~Activity').click();
    await driver.pause(5000);
    await expect($('//android.widget.TextView[@text="API Demos"]')).toExist();
})

When('Scrool to the Security surfaces in the page', async() => {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    driver.pause(50000);
    await $('~Secure Surfaces').click();
})

Then('verify Security surface options' , async() => {
    await expect($('~Secure Dialog')).toExist();
})

Given('Access the Gallary page directly', async() => {
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
})

When('Scrool to any one of the image horizontally', async() => {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    driver.pause(5000);
})

Given('Access the Date widget dialog box', async() => {
    await driver.startActivity("io.appium.android.apis" , "io.appium.android.apis.view.DateWidgets1");
    driver.pause(3000);
})

When('Get the currentdate and change the date', async() => {
   const currentdate = await ($('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]'));
   const date = currentdate.getText();
   await $('~change the date').click();
   //scrool to right
   await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
   //pick 10th date
   await $('\\*[text="10"]').click();
   //click ok button
   await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
   //verify date changed
   await  expect(await currentdate.getText()).not.toEqual(date);
})





