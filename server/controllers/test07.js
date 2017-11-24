/*
* test08 Controller
* Created by junhee on 2017.11.24..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const Request = require('request');
var compression = require('readline')


exports.getData = {
    description: 'buffer',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";
       
        //request
        function parseFile(requestUrl) {
            return new Promise((resolve, reject) => {
                const lineBuffer = [];

                const rl = readline.createInterface({
                    input: request.get(url).on('error', (err) => reject(err)),
                });

                rl
                    .on('line', (line) => {
                        // strip out comments or parse the line and push it to lineBuffer
                    })
                    .on('close', () => resolve(lineBuffer));
            });
        }

    }
}
                // body = response.header('cache-control', 'no-cache').hold();
                // body = response || reply.view('summary', summary).hold();
                // console.log(body.body);
                // reply();

                // send a ping approx every 2 seconds
                // var timer = setInterval(function () {
                //     console.log('ping');

                //     // !!! this is the important part
                //     flush();
                // }, 2000)

                // response.on('close', function () {
                //     clearInterval(timer)
                // })


