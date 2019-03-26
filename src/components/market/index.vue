<template>
  <div class="market" id="market">
      <div class="shichang-market">市场</div>
        <div class="market-child">
            <div>
                <div>
                    <a-radio-group defaultValue="a" buttonStyle="solid" style="width:100%;">
                    <a-radio-button style="width:33%;text-align:center;color:black;" value="a">USDT</a-radio-button>
                    <a-radio-button style="width:33%;text-align:center;color:black;" value="b">BTC</a-radio-button>
                    <a-radio-button style="width:33%;text-align:center;color:black;" value="c">ETH</a-radio-button>
                    </a-radio-group>
                </div>
            </div>
            <div :style="{marginTop:'20px'}">
                <a-row v-for="markdata in datas">
                    <a-col :span="12">
                        <div class="clearfix">
                            <div class="fl iconmark">
                                <a-icon type="github" :style="{color:'#fff',marginTop:'10px',fontSize:'24px'}"/>
                            </div>
                            <div class="fl textmarket">
                                <div>{{markdata.title}}</div>
                                <div>{{markdata.bottitle}}</div>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="12" style="text-align:right;">
                        
                        <div class="numberset">{{markdata.rightnumber}}</div>
                        <div class="bfbnaner">{{markdata.bottomnumber}}</div>
                    </a-col>
                </a-row>
            </div>
      </div>
      
      
  </div>
</template>

<script>

export default {
    data () {
        return {
            datas:[
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
                {title: 'BTC', bottitle: 'BitCoin', rightnumber: '0.065875', bottomnumber: '+0.6%'},
            
            ],
        }
    },
}
</script>

<style>
    .clearfix{
            margin-bottom: 10px;
    }
  
</style>