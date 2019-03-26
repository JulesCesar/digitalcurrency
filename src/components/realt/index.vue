<template>
  <div id="time">
      
      <div id="ondiv">
        <div>
           <a-row style="margin-bottom:10px;">  
            <a-col :span="5" style="text-align:left;color:#fff;font-size:14px;font-variant:tabular-nums;margin-top:10px">实时交易</a-col>
           </a-row>
         <a-row style="margin-bottom:10px;">               
                    <a-col :span="5" style="text-align:left;color:#fff;">时间</a-col>
                    <a-col :span="6" style="text-align:left;color:#fff;">方向</a-col>
                    <a-col :span="6" style="text-align:left;color:#fff;">价格</a-col>
                    <a-col :span="5" style="text-align:left;color:#fff;">数量</a-col>
         </a-row>
        <a-row  v-for="row in rows ">
                  <a-col :span="5" style="text-align:left; color:#fff">{{row.time}}</a-col>
                  <a-col :span="6" style="text-align:left; color:#fff">{{row.direction}}</a-col>
                  <a-col :span="6" style="text-align:left; color:#fff">{{row.price}}</a-col>
                  <a-col :span="5" style="text-align:left; color:#fff">{{row.number}}</a-col>
        </a-row>  
        </div> 
      </div>
  </div>
</template>

<script>

export default {
        
        data(){
          return{
           rows: [
             
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
                {time:'18:21',direction:'买入',price:'2456.56',number:4575},
            ]
          }
        }
}
</script>

<style>
#time{
  margin-left: 6px;
  margin-top: 6px;
  height: 792px;
  background: #1D2630;
}
#time span{
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
}
#ondiv div{
  margin-left: 5px;
}
#ondiv ul li{
  float: left;
  font-family: PingFangSC-Regular;
font-size: 16px;
color: #FFFFFF;
letter-spacing: 0;
}
#ondiv ul li .lon{
  margin-right: 60px;
}
#ondiv2 ul li{
  clear: both;
  margin: 0px;
  font-size: 13px;
  font-family: PingFangSC-Light;
}

</style>