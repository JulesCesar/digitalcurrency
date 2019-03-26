<template>
  <div>
    <!-- <template>
        <div>
            <lunbo/>
        </div>
        <div>
            <biaoge/>
        </div>
        <div>
            <banner/>
        </div>
    </template> -->
    index
    
  </div>
</template>

<script>
import lunbo from './lubbotu.vue'
import biaoge from './biaoge.vue'
import banner from './banner.vue'
export default {
    name: 'bar1',
    data () {
        return {
        
        }
    },
    components: {
     lunbo,
     biaoge,
     banner,
    
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
