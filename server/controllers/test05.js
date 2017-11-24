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

        //1 wating
        // var requestUrl = "http://ep.tricycle.co.kr/Product/Product_Halfclub_naverdb_All.TXT";

        //2 wating
        // var requestUrl = "http://ipp.interpark.com/partner/naver2/map_goods.txt";

        //3 wating
        // var requestUrl = "http://www.paintinfo.co.kr/ad/naver/naverfulldbV3.txt";

        //4 wating
        // var requestUrl = "http://www.lottemart.com/batchif/naver/naver_shopping_all.txt";

        //5 ok
        var requestUrl = "https://www.bobbibrown.co.kr/media/NAVER_EP/BBKR_EPURL_20170830.txt";

        //6 ok
        // var requestUrl = "https://www.rovectin.co.kr:443/shop/price/naver.php";

        //7 new
        // var requestUrl = "http://api.shopping.naver.com/api/exportFeederHdfs/?authkey=61bdaabb277f13dbb7b5da4c502aa1fa&type=FILE&path=/user/irteam/20171122/0400/107396/input/107396.origin";

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