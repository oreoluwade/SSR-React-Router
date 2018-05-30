import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id='root'>${markup}</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
