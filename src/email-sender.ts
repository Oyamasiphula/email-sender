 // import Module from 'module'
interface EmailData {
  coderName : String
  email:String
  subject: String
  templateName:String
  feedBackSeason:String
}
console.log(emailSender({coderName:"Sive",email:"sive@gmail.com",subject:"Week 1 feedback", templateName: "notificationToCoder",feedBackSeason:"set1"}))

function emailSender(emailData:EmailData){
  return "Hi " + emailData.coderName;
}
