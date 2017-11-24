/*
* test08 Route
* Created by junhee on 2017.11.24..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test08 = require('../controllers/test08');

module.exports = [
    { method: 'GET', path: '/test08', config: test08.getData }        
];