<template>
  <div>
    <template>
        <a-carousel effect="fade"  style="min-width:1280px; height:100%;">
            <div style="width:1920px;" class="slidermartheight1">
                    <!-- <img src="../assets/banner6.jpg" alt=""> -->
                   
            </div>
            <div class="slidermartheight2"></div>
            <div class="slidermartheight3"></div>
            <div class="slidermartheight4"></div>
        </a-carousel>
    </template>
    <div class="lunboliner">
        <a-row>
            <a-col :span="12" :offset="6">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>1</a-breadcrumb-item>
                    <a-breadcrumb-item>2</a-breadcrumb-item>
                    <a-breadcrumb-item>3</a-breadcrumb-item>
                </a-breadcrumb>
            </a-col>
        </a-row>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'bar3',
    data () {
        return {
        
        }
    },
    created() {
       

    },
    mounted() { 
        
    },
    computed: {
        
    },
    watch:{
    
    }, 
    methods: {
        

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-carousel >>> .slick-slide {
  /* margin-top:-64px; */
  text-align: center;
  height: 600px;
  line-height: 600px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.lunboliner{
    margin-top: -54px;
    z-index: 2;
}
.lunboliner>.ant-row{
     background: rgba(21,30,37,0.50);
     height: 54px;
}
</style>
