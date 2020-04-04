import * as Joi from '@hapi/joi';

export const HobbyType: Joi.SchemaMap = {
    name: Joi.string().required(),
    authorName: Joi.string().required()
};
