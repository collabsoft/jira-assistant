const fs = require('fs-extra');
const path = require('path');

function movePackages(buildPath, printLogs) {
    const deleteFileTypes = /([.]txt|[.]svg)$/;
    const browsersList = ["chrome", "edge", "firefox", "firefox_selfhost"];
    const excludedFolders = ["source_map"];

    const filesOnRoot = fs.readdirSync(buildPath).filter(f => browsersList.indexOf(f.toLowerCase()) === -1 && excludedFolders.indexOf(f.toLowerCase()) === -1);

    const allFilesList = [];
    getFiles(buildPath, allFilesList);

    // Delete all the txt and svg files which are unnecessary
    allFilesList
        .filter(f => deleteFileTypes.test(f))
        .forEach(f => {
            if (printLogs) {
                console.log(`Deleting file ${f}`);
            }
            fs.unlinkSync(f);
        });

    // Move all the sourcemap files to different folder
    const sourcemapFileTypes = /[.]map$/;
    const sourceMapPath = `${buildPath}/source_map/`;
    if (!fs.existsSync(sourceMapPath)) {
        fs.mkdirSync(sourceMapPath);
    }

    allFilesList
        .filter(f => sourcemapFileTypes.test(f))
        .forEach(f => {
            if (printLogs) {
                console.log(`Moving '${f}' to ${sourceMapPath + path.basename(f)}`);
            }
            fs.moveSync(f, sourceMapPath + path.basename(f));
        });


    browsersList.forEach((browser, i) => {
        const copyFile = i < browsersList.length - 1;

        filesOnRoot.forEach(file => {
            const src = `${buildPath}/${file}`;
            const targ = `${buildPath}/${browser}/${file}`;

            if (copyFile) {
                if (printLogs) {
                    console.log(`Copying ${src} to ${targ}`);
                }
                fs.copySync(src, targ);
            } else {
                if (printLogs) {
                    console.log(`Moving ${src} to ${targ}`);
                }
                fs.moveSync(src, targ);
            }
        });
    });
}

function getFiles(path, files) {
    fs.readdirSync(path).forEach(function (file) {
        const subpath = `${path}/${file}`;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files);
        } else {
            files.push(`${path}/${file}`);
        }
    });
}

module.exports = movePackages;