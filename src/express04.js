import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/user', (req, res, next) => {
  console.log('Post handler called');
  res.send(`<h1>Welcome ${req.body.name} MOYE MOYE </h1>`);
});

app.get('/', (req, res, next) => {
  console.log('Recieved Request');
  console.log(req.method, req.url);
  res.send(`
  <html>
  <head><title>My Server</title></head>
  <body>
    <form action="/user" method="POST">
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