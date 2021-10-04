<template>
  <div class="ticket">
    <h1>waiting : {{task.length}}</h1>
    <button @click='increment'>
      <h1>Next {{moveOn}}</h1>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'Ticket',
  computed:{
    ...mapGetters(['moveOn']),
    ...mapState(['count','task']),
  },
  methods: mapActions([
    'increment'
  ])
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket{
  display: flex;
  flex-flow: nowarp row;
  justify-content: space-evenly;
  margin-top:20px;
}
</style>
