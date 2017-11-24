/*
* test04 Route
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const test04 = require('../controllers/test04');

module.exports = [
    { method: 'GET', path: '/test04', config: test04.getData }  
];