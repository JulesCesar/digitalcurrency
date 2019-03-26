
<template>
  <div :style="{height:'300px',}">
  
      <div id="boder">
        <div class="card-container">
           <!-- <a-row style="margin-bottom:10px;">  
            <a-col :span="3" style="text-align:left;color:#fff;font-size:16px"><a href="#">当前委托</a></a-col>
             <a-col :span="3" style="text-align:left;color:#fff;font-size:16px"><a href="#">历史委托</a></a-col>
           </a-row> -->
             <a-tabs type="card">
                <a-tab-pane tab="当前委托" key="1">
                    <div style="margin-left:15px">
                    <a-row  style="margin-bottom:10px;">
                          <a-col :span="3" style="text-align:left;color:#fff;">时间</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">市场</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">方向</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">委托价格</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">委托数量</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">已成交</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">未成交</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;"></a-col>
                    </a-row>
                  <a-row  v-for="row in rows ">
                        <a-col :span="3" style="text-align:left; color:#fff">{{row.time}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.market}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.direction}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.price}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.number}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.success}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.fail}}</a-col>
                         <a-col :span="3" style="text-align:center;color:#fff;">{{row.button}}</a-col>
                  </a-row>  
                    </div>
                </a-tab-pane>
                 <a-tab-pane tab="历史委托" key="2">
                   <div style="margin-left:15px">
                   <a-row  style="margin-bottom:10px;">
                          <a-col :span="3" style="text-align:left;color:#fff;">时间</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">市场</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">方向</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">委托价格</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">委托数量</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">已成交</a-col>
                          <a-col :span="3" style="text-align:center;color:#fff;">未成交</a-col>
                           <a-col :span="3" style="text-align:center;color:#fff;"></a-col>
                    </a-row>
                  <a-row  v-for="row in rows ">
                        <a-col :span="3" style="text-align:left; color:#fff">{{row.time}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.market}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.direction}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.price}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.number}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.success}}</a-col>
                        <a-col :span="3" style="text-align:center; color:#fff">{{row.fail}}</a-col>
                         <a-col :span="3" style="text-align:center;color:#fff;">{{row.button}}</a-col>
                  </a-row>  
                   </div>
                </a-tab-pane>
             </a-tabs>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
          return{
           rows: [
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
                {time:'09-03:18:37',market:'USDT',direction:'买入',price: 102456,number:4575,success:1024,fail:1020,},
            ],
          }
        }

    }



</script>
<style>
  #header {
    width: 662.182px;
    height: 38px;
    background: #1E2A37;
    margin-left: 5px;
    /* border-radius: 2px 2px 0 0; */
  }
  #header span{
    font-family: PingFangSC-Light;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 32px;
    margin-left: 10px;
  }
  #boder{
    width: 662.182px;
    height: 100%;
    background: #1D2630;
    margin-left: 5px;
    margin-top: 6px;
  }

.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab{
    background-color:transparent;
    border: none;
}

  .u1 li{
    float:left;
    margin-left: 5px;
    margin-right:15px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
  
  }
  #inboder ul li{
    clear: both;
    margin: 0px;
    font-family: PingFangSC-Light;
  }  
</style>
