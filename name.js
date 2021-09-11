const request = require("request");
const cheerio = require("cheerio");

const url = 'https://threebestrated.com.au/theme-parks-in-adelaide-sa';

request(url,callback);

function callback(error,response,html){
    if(error){
        console.log('error',error);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let selectorTools = cheerio.load(html);
    let statsArr = selectorTools('.product-inner h4 strong');
    for(let i=0;i<statsArr.length;i++){
        let data = selectorTools(statsArr[i]).text();
        console.log(data);
    }
}