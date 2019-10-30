// const mailjet = require ('node-mailjet')
// .connect('76449cded683003584bf22c397024a7e', '6de451fea44080b7332d58f370ccd62d')
// const request = mailjet
// .post("send", {'version': 'v3.1'})
// .request({
//   "Messages":[
//     {
//       "From": {
//         "Email": "diego.guizag@gmail.com",
//         "Name": "Diego"
//       },
//       "To": [
//         {
//           "Email": "diego.guizag@gmail.com",
//           "Name": "Diego"
//         }
//       ],
//       "Subject": "Greetings from Mailjet.",
//       "TextPart": "My first Mailjet email",
//       "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//       "CustomID": "AppGettingStartedTest"
//     }
//   ]
// })
// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })

var nodemailer = require('nodemailer');

 //Creamos el objeto de transporte
 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'diego.guizag@gmail.com',
     pass: '1022981362*.*28032536'
   }
 });

 var mensaje = "Hola desde nodejs...";

 var mailOptions = {
   from: 'diego.guizag@gmail.com',
   to: 'diego.guizag@gmail.com',
   subject: 'Asunto Del Correo',
   text: mensaje
 };

 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email enviado: ' + info.response);
   }
 });


