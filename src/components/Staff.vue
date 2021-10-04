<template>
 <div class='tr'>
    <div class='td'>
    {{counter}}
    </div>
    <div class='td'>
    <span>{{status}}</span>
    </div>
    <div class='td'>
      <span v-for='(item,index) in processedTask' :key='index'>
        {{item}},
      </span>
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex';

export default {
  name: 'Staff',
  props: {
    counter: String,
    processing: Number,
  },
  data(){
    return{
      currentTask:'',
      processedTask:[]
    }
  },
  computed:{
    status() {
      return this.processing ? this.processing : 'idle'
    },
    allTask(){
      return this.$store.state.task
    }
  },
  methods: {
    ...mapState(['task']),
    reloveTask () {
      this.currentTask = this.task.shift()
      setTimeout(() => {
        this.currentTask = '';
        
      }, 0.5 + Math.random())
    },
  },
  watch:{
    'allTask':function(val){
        if(!this.currentTask || val.length){
          this.reloveTask();
        }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tr:nth-child(even) .td {
    background: #f0f0f0;
}
</style>
