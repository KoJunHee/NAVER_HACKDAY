/*
* test Route
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test01 = require('../controllers/test01');

module.exports = [
    { method: 'GET', path: '/test01', config: test01.getData }    
];