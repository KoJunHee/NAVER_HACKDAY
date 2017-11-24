/*
* test03 Route
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test03 = require('../controllers/test03');

module.exports = [
    { method: 'GET', path: '/test03', config: test03.getData }  
];