import express from 'express';
//import sharp from 'sharp';
const app = express();

const port = 3000;
//const _sharp =sharp();


 app.get('/api', (req, res) => {
   res.send('Hello, world!');
 });


 app.listen(port, ()=> {
  console.log(`server started at localhost:${port}`)
 });
 