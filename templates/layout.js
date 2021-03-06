module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="styles.css" rel="stylesheet">
    <link href=“https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto:400,700” rel=“stylesheet”>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>${title}</title>
  </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;