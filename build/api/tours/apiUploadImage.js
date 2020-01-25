"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
exports.apiUploadImage = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex(item => item.id == tourID);
    if (tourIndex == -1) {
        res.json({ status: 'error', message: 'Tour not found' });
    }
    else {
        const upload = static_1.fileUploader(req.app.get('env'));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                res.json({ status: 'error', message: 'File upload failed' });
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json({ status: 'success', message: 'File uploaded' });
            }
        });
    }
};
