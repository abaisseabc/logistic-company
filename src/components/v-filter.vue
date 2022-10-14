<template>
  <div class="filter">
    <div class="filter__header">
        Фильтрация:
    </div>
    <div class="filter__body">
      <div class="div">Выберите колонку: </div>
      <select name="" id="" v-model="column">
        <option value="name">Название</option>
        <option value="amount">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <div>Выберите условие:</div>
      <select name="" id="" v-model="condition">
        <option value="=">Равно</option>
        <option value="contains">Содержит</option>
        <option value=">">Больше</option>
        <option value="<">Меньше</option>
      </select>
      <div>Введите значене для фильтрации:</div>
      <input type="text" v-model="input">
      <button @click="sendFilterObject(column, condition, input)" class="filter__btn">
          Отфильтровать
      </button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            column: '',
            condition: '',
            input: ''
        }
    },
    methods: {
        sendFilterObject(column, condition, input) {
            let filterObj = {
                id: input,
                column: column,
                condition: condition,
                input: input
            };
            this.$emit('sendObj', filterObj)
        },
    }
}
</script>

<style>
  
</style>