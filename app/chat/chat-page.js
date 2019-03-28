const platform = require('tns-core-modules/platform');
const topmost = require('tns-core-modules/ui/frame').topmost;
const observableArray = require('tns-core-modules/data/observable-array').ObservableArray;
const ChatViewModel = require('./chat-view-model');
const ChatService = require('~/services/chat-service');
const KeyboardService = require('~/services/keyboard-service');

let chatVM = new ChatViewModel();

var view = require("ui/core/view");
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

function onLoaded(args) {
    const page = args.object;

    if (platform.isAndroid) {
        KeyboardService.addOnAndroidKeyboardListener(page, _adaptFrame);
    } else if (platform.isIOS) {
        KeyboardService.addOnIOSKeyboardListener(_adaptFrame);
    }
}

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = chatVM;
    _bindNavigationContext(page);
}

function onBackButtonTap() {
    topmost().goBack();
}

function pressSend() {
    chatVM.send();
    KeyboardService.closeIOSKeyboard();
}

function drawMessage(msg) {
    chatVM.drawMessage(msg);
}

function _bindNavigationContext(page) {
    const context = page.navigationContext;

    if (!context) return;

    for (let key in context) {
        chatVM.set(key, context[key]);
    }

    chatVM.set('chatView', page.getViewById('chatHistory'));

    ChatService.getChatHistory(chatVM.get('id')).then(history => {
        chatVM.set('history', new observableArray(history));
        chatVM.scrollToBottom();
    });
}

function _adaptFrame(size) {
    //if (size > 150) chatVM.scrollToBottom();
}

exports.onLoaded = onLoaded;
exports.onNavigatingTo = onNavigatingTo;
exports.onBackButtonTap = onBackButtonTap;
exports.pressSend = pressSend;
exports.drawMessage = drawMessage;