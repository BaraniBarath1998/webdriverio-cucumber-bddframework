const { Given, When, Then } = require("@wdio/cucumber-framework");
// import { Given, When, Then} from "@wdio/cucumber-framework";
const addnoteScreenobj = require("C:/webdriverIO-cucumber-BDDframework/webdriverio-cucumber-bddframework/app/screenobjects/android/addnote-screenobj");
const allureReporter = require('@wdio/allure-reporter').default
// import chai from "chai";


Given("Access the colornote and click on plus icon on top", async() => {
    // Click on allow button
    // allureReporter.addFeature("Verify plus icon is working");
    // allureReporter.addSeverity("Normal");
    // allureReporter.addStory("Color Note plus icon - JIRA 1");
    
    
    await $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click();
    // Click on allow button using POM structure
    // await addnoteScreenobj.permissionBtn.click();
    await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click();
    // Click on skip button
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
})

When('Add new notes and verify notes added successfully', async() => {
    await $('//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]').click();
    await expect ($('//*[@text="Editing"]')).toBeDisplayed();
    const notetitle = await ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'));
    notetitle.click();
    await notetitle.setValue("My fav Cars");


    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'))
      .toHaveText("My fav Cars");
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("1.BMW 2.Benz 3.Porche");

    // save the changes

    await driver.back();
    await driver.back();

    // click on the edit button on notepad
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]').click();
    // await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').click();

    // verify added note value is displaying

    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'))
          .toHaveText("1.BMW 2.Benz 3.Porche");
    
    // clear the values

    await $('~More').click();
    await $('//*[@text="Delete"]').click();
    await $('//*[@text="OK"]').click();
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
    await $('//*[@text="Trash Can"]').click();
    // const notepadname =  await ($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getAttribute("text");
   await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText("My fav Cars");
})