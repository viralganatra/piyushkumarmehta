const SparkPost = require('sparkpost');

const client = new SparkPost(process.env.SPARKPOST);

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
      recipients: [{ address: 'viral@viralganatra.com' }],
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
