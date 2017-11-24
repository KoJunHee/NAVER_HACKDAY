/*
* test03 Controller
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';

const axios = require('axios');
const fs = require('fs');

exports.getData = {
    description: 'npm axios - stream',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";

        axios({
            method: 'get',
            url: requestUrl,
            responseType: 'stream'
        })
            .then(function (response) {
                var wstream = fs.createWriteStream('myOutput_axios.txt');
                response.data.pipe(wstream);
                //쓰기 완료
                wstream.on('finish', function () {
                    console.log('file has been written');
                    reply('finish');
                });
            });


        //request
        // axios.get(requestUrl)
        //     .then(function (response) {
        //         console.log(response.data);
        //         reply('finish');
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        // //stream
        // var stream = axios(requestUrl);
        // var wstream = fs.createWriteStream('myOutput_axios.txt');

        // //파일의 일부를 리턴
        // stream.on('data', function (data) {
        //     wstream.write(data);
        // });

        // //쓰기 완료
        // wstream.on('finish', function () {
        //     console.log('file has been written');
        //     reply('finish');
        // });

        // //읽기 완료
        // stream.on('end', function () {
        //     console.log('all parts is loaded');
        // });

        // //에러 발생
        // stream.on('error', function (err) {
        //     console.log('something is wrong');
        // });



    }
}
