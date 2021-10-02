<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue'
interface ITabType {
    path: string;
    title: string;
}
const route = useRoute()
const router = useRouter()
const activeKey = ref(route.path)
const tabs = ref<ITabType[]>([])

watch(() => route.path, () => {
    if (!tabs.value.find((tab: ITabType) => tab.path == route.path))
        tabs.value.push({
            path: route.path,
            title: route.meta.title as string
        })
    activeKey.value = route.path
}, { immediate: true })

const onEdit = (targetKey: string, action: string) => {
    if (action === 'remove') {
        tabs.value = tabs.value.filter((item: ITabType) => targetKey != item.path)
    }
}

const tabChange = (activeKey: string) => {

    router.push(activeKey)
}

</script>

<template>
    <div class="layout-tabs">
        <a-tabs
            v-model:activeKey="activeKey"
            type="editable-card"
            tabPosition="top"
            @edit="onEdit"
            @change="tabChange"
            hideAdd
        >
            <a-tab-pane
                v-for="(tab, index) in tabs"
                :key="tab.path"
                :tab="tab.title"
                :closable="tabs.length > 1 && index != tabs.length - 1"
            ></a-tab-pane>
        </a-tabs>
    </div>
</template>

<style lang="scss" scoped>
.layout-tabs {
    padding: 10px 15px;
}
:deep(.ant-tabs-bar) {
    margin: 0px;
}
</style>