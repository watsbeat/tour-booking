"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const static_1 = require("../general/static");
const messages_1 = require("../../../model/shared/messages");
exports.apiUploadImage = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex(item => item.id == tourID);
    if (tourIndex == -1) {
        res.json(messages_1.APIError.errNotFound({ tourID: tourID }));
    }
    else {
        const upload = static_1.fileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                res.json(new messages_1.APIError('Error', 'File upload failed', 400, err));
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(messages_1.PublicInfo.infoCreated({ filename: req.file.filename }));
            }
        });
    }
};
