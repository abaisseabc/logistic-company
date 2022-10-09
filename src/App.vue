<template>
  <div class="container">
    <vTable 
      :table_data="TABLE"
    />
  </div>
</template>

<script>
import vTable from '@/components/v-table.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    vTable
  },
  computed: {
    ...mapGetters([
      'TABLE',
      'FILTEREDTABLE'
    ]),
    // followTable() {
    //   if (this.FILTEREDTABLE > 0) {
    //     return this.FILTEREDTABLE
    //   } else {
    //     return this.TABLE
    //   }
    // }
  },
  methods: {
    ...mapActions([
      'GET_TABLE_FROM_DB'
    ])
  },
  mounted() {
    this.GET_TABLE_FROM_DB()
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
}

.container {
  position: relative;
  width: 1140px;
  margin: 0 auto;
}
</style>
