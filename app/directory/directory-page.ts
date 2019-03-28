/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HomeViewModel } from './directory-view-model';
var view = require("ui/core/view");
var platform = require("platform");
var drawer;


exports.pageLoaded = function (args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");

    page.getViewById("addButtonContainer").top = platform.screen.mainScreen.heightDIPs - 120;
};

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

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