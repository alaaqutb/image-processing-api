import  express  from "express";
//import validationResult from 'express-validator'
const image: express.Router = express.Router();
import sharp from 'sharp';
import path from 'path';

image.get('/', (req, res) => {
    //res.send('please get Image...');
    
    const name=req.query.name;
    const width:string=req.query.width as string ;
    const height:string=req.query.height as string;
    console.log(name,width,height);
 
    const widthpars:number=parseInt(width);
    const heightpars:number=parseInt(height);


    console.log(widthpars);
    console.log(heightpars);
    sharp(`./images/full/${name}.jpg`).resize(widthpars,heightpars).toFile(`./images/thumb/${name}_${widthpars}_${heightpars}.jpg`);
    res.sendFile(path.join(__dirname+`/../../../images/thumb/${name}_${widthpars}_${heightpars}.jpg`));
 }
  );
export default image ;



