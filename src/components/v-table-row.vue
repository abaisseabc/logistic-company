<template>
  <div class="table-row">
    <div class="row table-row-date">
        {{row_data.date}}
    </div>
    <div class="row table-row-name">
        {{row_data.name}}
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
    .table-row {
        display: flex;
        justify-content: space-around;
    }
    .row {
        padding-top: 10px;
        padding-bottom: 10px;
        flex-basis: 15%;
        text-align: left;
    }
</style>