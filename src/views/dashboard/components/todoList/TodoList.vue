<script lang="ts" setup>
import { PropType } from "vue-demi";
import { Card, Divider, Checkbox, Row, Empty } from "ant-design-vue";
interface TodoListType {
  key: number;
  name: string;
  complete: boolean;
}

const { todoList } = defineProps({
  todoList: {
    type: Array as PropType<TodoListType[]>,
    default: [],
  },
});
</script>

<template>
  <Card>
    <template #title>
      <h2>TodoList..</h2>
    </template>
    <div class="content">
      <div v-if="todoList.length" class="hasData">
        <!-- 未完成 -->
        <Divider>未完成</Divider>
        <Row justify="space-between" v-for="item in todoList" :key="item.key">
          <Checkbox v-if="!item.complete" v-model:checked="item.complete">{{
            item.name
          }}</Checkbox>
        </Row>
        <Divider>完成</Divider>
        <!-- 完成 -->
        <Row justify="space-between" v-for="item in todoList" :key="item.key">
          <Checkbox v-if="item.complete" v-model:checked="item.complete">{{
            item.name
          }}</Checkbox>
        </Row>
      </div>
      <div v-else class="noData">
        <Empty />
      </div>
    </div>
  </Card>
</template>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.content {
  width: 100%;
}
</style>
