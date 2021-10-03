<script lang="ts" setup>
import PenelItem from "./PenelItem.vue";
import { GithubOutlined, PayCircleOutlined, LikeOutlined, SoundOutlined } from "@ant-design/icons-vue";
const PanelList = [
    {
        icon: GithubOutlined,
        text: 'New Visits',
        number: '122200'
    }, {
        icon: SoundOutlined,
        text: 'Messages',
        number: '81252'
    }, {
        icon: PayCircleOutlined,
        text: 'Purcases',
        number: '9000'
    }, {
        icon: LikeOutlined,
        text: 'Shoppings',
        number: '13600'
    }
]
</script>

<template>
    <a-row type="flex" justify="space-between" :gutter="16">
        <a-col v-for="item in PanelList" :key="item" :xl="6" :md="12" :sm="12" :xs="12">
            <PenelItem :item="item"></PenelItem>
        </a-col>
    </a-row>
</template>

