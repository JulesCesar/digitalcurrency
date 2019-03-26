<template>
  <div >
      <div id="trade-view" style="width: 100%;height: 636px;"></div>
  </div>
</template>

<script>
import { widget as TvWidget } from '../../../static/tradingview/charting_library/charting_library.min';
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
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        client: null,
            subscription: null,
            list:[],
            listStash: [],
            widget: null,
            datafeeds: new datafeeds(this),
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
        mounted() { 
        this.init();
    },
    computed: {
        
    },
    watch:{
    
    }, 
    methods: {
       init() {
            // this.exchange = exchange;
            // this.symbol = symbol
            // this.interval = interval
            // this.ticker = `${this.symbol}-${interval}`
            // 这里是数据入口interval ticker


            if (!this.widget) {
                this.widget = new TvWidget({
                    // symbol: symbol,
                    // interval: interval,
                    symbol: '',
                    interval: 1,
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
                        "paneProperties.vertGridProperties.color": "#333",
                        "paneProperties.horzGridProperties.color": "#333"
                    },
                    debug: false,
                    autosize: true,
                    // custom_css_url: '/static/widgetCss/widget.css',
                    loading_screen: {
                        backgroundColor: '#000'
                    }
                })
            }
       }
    }
}
</script>

<style>

</style>