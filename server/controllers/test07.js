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


