var myApp = new Framework7({
    animateNavBackIcon: true
});

var $$ = Dom7;

//add view1
var view1= myApp.addView('#view-1', {
    dynamicNavbar: true,
    domCache: true
});
