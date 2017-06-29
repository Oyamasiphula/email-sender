
import * as nodemailer from 'nodemailer'

// create reusable transporter object using SMTP transport
var transporter: nodemailer.Transporter = nodemailer.createTransport({
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
var mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <oyamasiphula@gmail.com>', // sender address
    to: 'onwa.mrhwetyana@gmail.com', // list of receivers
    subject: "subject" + 'Hello again✔', // Subject line
    text: "text" + 'Hello world again ✔', // plaintext body
    html: "html" + '<b>Hello world again✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {

  console.log(error);
	// nothing
});
