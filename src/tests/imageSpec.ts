import path from 'path';
import {thumbDir, fullDir} from '../routes/api/get';
import {getResize} from '../routes/api/get';

const source = path.resolve(fullDir, 'fjord.jpg');
const target = path.resolve(thumbDir, 'fjord_200_200.jpg');


describe('test image processing', (): void => {

      it('returns false (invaild target path)', async (): Promise<void> => {
       
        expect(await getResize(source,"invalid",200,200)).toEqual(null);
      });


      it('returns false (invaild source path)', async (): Promise<void> => {
        
        expect(await getResize("invalid",target ,200,200)).toEqual(null);
      });

    });
