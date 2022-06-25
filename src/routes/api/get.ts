import path from 'path';
import { promises as fs } from 'fs';
import sharp from 'sharp';

const fullDir = path.resolve(__dirname, './../../../images/full');
const thumbDir = path.resolve(__dirname, './../../../images/thumb');

export const getImage = async (name: string): Promise<string | null> => {
  const imagePath = path.resolve(fullDir, `${name}.jpg`);
  try {
    await fs.access(imagePath);
    return imagePath;
  } catch {
    return null;
  }
};

export const getThumb = async (
  name: string,
  widthpars: number,
  heightpars: number
): Promise<string | null> => {
  const thumbPath = path.resolve(
    thumbDir,
    `${name}_${widthpars}_${heightpars}.jpg`
  );
  try {
    await fs.access(thumbPath);
    return thumbPath;
  } catch {
    return null;
  }
};

export const getResize = async (
  source: string,
  target: string,
  widthpars: number,
  heightpars: number
): Promise<string | null> => {
  await sharp(source).resize(widthpars, heightpars).toFile(target);
  try {
    return target;
  } catch {
    return null;
  }
};
