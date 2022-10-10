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
    ]),
  },
  methods: {
    ...mapActions([
      'GET_TABLE_FROM_DB'
    ])
  },
  mounted() {
    this.GET_TABLE_FROM_DB();
  }
}
</script>

<style>
@import url(./assets/style/main.css);
</style>
