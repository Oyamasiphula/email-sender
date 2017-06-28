"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Module from 'module'
var fs = require("fs");
var handlebars = require("handlebars");
emailSender({ coderName: "Sive", email: "sive@gmail.com", subject: "Week 1 feedback", templateName: "notification-1.handlebars", feedBackSeason: "set1" });
function emailSender(emailData) {
    var template = fs.readFileSync('./templates/' + emailData.templateName, 'utf-8');
    var source = handlebars.compile(template);
    //  console.log(template)
    var results = source(emailData);
    console.log(results);
    return results;
}
