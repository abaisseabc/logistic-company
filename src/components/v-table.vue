<template>

  <vFilter />

  <div class="table">
    <div class="table__header">
      <p>Дата</p>
      <p>Название</p>
      <p>Количество</p>
      <p>Расстояние</p>
    </div>
    <div class="table__body">
      <vTableRow 
        v-for="row in paginationTableRecords"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="table__pagination">
      <div 
        class="table-page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{'page__selected' : page === pageNumber}"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from '@/components/v-table-row.vue'
import vFilter from '@/components/v-filter.vue'

export default {
  components: {
    vTableRow, vFilter
  },
  props: {
    table_data: {
      type: Array
    }
  },
  data() {
    return {
      pageNumber: 1,
      numberOfTableEntries: 5,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.table_data.length / 5)
    },
    paginationTableRecords() {
      let from = (this.pageNumber - 1) * this.numberOfTableEntries;
      let to = from + this.numberOfTableEntries;
      return this.table_data.slice(from, to)
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
  }
}
</script>

<style>

</style>