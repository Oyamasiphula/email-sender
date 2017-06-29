
import * as nodemailer from 'nodemailer'

var sendMail = (email: String, subject: String, feedBackSeason: String, ): void => {
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
        to: email, // list of receivers
        subject: subject + '✔', // Subject line
        text: feedBackSeason + '✔', // plaintext body
        html: "html" + '<b>Hello world again✔</b>' // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
        //    displaying an error
        console.log(error);
        //Then nothing else
    });
}

exports.sendMail = sendMail;
