const SparkPost = require('sparkpost');

const client = new SparkPost(process.env.SPARKPOST);

function getRecipients() {
  return process.env.ADMIN_EMAIL.split(',').map((recipient) => ({
    address: recipient.trim(),
  }));
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    await client.transmissions.send({
      content: {
        from: 'csp@mailer.hinduweddingpriest.org',
        subject: 'CSP Violation',
        html: `
          <html>
            <body>
            ${event.body}
            </body>
          </html>
        `,
      },
      recipients: getRecipients(),
    });

    return {
      statusCode: 200,
      body: 'OK',
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: 'Something went wrong',
    };
  }
};
