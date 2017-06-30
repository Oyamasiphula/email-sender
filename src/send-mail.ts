
import * as path from 'path'
import * as nodemailer from 'nodemailer'
import * as handlebars from 'express-handlebars'
import * as hbs from 'nodemailer-express-handlebars'
import * as emailSender from './send-mail'
import {EmailData} from './emailData'

export function sendMail (email: string, subject: String, feedBackSeason: String, ): Promise<nodemailer.SentMessageInfo>{
  // create reusable transporter object using SMTP transport

  var transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMUNAME,
      pass: process.env.GMPASS
    }
  });

  let viewEngine = handlebars.create({});

  let sut = hbs({
    viewEngine: viewEngine,
    viewPath: path.resolve(__dirname, '../views')
  });

  transporter.use('compile', sut);
  let options = {};

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
  }

  var toList: [string] = [email];

  // setup e-mail data with unicode symbols
  var mailOptions: nodemailer.SendMailOptions = {
    from: 'Fred Foo ✔ <oyamasiphula@gmail.com>', // sender address
    to: toList, // list of receivers
    subject: "subject" + 'Hello again✔', // Subject line
    text: "text" + 'Hello world again ✔', // plaintext body
    html: "html" + '<b>Hello world again✔</b>' // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error: Error, info: nodemailer.SentMessageInfo): void => {
    //    displaying an error
    console.log(error);
    //Then nothing else
  });


  return transporter.sendMail(mail);
}
