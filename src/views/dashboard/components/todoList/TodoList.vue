<script lang="ts" setup>
import { ref, PropType } from 'vue-demi';

interface TodoListType {
    key: number,
    name: string,
    complete: boolean
}

const { todoList } = defineProps({
    todoList: {
        type: Array as PropType<TodoListType[]>,
        default: []
    }
})
</script>



<template>
    <a-card>
        <template #title>
            <h2>TodoList..</h2>
        </template>
        <div class="content">
            <div v-if="todoList.length" class="hasData">
                <!-- 未完成 -->
                <a-divider>未完成</a-divider>
                <a-row justify="space-between" v-for="item in todoList" :key="item.key">
                    <a-checkbox
                        v-if="!item.complete"
                        v-model:checked="item.complete"
                    >{{ item.name }}</a-checkbox>
                </a-row>
                <a-divider>完成</a-divider>
                <!-- 完成 -->
                <a-row justify="space-between" v-for="item in todoList" :key="item.key">
                    <a-checkbox v-if="item.complete" v-model:checked="item.complete">{{ item.name }}</a-checkbox>
                </a-row>
            </div>
            <div v-else class="noData">
                <a-empty />
            </div>
        </div>
    </a-card>
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