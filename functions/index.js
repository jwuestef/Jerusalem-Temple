
// Environment variables
// *variables must be all lowercase

// To set, type in command line:
// firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"

// To view all, type in command line:
// firebase functions:config:get

// To delete, type in command line:
// firebase functions:config:unset [key1] [key2...]

// Use the environment variable in a function:
// functions.config().someservice.id


// Require the node modules
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Pull the gmail login info out of the environment variables
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// Configure the nodemailer with our gmail info
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});



// TO DO: Create a function to email us for the Prayer Request form submission too



// Sends an email to our Gmail account when someone submits the Contact Us form
exports.sendMessage = functions.https.onRequest( (req, res) => {

  // Initialize the mailOptions variable
  const mailOptions = {
    from: gmailEmail,
    to: gmailEmail,
  };

  // Building Email message.
  mailOptions.subject = 'Contact form submitted';
  mailOptions.text = `
    New contact form submission:
      Name: ${req.body.contactRequestName}
      Email: ${req.body.contactRequestEmail}
      Phone: ${req.body.contactRequestPhone}
      Message: ${req.body.contactRequestMessage}
  `;

  return mailTransport.sendMail(mailOptions).then( () => {
    res.send('Message has been sent!');
  }).catch( err => {
    console.error('There was an error while sending the email:', err);
    res.send('Error sending message. Please contact us at JTAIndy@gmail.com');
  });


});