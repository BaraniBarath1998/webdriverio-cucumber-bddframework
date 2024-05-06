const {Given,When,Then} = require('@cucumber/cucumber')

Given('open the application on virtaul device', async() => {
    
    const appOption =  $('~App');
    await appOption.click();
    const actionbar = $('~Action Bar');
    await expect(actionbar).toBeExisting();

    return console.log('Appoptions are found in the given condition');
    
  });


Given('findandvalidate element using class name' , async() => {
  const classname = await $('android.widget.TextView');
  console.log(await classname.getText());

  await expect(classname).toHaveText("API Demos");
});

Given('Find Elements using xpath and check alert boxes', async () => {
    // click on the alert Dialouge
  await $('//android.widget.TextView[@content-desc="App"]').click();
    return console.log('Alert Dialouge are clicked successfully');
  });

When('click on the alertbox', async () => {
  //click on list dialouge alert box
  await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
  await $('//android.widget.Button[@content-desc="List dialog"]').click();
   return console.log('list dialouge alert box click successfully');
  })

Then('verify alertbox is appearing' , async() => {
  //here find element by text 
  await $('//android.widget.TextView[@text="Command two"]').click();
  const textassertion =  $('//android.widget.TextView');
  await expect(textassertion).toHaveText("You selected: 1 , Command two");
})

Given('Find and click views api from home page' , async() =>{
  //enter xpath for find views API 
  await $('//android.widget.TextView[@content-desc="Views"]').click();
  await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();
  await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
})

When('enter country name', async() => {
  const textfield =  $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');
  await textfield.addValue('Canada');
  await expect (textfield).toHaveText('Canada');
})

Then('country name verification', async() => {
  console.log('Country name verified');
})



