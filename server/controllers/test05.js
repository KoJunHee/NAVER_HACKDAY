/*
* test05 Controller
* Created by junhee on 2017.11.23..
* Copyright (c) 2017 junhee. All rights reserved.
*/

'use strict';
const superagent = require('superagent');
const fs = require('fs');

exports.getData = {
    description: 'npm superagent - stream',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {

        //url
        // var requestUrl = "SECRET";
        
        // //request
        // superagent.get(requestUrl)
        // .then(function (response) {
        //     // console.log(response.text);
        //     console.log(response.text);
        //     reply('finish');
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });


         //stream
         var stream = superagent(requestUrl);
         var wstream = fs.createWriteStream('myOutput_superagent.txt');
 
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
