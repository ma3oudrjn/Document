var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'ma3oudx@outlook.com',
    pass: ''
  }
});


var mailOptions = {
  from: 'ma3oudx@outlook.com',
  to: 'masoudrng2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});