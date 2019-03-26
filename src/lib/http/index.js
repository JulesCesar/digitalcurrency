import axios from 'axios';

const URL = 'https://kline.biyou.tech/portfolio/';

/**
 * 
 * @param {Object} param {base: string, quote: string, market: string, start: number, end: number, interval: number}
 */
export function queryKlineData(param) {
    const _url = URL + 'query_candle_data?base=' + param.base + '&quote=' + param.quote + '&market=' + param.market + '&start=' + param.start + '&end=' + param.end + '&interval=' + param.interval;
    return axios.get(_url);
}