class addNoteScreen {
   get permissionBtn() {
    return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
   }
}

module.exports = new addNoteScreen();