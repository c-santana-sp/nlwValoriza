import express from "express";
import "reflect-metadata";

import "./database";

const app = express();

app.get('/test', (req, res) => {
  return res.send("toma");
});

app.post('/post', (req, res) => {

  return res.send('toma um post');
});

app.listen(3000, () => {
  console.log('Server is running in port 3000');
});
