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

        //1 wating
        var requestUrl = "http://ep.tricycle.co.kr/Product/Product_Halfclub_naverdb_All.TXT";

        //2 wating
        // var requestUrl = "http://ipp.interpark.com/partner/naver2/map_goods.txt";

        //3 wating
        // var requestUrl = "http://www.paintinfo.co.kr/ad/naver/naverfulldbV3.txt";

        //4 wating
        // var requestUrl = "http://www.lottemart.com/batchif/naver/naver_shopping_all.txt";

        //5 ok
        // var requestUrl = "https://www.bobbibrown.co.kr/media/NAVER_EP/BBKR_EPURL_20170830.txt";

        //6 ok
        // var requestUrl = "https://www.rovectin.co.kr:443/shop/price/naver.php";

        //7 new
        // var requestUrl = "http://api.shopping.naver.com/api/exportFeederHdfs/?authkey=61bdaabb277f13dbb7b5da4c502aa1fa&type=FILE&path=/user/irteam/20171122/0400/107396/input/107396.origin";

        // //request
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