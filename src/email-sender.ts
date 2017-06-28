 // import Module from 'module'
 import * as fs from 'fs'
 import * as handlebars from 'handlebars'



interface EmailData {
  coderName : String
  email:String
  subject: String
  templateName:String
  feedBackSeason:String
}
emailSender({coderName:"Sive",email:"sive@gmail.com",subject:"Week 1 feedback", templateName: "notification-1.handlebars",feedBackSeason:"set1"})

function emailSender(emailData:EmailData) : String {
  let template = fs.readFileSync('./templates/'+ emailData.templateName,'utf-8')
  let source = handlebars.compile(template)
  //  console.log(template)
  let results = source(emailData);
  console.log(results)
  return results;
}
