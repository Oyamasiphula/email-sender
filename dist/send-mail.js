"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var nodemailer = require("nodemailer");
var handlebars = require("express-handlebars");
var hbs = require("nodemailer-express-handlebars");
function sendMail(email, subject, feedBackSeason) {
    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMUNAME,
            pass: process.env.GMPASS
        }
    });
    var viewEngine = handlebars.create({});
    var sut = hbs({
        viewEngine: viewEngine,
        viewPath: path.resolve(__dirname, '../views')
    });
    transporter.use('compile', sut);
    var options = {};
    transporter.use('compile', hbs(options));
    //send mail with options
    var mail = {
        from: process.env.GMUNAME,
        to: 'onwa.mrhwetyana@gmail.com',
        subject: 'Test1',
        template: 'notification-1',
        context: {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            coderName: 'CoderName',
            feedBackSeason: 'FeedBackSeason',
            templateName: 'TemplateName'
        }
    };
    var toList = [email];
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Fred Foo ✔ <oyamasiphula@gmail.com>',
        to: toList,
        subject: "subject" + 'Hello again✔',
        text: "text" + 'Hello world again ✔',
        html: "html" + '<b>Hello world again✔</b>' // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        //    displaying an error
        console.log(error);
        //Then nothing else
    });
    return transporter.sendMail(mail);
}
exports.sendMail = sendMail;
