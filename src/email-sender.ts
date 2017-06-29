 // import Module from 'module'
 import * as fs from 'fs'
 import * as handlebars from 'handlebars'
 import * as emailSender from './nodemailer-tests'


interface EmailData {
  coderName : String
  email:String
  subject: String
  templateName:String
  feedBackSeason:String
}
createMsg({coderName:"Sive",email:"sive@gmail.com",subject:"Week 1 feedback", templateName: "notification-1.handlebars",feedBackSeason:"set1"})

function createMsg(emailData:EmailData) : String {
  let sendMail = { emailSender : String };
  console.log(sendMail.emailSender);
  let template = fs.readFileSync('./templates/'+ emailData.templateName,'utf-8')
  let source = handlebars.compile(template)
  //  console.log(template)
  let results = source(emailData);
  console.log(results)
  return results;
}
