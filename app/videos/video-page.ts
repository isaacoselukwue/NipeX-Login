import { EventData } from 'data/observable';
import { StackLayout } from 'ui/layouts/stack-layout';
import { HomeViewModel } from './video-view-model';
import { Video } from '../nativescript-videoplayer';

let page;

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

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = <StackLayout>args.object;
    page.bindingContext = new HomeViewModel();
}

export function play() {
    let video = <Video>page.getViewById("nativeVideoPlayer");
    video.play();
}

export function pause() {
    let video = <Video>page.getViewById("nativeVideoPlayer");
    video.pause();
}

export function seekToTime() {
    let video = <Video>page.getViewById("nativeVideoPlayer");
    video.seekToTime(30000);
}