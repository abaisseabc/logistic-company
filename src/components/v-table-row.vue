<template>
  <div class="table-row">
    <div class="row table-row-date">
        {{row_data['date_info']}}
    </div>
    <div class="row table-row-name">
        {{row_data['name_company']}}
    </div>
    <div class="row table-row-amount">
        {{row_data.amount}}
    </div>
    <div class="row table-row-distance">
        {{row_data.distance}}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        row_data: {
            type: Object,
        }
    }
}
</script>

<style>
</style>