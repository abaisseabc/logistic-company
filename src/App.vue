<template>
  <div class="container">
    <vFilter 
      @sendObj="filterObj"
    />
    <vTable 
      :table_data="filteredTable"
    />
  </div>
</template>

<script>
import vTable from '@/components/v-table.vue'
import vFilter from '@/components/v-filter.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    vTable, vFilter
  },
  computed: {
    ...mapGetters([
      'TABLE',
      'FILTER_TABLE'
    ]),
    filteredTable() {
      if (this.FILTER_TABLE.length == 0) {
        return this.TABLE
      } else {
        return this.FILTER_TABLE
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_TABLE_FROM_DB',
      'GET_FILTER_CONDITIONS'
    ]),
    filterObj(filterObj) {
      this.GET_FILTER_CONDITIONS(filterObj);
    }
  },
  mounted() {
    this.GET_TABLE_FROM_DB();
  }
}
</script>

<style>
@import url(./assets/style/main.css);
</style>
