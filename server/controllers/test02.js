/*
* test02 Controller
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const Request = require('request');

exports.getData = {
    description: 'npm request - no stream',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";

       
        // //request
        Request({
            method: 'GET',
            uri: requestUrl
        },
            function (error, response, body) {

                if (error) {
                    return console.error('failed:', error);
                }

                //가져온 데이터
                console.log(body);
                reply('finish');
            });
    }
}

