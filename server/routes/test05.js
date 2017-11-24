/*
* test05 Route
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test05 = require('../controllers/test05');

module.exports = [
    { method: 'GET', path: '/test05', config: test05.getData }    
];