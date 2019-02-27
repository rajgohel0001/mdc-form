//header------------------------
mdc.autoInit();
 var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
 const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
 const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
 //snackbar.open();
 topAppBar.setScrollTarget(document.getElementById('main-content'));
 topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

mdc.textField.MDCTextField.attachTo(document.querySelector('.myText3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText4'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText5'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText6'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.fnm'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.lnm'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.eml'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.pwd'));

const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
$('#signup').on('click',function(evt){
	dialog2.open();
});
function signup(){
	// var fname = document.getElementById('fnm').value;
	// var lname = document.getElementById('lnm').value;
	// var email = document.getElementById('email').value;
	// var pwd = document.getElementById('pwd').value;
	// console.log("FirstName: " , fname);
	// console.log("LastName: ", lname);
	// console.log("Email:", email);
	// console.log("Password: " , pwd);
}

//menu-------------------------
const m = window.mdc.menu;
const btn = document.querySelector('.more-option');

const menu = new m.MDCMenu(document.querySelector('.mdc-menu'));
menu.setAnchorCorner(m.Corner.TOP_RIGHT)
menu.setAnchorElement(document.querySelector('.mdc-button'));

btn.addEventListener('click', () => {
	menu.open = !menu.open;
});
$('#subm').on('click',function(){
	snackbar.open();
});