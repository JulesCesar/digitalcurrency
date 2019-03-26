<template>
  <div  :style="{paddingLeft: '20px',paddingRight:'20px'}">

    <template>
        <div class="gutter-example">
            <a-row :gutter="16">
                <!-- <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                        <zc></zc>
                        <market></market>
                        <announcement></announcement>
                    </div>
                </a-col> -->
            
                <a-col class="gutter-row" :span="18">
                    <!-- <div class="gutter-boxset"  style="margin-bottom:20px;border-radius: 6px 6px 0 0;padding:10px;">
                        <div>
                            <div class="s1d711xa-1 jgsWFi s1p4en3j-0 ghSPYW s62mpio-0 cTnfIm">
                                <div class="s1p4en3j-1 txlto s62mpio-0 iLeqAn" direction="column" wrap="nowrap">
                                    <div class="s1p4en3j-2 eBcVXx s62mpio-0 dBSZfv">最新价</div>
                                    <div>
                                        <span class="s1p4en3j-5 djLwBB s1p4en3j-3 hyOgjG">6,835.60</span>
                                        <span class="s1p4en3j-3 hyOgjG">
                                            <span class="s1p4en3j-6 kVsvyQ">
                                                <span>¥47,332.43</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="s1p4en3j-1 txlto s62mpio-0 iLeqAn" direction="column" wrap="nowrap">
                                    <div class="s1p4en3j-2 eBcVXx s62mpio-0 dBSZfv">24h涨跌</div>
                                    <div style="color: #5FB84A; !important">
                                        <span class="s1p4en3j-5 djLwBB s1p4en3j-3 hyOgjG" style="color: #5FB84A; !important">-151.60</span>
                                        <span class="s1p4en3j-5 djLwBB s1p4en3j-3 hyOgjG" style="color: #5FB84A; !important">&nbsp;&nbsp;-2.17%</span>
                                    </div>
                                </div>
                                <div class="s1p4en3j-1 txlto s62mpio-0 iLeqAn" direction="column" wrap="nowrap">
                                    <div class="s1p4en3j-2 eBcVXx s62mpio-0 dBSZfv">24h最高价</div>
                                    <span class="s1p4en3j-3 hyOgjG">7,120.41</span>
                                </div>
                                <div class="s1p4en3j-1 txlto s62mpio-0 iLeqAn" direction="column" wrap="nowrap">
                                    <div class="s1p4en3j-2 eBcVXx s62mpio-0 dBSZfv">24h最低价</div>
                                    <span class="s1p4en3j-3 hyOgjG">6,650.00</span>
                                </div>
                                <div class="s1p4en3j-1 txlto s62mpio-0 iLeqAn" direction="column" wrap="nowrap">
                                    <div class="s1p4en3j-2 eBcVXx s62mpio-0 dBSZfv">24h成交量</div>
                                    <span class="s1p4en3j-3 hyOgjG">411,411,181.50 USDT</span>
                                </div>
                            </div>
                        </div>

                    </div> -->
                    <!-- kline -->
                    <div style="margin-bottom:20px;">
                        <div id="trade-view" style="width: 100%;height: 636px;"></div>
                    </div>
                    <!-- 买入卖出 -->
                    <!-- <div :style="{height:'400px',borderRadius: '6px;',margin:'5px'}">
                        <a-row :gutter="10">
                            <a-col :span="16" >
                                <mairumaichu></mairumaichu>
                            </a-col>
                            <a-col :span="8" >
                                <newdata></newdata>
                            </a-col>
                        </a-row>
                        
                    </div> -->
                    <!-- 委托 -->
                    <!-- <div :style="{height:'401.364px'}">
                        <a-row>
                            <a-col :span="16">
                                <commission></commission>
                                <depth></depth>
                                
                            </a-col>
                            <a-col :span="8">
                                <realt></realt>
                            </a-col>
                        </a-row>
                    </div> -->
                </a-col>
            
            </a-row>
        </div>
    </template>
    
  </div>
</template>

<script>
import { widget as TvWidget } from '../../static/tradingview/charting_library/charting_library.min';
// import datafeeds from '../lib/socketDatafeed';
import {UDFCompatibleDatafeed} from '../../static/tradingview/datafeeds/udf/lib/udf-compatible-datafeed';

import datafeeds from '../lib/socketDatafeed';


import mairumaichu from './mairumaichu/index.vue';
import newdata from './newdata/index.vue';
import commission from './commission/index.vue';
import realt from './realt/index.vue';
import depth from './depth/index.vue';
import zc from './zc/index.vue';
import market from './market/index.vue';
import announcement from './announcement/index.vue';

import {
    queryKlineData
} from '../lib/http';

