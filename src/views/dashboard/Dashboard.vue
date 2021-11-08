<script lang="ts" setup>
import { Row, Col } from "ant-design-vue";
import Penel from "./components/Penel.vue";
import LineCharts from "./components/LineCharts.vue";
import BoxCard from "./components/BoxCard.vue";
import TodoList1 from "./components/todoList/TodoList1.vue";
import TodoList from "./components/todoList/TodoList.vue";
</script>

<template>
  <div class="dashboard">
    <Penel class="section"></Penel>

    <LineCharts class="section"></LineCharts>

    <Row class="section" justify="space-between" :gutter="[16, 16]">
      <Col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
        <BoxCard />
      </Col>
      <Col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
        <TodoList1 />
      </Col>
      <Col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
        <TodoList />
      </Col>
      <Col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
        <TodoList />
      </Col>
    </Row>
  </div>
</template>
<style scoped lang="scss">
.section {
  margin-bottom: 16px;
}
</style>
