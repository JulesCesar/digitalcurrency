<template>
  <div class="announcement">
      <div class="shichang-market">公告</div>
      <div class="announcement-content" v-for="announcement in datas">
          <div id="blue">{{announcement.contents}} </div>
          <div>{{announcement.time}}</div>
      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {    
            datas:[
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                {contents: '巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百巴拉巴拉巴拉巴拉巴拉宝宝啦啦啦宝贝七八百', time: '2018年9月24日'},
                 
            ],
        }
    },
}
</script>

<style>
    #blue{
        color: aqua;
        font-family: PingFangSC-Light;
        font-size: 12px;
        letter-spacing: 0;
        margin-bottom: 12px;
    }
    .announcement-content{
        margin-top: 0px;
    }



</style>