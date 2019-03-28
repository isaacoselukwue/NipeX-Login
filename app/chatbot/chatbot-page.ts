import { EventData, fromObject } from 'tns-core-modules/data/observable';
import { NativeChat } from '@progress-nativechat/nativescript-nativechat';
import { Page } from 'tns-core-modules/ui/page';
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

export function pageLoaded(args: EventData) {
    (<Page>args.object).bindingContext = fromObject({
        nativeChatConfig: {
            botId: '5acddd9715e7187c15f3fc28',
            channelId: 'f91f065c-4079-4fa9-8860-b893e2b81696',
            channelToken: '0570f9a5-6c0e-4b77-b06d-20ce6d5c56d8',
            user: {
                name: 'John Smith'
            },
            session: {
                clear: true,
                userMessage: 'Book a doctor',
                context: {
                    company: 'Progress Software',
                    phone: '555 555 5555'
                }
            }
        }
    });
}


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