import express from 'express';
import sharp from 'sharp';


// const thumbDir = path.resolve(__dirname, './../images/thumb');
const app = express();

const port = 3000;



 app.get('/api', (req, res) => {
   res.send('please get Image...');
   const name=req.query.name;
   const width:string=req.query.width as string ;
   const height:string=req.query.height as string;
   console.log(name,width,height);

   const widthpars:number=parseInt(width);
   const heightpars:number=parseInt(height);
   console.log(widthpars);
   console.log(heightpars);
   
   sharp(`./images/full/${name}.jpg`).resize(widthpars,heightpars).toFile(`./images/thumb/${name}_${widthpars}_${heightpars}.jpg`);
//    app.use(express.static('public')); 
//    app.use(`/images/thumb/${name}_${widthpars}_${heightpars}.jpg`, express.static('images'));
}
 );
 app.listen(port, ()=> {
  console.log(`server started at localhost:${port}`)
 });
 