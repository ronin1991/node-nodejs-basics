import path from 'path';
import fs from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const dirname = path.resolve();

    const gzip = createGzip();
    const source = fs.createReadStream(path.join(dirname, 'files', 'fileToCompress.txt'));
    const destination = fs.createWriteStream(path.join(dirname, 'files', 'archive.gz'));

    source.pipe(gzip).pipe(destination);
};