// 图表显示项配置
const chartDisabledFeatures = [
    'header_symbol_search',
    'left_toolbar',
    'header_screenshot',
    'header_widget_dom_node',
    "header_resolutions",
    "header_fullscreen_button",
    'timeframes_toolbar',
    // 'edit_buttons_in_legend',
    'pane_context_menu',
    'legend_context_menu',
    'volume_force_overlay'
];
export default {
    name: 'bar2',
     components: {
        mairumaichu,
        newdata,
        commission,
        realt,
        depth,
        zc,
        market,
        announcement,
        ops: {
            vuescroll: {},
            scrollPanel: {},
            rail: {},
            bar: {}
          }
    },
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        client: null,
            subscription: null,
            list:[],
            listStash: [],
            widget: null,
            datafeeds: new datafeeds(this),
            // datafeeds: new datafeeds(this),
            // datafeeds: null,
            exchange: null,
            symbol: null,
            interval: '1min',
            ticker: null,
            cacheData: {},
            lastTime: null,
            lastInterval: null,
            lastLength: 0,
            getBarTimer: null,
            isLoading: true,
            intervalOptions: [{
                name: '1min',
                value: '1min'
            }, {
                name: '5min',
                value: '5min'
            }, {
                name: '15min',
                value: '15min'
            }, {
                name: '30min',
                value: '30min'
            }, {
                name: '60min',
                value: '60min'
            }, {
                name: '日线',
                value: '1day'
            }, {
                name: '周线',
                value: '1week'
            }]
        }
    },
    created() {
       

    },
    mounted() { 
        // this.init();
        this.getData();
    },
    computed: {
        
    },
    watch:{
    
    }, 
    methods: {
       init(exchange = '', symbol = '', interval = 5) {
            this.exchange = exchange;
            this.symbol = symbol
            this.interval = interval
            this.ticker = `${this.symbol}-${interval}`
            if (!this.widget) {
                this.widget = new TvWidget({
                    symbol: symbol,
                    interval: interval,
                    // fullscreen: true,
                    container_id: 'trade-view',
                    datafeed: this.datafeeds,
                    library_path: '/static/tradingview/charting_library/',
                    disabled_features: chartDisabledFeatures,
                    enabled_features: ['move_logo_to_main_pane'],
                    timezone: 'Asia/Shanghai',
                    locale: 'zh',
                    overrides: {
                        "paneProperties.background": "#191F27",
                        "paneProperties.vertGridProperties.color": "#000",
                        "paneProperties.horzGridProperties.color": "#000"
                    },
                    debug: false,
                    autosize: true,
                    // custom_css_url: '/static/widgetCss/widget.css',
                    loading_screen: {
                        backgroundColor: '#000'
                    }
                })
            }
            

       },
       getData() {
           let _start = (new Date().getTime() - 10000000000).toString().substring(0, 10);
           let _end = new Date().getTime().toString().substring(0, 10);
           const param = {
               base: 'BTC',
               quote: 'USDT',
               market: 'binance',
               start: _start,
               end: _end,
               interval: 2
           }
           this.init('binance', 'btc_usdt', 1);
           let me = this;
           queryKlineData(param).then(res => {
               if (res.status == 200 && res.data.error_message === 'succ') {
                   me.onHistory(res.data.history_price);
               }
           })
       },
       onHistory(data) {
           if (!data.length) return;
           this.list.splice(0, this.list.length);
           data.map(item => {
                this.list.push({
                    time: item.date * 1000,
                    open: item.open,
                    high: item.high,
                    low: item.low,
                    close: item.close,
                    volume: item.volume
                });
            });
            console.log(this.list);
            this.cacheData[this.ticker] = this.list
            this.datafeeds.barsUpdater.updateData();
            let me = this;
            // let _start = (new Date().getTime() - 10000000000).toString().substring(0, 10);
            let _end = new Date().getTime().toString().substring(0, 10);
            const param = {
                base: 'BTC',
                quote: 'USDT',
                market: 'binance',
                start: _end,
                end: _end,
                interval: 2
            }
            setInterval(() => {
                queryKlineData(param).then(res => {
                    if (res.status == 200 && res.data.error_message == 'succ') {
                        me.onKData(res.data.history_price);
                    }
                });
            }, 1000);
       },
       onKData(data) {
           if (!data) return;
           const intervalMode = parseInt(data.date/(60 * this.interval));
            if (!this.lastInterval || this.lastInterval != intervalMode ) {
                this.list.push({
                    time: data.date * 1000,
                    open: data.open,
                    high: data.high,
                    low: data.low,
                    close: data.close,
                    volume: data.volume
                });

                this.lastInterval = intervalMode;
                this.cacheData[this.ticker] = this.list;
                this.lastTime = data.date * 1000;

                console.log(this.list.length+"   ts:" + this.lastTime);
                this.datafeeds.barsUpdater.updateData();
            }
            if (data.type && data.symbol === this.symbol) {
                this.datafeeds.barsUpdater.updateData()
                const barsData = {
                time: data.date * 1000,
                open: data.open,
                high: data.high,
                low: data.low,
                close: data.close,
                volume: data.volume
                }
                if (barsData.time >= this.lastTime && this.cacheData[this.ticker] && this.cacheData[this.ticker].length) {
                this.cacheData[this.ticker][this.cacheData[this.ticker].length - 1] = barsData
                }
            }

       },
       getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback) {
            if (this.cacheData[this.ticker] && this.cacheData[this.ticker].length) {
                this.isLoading = false
                const newBars = []
                if (this.lastLength < this.cacheData[this.ticker].length) {
                for (let i=0; i<this.cacheData[this.ticker].length; i++ ) {
                    const item = this.cacheData[this.ticker][i];
                    newBars.push(item)
                }
                this.lastLength = this.cacheData[this.ticker].length
                }
                onLoadedCallback(newBars)
            } else {
                const self = this
                this.getBarTimer = setTimeout(function () {
                self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
                }, 10)
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  /* background: #00A0E9; */
  /* padding: 5px 0; */
}
</style>
