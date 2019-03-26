<template>
  <div id="newdata" :style="{height:'420px',background:'#1D2630',boxShadow: '0 2px 4px 0 rgba(29,38,48,0.60)',}">
      <div class="ndata-title ant-tabs-bar">
            <a-row>
                <a-col :span="19">
                    <span>最新价:</span>
                    <span>0.45788 &nbsp;&nbsp;</span>
                    <span>+10%</span>
                </a-col>
                <a-col :span="5">
                    0位小数
                </a-col>
            </a-row>
      </div>
      <div class="sdtop">
          <div class="sdheight">
                <a-row style="margin-bottom:10px;">
                    <a-col :span="2"></a-col>
                    <a-col :span="8" style="text-align:right;color:#fff;">价格</a-col>
                    <a-col :span="6" style="text-align:right;color:#fff;">数量</a-col>
                    <a-col :span="8" style="text-align:right;color:#fff;">总价</a-col>
                </a-row>
                
                <div class=''>
                    <!-- bind your configurations -->
                    <!-- <vue-scroll :ops="ops" :scrollPanel="scrollPanel" :bar="bar"> -->
                        <a-row  v-for="row in rows ">
                            <a-col :span="2" class="mai" style="text-align:left;">{{row.Name}}</a-col>
                            <a-col :span="8" class="mai" style="text-align:right;">{{row.Age}}</a-col>
                            <a-col :span="6" style="text-align:right; color:#fff;">{{row.School}}</a-col>
                            <a-col :span="8" style="text-align:right; color:#fff;">{{row.Remark}}</a-col>
                        </a-row>
                    <!-- </vue-scroll> -->
                </div>
            </div>
      </div>
      <div class="liner"></div>
      <div class="sdbottom">
          <div class="sdheight">
                <a-row  style="margin-bottom:10px;">
                    <a-col :span="2"></a-col>
                    <a-col :span="8" style="text-align:right;color:#fff;">价格</a-col>
                    <a-col :span="6" style="text-align:right;color:#fff;">数量</a-col>
                    <a-col :span="8" style="text-align:right;color:#fff;">总价</a-col>
                </a-row>
                <a-row  v-for="row in rows ">
                    <a-col :span="2" class="maia" style="text-align:left;">{{row.Name}}</a-col>
                    <a-col :span="8" class="maia" style="text-align:right;">{{row.Age}}</a-col>
                    <a-col :span="6" style="text-align:right; color:#fff;">{{row.School}}</a-col>
                    <a-col :span="8" style="text-align:right; color:#fff;">{{row.Remark}}</a-col>
                </a-row>
          </div>
            
      </div>
      
  </div>
</template>

<script>

export default {
    data(){
        return {
            scrollPanel: {
                scrollingX: true,
            },
            bar: {
                showDelay: 500,
                onlyShowBarOnScroll: true,
                keepShow: false,
                background: '#c1c1c1',
                opacity: 1,
                hoverStyle: false,
                keepShow: false
            },
            rows: [
                { Id: 1, Name: '买', Age: 18, School: 'a', Remark: '1' },
                { Id: 2, Name: '买', Age: 20, School: 'b', Remark: '2' },
                { Id: 3, Name: '买', Age: 19, School: 'c', Remark: '3' },
                { Id: 4, Name: '买', Age: 25, School: 'd', Remark: '4' },
                { Id: 5, Name: '买', Age: 22, School: 'e', Remark: '5' },
            ],
        }
    }
}
</script>

<style>

</style>