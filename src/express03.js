import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('middleware called');
  let body = '';
  req.on('end', () => {
    console.log(body);
    const name = body.split('=')[1];
    if (name) {
      req.body = { name };
    }
    next();
  });
  req.on('data', (chunk) => {
    body += chunk;
    // console.log(chunk)
  });
});

app.use((req, res, next) => {
    console.log('last handler request');
    console.log(req.method, req.url);
    if (req.body) {
      return res.send(`<h1>Welcome ${req.body.name}!`);
    }
    res.send(`
    <html>
    <head><title>My Server</title></head>
    <body>
      <form method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name">
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `)
  });
  
  const port = 3000;
  app.listen(port);
  console.log('Server listening at port:', port);