<template>
  <div>
    <template>
      <div>3</div>
    </template>
    
  </div>
</template>

<script>
export default {
    name: 'bar3',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    //组件实例创建完成，属性已绑定，但dom还未生成
    created() {
       

    },
    //模板编译/过载之后
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
