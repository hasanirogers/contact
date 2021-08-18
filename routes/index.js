const express = require('express');
const router = express.Router();
const sendGrid = require('@sendgrid/mail');

/* POST Email */
router.post('/contact', (request, response) => {
  const textContent = `
    ${request.body.user} wrote the following: \n
    ${request.body.message} \n
    ----------------------------------------- \n
    Email: ${request.body.email} \n
    Phone: ${request.body.phone} \n
  ` ;

  const htmlContent = `
    <h3>${request.body.user} wrote the following:</h3>
    <hr />
    <article>
      ${request.body.message}
    </article>
    <hr />
    <div>Email: ${request.body.email}</div>
    <div>Phone: ${request.body.phone}</div>
  `; 

  const message = {
    to: 'hasani.rogers@gmail.com',
    from: request.body.email,
    subject: request.body.user + ' wants your professional attention!',
    text: textContent,
    html: htmlContent,
  };

  response.setHeader('Content-Type', 'text/plain'); // node requires text/plain
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

  sendGrid
    .send(message)
    .then(() => {
      // we're good send the data
      const responseData = {
        message: 'SUCCESS',
        code: 200,
      };

      response
        .status(200)
        .json(responseData);

      response.end(JSON.stringify(request.body, null, 2));
    })
    .catch(error => {
      // there was problem with sending the mail
      const {message, code} = error;

      const responseData = {
        message: message,
        code: code,
        body: error.response.body
      }

      response
        .status(code)
        .json(responseData);

      response.end(JSON.stringify(request.body, null, 2));
    });
});

module.exports = router;