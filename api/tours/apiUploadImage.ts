import { RequestHandler } from 'express';
import { DataStore } from '../../data/data';
import { fileUploader } from '../general/static';
import { APIError, PublicInfo } from '../../model/shared/messages';

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex(item => item.id == tourID);
    if (tourIndex == -1) {
        res.json(APIError.errNotFound({ tourID: tourID }));
    } else {
        const upload = fileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                res.json(new APIError('Error', 'File upload failed', 400, err));
            } else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(PublicInfo.infoCreated({ filename: req.file.filename }));
            }
        });
    }
};
