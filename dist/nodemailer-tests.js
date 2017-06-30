"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMUNAME,
        pass: process.env.GMPASS
    }
});
// create reusable transporter object using SMTP transport and set default values for mail options.
transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMUNAME,
        pass: process.env.GMPASS
    }
});
// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <oyamasiphula@gmail.com>',
    to: 'onwa.mrhwetyana@gmail.com',
    subject: "subject" + 'Hello again✔',
    text: "text" + 'Hello world again ✔',
    html: "html" + '<b>Hello world again✔</b>' // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    console.log(error);
    // nothing
});
