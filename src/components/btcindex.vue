<template>
  <div class="hello" style="min-width: 1280px;">
    <template>
        <a-layout id="components-layout-demo-top" class="layout" style="">
            <a-layout-header style="position:fixed;width: 100%;top: 0;left: 0;z-index: 999;min-width: 1280px;">
                <a-row>
                    <a-col :span="2" style="text-align:left;">
                        <div class="logo">
                            
                        </div>
                    </a-col>
                    <a-col :span="10">
                         <a-menu
                                theme="dark"
                                mode="horizontal"
                                :defaultSelectedKeys="['1']"
                                :style="{ lineHeight: '64px' }"
                            >
                                <a-menu-item key="1" @click="nav(1)">1</a-menu-item>
                                <a-menu-item key="2" @click="nav(2)">2</a-menu-item>
                                <a-menu-item key="3" @click="nav(3)">3</a-menu-item>
                        </a-menu>

                    </a-col>
                    <a-col :span="12" style="text-align:right;">
                        <a-row>
                            <a-col :span="12">1</a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content>
                <div @click="qie" :style="{ minHeight: '280px',marginTop: '82px',minWidth:'1200px'}">
                    <router-view />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                footer
            </a-layout-footer>
        </a-layout>
    </template>
  </div>
</template>

<script>
export default {
    name: 'btcindex',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    
    created() {
       this.$router.replace({name: 'bar1'})
    },
    mounted() { 
    },
    computed: {
    },
    watch:{
    }, 
    methods: {
       qie(){

       },
       nav(val) {
           if (val == 1) {
               this.$router.push({name: 'bar1'})
           } else if (val == 2) {
               this.$router.push({name: 'bar2'})
           } else {
               this.$router.push({name: 'bar3'})
           }
       }
    }
}
</script>
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
</style>
