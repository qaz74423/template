<script setup lang="ts">
import { ref } from 'vue'
import TodoList from './TodoList.vue';
const todoList = ref([{
    key: 0,
    name: 'html',
    complete: true
}, {
    key: 1,
    name: 'css',
    complete: true
}, {
    key: 2,
    name: 'js',
    complete: true
}, {
    key: 3,
    name: 'node',
    complete: false
}, {
    key: 4,
    name: 'es6',
    complete: true
}, {
    key: 5,
    name: 'webpack',
    complete: true
}, {
    key: 6,
    name: 'vue3',
    complete: true
}, {
    key: 7,
    name: 'typescript',
    complete: true
}, {
    key: 8,
    name: 'hooks',
    complete: false
}, {
    key: 9,
    name: 'react',
    complete: false
}, {
    key: 10,
    name: 'mock',
    complete: false
}])
</script>

<template>
    <TodoList :todoList="todoList" />
</template>