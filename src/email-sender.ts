 // import Module from 'module'
 import * as fs from 'fs'
 import {sendMail} from './send-mail'
 import * as handlebars from 'handlebars'
 import {EmailData} from './emailData'
 import * as emailSender from './send-mail'


createMsg({coderName:"Sive",email:"sive@gmail.com",subject:"Week 1 feedback", templateName: "notification-1.handlebars",feedBackSeason:"set1"})

function createMsg(emailData:EmailData) : String {
  let sendMail:any =  emailSender ;
  console.log(sendMail.emailSender());
  let template = fs.readFileSync('./templates/'+ emailData.templateName,'utf-8')
  let source = handlebars.compile(template)
  //  console.log(template)
  let results = source(emailData);
  console.log(results)
  return results;
}
