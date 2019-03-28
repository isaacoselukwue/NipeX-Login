
var frameModule = require("tns-core-modules/ui/frame");
var HomeViewModel = require("./email-view-model");

var homeViewModel = new HomeViewModel();

var view = require("ui/core/view");
var platform = require("platform");
var drawer;


exports.pageLoaded = function (args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");

    page.getViewById("addButtonContainer").top = platform.screen.mainScreen.heightDIPs - 120;
};

exports.toggleDrawer = function () {
    drawer.toggleDrawerState();
};

exports.onNewsfeed = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./newsfeed/newsfeed-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 200,
            curve: "easeIn"
        }
    });
}

exports.navigateLogin = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./login/login-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 200,
            curve: "easeIn"
        }
    });
}

exports.onClose = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./home/home-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onDirectory = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./directory/directory-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onVideos = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./videos/video-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onChat = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./chat/chat-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onChatview = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./chatview/chatview-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onChatbot = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./chatbot/chatbot-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

exports.onEmail = function (args) {
    args.object.page.frame.navigate({
        moduleName: "./email/email-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 0,
            curve: "easeIn"
        }
    });
}

function pageLoaded(args) {
    /*
      This gets a reference this page’s <Page> UI component. You can
      view the API reference of the Page to see what’s available at
      https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
      */
    var page = args.object;

    /*
      A page’s bindingContext is an object that should be used to perform
      data binding between XML markup and JavaScript code. Properties
      on the bindingContext can be accessed using the {{ }} syntax in XML.
      In this example, the {{ message }} and {{ onTap }} bindings are resolved
      against the object returned by createViewModel().
  
      You can learn more about data binding in NativeScript at
      https://docs.nativescript.org/core-concepts/data-binding.
      */
    page.bindingContext = homeViewModel;
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the pageLoaded
function here makes the pageLoaded="pageLoaded" binding in this page’s XML
file work.
*/
exports.pageLoaded = pageLoaded;
