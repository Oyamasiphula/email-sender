
import * as nodemailer from 'nodemailer'

// create reusable transporter object using SMTP transport
var transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'oyamasiphula@gmail.com',
        pass: 'oysiphula2241'
    }
});

// create reusable transporter object using SMTP transport and set default values for mail options.
transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'oyamasiphula@gmail.com',
        pass: 'oysiphula2241'
    }
}, {
    from: 'oyamasiphula@gmail.com',
    headers: {
        'My-Awesome-Header': 'exmple of a header'
    }
});

// setup e-mail data with unicode symbols
var mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <oyamasiphula@gmail.com>', // sender address
    to: 'onwaba.mrhwetyana@gmail.com', // list of receivers
    subject: "subject" + 'Hello again✔', // Subject line
    text: "text" + 'Hello world again ✔', // plaintext body
    html: "html" + '<b>Hello world again✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
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
