"use strict";
console.log(emailSender({ coderName: "Sive", email: "sive@gmail.com", subject: "Week 1 feedback", templateName: "notificationToCoder", feedBackSeason: "set1" }));
function emailSender(emailData) {
    return "Hi " + emailData.coderName;
}
