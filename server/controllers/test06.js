/*
* test07 Controller
* Created by junhee on 2017.11.24..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const Request = require('request');


//header 참조해야
exports.getData = {
    description: 'request gzip header',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {
        
        //url
        // var requestUrl = "SECRET";   
        
        //request
        Request({
            method: 'GET',
            uri: requestUrl,
            gzip: true
        },
            function (error, response, body) {

                if (error) {
                    return console.error('failed:', error);
                }

                //출력
                console.log(body);
                reply('finish');
            
            });

    }
}
