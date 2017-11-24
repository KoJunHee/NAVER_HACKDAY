/*
* test Controller
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const Request = require('request');
const fs = require('fs');

exports.getData = {
    description: 'npm request - stream',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";

        //stream
        var stream = Request(requestUrl);
        var wstream = fs.createWriteStream('myOutput.txt');

        //파일의 일부를 리턴
        stream.on('data', function (data) {
            wstream.write(data);
        });

        //쓰기 완료
        wstream.on('finish', function () {
            console.log('file has been written');
            reply('finish');
        });

        //읽기 완료
        stream.on('end', function () {
            console.log('all parts is loaded');
        });

        //에러 발생
        stream.on('error', function (err) {
            console.log('something is wrong');
        });

    }
}
