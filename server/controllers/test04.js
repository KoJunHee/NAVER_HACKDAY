/*
* test04 Controller
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const got = require('got');
const fs = require('fs');


exports.getData = {
    description: 'npm got - stream',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";

        //stream
        var stream = got(requestUrl);
        var wstream = fs.createWriteStream('myOutput_got.txt');

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
