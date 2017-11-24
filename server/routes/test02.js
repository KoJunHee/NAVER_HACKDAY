/*
* test02 Route
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test02 = require('../controllers/test02');

module.exports = [
    { method: 'GET', path: '/test02', config: test02.getData }    
];