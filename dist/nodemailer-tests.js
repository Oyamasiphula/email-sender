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
}, {
    from: 'oyamasiphula@gmail.com',
    headers: {
        'My-Awesome-Header': 'exmple of a header'
    }
});
// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <oyamasiphula@gmail.com>',
    to: 'onwaba.mrhwetyana@gmail.com',
    subject: "subject" + 'Hello again✔',
    text: "text" + 'Hello world again ✔',
    html: "html" + '<b>Hello world again✔</b>' // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    console.log(error);
    // nothing
});
// // promise send mail without callback
// transporter
//   .sendMail(mailOptions)
//   .then(info => info.messageId)
// // create template based sender function
// var sendPwdReset = transporter.templateSender({
//     subject: 'Password reset for {{username}}!',
//     text: 'Hello, {{username}}, Please go here to reset your password: {{ reset }}',
//     html: '<b>Hello, <strong>{{username}}</strong>, Please <a href="{{ reset }}">go here to reset your password</a>: {{ reset }}</p>'
// }, {
//     from: 'sender@example.com',
// });
// // use template based sender to send a message
// sendPwdReset({
//     to: 'receiver@example.com'
// }, {
//     username: 'Node Mailer',
//     reset: 'https://www.example.com/reset?token=<unique-single-use-token>'
// })
// .then(info => info.messageId);
