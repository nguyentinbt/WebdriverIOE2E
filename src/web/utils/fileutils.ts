import fs from 'fs';
var zipper = require('zip-local');

export const deleteDirectory = (path: string) => {
    if (fs.existsSync(path)) {
        fs.rmdirSync(path, { recursive: true })
        console.log(`Removed directory: ${path} !!!`)
    }
}

export const zipFolder = (sourceFolder: string, targetFolder: string) => {
    zipper.zip(sourceFolder, (error: any, zipped: any) => {
        if (!error) {
            zipped.compress();
            zipped.save(targetFolder, (err: any) => {
                if (!err) console.log("Folder zipped successfully !!!");
            });
        }
    });
}

export const readFile = (filepath: string) => {
    return fs.readFileSync(filepath)
}