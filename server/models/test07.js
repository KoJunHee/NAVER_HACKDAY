/*
* test08 Model
* Created by junhee on 2017.11.24..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'test08',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        attr1: {
            type: 'string',
            required: true
        },
        attr2: {
            type: 'string',
            required: true
        }
    },
     beforeCreate: (item, next) => {
         next();
     }
};
