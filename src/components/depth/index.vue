<template>
  <div id="dep">
    <div>
       <a-row>  
            <a-col :span="5" style="text-align:left;color:#fff;font-size:14px;font-variant:tabular-nums;">深度图</a-col>
        </a-row>
    </div>
       <div class="map">

       </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
          ops: {
            vuescroll: {},
            scrollPanel: {},
            rail: {},
            bar: {}
          }
        }
      }
}
</script>

<style>
  #dep{
   margin-top: 10px;
   width: 660px;
   margin-left: 6px;
    font-family: PingFangSC-Light;
    font-size: 16px;
    background: #1D2630;
    letter-spacing: 0;
  }
  #dep .map{
    background: gray;
    width: 100%;
    height: 450px;
  }
</style>