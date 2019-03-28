var observableModule = require("data/observable");
var email = require("../nativescript-email");
var dialogs = require("ui/dialogs");

function HomeViewModel() {
    var viewModel = observableModule.fromObject({
        onEmailSend: function () {

            // basic validation
            if (!this.get("subject") || !this.get("message") || !this.get("toEmail")) {
                return;
            }

            // send to email client
            var ccEmail = "";
            if (this.get("ccEmail")) {
                ccEmail = this.get("ccEmail").split(" ");
            }

            var bccEmail = "";
            if (this.get("bccEmail")) {
                bccEmail = this.get("bccEmail").split(" ");
            }

            email.compose({
                subject: this.get("subject"),
                body: this.get("message"),
                to: this.get("toEmail").split(" "),
                cc: ccEmail,
                bcc: bccEmail,
            }).then(
                function () {
                    alert("Email composer closed!");
                }, function (err) {
                    alert("Error: " + err);
                });
        },
    });

    return viewModel;
}

module.exports = HomeViewModel;
