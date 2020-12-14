

const OSS = require('ali-oss');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const client = new OSS({
    bucket: process.env.OSS_BUCKET,
    region: process.env.OSS_REGION,
    accessKeyId: process.env.OSS_ACCESS_KEY,
    accessKeySecret: process.env.OSS_ACCESS_SECRET,
});

const getAllFiles = dir =>
    fs.readdirSync(dir).reduce((files, file) => {
        const absPath = path.join(dir, file);
        const isDirectory = fs.statSync(absPath).isDirectory();
        return isDirectory ? [...files, ...getAllFiles(absPath)] : [...files, absPath];
    }, []);


async function put () {
    try {
        const distDir = path.join(__dirname, "../out");
        const files = getAllFiles(distDir);
        for (let file of files) {
            const ossName = file.replace(distDir, '');
            const localPath = file;
            if (ossName === '/404/index.html') {
                await client.put('/404.html', localPath);
            }
            await client.put(ossName, localPath);
            console.table({ossName, localPath})
        }
    } catch (e) {
        console.log(e);
    }
}

put();