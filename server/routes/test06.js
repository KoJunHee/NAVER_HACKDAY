/*
* test07 Route
* Created by junhee on 2017.11.24..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test07 = require('../controllers/test07');

module.exports = [
    { method: 'GET', path: '/test07', config: test07.getData }    
];