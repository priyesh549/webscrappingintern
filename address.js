
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
    let statsArr = selectorTools('.product-inner h5');
    // console.log(statsArr.length);
    for(let i = 0;i < statsArr.length ; i+=2){
        let data = selectorTools(statsArr[i]).text();
        let revaddress = "";
        for(let i=data.length-1;i>=0;i--){
            revaddress += data[i];
        }

        let address = revaddress.substr(10,revaddress.length)
        address = address.split("").reverse().join("");
        console.log(address);
    }
}