<script lang="ts" setup>
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

        <a-row class="section" justify="space-between" :gutter="[16, 16]">
            <a-col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
                <BoxCard />
            </a-col>
            <a-col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
                <TodoList1 />
            </a-col>
            <a-col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
                <TodoList />
            </a-col>
            <a-col :span="6" :xl="6" :md="8" :sm="12" :xs="24">
                <TodoList />
            </a-col>
        </a-row>

        <div></div>
    </div>
</template>
<style scoped lang="scss">
.section {
    margin-bottom: 16px;
}
</style>
