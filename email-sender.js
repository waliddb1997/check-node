var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'waliddabbaghi5@gmail.com',
    pass: 'kkiawyfvdkwiervt'
  }
});

var mailOptions = {
  from: 'waliddabbaghi5@gmail.com',
  to: 'waliddabbaghi5@gmail.com',
  subject: 'walid dabbaghi Sending Email using Node.js ',
  text: 'That was easy! thanks walid dabbaghi'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});