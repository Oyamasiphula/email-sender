"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Module from 'module'
var fs = require("fs");
var template = fs.readFileSync('./templates/notification-1.handlebars', 'utf-8');
console.log(template);
emailSender({ coderName: "Sive", email: "sive@gmail.com", subject: "Week 1 feedback", templateName: "notificationToCoder", feedBackSeason: "set1" });
function emailSender(emailData) {
    return "Hi " + emailData.coderName;
}
