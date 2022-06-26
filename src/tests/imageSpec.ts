import path from 'path';
import { thumb, full } from '../routes/api/get';
import { getResize } from '../routes/api/get';

const source = path.resolve(full, 'fjord.jpg');
const target = path.resolve(thumb, 'fjord_200_200.jpg');

describe('test image processing', (): void => {
  it('returns null -> invaild target', async (): Promise<void> => {
    const invalid = path.resolve('invalid path', 'fjord_200_200.jpg');
    expect(await getResize(source, invalid, 200, 200)).toEqual(null);
  });

  it('returns null -> invaild source', async (): Promise<void> => {
    const invalid = path.resolve(full, 'blablabla.jpg');
    expect(await getResize(invalid, target, 200, 200)).toEqual(null);
  });
});
