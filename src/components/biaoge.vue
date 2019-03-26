<template>
<div class="bitform">
  <div class="bittab">
    <template>
        <a-tabs defaultActiveKey="1">
            <a-tab-pane key="1">
                <span slot="tab" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">
                    USDT
                </span>
                <div class="tabspadding">
                    <a-row style="height: 50px;line-height: 50px;">
                        <a-col :span="5"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">币种</a-col>
                        <a-col :span="5"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">最新价</a-col>
                        <a-col :span="4"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">涨幅</a-col>
                        <a-col :span="4"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">最高价</a-col>
                        <a-col :span="4"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">最低价</a-col>
                        <a-col :span="2"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">24H量</a-col>
                    </a-row>
                    <div class="list-data">
                        <a-row  class="record" v-for="(item, index) in list" :key="h1"  style="height: 50px;line-height: 50px;">
                            <a-col :span="5"  style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;" >
                                <!-- <span>
                                    <a-icon type="gift" style="color:red;"/>
                                </span> -->
                                <!-- <span>
                                    <span class="QRcode" v-if="show" @click="show=!show">
                                        <a-icon type="star"/>
                                    </span>
                                    <span class="isshowDiv" v-if='!show'>
                                        <span class="closebottom-liner" @click="isclose"><a-icon type="star-o" /></span>
                                    </span>
                                </span> -->
                                <span>
                                    {{ item.name }}
                                </span>
                            </a-col>
                            <a-col :span="5" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">{{ item.price }}</a-col>
                            <a-col :span="4" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">
                                <div>
                                    <span style="color:#ff6767;" v-if="item.bizhong.charAt(0) == '-'">{{ item.bizhong }}<a-icon type="caret-down" /></span>
                                    <span style="color:#00c087;" v-else>{{ item.bizhong }}<a-icon type="caret-up" /></span><!--红色 -->
                                </div>
                            </a-col>
                                <a-col :span="4" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">{{ item.zuigao}}</a-col>
                            <a-col :span="4" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">{{ item.zuidi }}</a-col>
                            <a-col :span="2" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">{{ item.zhangfuk }}</a-col>
                            
                        </a-row>
                    </div>
                 
                </div>
           
            </a-tab-pane>
            <a-tab-pane key="2">
                <span slot="tab" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">
                    BTC
                </span>
                <div class="tabspadding">
                    <a-row>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">币种</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最新价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">涨幅</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最高价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最低价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">24H量</a-col>
                    </a-row>
                    <div class="list-data">
                        <a-row  class="record" v-for="(item, index) in list" :key="h2">
                            <a-col :span="4"  style="text-align: left; color:#c7cce6;">
                                <span>
                                    <a-icon type="gift" style="color:red;"/>
                                </span>
                               
                                <span>
                                    {{ item.name }}
                                </span>
                            </a-col>
                            <a-col :span="4" style="text-align:left; color:#c7cce6;">{{ item.price }}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">
                                <div>
                                    <span style="color:#00c087;" v-if="item.bizhong.charAt(0) == '-'">{{ item.bizhong }}<a-icon type="caret-up" /></span>
                                    <span style="color:#ff6767;" v-else>{{ item.bizhong }}<a-icon type="caret-down" /></span><!--红色 -->
                                </div>
                            </a-col>
                                <a-col :span="4" style="text-align:left; color:#c7cce6;">{{ item.zuigao}}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">{{ item.zuidi }}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">{{ item.zhangfuk }}</a-col>
                            
                        </a-row>
                    </div>
                 
                </div>
            </a-tab-pane>
            <a-tab-pane key="3">
                <span slot="tab" style="font-family: PingFangSC-Regular;font-size: 16px;color: #FFFFFF;letter-spacing: 0;">
                    ETH
                </span>
                <div class="tabspadding">
                    <a-row>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">币种</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最新价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">涨幅</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最高价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">最低价</a-col>
                        <a-col :span="4"  style="text-align: left; color:#c7cce6;">24H量</a-col>
                    </a-row>
                    <div class="list-data">
                        <a-row  class="record" v-for="(item, index) in list" :key="h3">
                            <a-col :span="4"  style="text-align: left; color:#c7cce6;">
                                <span>
                                    <a-icon type="gift" style="color:red;"/>
                                </span>
                                <span>
                                    <span class="QRcode" v-if="show" @click="show=!show">
                                        <a-icon type="star"/>
                                    </span>
                                    <span class="isshowDiv" v-if='!show'>
                                        <span class="closebottom-liner" @click="isclose"><a-icon type="star-o" /></span>
                                    </span>
                                </span>
                                <span>
                                    {{ item.name }}
                                </span>
                            </a-col>
                            <a-col :span="4" style="text-align:left; color:#c7cce6;">{{ item.price }}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">
                                <div>
                                    <span style="color:#00c087;" v-if="item.bizhong.charAt(0) == '-'">{{ item.bizhong }}<a-icon type="caret-up" /></span>
                                    <span style="color:#ff6767;" v-else>{{ item.bizhong }}<a-icon type="caret-down" /></span><!--红色 -->
                                </div>
                            </a-col>
                                <a-col :span="4" style="text-align:left; color:#c7cce6;">{{ item.zuigao}}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">{{ item.zuidi }}</a-col>
                            <a-col :span="4" style="text-align:left;color:#c7cce6;">{{ item.zhangfuk }}</a-col>
                            
                        </a-row>
                    </div>
                 
                </div>
            </a-tab-pane>
           
        </a-tabs>
    </template>
  </div>
  </div>
</template>

<script>
export default {
    name: 'bar3',
    data () {
        return {
        show:true,
        items: [
            { message: '' },
            { message: '币种' },
            { message: '最新价' },
            { message: '24h涨幅' },
            { message: '币所' }
        ],
        list: [
            {id: '1',name: 'BTC/USDT',price: '7006.45≈￥47382.19',bizhong: '-2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
            {id: '2',name: 'BTC/USDT',price: '7006.45≈￥47382.19',bizhong: '2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
            {id: '3',name: 'BTC/USDT',price: '7006.45≈￥47382.19',bizhong: '-2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
            {id: '4',name: 'BTC/USDT',price: 21488,bizhong: '2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
            {id: '5',name: 'BTC/USDT',price: 21488,bizhong: '2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
            {id: '6',name: 'BTC/USDT',price: 21488,bizhong: '2.73%',count: 1,zuigao:'7006.45≈￥47382.19',zuidi:'7006.45≈￥47382.19',zhangfuk:'4738216425'},
        ],
        }
    },
    created() {
    },
    mounted() { 
        
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for(var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    watch:{
    
    }, 
    methods: {
        callback (key) {
            console.log(key)
        },

        handleRow: function(index) {
            console.log(this.list[index].checked)
        },
        handleReduce: function(index) {
        if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index, 1);
        },
         isclose(){
            this.show = !this.show  
        },

    }
}
</script>

<style scoped>
.card-container {
  /* background: #252E37; */
  /* overflow: hidden; */
  /* padding: 24px; */
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #252E37;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}
.ant-tabs{
        background: #252E37;
    box-shadow: 0 0 8px 4px rgba(91,83,83,0.03);
}
.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
        /* background: #252E37;
    box-shadow: 0 0 8px 4px rgba(91,83,83,0.03); */
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #252E37;
}
.bitform{

}
.bittab{
    /* width:1792px; */
    min-width: 1280px;
    height:493px;
    margin: 55.5px 60px;
  
}
.tabspadding{
    padding: 0 0 20px 20px;
      background: #252E37;
    box-shadow: 0 0 8px 4px rgba(91,83,83,0.03);
}

</style>
