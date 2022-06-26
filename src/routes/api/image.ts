import express from 'express';
import { validationResult } from 'express-validator';
const image: express.Router = express.Router();
import path from 'path';
import validation from './imageValidation';
import { getImage } from './get';
import { getThumb } from './get';
import { getResize } from './get';

const handleRequest = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ errors: errors });
  }

  const name = req.query.name as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;
  const widthpars: number = parseInt(width);
  const heightpars: number = parseInt(height);
  console.log(name, widthpars, heightpars);

  const source: string = path.resolve(
    path.resolve(__dirname, './../../../images/full'),
    `${name}.jpg`
  );
  console.log(source);
  const target: string = path.resolve(
    path.resolve(__dirname, './../../../images/thumb'),
    `${name}_${widthpars}_${heightpars}.jpg`
  );
  console.log(target);
  if (await getImage(name)) {
    console.log(name);
    if (widthpars && heightpars) {
      console.log(widthpars, heightpars);
      const thumb = await getThumb(
        name as string,
        widthpars as number,
        heightpars as number
      );
      console.log(thumb);
      if (thumb) {
        res.sendFile(thumb);
      } else {
        const resize = await getResize(
          source as string,
          target as string,
          widthpars as number,
          heightpars as number
        );
        if (resize) {
          res.sendFile(resize);
        }
      }
    } else {
      const gImage = await getImage(name as string);
      if (gImage) {
        res.sendFile(gImage);
      } else {
        res.status(404).json({ response: 'Image not found!' });
      }
    }
  } else {
    res.status(200).json({ response: 'Invalid image name!' });
  }
};
image.get('/', validation, handleRequest);
export default image;
