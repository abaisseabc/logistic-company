<template>
  <div class="table">
    <div class="table__header">
      <p>Дата</p>
      <p>Название</p>
      <p>Количество</p>
      <p>Расстояние</p>
    </div>
    <div class="table__body">
      <vTableRow 
        v-for="row in table_data"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="table__pagination">
      <div 
        class="table-page"
        v-for="page in pages"
        :key="page"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from '@/components/v-table-row.vue'

export default {
  components: {
    vTableRow
  },
  props: {
    table_data: {
      type: Array
    }
  },
  data() {
    return {
      numberOfTableEntries: 5
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.table_data.length / 5)
    }
  }
}
</script>

<style>
  .table {
    max-width: 700px;
    margin: 0 auto;
  }
  .table p {
    flex-basis: 15%;
    text-align: left;
  }
  .table__header {
    display: flex;
    justify-content: space-around;
  }
  .table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .table-page {
    margin-right: 10px;
    margin-top: 50px;
  }
</style>