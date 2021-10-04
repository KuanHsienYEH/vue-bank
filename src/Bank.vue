<template>
  <div id="app">
    <div class='table'>
      <div class='thead'>
        <div class='tr'>
          <div class='th'><h3>counter</h3></div>
          <div class='th'><h3>processing</h3></div>
          <div class='th'><h3>processed</h3></div>
        </div>
      </div>
      <div class='tbody'>
        <Staff v-for="(thread,index) in threads"
        :counter='thread'
        :key='index'/>
      </div>
    </div>
    <Ticket />
  </div>
</template>

<script>
import Staff from './components/Staff.vue'
import Ticket from './components/Ticket.vue'

import { mapState } from 'vuex'

export default {
  name: 'Bank',
  components: {
    Staff,
    Ticket
  },
  computed:{
    ...mapState(['threads']),
  },
  methods: {
    ...mapState(['task']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
}
.table{
  display:grid;
  border-collapse: collapse;
  border: 1px solid #c5c5c5;
  min-width: 100%;
  font-size: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr 1fr 1fr;
  font-size: 24px;
}
.thead, .tbody, .tr{
    display: contents;
}
.th{
  background-color: #e2e2e2;
}
</style>
